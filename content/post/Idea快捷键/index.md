+++
author = "CC"
title = "IDEA快捷键For Windows"
date = "2021-04-21"
description = ""
categories = [
"idea",
"java"
]
tags = [
]
image = ""
tableofcontents = false
+++

## IDEA原始PDF文档查看 ##
点击Idea顶部菜单栏中 **<font color='red'>Help</font>** -> **<font color='red'>Keymap Reference</font>**，后出现一个快捷键PDF文档。

### 一、Editing编辑 ###
 **代码补全**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + Space  | 基本的代码补全（类名、方法、变量） | ★★  |
| Ctrl + Shift + Space  | 代码智能补全（类名、方法、变量） | ☆  |
| Ctrl + Shift + Enter  | 智能结束代码 | ☆  |

**显示查看**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + P  | 显示该方法的参数信息（光标放在被调用方法的圆括号内，然后按此快捷键） | ★★★★  |
| Ctrl + Q  | 代码智能补全（类名、方法、变量） | ★  |
| Shift + F1  | 显示外部文档 | ☆  |
| Ctrl +鼠标放在代码上  | 显示基本信息 | ☆  |
| Ctrl + F1  | 在<font color='red'>错误</font>或<font color='red'>警告</font>处显示描述信息 | ☆  |
| Alt + Q  | 显示上下文信息 | ☆  |

**快速生成 / 提示**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Alt + Insert  | 生成代码（Getters, Setters, Constructors,hashCode/equals, toString） | ★★★★  |
| Ctrl + O | 重写方法 | ★  |
| Ctrl + I  | 实现方法 | ★  |
| Ctrl + Alt + T  | 用xxx包围(if..else,try..catch, for,synchronized, 等) | ★★★★ |
| Ctrl + /  | 注释/取消注释，行注释 | ★★★★ |
| Ctrl + Shift + /  | 注释/取消注释，块注释 | ★★★★ |
| Ctrl + W  | 依次递增选中代码块 | ★★ |
| Ctrl + Shift + W  | 减少当前选中的代码块 | ★★ |
| Alt + Enter  | <font color='red'>显示意向动作</font>和<font color='red'>快速修复代码</font> | ★★★ |

**优化（格式化，去除多余，优化import）**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + Alt + L  | 格式化代码 | ★★★★  |
| Ctrl + Alt + O  | 优化 import | ★★★  |
| Ctrl + Alt + I | 自动缩进行 | ★  |
| Tab / Shift + Tab  | 缩进 / 反缩进 选中的代码 | ☆ |

**剪切、复制、粘贴、删除**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl+X/Shift+Delete  | 剪切<font color='red'>当前行</font>或<font color='red'>选定的块</font>到剪贴板 | ★★★★  |
| Ctrl+C/Ctrl+Insert  | 复制<font color='red'>当前行</font>或<font color='red'>选定的块</font>到剪贴板 | ★★★★  |
| Ctrl+V/Shift+Insert  | 从最新<font color='red'>剪贴板</font>粘贴 | ★★★★  |
| Ctrl+ Shift + V  | 选择剪切板最近100条的内容 | ★ |
| Ctrl + D  | 复制粘贴<font color='red'>当前行</font>或<font color='red'>选定的块</font> | ★★★  |
| Ctrl + Y  | 删除<font color='red'>当前行</font>或<font color='red'>选定的块</font> | ★★★  |
| Ctrl + Delete  | 删除到单词的<font color='red'>末尾</font> | ★ |
| Ctrl + Backspace  | 删除到单词的<font color='red'>开头</font> | ★ |

