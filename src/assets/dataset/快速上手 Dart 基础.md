> 作者前言：如果您有前端三剑客的基础学 Dart 会更容易，内容有点长，请您耐心阅读；创作不易，还请三连支持！
## 0.1 Dart 语言注意事项
 - 文件后缀: dart 语言文件后缀以.dart结尾
 - 入口: dart 文件的入口方式为main方法
 - 分号: 绝大部分语句需要加分号, `{}`后通常不加

 ## 1.1 变量以及常量的声明
 ### 1.1.1 变量-var
 语法: `var`
 注意: 使用var声明的变量，**其类型在第一次赋值之后确定，不能再赋值其他类型的值**

### 1.1.2 常量-const
语法: `const`
场景: 当做圆形计算的时候，π的值一开始就是被确定的，且不允许更改，使用const进行声明
特点: const是代码编译前被确定，不允许表达式中有变量存在，必须为常量或者固定值

### 1.1.3 常量-final
语法: `final`
场景: 当我们需要当前**时间**作为当前唯一的操作时间，时间一旦被确定就不可以被修改。
特点: final变量在运行时被初始化，其值设置后不可更改

## 1.2 常用的数据类型
### 1.2.1 字符串 String
引号支持双引号或者单引号，支持拼接及模板字符串
`String 属性名 = ‘文本内容$变量名’; 或 String 变量名 = ‘文本内容${变量名}’;`

```dart
void main() {
  String name = '张三';
  String greeting = "Hello";
  
  // 字符串拼接
  String message = name + '说：' + greeting;
  print(message);  // 张三说：Hello
  
  // 模板字符串
  String template = '$name说：$greeting';
  print(template); // 张三说：Hello
  
  // 表达式模板
  String expression = '1 + 2 = ${1 + 2}';
  print(expression); // 1 + 2 = 3
  
  // 多行字符串
  String multiLine = '''
    这是第一行
    这是第二行
    这是第三行
  ''';
  print(multiLine);
}
```

### 1.2.2 数字类型
```dart
void main() {
  int age = 25;                    // 整型
  double price = 19.99;            // 浮点型
  num count = 10;                  // 可以是整数或小数
  num score = 98.5;
  
  print(age);     // 25
  print(price);   // 19.99
  print(count);   // 10
  print(score);   // 98.5
  
  // 类型转换
  double doubleAge = age.toDouble();
  int intPrice = price.toInt();
  
  print(doubleAge);  // 25.0
  print(intPrice);   // 19
}
```

### 1.2.3 布尔类型 bool
```dart
void main() {
  bool isLogin = true;
  bool hasPermission = false;
  int score = 85;
  
  bool isPass = score >= 60;
  
  print(isLogin);      // true
  print(hasPermission); // false
  print(isPass);       // true
  
  // 逻辑运算
  bool canEdit = isLogin && hasPermission;
  bool canView = isLogin || hasPermission;
  bool cannotEdit = !canEdit;
  
  print(canEdit);     // false
  print(canView);     // true
  print(cannotEdit);  // true
}
```

### 1.2.4 列表 List(类比`js`的`Array`)
**支持: 查找、新增、删除、循环**
 - 在尾部添加-`add(内容)`
 - 在尾部添加一个列表-`addAll(列表)`
 - 删除满足内容的第一个-`remove(内容)`
 - 删除最后一个-`removeLast()`
 - 删除索引范围内数据-`removeRange(start,end)`**(end不包含在删除范围内)**
 - 循环-`forEach((item) {});`
 - 是否都满足条件-`every((item) { return 布尔值 })；`
 - 筛选出满足条件的数据-`where((item) { return 布尔值 })；`
 - 列表的长度(属性)-`length`
 - 最后一个元素(属性)-`last`
 - 第一个元素(属性)-`first`
 - 是否为空(属性)-`isEmpty`

```dart
void main() {
  // 创建列表
  List<String> fruits = ['苹果', '香蕉', '橙子'];
  List<int> numbers = [1, 2, 3, 4, 5];
  var mixed = [1, 'hello', true];  // 动态类型
  
  print(fruits);  // [苹果, 香蕉, 橙子]
  
  // 访问元素
  print(fruits[0]);    // 苹果
  print(fruits.first); // 苹果
  print(fruits.last);  // 橙子
  
  // 添加元素
  fruits.add('葡萄');
  fruits.addAll(['芒果', '菠萝']);
  
  print(fruits);  // [苹果, 香蕉, 橙子, 葡萄, 芒果, 菠萝]
  
  // 删除元素
  fruits.remove('香蕉');
  fruits.removeAt(0);
  fruits.removeLast();
  
  print(fruits);  // [橙子, 葡萄, 芒果]
  
  // 列表长度
  print(fruits.length);  // 3
  print(fruits.isEmpty); // false
}
```

### 1.2.5 字典 Map(类比`js`的`object`)
 - 循环-`forEach`
 - 在添加一个字典-`addAll`
 - 是否包含某个key-`containsKey`
 - 删除某个key-`remove`
 - 清空-`clear`

```dart
void main() {
  // 创建 Map
  Map<String, String> translation = {
    'hello': '你好',
    'world': '世界',
    'apple': '苹果'
  };
  
  Map<String, dynamic> person = {
    'name': '李四',
    'age': 25,
    'isStudent': true
  };
  
  print(translation);  // {hello: 你好, world: 世界, apple: 苹果}
  print(person);       // {name: 李四, age: 25, isStudent: true}
  
  // 访问值
  print(translation['hello']);  // 你好
  print(person['name']);        // 李四
  
  // 添加/修改
  translation['book'] = '书';
  person['age'] = 26;
  
  print(translation);  // {hello: 你好, world: 世界, apple: 苹果, book: 书}
  
  // 常用方法
  translation.forEach((key, value) {
    print('$key -> $value');
  });
  
  print(translation.containsKey('hello'));  // true
  print(translation.containsValue('你好')); // true
  
  translation.remove('apple');
  print(translation);  // {hello: 你好, world: 世界, book: 书}
}
```

### 1.2.6 动态类型 dynamic
允许变量运行时自由改变类型, 同时绕过编译时的静态检查

```dart
void main() {
  dynamic anything = '字符串';
  print(anything);  // 字符串
  
  anything = 123;   // 可以重新赋值为数字
  print(anything);  // 123
  
  anything = true;  // 可以重新赋值为布尔值
  print(anything);  // true
  
  anything = [1, 2, 3];  // 可以重新赋值为列表
  print(anything);  // [1, 2, 3]
  
  // 与 var 的区别
  var text = 'hello';
  // text = 123;    // ❌ 错误：不能改变类型
  
  dynamic text2 = 'hello';
  text2 = 123;      // ✅ 正确：dynamic 可以改变类型
}
```
**dynamic和var的区别:**
 - dynamic： 运行时可自由改变类型，无编译检查，方法和属性直接调用
 - var: 根据初始值进行推断类型，确定类型后类型确定，有编译检查，仅限推断的属性和方法

## 1.3 空安全机制
Dart 有严格的空安全机制：

| 操作符 | 作用 | 示例 |
|--------|------|------|
| ? | 可空类型 | `String? name = null;` |
| ?. | 安全访问 | `user?.name` |
| ! | 非空断言 | `name!.length` |
| ?? | 空合并 | `name ?? '无名'` |

```dart
void main(List<String> args) {
    String? username = null; // 可空类型
    username?.length; // 安全访问
    username!.length; // 非空断言(开发者保证变量非空（否则运行时崩溃))
    username??length; // 空合并(左侧为 null时返回右侧默认值)
}
```
## 1.4 运算符
### 1.4.1 算术运算符
| 运算符 | 作用 |
|--------|------|
| + | 加 |
| - | 减 |
| * | 乘 |
| / | 除 |
| ~/ | 整除 |
| % | 取余数 |

### 1.4.2 赋值运算符
| 运算符 | 作用 |
|--------|------|
| = | 赋值操作 |
| += | 加等，a += b 相等于 a = a + b |
| -= | 减等，a -= b 相等于 a = a - b |
| *= | 乘等，a *= b 相等于 a = a * b |
| /= | 除等，a /= b 相等于 a = a / b |

### 1.4.3 比较运算符
| 运算符 | 作用 |
|--------|------|
| == | 判断两个值是否相等 |
| != | 判断两个值是否不等 |
| > | 判断左侧值是否大于右侧值 |
| >= | 判断左侧值是否大于等于右侧值 |
| < | 判断左侧值是否小于右侧值 |
| <= | 判断左侧值是否小于等于右侧值 |

### 1.4.4 逻辑运算符
| 运算符 | 作用 |
|--------|------|
| && | 逻辑与，a && b，a和b同时true，得true |
| \|\| | 逻辑或，a \|\| b，a和b有一个true，得true |
| ! | 逻辑非，!a，对a变量进行取反 |

## Dart 流程控制
### 2.1 条件语句
#### 2.1.1 if 分支语句

**定义**：根据条件执行不同的代码逻辑

| 分支类型 | 说明 |
|---------|------|
| 单分支 | 单个条件判断 |
| 双分支 | 两个条件判断（if-else） |
| 多分支 | 多个条件判断（if-else if-else） |

```dart
void main() {
  int score = 85;
  bool isLogin = true;
  
  print('=== 单分支 ===');
  // 单分支：只有一个条件
  if (score >= 60) {
    print('考试及格');
  }
  
  print('\n=== 双分支 ===');
  // 双分支：两种可能情况
  if (isLogin) {
    print('欢迎回来！');
  } else {
    print('请先登录');
  }
  
  print('\n=== 多分支 ===');
  // 多分支：多个条件判断
  if (score >= 90) {
    print('优秀');
  } else if (score >= 80) {
    print('良好');  // 这里会执行
  } else if (score >= 70) {
    print('中等');
  } else if (score >= 60) {
    print('及格');
  } else {
    print('不及格');
  }
  
  print('\n=== 复杂条件 ===');
  // 复杂条件组合
  bool hasPermission = true;
  bool isVIP = false;
  
  if (isLogin && hasPermission) {
    print('可以访问所有内容');
  } else if (isLogin && isVIP) {
    print('可以访问VIP内容');
  } else if (isLogin) {
    print('可以访问基础内容');
  } else {
    print('请先登录');
  }
}
```

