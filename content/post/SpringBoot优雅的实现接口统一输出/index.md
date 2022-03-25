+++
author = "CC"
title = "SpringBoot优雅的实现接口统一输出"
date = "2021-07-22"
description = "SpringBoot通过拦截器和注解的方式实现接口的统一返回"
categories = [
"Spring",
"SpringBoot"
]
tags = [
]
image = ""
tableofcontents = true
draft = false
+++

### 1、注解类ResponeResult
如下代码实现注解ResponeResul
```java
package com.example.springcs.annotation;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE,ElementType.METHOD})
@Documented
public @interface ResponeResult {
    
}

```
### 2、返回枚举的实现
```java
package com.example.springcs.utils;

public enum EnumCode {

    SUCCESS(20000, "success"),
    REDIRECT(10000, "success"),
    NOAD(20001, "no ad exists"),
    ERR_HTTP(40000, "http content-type error"),
    ERR_APP_NULL(40001, "app info is required"),
    ERR_APP_INFO(40002, "invalid app info"),
    ERR_ADCODE_NULL(40003, "ad code is required"),
    ERR_ADTYPE_NULL(40004, "ad type is required"),
    ERR_SCHE_NULL(40005, "scheduler not exist"),
    ERR_UAD_REPEAT(40006, "user ad repeated"),
    ERR_PLATFORM_NULL(40007, "platform config not exist"),
    ERR_REQ_CONTENT_DEFECT(40009, "request content data defect"),
    ERR_UNKNOWN_TOKEN(40010, "unknown token"),
    ERR_SIGNATURE(40011, "signature error"),
    ERR_BLACKLIST(40012, "user blocked by blacklist"),
    ERR_SERVER(50001, "server error"),
    ERR_DATA(50002, "data error"),
    ERR_TIMEOUT(50003, "request ad server timeout"),
    ERR_ANTI_CHEAT(50004, "user blocked by anti cheat"),
    ERR_UNKNOWN(50005, "unknown error"),
    ERR_MATERIAL_RULES(50006, "ad material blocked"),
    ERR_MATERIAL_UNAPPROVED(50007, "ad material is unapproved"),
    ERR_MATERIAL_FILTERED(50008, "ad material are filtered"),
    ERR_MATERIAL_AUDITED(50009, "ad material are audited"),
    ERROR_PARAM(60001, "param error"),
    ERROR_ACCESS(60002, "access error");


    private Integer code;
    private String msg;

    private EnumCode(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

}
```
### 3、返回类Result ###
```java
package com.example.springcs.utils;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result implements Serializable {
    private Integer code;
    private String msg;
    private Object data;

    public Result(EnumCode enumErrorCode, Object data) {
        this.code = enumErrorCode.getCode();
        this.msg = enumErrorCode.getMsg();
        this.data = data;
    }

    public static Result success(Object data) {
        return new Result(EnumCode.SUCCESS, data);
    }

    public static Result failure(EnumCode enumErrorCode, Object data) {
        return new Result(enumErrorCode, data);
    }
}

```

### 4、新建Spring拦截器 ###

4.1、通过实现**HandlerInterceptor**接口将请求的url代码入下:
```java
package com.example.springcs.interceptor;

import com.example.springcs.annotation.ResponeResult;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;

@Component
public class ResponseResultInterceptor implements HandlerInterceptor {
    public static final String RESPONSE_RESULT_ANN = "RESPONSE-RESULT-ANN";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
           //请求方法
        if (handler instanceof HandlerMethod) {
            final HandlerMethod handlerMethod = (HandlerMethod) handler;
            final Class<?> clazz = handlerMethod.getBeanType();
            final Method method = handlerMethod.getMethod();
             //判断是否在类对象上加上注解
            if (clazz.isAnnotationPresent(ResponeResult.class)) {
                request.setAttribute(RESPONSE_RESULT_ANN, clazz.getAnnotation(ResponeResult.class));
            } else if(method.isAnnotationPresent(ResponeResult.class)) {
                request.setAttribute(RESPONSE_RESULT_ANN, method.getAnnotation(ResponeResult.class));
            }
        }
        return true;    
    }
}

```
4.2、通过实现**WebMvcConfigurer**方法将所自己实现的**ResponseResultInterceptor**加入到Spring的拦截器中代码如下:
```java
package com.example.springcs.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Resource
    private ResponseResultInterceptor loginInterceptor;

    /**
     * 注册自定义拦截器
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        InterceptorRegistration interceptorRegistration = registry.addInterceptor(loginInterceptor);
        //可以设置多个路径拦截，我设置的是拦截全部
        interceptorRegistration.addPathPatterns("/**");
    }
}
```

### 5、重写返回类 ###
下面代码就是判断是否需要返回值包装，如果需要就直接包装。
```java
package com.example.springcs.handler;

import com.example.springcs.annotation.ResponeResult;
import com.example.springcs.utils.Result;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResponseResultHandler implements ResponseBodyAdvice<Object> {
    public static final String RESPONSE_RESULT_ANN = "RESPONSE-RESULT-ANN";

    @Override
    public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
        ServletRequestAttributes sra = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = sra.getRequest();
        //判断请求是否有包装标记
        ResponeResult responeResult = (ResponeResult) request.getAttribute(RESPONSE_RESULT_ANN);
        return responeResult != null;
    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType, Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {
        return Result.success(body);
    }
}
```
### 6、写测试controller ###
```java
package com.example.springcs.controller;

import com.example.springcs.annotation.ResponeResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponeResult
public class TestController {

    @RequestMapping("/test")
    @ResponseBody
    public int test() {
        return 1;
    }
}
```