> Winston是Node.js生态中最流行的日志库之一，它提供了强大的日志记录功能，支持多种传输方式和格式化选项。

## 安装Winston
```bash
pnpm i winston
```

## 基础使用示例

```javascript
const winston = require('winston')
const path = require('path')

// 创建日志格式
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
)

// 创建控制台格式（开发环境使用）
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`
  }),
)

// 创建logger实例
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  defaultMeta: { service: 'vue3-big-event-backend' },
  transports: [
    // 错误日志文件
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // 所有日志文件
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
})

// 开发环境添加控制台输出
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: consoleFormat,
    }),
  )
}

// 创建日志中间件
const requestLogger = (req, res, next) => {
  const start = Date.now()

  res.on('finish', () => {
    const duration = Date.now() - start
    logger.info('HTTP请求', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
    })
  })

  next()
}

// 错误日志中间件
const errorLogger = (err, req, res, next) => {
  logger.error('服务器错误', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
  })
  next(err)
}

module.exports = {
  logger,
  requestLogger,
  errorLogger,
}
```

## 如何使用

### 1. 在Express应用中使用
```javascript
const { requestLogger, errorLogger } = require('./utils/log/index.js')

app.use(requestLogger) // 请求日志
app.use(errorLogger)   // 错误日志
```

### 2. 在代码中记录日志
```javascript
const { logger } = require('./utils/log')

// 不同级别的日志
logger.info('用户登录成功', { username: 'john', ip: '192.168.1.1' })
logger.warn('API调用频繁', { endpoint: '/api/users' })
logger.error('数据库连接失败', { error: err.message })
```

### 3. 环境变量配置
```bash
# 设置日志级别
LOG_LEVEL=debug

# 生产环境不输出控制台日志
NODE_ENV=production
```

## 主要特性

- **多级别日志**：debug、info、warn、error、fatal
- **多种输出目标**：文件、控制台、数据库等
- **结构化日志**：JSON格式便于分析
- **日志轮转**：自动管理日志文件大小和数量
- **开发环境友好**：彩色控制台输出

---

以上就是本篇全部内容，感兴趣还请三连支持一波！灰常感谢！