#### 2.1.2 三元运算符

**定义**：简化版的双分支语句，用于简单的条件赋值

**语法**：`条件 ? 值1 : 值2`

```dart
void main() {
  int score = 75;
  bool isMember = true;
  String? userName;
  
  print('=== 基本三元运算 ===');
  // 基本用法
  String result = score >= 60 ? '及格' : '不及格';
  print('分数 $score: $result'); // 分数 75: 及格
  
  // 价格计算
  double price = isMember ? 80.0 : 100.0;
  print('会员价: ¥$price'); // 会员价: ¥80.0
  
  print('\n=== 嵌套三元运算 ===');
  // 嵌套三元运算（多个条件）
  String grade = score >= 90 ? '优秀' : 
                 score >= 80 ? '良好' : 
                 score >= 70 ? '中等' : 
                 score >= 60 ? '及格' : '不及格';
  print('等级: $grade'); // 等级: 中等
  
  print('\n=== 与空安全结合 ===');
  // 与空安全操作符结合
  String displayName = userName ?? '匿名用户';
  String status = displayName == '匿名用户' ? '未登录' : '已登录';
  print('状态: $status'); // 状态: 未登录
  
  // 复杂业务逻辑
  int orderCount = 8;
  double discount = orderCount > 10 ? 0.8 : 
                   orderCount > 5 ? 0.9 : 1.0;
  print('订单数 $orderCount，折扣: ${discount * 10}折'); // 订单数 8，折扣: 9.0折
}
```

#### 2.1.3 switch/case 语句

**定义**：用于多个固定值的条件判断，比多个if-else更清晰

**语法**：
```dart
switch(变量) {
  case 值1:
    逻辑1;
    break;
  case 值2:
    逻辑2;
    break;
  default:
    默认逻辑;
}
```

```dart
void main() {
  String grade = 'B';
  int day = 3;
  String language = 'Dart';
  
  print('=== 成绩等级判断 ===');
  // 字符串switch
  switch (grade) {
    case 'A':
      print('优秀');
      break;
    case 'B':
      print('良好');  // 这里会执行
      break;
    case 'C':
      print('中等');
      break;
    case 'D':
      print('及格');
      break;
    default:
      print('不及格');
  }
  
  print('\n=== 星期判断 ===');
  // 数字switch
  switch (day) {
    case 1:
      print('星期一');
      break;
    case 2:
      print('星期二');
      break;
    case 3:
      print('星期三');  // 这里会执行
      break;
    case 4:
      print('星期四');
      break;
    case 5:
      print('星期五');
      break;
    case 6:
    case 7:
      print('周末');
      break;
    default:
      print('无效的天数');
  }
  
  print('\n=== 编程语言特性 ===');
  // 枚举或固定值判断
  switch (language) {
    case 'Dart':
      print('用于Flutter开发');
      break;
    case 'JavaScript':
      print('用于Web开发');
      break;
    case 'Python':
      print('用于数据科学');
      break;
    case 'Java':
      print('用于企业级开发');
      break;
    default:
      print('未知语言');
  }
  
  print('\n=== 没有break的情况 ===');
  // 注意：没有break会继续执行下一个case
  int number = 2;
  switch (number) {
    case 1:
      print('数字1');
      // 这里没有break，会继续执行case 2
    case 2:
      print('数字2');  // 会执行
      // 这里没有break，会继续执行case 3
    case 3:
      print('数字3');  // 也会执行
      break;
    case 4:
      print('数字4');
      break;
  }
}
```

### 2.2 循环语句

#### 2.2.1 while 循环

**定义**：当条件满足时重复执行代码块

**语法**：
```dart
while(条件) {
  循环体;
}
```

**特点**：
- 先判断条件，再执行循环
- 使用 `break` 跳出整个循环
- 使用 `continue` 跳过当前迭代，进入下一次

```dart
void main() {
  print('=== 基本while循环 ===');
  // 基本while循环
  int count = 1;
  while (count <= 5) {
    print('第$count次循环');
    count++; // 不要忘记更新条件变量，否则会无限循环
  }
  
  print('\n=== 列表遍历 ===');
  // 使用while遍历列表
  List<String> foods = ['包子1', '包子2', '包子3', '包子4', '包子5'];
  int index = 0;
  
  while (index < foods.length) {
    print('吃${foods[index]}');
    index++;
  }
  
  print('\n=== 使用break ===');
  // 使用break提前退出循环
  int number = 1;
  while (true) { // 无限循环
    print('当前数字: $number');
    if (number >= 5) {
      print('达到条件，退出循环');
      break; // 跳出整个循环
    }
    number++;
  }
  
  print('\n=== 使用continue ===');
  // 使用continue跳过某些迭代
  int i = 0;
  while (i < 10) {
    i++;
    if (i % 2 == 0) {
      continue; // 跳过偶数
    }
    print('奇数: $i');
  }
  
  print('\n=== 复杂业务场景 ===');
  // 模拟用户输入验证
  String input = '';
  int attempts = 0;
  List<String> validInputs = ['yes', 'no', 'quit'];
  
  // 模拟循环（实际中可能是从控制台读取）
  while (input != 'quit' && attempts < 3) {
    attempts++;
    
    // 模拟不同的输入
    if (attempts == 1) input = 'invalid';
    else if (attempts == 2) input = 'yes';
    else input = 'quit';
    
    if (!validInputs.contains(input)) {
      print('无效输入: $input，请重新输入');
      continue;
    }
    
    if (input == 'yes') {
      print('用户选择了是');
    } else if (input == 'no') {
      print('用户选择了否');
    }
  }
  print('循环结束，尝试次数: $attempts');
}
```

#### 2.2.2 for 循环

**定义**：用于遍历集合或执行固定次数的循环

**语法**：
```dart
for(初始化; 条件; 更新) {
  循环体;
}
```

**特点**：
- 适合已知循环次数的情况
- 可以方便地访问索引
- 同样支持 `break` 和 `continue`

```dart
void main() {
  print('=== 基本for循环 ===');
  // 基本for循环
  for (int i = 1; i <= 5; i++) {
    print('第$i次循环');
  }
  
  print('\n=== 遍历列表 ===');
  // 遍历列表（使用索引）
  List<String> fruits = ['苹果', '香蕉', '橙子', '葡萄', '芒果'];
  for (int i = 0; i < fruits.length; i++) {
    print('水果$i: ${fruits[i]}');
  }
  
  print('\n=== 使用break ===');
  // 使用break提前退出
  for (int i = 1; i <= 10; i++) {
    if (i > 5) {
      print('达到条件，提前退出');
      break;
    }
    print('当前: $i');
  }
  
  print('\n=== 使用continue ===');
  // 使用continue跳过某些迭代
  for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      continue; // 跳过奇数
    }
    print('偶数: $i');
  }
  
  print('\n=== 嵌套循环 ===');
  // 嵌套循环（乘法表）
  for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
      print('$i × $j = ${i * j}');
    }
    print('---'); // 分隔线
  }
  
  print('\n=== 复杂业务场景 ===');
  // 处理学生成绩
  List<Map<String, dynamic>> students = [
    {'name': '张三', 'scores': [85, 90, 78]},
    {'name': '李四', 'scores': [92, 88, 95]},
    {'name': '王五', 'scores': [76, 82, 79]},
  ];
  
  for (int i = 0; i < students.length; i++) {
    String name = students[i]['name'];
    List<int> scores = students[i]['scores'];
    double average = scores.reduce((a, b) => a + b) / scores.length;
    
    print('学生${i + 1}: $name');
    print('成绩: $scores');
    print('平均分: ${average.toStringAsFixed(1)}');
    
    // 判断等级
    if (average >= 90) {
      print('等级: 优秀');
    } else if (average >= 80) {
      print('等级: 良好');
    } else if (average >= 70) {
      print('等级: 中等');
    } else if (average >= 60) {
      print('等级: 及格');
    } else {
      print('等级: 不及格');
    }
    print('---');
  }
}
```

#### 2.2.3 for-in 循环

**定义**：专门用于遍历集合元素的简化语法

**语法**：
```dart
for(类型 变量 in 集合) {
  循环体;
}
```

```dart
void main() {
  print('=== for-in 循环 ===');
  
  // 遍历列表
  List<String> fruits = ['苹果', '香蕉', '橙子', '葡萄'];
  for (String fruit in fruits) {
    print('水果: $fruit');
  }
  
  print('\n=== 遍历Set ===');
  // 遍历Set（自动去重）
  Set<int> numbers = {1, 2, 2, 3, 4, 4, 5};
  for (int number in numbers) {
    print('数字: $number'); // 不会重复
  }
  
  print('\n=== 遍历Map ===');
  // 遍历Map的键
  Map<String, String> translation = {
    'hello': '你好',
    'world': '世界',
    'apple': '苹果'
  };
  
  for (String key in translation.keys) {
    print('键: $key → 值: ${translation[key]}');
  }
  
  print('\n=== 与索引结合 ===');
  // 如果需要索引，可以使用asMap()
  List<String> colors = ['红色', '绿色', '蓝色', '黄色'];
  for (var entry in colors.asMap().entries) {
    print('索引: ${entry.key}, 颜色: ${entry.value}');
  }
  
  print('\n=== 类型推断 ===');
  // 使用var进行类型推断
  for (var color in colors) {
    print('颜色: $color');
  }
  
  print('\n=== 复杂数据类型遍历 ===');
  // 遍历复杂数据结构
  List<Map<String, dynamic>> users = [
    {'name': '张三', 'age': 25, 'city': '北京'},
    {'name': '李四', 'age': 30, 'city': '上海'},
    {'name': '王五', 'age': 28, 'city': '广州'},
  ];
  
  for (var user in users) {
    print('姓名: ${user['name']}, 年龄: ${user['age']}, 城市: ${user['city']}');
  }
}
```

