+++
author = "CC"
title = "java位运算符"
date = "2021-04-10"
description = ""
categories = [
"java"
]
tags = [
]
image = ""
tableofcontents = true
+++

## 什么是位运算符 ##

- 位运算符对一个或者多个值进行计算，并得出一个计算结果。
- 位运算符的运算结果类型有的是固定的，会根据被计算的值变化。比如两个int相加，结果类型就是int。两个byte相加，返回值就是byte。
- **混淆点**：除了赋值运算符外，运算符本身不会更改变量的值

**代码示例**
```java
public class Main {
    public static void main(String[] args) {
        int a = 100;
        System.out.println(a + 1);
        System.out.println(a);
        a=a+6;
        System.out.println(a);
    }
}
```
输出结果为：`101 100 106`

## 取模运算符：<font color='red'>%</font> ##

- 用来计算余数
- 负数也可以取模
- 负数也可以被取模
- 小数也可以取模

**代码示例**
```java
public class Main {

    public static void main(String[] args) {
        int num = 10;
        System.out.println(num % 2);
        System.out.println(num % -3);
        System.out.println(num % 4);
        System.out.println(num % 5);
        System.out.println(num % -6);
    }
}
```
输出结果为：`0 1 2 0 4`

## 整数的除法运算 ##
int除以int还是int，不会变成浮点数

