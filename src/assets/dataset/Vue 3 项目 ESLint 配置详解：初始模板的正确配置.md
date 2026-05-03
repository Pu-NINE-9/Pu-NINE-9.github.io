>本篇文章讲解下使用`pnpm create vue`创建的`vue3`项目中关于`Eslint`的一些相关配置

# Vue 3 ESLint 配置指南
## 初始模板（pnpm create vue 创建）
```ts
import { globalIgnores } from 
'eslint/config'
import { defineConfigWithVueTs, 
vueTsConfigs } from '@vue/
eslint-config-typescript'
import pluginVue from 
'eslint-plugin-vue'
import skipFormatting from '@vue/
eslint-config-prettier/
skip-formatting'

export default defineConfigWithVueTs
(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}
    '],
  },
  globalIgnores(['**/dist/**', '**/
  dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/
  essential'],
  vueTsConfigs.recommended,
  skipFormatting
)
```
## 需要安装的包
```bash
pnpm add -D eslint-plugin-prettier
```
## 添加自定义配置后的完整文件
```ts
import { globalIgnores } from 
'eslint/config'
import { defineConfigWithVueTs, 
vueTsConfigs } from '@vue/
eslint-config-typescript'
import pluginVue from 
'eslint-plugin-vue'
import skipFormatting from '@vue/
eslint-config-prettier/
skip-formatting'
import prettier from 
'eslint-plugin-prettier'

export default defineConfigWithVueTs
(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  globalIgnores(['**/dist/**', '**/
  dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  // 新增内容
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: false,
          printWidth: 80,
          trailingComma: 'none',
          endOfLine: 'auto'
        }
      ],
      'vue/
      multi-word-component-names': [
        'warn',
        {
          ignores: ['index']
        }
      ],
      'vue/
      no-setup-props-destructure': 
      'off',
      'no-undef': 'error'
    }
  }
)
```
## 核心变化
1.
   添加导入 : import prettier from 'eslint-plugin-prettier'
2.
   添加配置对象 : 包含 plugins 和 rules
3.
   安装依赖 : eslint-plugin-prettier
这样就完成了从初始模板到完整配置的转换。