#### 2.2.4 forEach 方法

**定义**：使用函数式编程风格遍历集合

**语法**：
```dart
集合.forEach((元素) {
  处理逻辑;
});
```

```dart
void main() {
  print('=== List的forEach ===');
  List<String> fruits = ['苹果', '香蕉', '橙子'];
  
  fruits.forEach((fruit) {
    print('水果: $fruit');
  });
  
  print('\n=== Set的forEach ===');
  Set<int> numbers = {1, 2, 3, 4, 5};
  
  numbers.forEach((number) {
    print('数字: $number');
  });
  
  print('\n=== Map的forEach ===');
  Map<String, dynamic> person = {
    'name': '张三',
    'age': 25,
    'city': '北京'
  };
  
  person.forEach((key, value) {
    print('$key: $value');
  });
  
  print('\n=== 与普通循环对比 ===');
  List<int> scores = [85, 92, 78, 96, 88];
  
  // 使用forEach计算总分
  int total1 = 0;
  scores.forEach((score) {
    total1 += score;
  });
  print('forEach计算总分: $total1');
  
  // 使用for循环计算总分
  int total2 = 0;
  for (int score in scores) {
    total2 += score;
  }
  print('for循环计算总分: $total2');
  
  print('\n=== 复杂数据处理 ===');
  List<Map<String, dynamic>> students = [
    {'name': '张三', 'math': 85, 'english': 92},
    {'name': '李四', 'math': 78, 'english': 88},
    {'name': '王五', 'math': 92, 'english': 85},
  ];
  
  // 使用forEach处理复杂数据
  students.forEach((student) {
    String name = student['name'];
    int math = student['math'];
    int english = student['english'];
    double average = (math + english) / 2;
    
    print('$name - 数学: $math, 英语: $english, 平均: ${average.toStringAsFixed(1)}');
  });
  
  print('\n=== 注意事项 ===');
  // forEach中不能使用break或continue
  List<int> numbersList = [1, 2, 3, 4, 5];
  
  // 如果想提前退出，需要使用普通for循环
  for (int i = 0; i < numbersList.length; i++) {
    if (numbersList[i] > 3) {
      break; // 可以提前退出
    }
    print('数字: ${numbersList[i]}');
  }
  
  // forEach中不能break，会遍历所有元素
  numbersList.forEach((number) {
    if (number > 3) {
      return; // 这只能跳过当前元素，不能退出循环
    }
    print('forEach数字: $number');
  });
}
```

### 2.3 循环控制语句

#### 2.3.1 break 和 continue 的详细使用

```dart
void main() {
  print('=== break 语句详解 ===');
  // break: 完全退出循环
  for (int i = 1; i <= 10; i++) {
    if (i == 6) {
      print('遇到6，退出循环');
      break; // 完全退出for循环
    }
    print('当前数字: $i');
  }
  
  print('\n=== continue 语句详解 ===');
  // continue: 跳过当前迭代，继续下一次
  for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      continue; // 跳过偶数
    }
    print('奇数: $i');
  }
  
  print('\n=== 在while循环中使用 ===');
  // while循环中的break和continue
  int count = 0;
  while (count < 10) {
    count++;
    if (count == 3) {
      print('跳过3');
      continue; // 跳过3
    }
    if (count == 8) {
      print('遇到8，提前结束');
      break; // 提前结束循环
    }
    print('计数: $count');
  }
  
  print('\n=== 嵌套循环中的break ===');
  // 嵌套循环中的break
  outerLoop: // 标签，用于指定要break的循环
  for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
      if (i == 2 && j == 2) {
        print('遇到(2,2)，退出外层循环');
        break outerLoop; // 退出带标签的循环
      }
      print('坐标: ($i, $j)');
    }
  }
  
  print('\n=== 实际应用场景 ===');
  // 搜索场景：找到目标后立即退出
  List<String> names = ['张三', '李四', '王五', '赵六', '孙七'];
  String target = '王五';
  
  for (String name in names) {
    if (name == target) {
      print('找到目标: $name');
      break; // 找到后立即退出，提高效率
    }
    print('搜索: $name');
  }
  
  // 过滤场景：跳过不符合条件的元素
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  print('\n大于5的数字:');
  for (int number in numbers) {
    if (number <= 5) {
      continue; // 跳过小于等于5的数字
    }
    print(number);
  }
}
```

### 2.4 循环总结与最佳实践

```dart
void main() {
  print('=== 循环方法总结 ===');
  
  List<String> items = ['A', 'B', 'C', 'D', 'E'];
  
  print('1. 标准for循环（需要索引时）:');
  for (int i = 0; i < items.length; i++) {
    print('索引$i: ${items[i]}');
  }
  
  print('\n2. for-in循环（只需要元素时）:');
  for (String item in items) {
    print('元素: $item');
  }
  
  print('\n3. forEach方法（函数式风格）:');
  items.forEach((item) {
    print('元素: $item');
  });
  
  print('\n4. while循环（条件不确定时）:');
  int index = 0;
  while (index < items.length) {
    print('元素: ${items[index]}');
    index++;
  }
  
  print('\n=== 性能考虑 ===');
  // 对于大型列表，普通for循环可能稍快
  List<int> largeList = List.generate(1000, (index) => index);
  
  // 如果需要提前退出，使用for循环
  int target = 500;
  for (int i = 0; i < largeList.length; i++) {
    if (largeList[i] == target) {
      print('找到目标 $target，位置: $i');
      break;
    }
  }
  
  print('\n=== 可读性考虑 ===');
  // forEach在链式调用时更清晰
  items
    .where((item) => item != 'B') // 过滤掉B
    .map((item) => '项目: $item')   // 转换格式
    .forEach(print);              // 打印结果
}
```

## Dart 函数
### 3.1 函数定义与返回值
#### 3.1.1 函数基本定义

**定义**：函数是代码组合和复用的核心单元

**语法**：
```dart
返回类型 函数名(参数列表) {
  函数体
  return 返回值;
}
```

```dart
void main() {
  print('=== 基本函数调用 ===');
  
  // 调用有返回值的函数
  int sum = add(5, 3);
  print('5 + 3 = $sum'); // 5 + 3 = 8
  
  // 调用无返回值的函数
  greet('李四'); // 你好，李四！
  
  // 调用返回字符串的函数
  String message = getMessage();
  print(message); // 欢迎使用Dart
  
  // 调用计算函数
  double area = calculateCircleArea(5.0);
  print('半径为5的圆面积: ${area.toStringAsFixed(2)}'); // 半径为5的圆面积: 78.54
}

// 有返回值的函数
int add(int a, int b) {
  return a + b;
}

// 无返回值的函数
void greet(String name) {
  print('你好，$name！');
}

// 返回字符串的函数
String getMessage() {
  return '欢迎使用Dart';
}

// 计算圆面积
double calculateCircleArea(double radius) {
  const double pi = 3.14159;
  return pi * radius * radius;
}
```

#### 3.1.2 函数返回值类型

**分类**：
- 有返回值：`具体类型 函数名() {}`
- 无返回值：`void 函数名() {}`
- 类型推断：省略类型，Dart自动推断为`dynamic`

```dart
void main() {
  print('=== 函数返回值类型 ===');
  
  // 明确返回类型
  int result1 = add(10, 20);
  print('add(10, 20) = $result1'); // 30
  
  // 无返回值函数
  printMessage('Hello Dart'); // 消息: Hello Dart
  
  // 类型推断
  var result2 = getValue();
  print('getValue() = $result2, 类型: ${result2.runtimeType}'); // 3, 类型: int
  
  // 动态类型
  dynamic result3 = getDynamicValue();
  print('getDynamicValue() = $result3, 类型: ${result3.runtimeType}'); // 动态值, 类型: String
}

// 明确返回类型（推荐）
int add(int a, int b) {
  return a + b;
}

// 无返回值
void printMessage(String message) {
  print('消息: $message');
}

// 类型推断（Dart自动推断为int）
getValue() {
  return 1 + 2;
}

// 动态返回类型
getDynamicValue() {
  return '动态值';
}

// 根据条件返回不同类型（不推荐，但可能有用）
dynamic calculate(bool useString) {
  if (useString) {
    return '结果是100';
  } else {
    return 100;
  }
}
```

### 3.2 函数参数
#### 3.2.1 必传参数

**特点**：调用时必须传递，不能为空

```dart
void main() {
  print('=== 必传参数 ===');
  
  // 必须传递两个参数
  int result = add(10, 20);
  print('10 + 20 = $result'); // 30
  
  // 必须传递三个参数
  printUserInfo('张三', 25, '北京');
  
  // 错误示例：缺少参数会编译错误
  // add(10); // ❌ 错误：缺少参数
  // printUserInfo('李四'); // ❌ 错误：缺少参数
}

// 必传参数
int add(int a, int b) {
  return a + b;
}

// 多个必传参数
void printUserInfo(String name, int age, String city) {
  print('姓名: $name, 年龄: $age, 城市: $city');
}

// 混合类型必传参数
double calculateTotal(double price, int quantity, double discount) {
  double total = price * quantity;
  return total * (1 - discount);
}
```

#### 3.2.2 可选位置参数

**特点**：
- 位于必传参数后面
- 用`[]`包裹
- 按顺序传递
- 可以设置默认值

