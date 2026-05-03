
>在现代的Web开发中，Markdown已经成为一种非常流行的标记语言，用于编写易于阅读和书写的文本。无论是撰写博客、文档还是简单的笔记，Markdown都能提供简洁而高效的解决方案。而Marked.js，作为一款流行的Markdown解析库，**能够将Markdown文本快速转换为HTML**，帮助开发者在Web项目中轻松集成Markdown支持。本文将详细介绍Marked.js的常用方法，帮助你快速上手并有效使用这个强大的工具。

## 一、`Marked.js`简介

`Marked.js`是一个快速、可扩展且易于使用的Markdown解析库 ([Marked.js 官网](https://marked.js.org))。它支持多种Markdown规范，包括Markdown 1.0、`CommonMark`和GitHub Flavored Markdown。`Marked.js`不仅在浏览器端表现卓越，还能在`Node.js`环境中运行，为开发者提供了极大的灵活性。

## 二、安装`Marked.js`

在开始使用`Marked.js`之前，你需要先将其安装到你的项目中。根据你的项目需求，可以选择不同的安装方式。

### 1.命令行界面（`CLI`）

如果你需要在命令行环境中使用`Marked.js`，可以通过以下命令全局安装`Marked.js`的`CLI`版本：

```bash
pnpm install -g marked
```

安装完成后，你可以在命令行中直接使用`marked`命令来处理Markdown文件。例如，将Markdown文件转换为HTML文件：

```bash
marked -i input.md -o output.html
```

### 2.浏览器端

在浏览器端使用`Marked.js`，可以通过以下两种方式引入：

- **通过`<script>`标签引入**：

```html
<script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
```

这种方式简单直接，适合快速原型开发或小型项目。

- **使用`ESM`模块**：

如果你的项目支持`ESM`模块，可以通过以下方式引入`Marked.js`：

```html
<script type="module">
  import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
</script>
```

这种方式提供了更好的模块化支持，适合大型项目。

### 3.`Node.js`

在`Node.js`环境中，可以通过以下命令安装`Marked.js`：

```bash
npm install marked
```

安装完成后，你可以在`Node.js`项目中通过以下方式引入`Marked.js`：

```javascript
import { marked } from 'marked';
```

## 三、`Marked.js`的常用方法

`Marked.js`提供了多种方法来处理Markdown文本，以下是一些常用的使用方法。

### 1.将Markdown转换为HTML

这是`Marked.js`最核心的功能之一。你可以通过`marked.parse()`方法将Markdown文本转换为HTML。例如：

```javascript
const markdownText = '# Hello, Marked.js!';
const htmlText = marked.parse(markdownText);
console.log(htmlText); // 输出：<h1>Hello, Marked.js!</h1>
```

`marked.parse()`方法会将Markdown文本解析为HTML字符串，你可以将其直接插入到HTML文档中。

### 2.配置`Marked.js`

`Marked.js`提供了丰富的配置选项，允许你自定义解析行为。你可以通过`marked.setOptions()`方法设置全局配置，或者在调用`marked.parse()`时传递配置对象。例如：

```javascript
marked.setOptions({
  gfm: true, // 启用GitHub Flavored Markdown
  breaks: true, // 启用自动换行
  pedantic: false, // 启用严格的CommonMark模式
  smartLists: true, // 启用智能列表
  smartypants: true // 启用智能引号
});

const markdownText = 'This is a *test*.\n\n- Item 1\n- Item 2';
const htmlText = marked.parse(markdownText);
console.log(htmlText);
```

在上面的例子中，我们通过`marked.setOptions()`方法设置了全局配置。你也可以在调用`marked.parse()`时传递配置对象，例如：

```javascript
const markdownText = 'This is a *test*.\n\n- Item 1\n- Item 2';
const htmlText = marked.parse(markdownText, {
  gfm: true,
  breaks: true,
  pedantic: false,
  smartLists: true,
  smartypants: true
});
console.log(htmlText);
```

这种方式允许你在不同的Markdown文本之间使用不同的配置。

### 3.使用`CLI`工具

如果你安装了`Marked.js`的`CLI`版本，可以通过命令行工具处理Markdown文件。以下是一些常用的`CLI`命令：

- **从文件读取Markdown并输出HTML**：

```bash
marked -i input.md -o output.html
```

- **直接从字符串输入Markdown并输出HTML**：

```bash
marked -s "*hello world*"
```

- **打印所有可用选项**：

```bash
marked --help
```

`CLI`工具还支持自定义配置文件。你可以创建一个`.marked.json`或`.marked.js`文件来配置`Marked.js`的行为。例如：

```json
{
  "gfm": true,
  "breaks": true,
  "pedantic": false,
  "smartLists": true,
  "smartypants": true
}
```

然后在`CLI`命令中使用`-c`选项指定配置文件：

```bash
marked -s "This is a *test*." -c config.json
```




### 四、处理安全问题

在Web开发中，安全性是一个至关重要的问题。当处理用户输入的Markdown文本时，尤其是当这些文本可能会被转换为HTML并显示在网页上时，我们需要特别小心，以防止跨站脚本攻击（`XSS`）。

#### 1.什么是`XSS`攻击？

`XSS`攻击是指攻击者通过在网页中注入恶意脚本代码，当这些代码被浏览器执行时，可能会导致用户信息泄露、页面被篡改或其他安全问题。例如，攻击者可能会在Markdown文本中插入如下内容：

```markdown
<img src="x" onerror="alert('XSS Attack!')">
```

当这段Markdown文本被`Marked.js`解析为HTML后，会变成：

```html
<img src="x" onerror="alert('XSS Attack!')">
```

如果直接将这段HTML插入到网页中，浏览器会执行`alert('XSS Attack!')`，从而触发XSS攻击。

#### 2.`Marked.js`与`XSS`

`Marked.js`是一个Markdown解析库，它的主要功能是将Markdown文本转换为HTML。然而，`Marked.js`不会自动清理输出的HTML内容。这意味着，如果用户输入的Markdown文本中包含恶意脚本代码，这些代码在转换为HTML后仍然会存在，并且可能会被浏览器执行。

因此，在使用`Marked.js`处理用户输入的Markdown文本时，我们需要手动清理输出的HTML内容，以防止`XSS`攻击。

#### 3.使用`DOMPurify`清理HTML

`DOMPurify`是一个**专门用于清理HTML内容的库**，它可以有效地防止XSS攻击。

**`DOMPurify`会检查HTML内容，移除其中的恶意脚本代码，确保输出的HTML内容是安全的。**

以下是一个详细的示例，展示如何使用DOMPurify清理Marked.js输出的HTML内容：

##### 1.安装DOMPurify

首先，你需要安装DOMPurify。可以通过以下命令安装：

```bash
npm install dompurify
```

##### 2.引入DOMPurify

在你的项目中引入DOMPurify。如果你使用的是ESM模块，可以这样引入：

```javascript
import DOMPurify from 'dompurify';
```

如果你使用的是CommonJS模块，可以这样引入：

```javascript
const DOMPurify = require('dompurify');
```

##### 3.清理HTML内容

在将Markdown文本转换为HTML后，使用DOMPurify的`sanitize`方法清理HTML内容。以下是一个完整的示例：

```javascript
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// 用户输入的Markdown文本
const markdownText = '<img src="x" onerror="alert(\'XSS Attack!\')">';

// 使用Marked.js将Markdown文本转换为HTML
const htmlText = marked.parse(markdownText);

// 使用DOMPurify清理HTML内容
const cleanHtmlText = DOMPurify.sanitize(htmlText);

// 输出清理后的HTML内容
console.log(cleanHtmlText);
```

在上面的例子中，`DOMPurify.sanitize(htmlText)`会检查`htmlText`中的内容，移除其中的恶意脚本代码。最终输出的`cleanHtmlText`是安全的HTML内容，不会触发XSS攻击。

#### 4.配置`DOMPurify`

`DOMPurify`提供了丰富的配置选项，允许你自定义清理行为。例如，你可以指定允许的HTML标签和属性，或者启用特定的清理规则。以下是一个配置示例：

```javascript
const cleanHtmlText = DOMPurify.sanitize(htmlText, {
  ALLOWED_TAGS: ['p', 'strong', 'em', 'a', 'img'], // 允许的HTML标签
  ALLOWED_ATTR: ['href', 'src', 'alt'], // 允许的HTML属性
  FORBID_ATTR: ['onerror', 'onclick'], // 禁止的HTML属性
});
```

在上面的配置中，`ALLOWED_TAGS`指定了允许的HTML标签，`ALLOWED_ATTR`指定了允许的HTML属性，`FORBID_ATTR`指定了禁止的HTML属性。通过这些配置，你可以更精细地控制`DOMPurify`的清理行为。

最后再详述下`DOMPurify.sanitize()`方法内不传参数时的默认规则，即`DOMPurify`的默认行为：

`DOMPurify`在默认情况下会执行以下操作：
 - 移除恶意脚本标签：`DOMPurify`会移除所有`<script>`标签及其内容，防止恶意脚本直接嵌入HTML中。 (包括开发者自己写的script标签也会被清除，所以建议还是配置一下里面的规则)
 - 清理事件处理器：`DOMPurify`会移除所有`HTML`元素上的事件处理器属性，例如`onclick`、`onerror`、`onload`等，防止通过这些属性注入恶意脚本。
 - 限制`HTML`标签和属性：`DOMPurify`会限制允许使用的`HTML`标签和属性，只保留常见的、安全的HTML内容。例如，它会允许`<p>`、`<strong>`、`<em>`等标签，但会移除一些不常见的或可能用于攻击的标签和属性。
 - 清理`CSS`样式：`DOMPurify`会清理`HTML`元素上的`style`属性，防止通过`CSS`注入恶意代码，例如使用`expression()`或`url()`等可能导致`XSS`攻击的`CSS`属性。
处理`URLs`：`DOMPurify`会检查`HTML`元素中的`URLs`（例如`<a href="...">`、`<img src="...">`），确保它们是安全的，不会包含`JavaScript`代码或其他潜在的恶意内容。


#### 5.完整的示例

以下是一个完整的示例，展示如何在实际项目中使用`Marked.js`和`DOMPurify`处理用户输入的Markdown文本，并确保输出的HTML内容是安全的：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marked.js with DOMPurify</title>
</head>
<body>
  <div id="content"></div>

  <script type="module">
    import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
    import DOMPurify from 'https://cdn.jsdelivr.net/npm/dompurify/dist/purify.esm.js';

    // 用户输入的Markdown文本
    const markdownText = '<img src="x" onerror="alert(\'XSS Attack!\')">';

    // 使用Marked.js将Markdown文本转换为HTML
    const htmlText = marked.parse(markdownText);

    // 使用DOMPurify清理HTML内容
    const cleanHtmlText = DOMPurify.sanitize(htmlText, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'a', 'img'], // 允许的HTML标签
      ALLOWED_ATTR: ['href', 'src', 'alt'], // 允许的HTML属性
      FORBID_ATTR: ['onerror', 'onclick'], // 禁止的HTML属性
    });

    // 将清理后的HTML内容插入到页面中
    document.getElementById('content').innerHTML = cleanHtmlText;
  </script>
