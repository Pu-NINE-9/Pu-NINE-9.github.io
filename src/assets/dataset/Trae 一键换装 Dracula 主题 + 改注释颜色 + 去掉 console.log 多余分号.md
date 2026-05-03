
> 之前出过一篇 VS Code处理console.log的教程 [优化 VS Code 中 console.log 的输出样式：去除烦人的分号与空行](https://blog.csdn.net/nineeea/article/details/148115918 "优化 VS Code 中 console.log 的输出样式：去除烦人的分号与空行")，但在近期 UP 从VS Code 跑路到 Trae 了，所以说又对Trae也进行了一定研究。本文面向刚换 **Trae（VS Code 中文版）** 的前端玩家，3 分钟完成「主题 + 注释色 + Snippet」三件套

---

## 1. 一键换装：安装 Dracula Official

1. 左侧图标栏 → **扩展**（或 `Ctrl+Shift+X`）  
2. 搜索框输入 **Dracula Official** → 安装  
3. `Ctrl+K Ctrl+T` 呼出主题面板 → 选中 **Dracula Official** → 瞬间变暗 + 亮紫注释，完成！

---

## 2. 自定义注释颜色（不改主题源码）

官方注释偏灰，想换成更骚的 **#ff79c6**（Dracula 粉）：

1. `Ctrl+Shift+P` → 输入 **"首选项: 打开设置(JSON)"**  
2. 在根对象追加：

```json
// settings.json
"editor.tokenColorCustomizations": {
  "[Dracula]": {               // 仅对 Dracula 生效，换主题不影响其他
    "comments": "#ff79c6",
    "textMateRules": [{
      "scope": "comment.line", // 单行注释斜体
      "settings": { "fontStyle": "italic" }
    }]
  }
}
```

3. 保存即热更新，无需重启！

---

## 3. 干掉 console.log 自动分号 & 换行

Trae 默认 snippet：

```javascript
console.log('$1');$2
```

每次 Tab 补全后光标跑到下一行，还多一个分号。  
改成「无分号、无换行」：

1. `Ctrl+Shift+P` → 输入 **Configure User Snippets**（中文区也认英文）  
2. 选择 **javascript.json**（TypeScript 选 typescript.json，同时jsx、tsx文件也是同样的操作）  
3. 把原来的 `log` 片段覆盖成：

```json
{
  "Console log": {
    "prefix": "log",
    "body": ["console.log($1)"], // 分号 & $2 已删
    "description": "Log output to console"
  }
}
```

4. 保存 → 新建 `.js` 文件 → 输入 `log` → Tab，效果：

```javascript
console.log(|)   // 光标在括号内，行尾干净
```

---

## 4. 备份与同步（可选）

设置和 snippet 都保存在：

```
Windows: %APPDATA%\Trae\User\settings.json
macOS:   ~/Library/Application Support/Trae/User/settings.json
```

直接丢进 **GitHub/Gist** 或者打开 Trae 内置 **Settings Sync**（需 GitHub 令牌），换电脑 30 秒还原。

---

## 5. 彩蛋：更多 Dracula 周边

- 终端：在 `settings.json` 里加  
  `"workbench.colorCustomizations": { "terminal.background":"#282a36" }`  
- Chrome 开发者工具：搜索 **Dracula DevTools Theme**  
- Slack / Alfred / iTerm2 官方皆提供 Dracula 配色，一条龙黑到底。

---

## 结语

现在你的 Trae 就是一台「吸血鬼编辑器」：  
深色护眼、注释粉嫩、console.log 干净利落。  
快去写代码，让屏幕也过万圣节吧！