```dart
void main() {
  print('=== 可选位置参数 ===');
  
  // 只传递必传参数
  print(combine("Hello")); // Hellonullworld
  
  // 传递必传参数和第一个可选参数
  print(combine("Hello", "Dart")); // Hellodartworld
  
  // 传递所有参数
  print(combine("Hello", "Dart", "!")); // Hellodart!
  
  // 使用默认值的例子
  print(createEmail("张三")); // 张三@gmail.com
  print(createEmail("李四", "qq.com")); // 李四@qq.com
  print(createEmail("王五", "company.com", "info")); // info.王五@company.com
  
  // 计算价格示例
  print(calculatePrice(100.0)); // 总价: 100.0
  print(calculatePrice(100.0, 2)); // 总价: 200.0
  print(calculatePrice(100.0, 2, 0.1)); // 总价: 180.0
}

// 可选位置参数
String combine(String a, [String? b, String? c]) {
  return a + (b ?? '') + (c ?? 'world');
}

// 带默认值的可选位置参数
String createEmail(String name, [String domain = "gmail.com", String prefix = ""]) {
  if (prefix.isNotEmpty) {
    return '$prefix.$name@$domain';
  }
  return '$name@$domain';
}

// 业务逻辑中的可选位置参数
double calculatePrice(double unitPrice, [int quantity = 1, double discount = 0.0]) {
  double total = unitPrice * quantity;
  total = total * (1 - discount);
  print('总价: $total');
  return total;
}
```

#### 3.2.3 可选命名参数

**特点**：
- 位于必传参数后面
- 用`{}`包裹
- 按参数名传递，不关心顺序
- 可以设置默认值

```dart
void main() {
  print('=== 可选命名参数 ===');
  
  // 只传递必传参数
  showPerson("张三"); // 姓名:张三, 年龄:18, 性别:男, 城市:未知
  
  // 传递部分命名参数
  showPerson("李四", age: 25); // 姓名:李四, 年龄:25, 性别:男, 城市:未知
  
  // 传递所有命名参数（顺序无关）
  showPerson("王五", sex: "女", city: "北京", age: 30); // 姓名:王五, 年龄:30, 性别:女, 城市:北京
  
  // 创建用户配置
  var config1 = createConfig("app");
  print(config1); // {name: app, theme: light, language: zh-CN, debug: false}
  
  var config2 = createConfig("admin", theme: "dark", debug: true);
  print(config2); // {name: admin, theme: dark, language: zh-CN, debug: true}
  
  // 订单处理示例
  processOrder("ORDER001", amount: 199.99); 
  processOrder("ORDER002", amount: 299.99, discount: 0.1, note: "VIP客户");
}

// 可选命名参数
void showPerson(String name, {int age = 18, String sex = "男", String city = "未知"}) {
  print('姓名:$name, 年龄:$age, 性别:$sex, 城市:$city');
}

// 返回Map的命名参数函数
Map<String, dynamic> createConfig(String name, {
  String theme = "light",
  String language = "zh-CN",
  bool debug = false
}) {
  return {
    'name': name,
    'theme': theme,
    'language': language,
    'debug': debug
  };
}

// 业务逻辑中的命名参数
void processOrder(String orderId, {
  required double amount,
  double discount = 0.0,
  String? note
}) {
  double finalAmount = amount * (1 - discount);
  print('订单: $orderId');
  print('原金额: ¥$amount');
  if (discount > 0) {
    print('折扣: ${discount * 100}%');
  }
  print('最终金额: ¥${finalAmount.toStringAsFixed(2)}');
  if (note != null) {
    print('备注: $note');
  }
  print('---');
}
```

#### 3.2.4 必需命名参数

**特点**：使用`required`关键字标记必须传递的命名参数

```dart
void main() {
  print('=== 必需命名参数 ===');
  
  // 必须传递所有required参数
  createUser("张三", age: 25, email: "zhangsan@example.com");
  
  // city是可选的
  createUser("李四", age: 30, email: "lisi@example.com", city: "上海");
  
  // 错误示例：缺少required参数
  // createUser("王五", age: 28); // ❌ 错误：缺少required参数email
  // createUser("赵六", email: "zhaoliu@example.com"); // ❌ 错误：缺少required参数age
}

// 必需命名参数
void createUser(String name, {
  required int age,
  required String email,
  String? city
}) {
  print('创建用户:');
  print('姓名: $name');
  print('年龄: $age');
  print('邮箱: $email');
  if (city != null) {
    print('城市: $city');
  }
  print('---');
}

// 混合使用可选和必需命名参数
void updateProfile(String userId, {
  required String username,
  String? bio,
  int? age,
  bool isPublic = true
}) {
  print('更新用户资料: $userId');
  print('用户名: $username');
  if (bio != null) print('简介: $bio');
  if (age != null) print('年龄: $age');
  print('公开: $isPublic');
  print('---');
}
```

### 3.3 特殊函数类型
#### 3.3.1 匿名函数

**特点**：没有名称的函数，可以赋值给变量

```dart
void main() {
  print('=== 匿名函数 ===');
  
  // 基本匿名函数
  var greet = (String name) {
    return '你好，$name！';
  };
  
  print(greet('张三')); // 你好，张三！
  
  // 作为参数传递
  executeFunction(() {
    print('这是一个匿名函数');
  });
  
  // 列表操作中的匿名函数
  List<int> numbers = [1, 2, 3, 4, 5];
  
  // 使用匿名函数过滤偶数
  var evenNumbers = numbers.where((number) {
    return number % 2 == 0;
  });
  print('偶数: $evenNumbers'); // 偶数: (2, 4)
  
  // 使用匿名函数转换数据
  var squaredNumbers = numbers.map((number) {
    return number * number;
  });
  print('平方: $squaredNumbers'); // 平方: (1, 4, 9, 16, 25)
  
  // 复杂业务逻辑
  processNumbers(numbers, (int number) {
    if (number > 3) {
      print('大于3的数字: $number');
    }
  });
}

// 接受函数作为参数
void executeFunction(Function callback) {
  print('开始执行函数...');
  callback();
  print('函数执行完毕');
}

// 处理数字的通用函数
void processNumbers(List<int> numbers, Function processor) {
  for (var number in numbers) {
    processor(number);
  }
}

// 更具体的例子：用户处理
void main() {
  print('\n=== 用户处理示例 ===');
  
  List<Map<String, dynamic>> users = [
    {'name': '张三', 'age': 25, 'active': true},
    {'name': '李四', 'age': 17, 'active': true},
    {'name': '王五', 'age': 30, 'active': false},
  ];
  
  // 使用匿名函数过滤活跃用户
  var activeUsers = users.where((user) => user['active'] == true);
  print('活跃用户: $activeUsers');
  
  // 使用匿名函数过滤成年用户
  var adultUsers = users.where((user) {
    return user['age'] >= 18;
  });
  print('成年用户: $adultUsers');
  
  // 使用匿名函数转换用户数据
  var userNames = users.map((user) {
    return '用户: ${user['name']}';
  });
  print('用户名称: $userNames');
}
```

#### 3.3.2 箭头函数

**特点**：单行函数的简写语法，自动返回结果

```dart
void main() {
  print('=== 箭头函数 ===');
  
  // 基本箭头函数
  print(add(5, 3)); // 8
  print(multiply(4, 5)); // 20
  
  // 列表操作中的箭头函数
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // 使用箭头函数过滤
  var evenNumbers = numbers.where((n) => n % 2 == 0);
  print('偶数: $evenNumbers'); // 偶数: (2, 4, 6, 8, 10)
  
  var largeNumbers = numbers.where((n) => n > 5);
  print('大于5: $largeNumbers'); // 大于5: (6, 7, 8, 9, 10)
  
  // 使用箭头函数转换
  var squared = numbers.map((n) => n * n);
  print('平方: $squared'); // 平方: (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
  
  var strings = numbers.map((n) => '数字$n');
  print('字符串: $strings'); // 字符串: (数字1, 数字2, 数字3, 数字4, 数字5, 数字6, 数字7, 数字8, 数字9, 数字10)
  
  // 复杂数据处理
  List<Map<String, dynamic>> products = [
    {'name': '手机', 'price': 2999, 'category': '电子'},
    {'name': '书本', 'price': 39, 'category': '文具'},
    {'name': '电脑', 'price': 5999, 'category': '电子'},
  ];
  
  // 使用箭头函数处理复杂数据
  var expensiveProducts = products.where((p) => p['price'] > 1000);
  print('昂贵商品: $expensiveProducts');
  
  var electronicProducts = products.where((p) => p['category'] == '电子');
  print('电子产品: $electronicProducts');
  
  var productNames = products.map((p) => p['name']);
  print('商品名称: $productNames');
}

// 箭头函数示例
int add(int a, int b) => a + b;
int multiply(int a, int b) => a * b;
bool isEven(int number) => number % 2 == 0;
String getGrade(int score) => score >= 90 ? '优秀' : score >= 60 ? '及格' : '不及格';

// 业务逻辑中的箭头函数
double calculateArea(double width, double height) => width * height;
String formatPrice(double price) => '¥${price.toStringAsFixed(2)}';
bool isValidEmail(String email) => email.contains('@') && email.contains('.');
```

#### 3.3.3 函数作为参数和返回值