</body>
</html>
```

在上面的示例中，我们通过`<script type="module">`引入了`Marked.js`和`DOMPurify`。用户输入的Markdown文本被转换为HTML后，使用`DOMPurify`清理HTML内容，最后将清理后的`HTML`内容插入到页面中。

在处理用户输入的Markdown文本时，安全性是一个重要的考虑因素。`Marked.js`不会自动清理输出的`HTML`内容，因此我们需要手动处理可能的`XSS`攻击。推荐使用`DOMPurify`等库来清理`HTML`内容，确保输出的`HTML`是安全的。通过合理的配置，你可以更精细地控制`DOMPurify`的清理行为，从而更好地保护你的Web应用免受`XSS`攻击。



### 5.扩展`Marked.js`

`Marked.js`支持扩展，允许你自定义解析器的行为。你可以通过`marked.use()`方法注册扩展。例如，创建一个简单的扩展来添加自定义的HTML标签：

```javascript
marked.use({
  renderer: {
    link(href, title, text) {
      return `<a href="${href}" title="${title}" class="custom-link">${text}</a>`;
    }
  }
});

const markdownText = '[Link to Moonshot AI](https://moonshot.cn)';
const htmlText = marked.parse(markdownText);
console.log(htmlText); // 输出：<a href="https://moonshot.cn" title="" class="custom-link">Link to Moonshot AI</a>
```

在上面的例子中，我们通过`marked.use()`方法注册了一个扩展，自定义了链接的HTML输出。


### 6.综合案例
最后我自己写了一个综合案例供大家参考
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dompurify/purify.min.js"></script>
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        button {
            background-color: pink;
        }
        textarea {

            display: block;

        }
        .outer {
            width: 100vw;
            height: 100vh;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="outer">
        <div class="input"><textarea id="inp" placeholder="请输入内容"></textarea></div>
        <div class="button"><button id="btn">转换为HTML格式</button></div>
        <div class="output"></div>
    </div>
    <script>
        const input = document.getElementById('inp')
        document.getElementById('btn').addEventListener('click', () => {
            let markdownVersionContent = input.value
            console.log('已检测到输入的Markdown内容\n' + markdownVersionContent)

            let HTMLVersionContent = marked.parse(markdownVersionContent)
            console.log('转换Markdown为HTML格式\n' + HTMLVersionContent)

            let cleanedHTMLVersionContent = DOMPurify.sanitize(HTMLVersionContent)
            console.log('清理后的HTML内容\n' + cleanedHTMLVersionContent)
            
            document.querySelector('.output').innerHTML = cleanedHTMLVersionContent
        })
    </script>
</body>
</html>
```
运行测试：

![测试运行结果](https://i-blog.csdnimg.cn/direct/f9b40f42be8d4dfa84e721a39ece4fb3.png)


## 四、总结

`Marked.js`是一个功能强大、易于使用的Markdown解析库，适用于各种Web开发场景。无论是在浏览器端还是`Node.js`环境中，`Marked.js`都能提供快速、高效的Markdown解析能力。通过丰富的配置选项和扩展支持，你可以轻松定制`Marked.js`的行为，满足你的项目需求。同时，不要忘记处理安全性问题，确保输出的HTML内容是安全的。希望本文能帮助你更好地理解和使用`Marked.js`，为你的项目带来更多的便利和灵活性。

---

好，以上就是本篇博客的所有内容，如果对您有所帮助还请三连支持一波！您的支持是我最大的的动力！