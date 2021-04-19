+++
author = "CC"
title = "java位运算符"
date = "2021-04-10"
description = "极客时间学习记录"
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

**代码示例**
```java
public class Main {

    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        System.out.println(a / b);
    }
}
```
输出结果为`3`，如果想要得到一个浮点数只需将b改为`double b=3.0`得出的结果为`3.3333333333333335`，因为double是有精度的。

## 比较运算符和布尔运算符 ##
**<font color='blue'>比较运算符</font>**

- \>
- \>=
- \<
- \<=
- \!=
- \==

**<font color='blue'>布尔运算符</font>**

- !叫做<font color='red'>非</font>运算符。<font color='red'>not</font>运算符。!true是false，!false是true。
- &叫做<font color='red'>且</font>运算符。<font color='red'>and</font>运算符。true&true是true，true&false是false。
- &&叫做<font color='red'>且且</font>运算符。<font color='red'>andand</font>运算符。运算结果和&一样
- |叫做<font color='red'>或</font>运算符。<font color='red'>or</font>运算符。true|false是true，false|false是false，true|trues是true.