```dart
void main() {
  print('=== 函数作为参数和返回值 ===');
  
  // 函数作为参数
  calculate(5, 3, add); // 5 + 3 = 8
  calculate(5, 3, multiply); // 5 * 3 = 15
  calculate(10, 2, (a, b) => a - b); // 10 - 2 = 8
  
  // 函数作为返回值
  var multiplier = createMultiplier(5);
  print('5倍乘数: ${multiplier(10)}'); // 50
  
  var greeter = createGreeter('早上好');
  print(greeter('张三')); // 早上好，张三！
  
  // 复杂示例：数据处理管道
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // 创建处理管道
  var processor = createNumberProcessor();
  var result = processor(numbers);
  print('处理结果: $result'); // 处理结果: [4, 16, 36, 64, 100]
}

// 函数作为参数
void calculate(int a, int b, Function operation) {
  var result = operation(a, b);
  print('$a ${getOperationSymbol(operation)} $b = $result');
}

String getOperationSymbol(Function operation) {
  if (operation == add) return '+';
  if (operation == multiply) return '*';
  return '?';
}

int add(int a, int b) => a + b;
int multiply(int a, int b) => a * b;

// 函数作为返回值
Function createMultiplier(int factor) {
  return (int number) => number * factor;
}

Function createGreeter(String greeting) {
  return (String name) => '$greeting，$name！';
}

// 复杂示例：创建数据处理管道
List<int> Function(List<int>) createNumberProcessor() {
  return (List<int> numbers) {
    return numbers
        .where((n) => n % 2 == 0)  // 过滤偶数
        .map((n) => n * n)         // 计算平方
        .toList();                 // 转换为列表
  };
}

// 高阶函数示例
void processData(List<int> data, Function processor) {
  print('原始数据: $data');
  var result = processor(data);
  print('处理结果: $result');
}

// 组合函数
Function compose(Function f, Function g) {
  return (x) => f(g(x));
}
```

### 3.4 函数作用域和闭包

```dart
void main() {
  print('=== 函数作用域 ===');
  
  var globalVar = '全局变量';
  
  void outerFunction() {
    var outerVar = '外部变量';
    
    print('在外部函数中:');
    print('可以访问全局变量: $globalVar');
    print('可以访问外部变量: $outerVar');
    
    void innerFunction() {
      var innerVar = '内部变量';
      
      print('在内部函数中:');
      print('可以访问全局变量: $globalVar');
      print('可以访问外部变量: $outerVar');
      print('可以访问内部变量: $innerVar');
    }
    
    innerFunction();
    
    // print(innerVar); // ❌ 错误：不能访问内部函数的变量
  }
  
  outerFunction();
  
  print('\n=== 闭包 ===');
  
  // 闭包：函数可以记住并访问其词法作用域中的变量
  var counter = createCounter();
  print(counter()); // 1
  print(counter()); // 2
  print(counter()); // 3
  
  var anotherCounter = createCounter();
  print(anotherCounter()); // 1 (独立的计数器)
  
  // 更复杂的闭包示例
  var bankAccount = createBankAccount(1000);
  print('余额: ${bankAccount('check')}'); // 余额: 1000.0
  print('存款后: ${bankAccount('deposit', 500)}'); // 存款后: 1500.0
  print('取款后: ${bankAccount('withdraw', 200)}'); // 取款后: 1300.0
  print('最终余额: ${bankAccount('check')}'); // 最终余额: 1300.0
}

// 创建计数器闭包
Function createCounter() {
  int count = 0;
  
  return () {
    count++;
    return count;
  };
}

// 创建银行账户闭包
Function createBankAccount(double initialBalance) {
  double balance = initialBalance;
  
  return (String action, [double amount = 0]) {
    switch (action) {
      case 'deposit':
        balance += amount;
        return balance;
      case 'withdraw':
        if (amount <= balance) {
          balance -= amount;
        } else {
          print('余额不足');
        }
        return balance;
      case 'check':
        return balance;
      default:
        print('无效操作');
        return balance;
    }
  };
}
```

### 3.5 函数最佳实践

```dart
void main() {
  print('=== 函数最佳实践 ===');
  
  // 1. 使用有意义的函数名
  calculateCircleArea(5.0);
  validateEmail("user@example.com");
  formatUserName("john_doe");
  
  // 2. 函数应该只做一件事
  processUserOrder("ORDER123", 299.99);
  
  // 3. 合理使用参数
  createUserProfile(
    name: "张三",
    email: "zhangsan@example.com",
    age: 25,
    city: "北京"
  );
}

// 好的实践：有意义的函数名
double calculateCircleArea(double radius) {
  const double pi = 3.14159;
  double area = pi * radius * radius;
  print('半径为$radius的圆面积: ${area.toStringAsFixed(2)}');
  return area;
}

// 好的实践：单一职责
bool validateEmail(String email) {
  bool isValid = email.contains('@') && email.contains('.');
  print('邮箱 $email 验证结果: $isValid');
  return isValid;
}

String formatUserName(String username) {
  String formatted = username.replaceAll('_', ' ').toLowerCase();
  print('用户名格式化: $username -> $formatted');
  return formatted;
}

// 好的实践：拆分复杂函数
void processUserOrder(String orderId, double amount) {
  validateOrder(orderId);
  processPayment(orderId, amount);
  sendConfirmation(orderId);
}

void validateOrder(String orderId) {
  print('验证订单: $orderId');
}

void processPayment(String orderId, double amount) {
  print('处理支付: 订单$orderId, 金额¥$amount');
}

void sendConfirmation(String orderId) {
  print('发送确认: 订单$orderId');
}

// 好的实践：使用命名参数提高可读性
void createUserProfile({
  required String name,
  required String email,
  int? age,
  String? city,
  String phone = '',
  bool isVerified = false
}) {
  print('创建用户资料:');
  print('姓名: $name');
  print('邮箱: $email');
  if (age != null) print('年龄: $age');
  if (city != null) print('城市: $city');
  if (phone.isNotEmpty) print('电话: $phone');
  print('验证状态: $isVerified');
}
```

# Dart 类与面向对象编程

## 4.1 类的基本概念

### 4.1.1 类定义与实例化

**定义**：类是面向对象编程的核心，包含属性和方法

```dart
void main() {
  print('=== 类的基本使用 ===');
  
  // 创建对象实例
  Person person1 = Person();
  person1.name = '张三';
  person1.age = 25;
  person1.introduce(); // 我叫张三，今年25岁
  
  // 使用级联操作符
  Person person2 = Person()
    ..name = '李四'
    ..age = 30
    ..introduce(); // 我叫李四，今年30岁
  
  // 调用方法
  person1.study(); // 张三在学习
  person2.eat('午饭'); // 李四在吃午饭
}

class Person {
  // 属性（字段）
  String name = '';
  int age = 0;
  String sex = '男';
  
  // 方法
  void introduce() {
    print('我叫$name，今年$age岁');
  }
  
  void study() {
    print('$name在学习');
  }
  
  void eat(String food) {
    print('$name在吃$food');
  }
}
```

### 4.1.2 构造函数

#### 默认构造函数

```dart
void main() {
  print('=== 默认构造函数 ===');
  
  // 使用构造函数创建对象
  Person person1 = Person('张三', 25, '男');
  person1.introduce(); // 我叫张三，今年25岁，性别男
  
  Person person2 = Person('李四', 30, '女');
  person2.introduce(); // 我叫李四，今年30岁，性别女
}

class Person {
  String name;
  int age;
  String sex;
  
  // 默认构造函数
  Person(String name, int age, String sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  
  void introduce() {
    print('我叫$name，今年$age岁，性别$sex');
  }
}
```

#### 命名构造函数

```dart
void main() {
  print('=== 命名构造函数 ===');
  
  // 使用默认构造函数
  Person person1 = Person('张三', 25);
  person1.introduce(); // 我叫张三，今年25岁
  
  // 使用命名构造函数
  Person student = Person.student('李四', 20, '三年级');
  student.introduce(); // 我叫李四，今年20岁，年级：三年级
  
  Person teacher = Person.teacher('王老师', 35, '数学');
  teacher.introduce(); // 我叫王老师，今年35岁，科目：数学
  
  // 从Map创建对象
  Person fromMap = Person.fromMap({
    'name': '赵六',
    'age': 28,
    'type': 'employee'
  });
  fromMap.introduce(); // 我叫赵六，今年28岁，类型：employee
}

class Person {
  String name;
  int age;
  String? type;
  String? grade;
  String? subject;
  
  // 默认构造函数
  Person(this.name, this.age);
  
  // 命名构造函数 - 学生
  Person.student(String name, int age, String grade) 
    : this.name = name,
      this.age = age,
      this.grade = grade,
      this.type = 'student';
  
  // 命名构造函数 - 老师
  Person.teacher(String name, int age, String subject)
    : this.name = name,
      this.age = age,
      this.subject = subject,
      this.type = 'teacher';
  
  // 从Map创建的命名构造函数
  Person.fromMap(Map<String, dynamic> map)
    : name = map['name'] ?? '未知',
      age = map['age'] ?? 0,
      type = map['type'] {
    if (map['grade'] != null) grade = map['grade'];
    if (map['subject'] != null) subject = map['subject'];
  }
  
  void introduce() {
    var info = '我叫$name，今年$age岁';
    if (grade != null) info += '，年级：$grade';
    if (subject != null) info += '，科目：$subject';
    if (type != null) info += '，类型：$type';
    print(info);
  }
}
```

#### 构造函数语法糖

```dart
void main() {
  print('=== 构造函数语法糖 ===');
  
  // 使用语法糖构造函数
  Person person1 = Person('张三', 25, '男');
  person1.introduce(); // 我叫张三，今年25岁，性别男
  
  Person person2 = Person.simple('李四', 30);
  person2.introduce(); // 我叫李四，今年30岁，性别男
  
  // 使用重定向构造函数
  Person.developer('王五', 28).introduce(); // 我叫王五，今年28岁，职业：开发工程师
}

class Person {
  String name;
  int age;
  String sex;
  String? profession;
  
  // 语法糖构造函数
  Person(this.name, this.age, [this.sex = '男']);
  
  // 命名构造函数的语法糖
  Person.simple(this.name, this.age) : sex = '男';
  
  Person.developer(String name, int age) : this(name, age, '男') {
    profession = '开发工程师';
  }
  
  void introduce() {
    var info = '我叫$name，今年$age岁，性别$sex';
    if (profession != null) info += '，职业：$profession';
    print(info);
  }
}
```

### 4.1.3 私有属性和方法

