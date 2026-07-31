import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    /**
     * TODO: schema：指定数据表结构定义文件路径
     * drizzle会读取这个文件里所有mysqlTable表结构，用来对比数据库真实表，生成差异SQL
     */
    schema: './server/db/schema.ts',

    /**
     * TODO: out：迁移文件输出目录
     * 执行 npx drizzle-kit generate 后，自动生成迁移SQL文件，全部存到这个文件夹
     * 每次改表结构都会生成新迁移记录，方便版本回滚、团队同步表结构
     */
    out: './server/db/migrations',
    // driver：数据库驱动类型
    driver: 'mysql2',
    // dbCredentials：数据库连接凭证，纯工具迁移时用（仅生成/执行迁移命令生效）
    dbCredentials: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',       // 你的mysql账号
        password: 'puyunfu1975', // 你的mysql密码
        database: 'nuxt_db' // 提前手动创建空数据库 nuxt_db
    }
})