**普通edit操作**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Shift + Enter  | 开始新的一行 | ★★★  |
| Ctrl + Shift + U  | 字母大小写切换 | ★  |
| Ctrl + Shift + ] / \[  | 选择直到代码块<font color='red'>结束</font>/<font color='red'>开始</font> | ★★ |
| Ctrl + Enter | 将代码拆分行 | ☆ |
| Ctrl + <font color='red'>+</font>/<font color='red'>-</font> | <font color='red'>展开</font>/ <font color='red'>折叠</font>代码块 | ★ |
| Ctrl + F4 | 关闭活动的编辑器(editor)选项卡 | ☆ |

### 二、Search/Replace （搜索 / 替换） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| 双击Shift | 查询任何东西(包括文件夹、文件以及字符串) | ★★★★ |
| Ctrl + F | 在当前编辑器里面查询字符串 | ★★★★ |
| Ctrl + Shift + F | 查找该项目中所有字符串 | ★★★★ |
| F3 | 查询下一个 | ★★★★ |
| Shift + F3 | 查询上一个 | ★★★★ |
| Ctrl + R | 替换当前窗口的的字符串 | ★★ |
| Ctrl + Shift + R | 替换当前窗口的的字符串 | ★★ |


### 三、Usage Search （使用点查询，即哪儿使用了这个类/方法/变量） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Alt + F7 | 全局查找使用地点 | ★★★ |
| Ctrl + F7/Ctrl + Shift + F7 | 在文件中查找使用地点/在文件中高亮显示使用地点 | ★★ |
| Ctrl + Alt + F7 | 显示使用地点 | ★★ |

### 四、Compile and Run （编译和运行） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + F9 | 编译项目(编译修改和依赖) | ★ |
| Ctrl + Shift + F9 | 编译选择的文件、包或模块 | ★ |
| Alt + Shift + F10 | 选择配置并run | ★★★ |
| Alt + Shift + F9 | 选择配置并Debug | ★★★ |
| Shift + F10 | run | ★★★★ |
| Shift + F9 | Debug | ★★★★ |
| Ctrl + Shift + F10 | 从编辑器运行上下文配置 | ★★★★ |

### 五、Debugging （调试） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| F8 | 下一步 | ★★★★ |
| F7 | 进入方法内部 | ★★★★ |
| Shift + F8 | 跳出这个方法 | ★★★ |
| Alt + F9 | 运行到光标处（如果光标前有其他断点会进入到该断点） | ★★★ |
| Alt + F8 | 计算表达式（可以更改变量值使其生效） | ★★★ |
| F9 | 恢复程序运行（如果该断点下面代码还有断点则停在下一个断点上） | ★★★ |
| Ctrl + F8 | 切换断点（若光标当前行有断点则取消断点，没有则加上断点） | ★★★ |
| Ctrl + Shift + F8 | 查看断点列表 | ★★★ |
| Shift + F7 | 智能步入（断点所在行上有多个方法调用，会弹出进入哪个方法） | ★ |


### 六、Navigation （导航） ###
**跳转**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + N | 搜索指定类并可以点击跳转 | ★★★★ |
| Ctrl + Shift + N | 搜索指定文件并可以点击跳转 | ★★★★ |
| Ctrl + Alt + Shift + N | 搜索指定文件目标（变量 / 方法）并可以点击跳转 | ★★★★ |
| Ctrl + G | 跳转到指定行 | ★★★★ |
| Ctrl + U | 跳转到父类/ 接口的对应处 | ★★★★ |
| Ctrl + Alt + B | 跳转到当前类的类处 | ★★ |
| Ctrl + Alt + Left/Right | 跳转到上一次 / 下一次操作处 | ★★ |
| Ctrl + Shift + Backspace | 跳转到最后一次编辑处 | ★★ |
| Alt + Up/Down | 跳转到上一个 / 下一个方法名处 | ★★★★ |
| F2 / Shift + F2 | 跳转到下一个 / 上一个高亮错误处 | ★★ |
| Ctrl + \[ / \] | 跳转到当前所在代码块花括号开始 / 结束处 | ★★ |

**弹出**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Ctrl + E | 弹出最近打开的文件列表 | ★★★★ |
| Ctrl + F12 | 弹出文件结构，类似eclipse的outline | ★★★★ |
| Ctrl + H | 弹出类的层次结构（即父类、子类） | ★★ |
| Ctrl + Shift + H | 弹出方法层次结构 | ★★ |
| Ctrl + Alt + H | 弹出调用层次（哪些类调用了此处） | ★★ |
| Ctrl + Alt + I | 弹出方法 / 变量定义预览 | ★★ |

**窗口**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
| Alt + F1 | 选择文件变量或者视图 | ★★★★ |
| F12 | 返回到前一个工具窗口 | ☆ |
| Esc | 跳转到代码编辑窗口（从工具窗口） | ★ |
| Shift + Esc | 隐藏活动窗口或上次活动窗口 | ★ |
| Alt + Right/Left | 在打开的编辑tab页（即.java文件）之间切换 | ★★ |
| Ctrl + Shift +F4	 | 关闭活动的 run/messages/find/... tab页 | ☆ |
| F4 / Ctrl + Enter	 | 编辑 / 查看源代码 | ☆ |
| Alt + Home	 | 显示导航条 | ☆ |

**书签**
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
|F11 | 选中文件/文件夹/代码行，添加/取消书签 | ★ |
|Ctrl + F11 | 选中文件/文件夹/代码行，用助记符切换书签 | ★ |
|Ctrl + #[0-9] | 跳转到对应数值的书签处 | ★ |
|Shift + F11 | 显示所有书签 | ★ |

### 七、Refactoring（重构）###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
|F5 | 复制 | ★ |
|F6 | 移动 | ★ |
|Alt + Delete | 安全删除 | ★ |
|Shift + F6 | 重命名 | ★★★ |
|Ctrl + F6 | 更改签名 | ★ |
|Ctrl + Alt + N | 一致性 | ★ |
|Ctrl + Alt + M | 将选中的代码抽取为方法 | ★ |
|Ctrl + Alt + V | 将选中的代码抽取为变量 | ★ |
|Ctrl + Alt + F | 将选中的代码抽取为字段 | ★ |
|Ctrl + Alt + C| 将选中的代码抽取为常量 | ★ |
|Ctrl + Alt + P | 将选中的代码抽取为参数 | ★ |

### 八、VCS/Local History（版本控制/本地历史记录）###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
|Ctrl + K | 提交代码到版本控制器 | ★★★★★ |
|Ctrl + T | 从版本控制器更新代码 | ★★★★★ |
|Alt + Shift + C | 查看最近的变更记录 | ★★★★★ |
|Alt + `(数字键1旁边的反引号) | 快速弹出版本控制器操作面板 | ★★★★★ |

### 九、Live Templates（动态代码模板） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
|Ctrl + Alt + J | 将选定的代码使用动态模板包住 | ★ |
|Ctrl + J | 插入代码模板 | ★★ |

### 十、General（通用） ###
|  快捷键   | 说明  | 使用频率  |
|  ----  | ---- | ----  |
|Alt + #[0-9] | 打开相应编号的工具窗口 | ☆
|Ctrl + S | 保存所有 | ☆
|Ctrl + Alt + Y | 同步、刷新 | ☆
|Ctrl + Shift + F12 | 切换最大化编辑器 | ★★★★★
|Alt + Shift + F | 添加到收藏夹 | ☆
|Alt + Shift + I | 使用当前配置审查当前文件（代码审查） | ☆
|Ctrl + BackQuote (`，数字键1旁边的反引号) | 快速切换当前的scheme（切换主题、代码样式等） | ☆
|Ctrl + Alt + S | 打开IDEA系统设置窗口 | ☆
|Ctrl + Alt + Shift + S | 打开项目结构对话框 | ☆
|Ctrl + Shift + A | 查找动作 | ☆
|Ctrl + Tab | 编辑窗口标签和工具窗口之间切换（切换器，不同的地方效果不同） | ★★★★★


 博客参考来源:
      [IDEA快捷键For Windows](https://www.jianshu.com/p/043670913610)