```dart
// person.dart
class Person {
  String name;
  int _age; // 私有属性（以下划线开头）
  String _idCard = '默认身份证'; // 私有属性
  
  Person(this.name, this._age);
  
  // 公有方法访问私有属性
  int get age => _age;
  
  void set age(int value) {
    if (value > 0 && value < 150) {
      _age = value;
    } else {
      print('年龄不合法');
    }
  }
  
  // 私有方法
  void _showIdCard() {
    print('身份证: $_idCard');
  }
  
  // 公有方法调用私有方法
  void verifyIdentity() {
    print('开始身份验证...');
    _showIdCard();
    print('验证完成');
  }
  
  // 设置私有属性
  void setIdCard(String idCard) {
    if (idCard.length == 18) {
      _idCard = idCard;
    } else {
      print('身份证格式错误');
    }
  }
}

// main.dart
void main() {
  print('=== 私有属性和方法 ===');
  
  Person person = Person('张三', 25);
  
  // 可以访问公有属性和方法
  print('姓名: ${person.name}'); // 姓名: 张三
  print('年龄: ${person.age}'); // 年龄: 25（通过getter访问）
  
  // 通过setter修改年龄
  person.age = 30;
  print('新年龄: ${person.age}'); // 新年龄: 30
  
  // 尝试设置不合法的年龄
  person.age = 200; // 年龄不合法
  
  // 调用公有方法
  person.verifyIdentity();
  // 开始身份验证...
  // 身份证: 默认身份证
  // 验证完成
  
  // 设置身份证
  person.setIdCard('110101199001011234');
  person.verifyIdentity();
  
  // 错误示例：无法直接访问私有成员
  // print(person._age);     // ❌ 错误
  // person._showIdCard();  // ❌ 错误
  // person._idCard = '123'; // ❌ 错误
}
```

## 4.2 面向对象特性

### 4.2.1 继承

```dart
void main() {
  print('=== 继承 ===');
  
  // 创建子类对象
  Student student = Student('张三', 18, '三年级');
  student.introduce(); // 我叫张三，今年18岁
  student.study();     // 张三在学习
  student.exam();      // 张三在参加三年级的考试
  
  Teacher teacher = Teacher('李老师', 35, '数学');
  teacher.introduce(); // 我叫李老师，今年35岁
  teacher.teach();     // 李老师在教数学
  
  // 多态：父类引用指向子类对象
  Person person1 = Student('王五', 20, '四年级');
  Person person2 = Teacher('张老师', 40, '英语');
  
  person1.introduce(); // 我叫王五，今年20岁
  person2.introduce(); // 我叫张老师，今年40岁
}

// 父类
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  void introduce() {
    print('我叫$name，今年$age岁');
  }
  
  void study() {
    print('$name在学习');
  }
}

// 子类 - 学生
class Student extends Person {
  String grade;
  
  // 调用父类构造函数
  Student(String name, int age, this.grade) : super(name, age);
  
  // 子类特有方法
  void exam() {
    print('$name在参加$grade的考试');
  }
  
  // 重写父类方法
  @override
  void study() {
    print('$name正在认真学习$grade的课程');
  }
}

// 子类 - 老师
class Teacher extends Person {
  String subject;
  
  Teacher(String name, int age, this.subject) : super(name, age);
  
  // 子类特有方法
  void teach() {
    print('$name在教$subject');
  }
  
  // 重写父类方法
  @override
  void study() {
    print('$name在备课$subject');
  }
}
```

### 4.2.2 多态

#### 通过继承实现多态

```dart
void main() {
  print('=== 通过继承实现多态 ===');
  
  // 同一个父类类型，不同的子类实现
  Animal dog = Dog();
  Animal cat = Cat();
  Animal bird = Bird();
  
  // 同样的方法调用，不同的行为
  dog.makeSound(); // 汪汪！
  cat.makeSound(); // 喵喵！
  bird.makeSound(); // 叽叽！
  
  // 在集合中使用多态
  List<Animal> animals = [Dog(), Cat(), Bird()];
  for (var animal in animals) {
    animal.makeSound();
  }
  
  // 业务场景：支付系统
  Payment wechatPay = WechatPay();
  Payment alipay = Alipay();
  Payment bankCard = BankCardPay();
  
  processPayment(wechatPay, 100.0);
  processPayment(alipay, 200.0);
  processPayment(bankCard, 300.0);
}

// 父类
class Animal {
  void makeSound() {
    print('动物发出声音');
  }
}

// 子类实现
class Dog extends Animal {
  @override
  void makeSound() {
    print('汪汪！');
  }
}

class Cat extends Animal {
  @override
  void makeSound() {
    print('喵喵！');
  }
}

class Bird extends Animal {
  @override
  void makeSound() {
    print('叽叽！');
  }
}

// 支付系统示例
abstract class Payment {
  void pay(double amount);
}

class WechatPay extends Payment {
  @override
  void pay(double amount) {
    print('微信支付：¥${amount.toStringAsFixed(2)}');
  }
}

class Alipay extends Payment {
  @override
  void pay(double amount) {
    print('支付宝支付：¥${amount.toStringAsFixed(2)}');
  }
}

class BankCardPay extends Payment {
  @override
  void pay(double amount) {
    print('银行卡支付：¥${amount.toStringAsFixed(2)}');
  }
}

void processPayment(Payment payment, double amount) {
  print('开始支付处理...');
  payment.pay(amount);
  print('支付完成');
}
```

#### 通过接口实现多态

```dart
void main() {
  print('=== 通过接口实现多态 ===');
  
  // 不同的类实现同一个接口
  Notification email = EmailNotification();
  Notification sms = SMSNotification();
  Notification push = PushNotification();
  
  // 同样的接口，不同的实现
  email.send('Hello', 'user@example.com');
  sms.send('验证码：1234', '13800138000');
  push.send('您有新消息', 'all');
  
  // 在业务逻辑中使用
  NotificationService service = NotificationService();
  service.addNotification(email);
  service.addNotification(sms);
  service.addNotification(push);
  
  service.sendAll('系统维护通知', 'all');
}

// 接口（抽象类）
abstract class Notification {
  void send(String message, String target);
}

// 实现类
class EmailNotification implements Notification {
  @override
  void send(String message, String target) {
    print('发送邮件到 $target：$message');
  }
}

class SMSNotification implements Notification {
  @override
  void send(String message, String target) {
    print('发送短信到 $target：$message');
  }
}

class PushNotification implements Notification {
  @override
  void send(String message, String target) {
    print('发送推送通知到 $target：$message');
  }
}

// 使用接口的业务类
class NotificationService {
  List<Notification> notifications = [];
  
  void addNotification(Notification notification) {
    notifications.add(notification);
  }
  
  void sendAll(String message, String target) {
    print('开始批量发送通知...');
    for (var notification in notifications) {
      notification.send(message, target);
    }
    print('批量发送完成');
  }
}
```

### 4.2.3 混入（Mixin）

```dart
void main() {
  print('=== 混入（Mixin）===');
  
  // 学生拥有唱歌和跳舞的能力
  Student student = Student('小明', 20);
  student.study();  // 小明在学习
  student.sing();   // 小明在唱歌
  student.dance();  // 小明在跳舞
  
  // 老师拥有唱歌的能力
  Teacher teacher = Teacher('张老师', 35);
  teacher.teach();  // 张老师在教书
  teacher.sing();   // 张老师在唱歌
  // teacher.dance(); // ❌ 错误：Teacher没有dance方法
  
  // 运动员拥有所有能力
  Athlete athlete = Athlete('李运动员', 25);
  athlete.run();    // 李运动员在跑步
  athlete.sing();   // 李运动员在唱歌
  athlete.dance();  // 李运动员在跳舞
  
  print('\n=== 混入方法冲突解决 ===');
  // 测试方法冲突
  ConflictDemo conflict = ConflictDemo();
  conflict.test(); // 来自MixinB的test方法
}

// 混入类
mixin Singer {
  void sing() {
    print('${this}在唱歌');
  }
}

mixin Dancer {
  void dance() {
    print('${this}在跳舞');
  }
}

mixin Runner {
  void run() {
    print('${this}在跑步');
  }
}

// 基础类
class Person {
  String name;
  int age;
  
  Person(this.name, this.age);
  
  @override
  String toString() => name;
}

// 使用混入的类
class Student extends Person with Singer, Dancer {
  Student(String name, int age) : super(name, age);
  
  void study() {
    print('$name在学习');
  }
}

class Teacher extends Person with Singer {
  Teacher(String name, int age) : super(name, age);
  
  void teach() {
    print('$name在教书');
  }
}

class Athlete extends Person with Singer, Dancer, Runner {
  Athlete(String name, int age) : super(name, age);
}

// 混入方法冲突示例
mixin MixinA {
  void test() {
    print('来自MixinA的test方法');
  }
}

mixin MixinB {
  void test() {
    print('来自MixinB的test方法');
  }
}

class ConflictDemo with MixinA, MixinB {
  // 后混入的MixinB会覆盖MixinA的test方法
}
```

### 4.2.4 泛型

```dart
void main() {
  print('=== 泛型 ===');
  
  // 泛型集合
  List<String> names = ['张三', '李四', '王五'];
  // names.add(123); // ❌ 错误：只能添加字符串
  
  Map<String, int> scores = {
    '张三': 90,
    '李四': 85,
    '王五': 92
  };
  
  // 泛型方法
  print('第一个名字: ${getFirst(names)}'); // 第一个名字: 张三
  print('第一个数字: ${getFirst([1, 2, 3])}'); // 第一个数字: 1
  print('第一个布尔值: ${getFirst([true, false])}'); // 第一个布尔值: true
  
  // 泛型类
  Box<String> stringBox = Box('Hello Dart');
  Box<int> intBox = Box(100);
  Box<double> doubleBox = Box(3.14);
  
  print('字符串盒子: ${stringBox.value}'); // 字符串盒子: Hello Dart
  print('整数盒子: ${intBox.value}');     // 整数盒子: 100
  print('小数盒子: ${doubleBox.value}');  // 小数盒子: 3.14
  
  // 调用泛型方法
  printValue<string>('测试字符串');
  printValue<int>(123);
  printValue<bool>(true);
  
  // 复杂泛型示例
  Pair<String, int> nameAge = Pair('张三', 25);
  Pair<String, double> productPrice = Pair('手机', 2999.99);
  
  print('姓名年龄对: ${nameAge.first} - ${nameAge.second}');
  print('商品价格对: ${productPrice.first} - ${productPrice.second}');
  
  // 泛型约束
  NumberContainer<int> intContainer = NumberContainer(100);
  NumberContainer<double> doubleContainer = NumberContainer(3.14);
  // NumberContainer<String> stringContainer = NumberContainer('abc'); // ❌ 错误：String不是num
  
  print('整数容器: ${intContainer.value}');
  print('小数容器: ${doubleContainer.value}');
}

// 泛型方法
T getFirst<T>(List<T> list) {
  return list.first;
}

void printValue<T>(T value) {
  print('值: $value, 类型: ${value.runtimeType}');
}

// 泛型类
class Box<T> {
  T value;
  
  Box(this.value);
  
  T getValue() {
    return value;
  }
  
  void setValue(T newValue) {
    value = newValue;
  }
}

// 多个类型参数的泛型类
class Pair<T, U> {
  T first;
  U second;
  
  Pair(this.first, this.second);
}

// 带约束的泛型
class NumberContainer<T extends num> {
  T value;
  
  NumberContainer(this.value);
  
  double toDouble() {
    return value.toDouble();
  }
}

// 更复杂的泛型示例
class Repository<T> {
  List<T> items = [];
  
  void add(T item) {
    items.add(item);
  }
  
  T? find(bool Function(T) test) {
    try {
      return items.firstWhere(test);
    } catch (e) {
      return null;
    }
  }
  
  List<T> where(bool Function(T) test) {
    return items.where(test).toList();
  }
}

// 使用复杂泛型
void testRepository() {
  Repository<String> stringRepo = Repository();
  stringRepo.add('苹果');
  stringRepo.add('香蕉');
  stringRepo.add('橙子');
  
  var result = stringRepo.find((item) => item == '香蕉');
  print('查找结果: $result'); // 查找结果: 香蕉
  
  Repository<int> intRepo = Repository();
  intRepo.add(1);
  intRepo.add(2);
  intRepo.add(3);
  
  var evenNumbers = intRepo.where((item) => item % 2 == 0);
  print('偶数: $evenNumbers'); // 偶数: [2]
}
```

## Dart 异步编程
### 5.1 异步编程基础
#### 5.1.1 事件循环机制

**Dart异步模型**：单线程 + 事件循环

```dart
void main() {
  print('=== 事件循环演示 ===');
  
  print('1. 开始同步代码');
  
  // 微任务
  Future.microtask(() {
    print('3. 微任务执行');
  });
  
  // 事件任务
  Future(() {
    print('4. 事件任务执行');
  });
  
  print('2. 同步代码结束');
  
  // 执行顺序：
  // 1. 开始同步代码
  // 2. 同步代码结束
  // 3. 微任务执行
  // 4. 事件任务执行
}
```

#### 5.1.2 Future 基础

```dart
void main() {
  print('=== Future 基础 ===');
  
  print('程序开始');
  
  // 创建Future
  Future<String> future = Future(() {
    print('开始执行异步任务');
    // 模拟耗时操作
    return '异步任务完成';
  });
  
  // 处理Future结果
  future.then((value) {
    print('成功: $value');
  }).catchError((error) {
    print('错误: $error');
  }).whenComplete(() {
    print('任务完成（无论成功失败）');
  });
  
  print('程序继续执行');
  
  // 输出顺序：
  // 程序开始
  // 程序继续执行
  // 开始执行异步任务
  // 成功: 异步任务完成
  // 任务完成（无论成功失败）
}
```

#### 5.1.3 Future 状态处理

```dart
void main() {
  print('=== Future 状态处理 ===');
  
  // 成功的Future
  Future<String> successFuture = Future(() {
    return '操作成功';
  });
  
  successFuture.then((value) {
    print('成功结果: $value');
  }).catchError((error) {
    print('错误: $error');
  });
  
  // 失败的Future
  Future<String> errorFuture = Future(() {
    throw Exception('发生了错误');
  });
  
  errorFuture.then((value) {
    print('成功结果: $value');
  }).catchError((error) {
    print('错误: $error');
  });
  
  // 延迟执行的Future
  Future.delayed(Duration(seconds: 1), () {
    print('延迟1秒执行');
  });
  
  // 微任务Future
  Future.microtask(() {
    print('微任务执行');
  });
  
  // 立即完成的Future
  Future.value('立即值').then(print);
  Future.error('立即错误').catchError(print);
}
```

### 5.2 Future 高级用法

#### 5.2.1 Future 链式调用

```dart
void main() {
  print('=== Future 链式调用 ===');
  
  print('开始工作流程');
  
  // 模拟用户登录流程
  login('admin', 'password')
    .then((token) {
      print('1. 登录成功，token: $token');
      return getUserInfo(token);
    })
    .then((userInfo) {
      print('2. 获取用户信息: $userInfo');
      return getMessages(userInfo['id']);
    })
    .then((messages) {
      print('3. 获取消息列表: $messages');
      return markMessagesAsRead(messages);
    })
    .then((result) {
      print('4. 消息标记完成: $result');
      print('工作流程完成');
    })
    .catchError((error) {
      print('流程出错: $error');
    })
    .whenComplete(() {
      print('流程执行完毕');
    });
}

// 模拟登录API
Future<String> login(String username, String password) {
  return Future.delayed(Duration(seconds: 1), () {
    if (username == 'admin' && password == 'password') {
      return 'token_123456';
    } else {
      throw Exception('用户名或密码错误');
    }
  });
}

// 模拟获取用户信息
Future<Map<String, dynamic>> getUserInfo(String token) {
  return Future.delayed(Duration(milliseconds: 500), () {
    return {
      'id': 1,
      'name': '张三',
      'email': 'zhangsan@example.com',
      'avatar': 'https://example.com/avatar.jpg'
    };
  });
}

// 模拟获取消息
Future<List<Map<String, dynamic>>> getMessages(int userId) {
  return Future.delayed(Duration(milliseconds: 800), () {
    return [
      {'id': 1, 'title': '欢迎消息', 'content': '欢迎使用我们的应用'},
      {'id': 2, 'title': '系统通知', 'content': '系统即将维护'},
      {'id': 3, 'title': '活动提醒', 'content': '新活动即将开始'},
    ];
  });
}

// 模拟标记消息为已读
Future<bool> markMessagesAsRead(List<Map<String, dynamic>> messages) {
  return Future.delayed(Duration(milliseconds: 300), () {
    print('标记 ${messages.length} 条消息为已读');
    return true;
  });
}
```

#### 5.2.2 多个Future处理

```dart
void main() {
  print('=== 多个Future处理 ===');
  
  // 1. Future.wait - 等待多个Future完成
  print('=== Future.wait ===');
  Future.wait([
    fetchUserData(1),
    fetchUserSettings(1),
    fetchUserNotifications(1),
  ]).then((results) {
    print('所有数据加载完成:');
    print('用户数据: ${results[0]}');
    print('用户设置: ${results[1]}');
    print('用户通知: ${results[2]}');
  }).catchError((error) {
    print('数据加载失败: $error');
  });
  
  // 2. Future.any - 第一个完成的Future
  print('\n=== Future.any ===');
  Future.any([
    delayedFuture('快速服务', 500),
    delayedFuture('标准服务', 1000),
    delayedFuture('慢速服务', 2000),
  ]).then((result) {
    print('第一个完成的服务: $result');
  });
  
  // 3. Future.forEach - 顺序处理集合
  print('\n=== Future.forEach ===');
  List<int> userIds = [1, 2, 3, 4, 5];
  Future.forEach(userIds, (userId) {
    return fetchUserData(userId).then((user) {
      print('加载用户$userId: $user');
    });
  }).then((_) {
    print('所有用户加载完成');
  });
}

// 模拟API调用
Future<Map<String, dynamic>> fetchUserData(int userId) {
  return Future.delayed(Duration(milliseconds: 300), () {
    return {'id': userId, 'name': '用户$userId', 'email': 'user$userId@example.com'};
  });
}

Future<Map<String, dynamic>> fetchUserSettings(int userId) {
  return Future.delayed(Duration(milliseconds: 500), () {
    return {'theme': 'dark', 'language': 'zh-CN', 'notifications': true};
  });
}

Future<List<String>> fetchUserNotifications(int userId) {
  return Future.delayed(Duration(milliseconds: 400), () {
    return ['通知1', '通知2', '通知3'];
  });
}

Future<String> delayedFuture(String name, int delay) {
  return Future.delayed(Duration(milliseconds: delay), () => name);
}
```

### 5.3 async/await

#### 5.3.1 基本用法

```dart
void main() {
  print('开始主程序');
  runAsyncWorkflow();
  print('主程序继续执行');
}

// 使用async/await的异步函数
Future<void> runAsyncWorkflow() async {
  try {
    print('开始异步工作流程');
    
    // await会等待异步任务完成
    String token = await login('admin', 'password');
    print('1. 登录成功，token: $token');
    
    var userInfo = await getUserInfo(token);
    print('2. 获取用户信息: $userInfo');
    
    var messages = await getMessages(userInfo['id']);
    print('3. 获取消息: ${messages.length}条');
    
    var result = await markMessagesAsRead(messages);
    print('4. 消息处理结果: $result');
    
    print('异步工作流程完成');
  } catch (error) {
    print('异步流程出错: $error');
  } finally {
    print('异步流程执行完毕');
  }
}

// 模拟异步函数
Future<String> login(String username, String password) {
  return Future.delayed(Duration(seconds: 1), () {
    if (username == 'admin' && password == 'password') {
      return 'token_123456';
    } else {
      throw Exception('登录失败');
    }
  });
}

Future<Map<String, dynamic>> getUserInfo(String token) {
  return Future.delayed(Duration(milliseconds: 800), () {
    return {'id': 1, 'name': '张三'};
  });
}

Future<List<Map<String, dynamic>>> getMessages(int userId) {
  return Future.delayed(Duration(milliseconds: 600), () {
    return [
      {'id': 1, 'title': '消息1'},
      {'id': 2, 'title': '消息2'},
    ];
  });
}

Future<bool> markMessagesAsRead(List<Map<String, dynamic>> messages) {
  return Future.delayed(Duration(milliseconds: 400), () => true);
}
```

#### 5.3.2 错误处理

```dart
void main() async {
  print('=== async/await 错误处理 ===');
  
  await handleErrors();
  
  // 多个异步任务的错误处理
  await multipleAsyncOperations();
}

Future<void> handleErrors() async {
  try {
    // 可能抛出异常的异步操作
    var result = await riskyOperation();
    print('操作成功: $result');
  } on TimeoutException catch (e) {
    print('超时错误: $e');
  } on FormatException catch (e) {
    print('格式错误: $e');
  } on Exception catch (e) {
    print('一般异常: $e');
  } catch (e) {
    print('未知错误: $e');
  } finally {
    print('错误处理完成');
  }
}

Future<String> riskyOperation() async {
  await Future.delayed(Duration(milliseconds: 500));
  
  // 模拟随机错误
  var random = DateTime.now().millisecond % 3;
  switch (random) {
    case 0:
      throw TimeoutException('请求超时');
    case 1:
      throw FormatException('数据格式错误');
    case 2:
      return '操作成功';
    default:
      return '未知状态';
  }
}

Future<void> multipleAsyncOperations() async {
  try {
    // 顺序执行，一个失败就停止
    var user = await fetchUser(1);
    var posts = await fetchUserPosts(user['id']);
    var comments = await fetchPostComments(posts[0]['id']);
    
    print('所有数据加载成功');
    print('用户: $user');
    print('帖子: ${posts.length}篇');
    print('评论: ${comments.length}条');
  } catch (e) {
    print('数据加载失败: $e');
  }
  
  // 并行执行，独立错误处理
  try {
    var results = await Future.wait([
      fetchUser(1).catchError((e) => '用户加载失败: $e'),
      fetchUserPosts(1).catchError((e) => '帖子加载失败: $e'),
      fetchPostComments(1).catchError((e) => '评论加载失败: $e'),
    ], eagerError: false);
    
    print('并行加载结果: $results');
  } catch (e) {
    print('并行加载出错: $e');
  }
}

Future<Map<String, dynamic>> fetchUser(int id) async {
  await Future.delayed(Duration(milliseconds: 300));
  return {'id': id, 'name': '用户$id'};
}

Future<List<Map<String, dynamic>>> fetchUserPosts(int userId) async {
  await Future.delayed(Duration(milliseconds: 400));
  return [
    {'id': 1, 'title': '帖子1', 'userId': userId},
    {'id': 2, 'title': '帖子2', 'userId': userId},
  ];
}

Future<List<String>> fetchPostComments(int postId) async {
  await Future.delayed(Duration(milliseconds: 500));
  return ['评论1', '评论2', '评论3'];
}
```

### 5.4 实际应用场景

#### 5.4.1 网络请求模拟

```dart
void main() async {
  print('=== 网络请求模拟 ===');
  
  await simulateNetworkRequests();
}

Future<void> simulateNetworkRequests() async {
  final apiService = ApiService();
  
  try {
    // 用户登录
    final user = await apiService.login('user@example.com', 'password123');
    print('登录成功: ${user.name}');
    
    // 获取用户订单
    final orders = await apiService.getUserOrders(user.id);
    print('订单数量: ${orders.length}');
    
    // 获取订单详情（并行）
    final orderDetails = await Future.wait(
      orders.take(3).map((order) => apiService.getOrderDetails(order.id))
    );
    
    print('订单详情加载完成: ${orderDetails.length}个');
    
    // 批量处理
    await apiService.processBatch(orders);
    
  } catch (e) {
    print('请求失败: $e');
  }
}

// 模拟API服务类
class ApiService {
  // 模拟用户登录
  Future<User> login(String email, String password) async {
    print('开始登录请求...');
    await Future.delayed(Duration(seconds: 1));
    
    if (email == 'user@example.com' && password == 'password123') {
      return User(1, '张三', email);
    } else {
      throw Exception('登录失败：邮箱或密码错误');
    }
  }
  
  // 模拟获取用户订单
  Future<List<Order>> getUserOrders(int userId) async {
    print('获取用户$userId的订单...');
    await Future.delayed(Duration(milliseconds: 800));
    
    return [
      Order(1, userId, 299.99, DateTime.now()),
      Order(2, userId, 199.99, DateTime.now().subtract(Duration(days: 1))),
      Order(3, userId, 399.99, DateTime.now().subtract(Duration(days: 2))),
    ];
  }
  
  // 模拟获取订单详情
  Future<OrderDetails> getOrderDetails(int orderId) async {
    print('获取订单$orderId的详情...');
    await Future.delayed(Duration(milliseconds: 500));
    
    return OrderDetails(
      orderId,
      ['商品1', '商品2', '商品3'],
      '已发货',
      DateTime.now().add(Duration(days: 3))
    );
  }
  
  // 模拟批量处理
  Future<void> processBatch(List<Order> orders) async {
    print('开始批量处理${orders.length}个订单...');
    
    // 使用forEach处理每个订单，但保持顺序
    for (var order in orders) {
      try {
        await processSingleOrder(order);
      } catch (e) {
        print('订单${order.id}处理失败: $e');
      }
    }
    
    print('批量处理完成');
  }
  
  Future<void> processSingleOrder(Order order) async {
    await Future.delayed(Duration(milliseconds: 200));
    print('订单${order.id}处理完成');
  }
}

// 数据模型
class User {
  final int id;
  final String name;
  final String email;
  
  User(this.id, this.name, this.email);
}

class Order {
  final int id;
  final int userId;
  final double amount;
  final DateTime orderDate;
  
  Order(this.id, this.userId, this.amount, this.orderDate);
}

class OrderDetails {
  final int orderId;
  final List<String> products;
  final String status;
  final DateTime estimatedDelivery;
  
  OrderDetails(this.orderId, this.products, this.status, this.estimatedDelivery);
}
```

#### 5.4.2 文件操作模拟

```dart
void main() async {
  print('=== 文件操作模拟 ===');
  
  await simulateFileOperations();
}

Future<void> simulateFileOperations() async {
  final fileManager = FileManager();
  
  try {
    // 读取配置文件
    final config = await fileManager.readConfig();
    print('配置文件: $config');
    
    // 写入用户数据
    final userData = {'name': '张三', 'age': 25, 'city': '北京'};
    await fileManager.writeUserData(userData);
    print('用户数据写入成功');
    
    // 批量处理文件
    final results = await fileManager.processMultipleFiles(['file1.txt', 'file2.txt', 'file3.txt']);
    print('文件处理结果: $results');
    
    // 备份操作
    await fileManager.createBackup();
    print('备份创建成功');
    
  } catch (e) {
    print('文件操作失败: $e');
  }
}

// 模拟文件管理类
class FileManager {
  // 模拟读取配置文件
  Future<Map<String, dynamic>> readConfig() async {
    print('读取配置文件中...');
    await Future.delayed(Duration(milliseconds: 400));
    
    return {
      'appName': 'MyApp',
      'version': '1.0.0',
      'settings': {
        'theme': 'dark',
        'language': 'zh-CN',
        'notifications': true
      }
    };
  }
  
  // 模拟写入用户数据
  Future<void> writeUserData(Map<String, dynamic> data) async {
    print('写入用户数据...');
    await Future.delayed(Duration(milliseconds: 600));
    
    // 模拟写入验证
    if (data['name'] == null) {
      throw Exception('用户数据不完整：缺少name字段');
    }
    
    print('用户数据验证通过，写入完成');
  }
  
  // 模拟处理多个文件
  Future<List<String>> processMultipleFiles(List<String> filePaths) async {
    print('开始处理${filePaths.length}个文件...');
    
    // 并行处理文件
    final results = await Future.wait(
      filePaths.map((filePath) => processSingleFile(filePath)),
      eagerError: false
    );
    
    return results;
  }
  
  // 模拟处理单个文件
  Future<String> processSingleFile(String filePath) async {
    print('处理文件: $filePath');
    await Future.delayed(Duration(milliseconds: 300));
    
    // 模拟随机失败
    if (DateTime.now().millisecond % 5 == 0) {
      throw Exception('文件$filePath处理失败');
    }
    
    return '文件$filePath处理成功';
  }
  
  // 模拟创建备份
  Future<void> createBackup() async {
    print('开始创建备份...');
    
    // 模拟多个备份步骤
    await Future.wait([
      backupDatabase(),
      backupUserFiles(),
      backupConfigurations(),
    ]);
    
    print('所有备份任务完成');
  }
  
  Future<void> backupDatabase() async {
    await Future.delayed(Duration(milliseconds: 500));
    print('数据库备份完成');
  }
  
  Future<void> backupUserFiles() async {
    await Future.delayed(Duration(milliseconds: 800));
    print('用户文件备份完成');
  }
  
  Future<void> backupConfigurations() async {
    await Future.delayed(Duration(milliseconds: 300));
    print('配置文件备份完成');
  }
}
```