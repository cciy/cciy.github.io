+++
title = 'python协程async和await'
date = "2023-08-30"
description = ""
categories = [
]
tags = [
]
image = ""
tableofcontents = true
draft = false
+++

## 洗衣机例子
```python
import time


def washing1():
    time.sleep(3)  # 第一台洗衣机,
    print('washer1 finished')  # 洗完了


def washing2():
    time.sleep(8)
    print('washer2 finished')


def washing3():
    time.sleep(5)
    print('washer3 finished')


if __name__ == '__main__':
    start_time = time.time()
    washing1()
    washing2()
    washing3()
    end_time = time.time()
    print('总共耗时：{}'.format(end_time-start_time))
```
我们通过函数的方式调用，3个函数，总共耗时16 秒！

这里函数的执行方式是同步运行的，于是这里需要知道一个概念：

** 同步/异步 **

同步：在发出一个同步调用时，在没有得到结果之前，该调用就不返回。
异步：在发出一个异步调用后，调用者不会立刻得到结果，该调用就返回了。
再举个小学生在学校学习的一个案例：
小明同学的妈妈给他早上安排了三件事：
1.洗衣机洗衣服需要花 15 分钟，
2.电饭煲做饭需要花 20 分钟，
3.做作业需要花 25 分钟
那么请问：小明同学早上完成以上三件事需要花多久？？?
这个大家肯定都知道是25分钟，因为在做作业的时候，可以先按下洗衣机和电饭煲的按钮，不用等它完成，洗衣机和电饭煲做好了会发出‘滴滴滴’的声音通知你。

所以这三件事是可以异步完成的，这就是异步的魅力！



## 多个任务执行 asyncio.create_task()
当我们需要3台洗衣机一起来工作，这时候需要创建多个任务，也就是会用到**asyncio.create_task()**
```python
import time
import asyncio


async def washing1():
    time.sleep(3)  # 第一台洗衣机,
    print('washer1 finished')  # 洗完了


async def washing2():
    time.sleep(8)
    print('washer2 finished')


async def washing3():
    time.sleep(5)
    print('washer3 finished')


async def main():
    print('start main:')
    start_time = time.time()
    task1 = asyncio.create_task(washing1())
    task2 = asyncio.create_task(washing2())
    task3 = asyncio.create_task(washing3())
    await task1
    await task2
    await task3
    end_time = time.time()
    print('-----------end main----------')
    print('总共耗时:{}'.format(end_time-start_time))


if __name__ == '__main__':
    # asyncio.run(main())
    loop = asyncio.get_event_loop()  # 创建一个事件循环
    result = loop.run_until_complete(main())  # 将协程对象加入到事件循环中，并执行
```
运行结果：
```cmd
start main:
washer1 finished
washer2 finished
washer3 finished
-----------end main----------
总共耗时:16.000632286071777
```

## await 使用
上面虽然异步执行了三个任务，但是时间并没减少，主要是因为 `time.sleep()` 是阻塞的，需换成异步的
```python
import time
import asyncio


async def washing1():
    await asyncio.sleep(3)  # 第一台洗衣机,
    print('washer1 finished')  # 洗完了


async def washing2():
    await asyncio.sleep(8)
    print('washer2 finished')


async def washing3():
    await asyncio.sleep(5)
    print('washer3 finished')

if __name__ == '__main__':
    print('start main:')
    start_time = time.time()
    # step1 创建一个事件循环
    loop = asyncio.get_event_loop()
    # step2 将异步函数（协程）加入事件队列
    tasks = [
        washing1(),
        washing2(),
        washing3()
    ]
    # step3 执行事件队列 直到最晚的一个事件被处理完毕后结束
    loop.run_until_complete(asyncio.wait(tasks))
    end_time = time.time()
    print('-----------end main----------')
    print('总共耗时:{}'.format(end_time-start_time))
```
这样就可以达到我们的预期，总共耗时是8秒了
```
start main:
washer1 finished
washer3 finished
washer2 finished
-----------end main----------
总共耗时:8.002010822296143
```

```python
import asyncio
import time


async def say_after(delay, what):
    await asyncio.sleep(delay)
    return f"{what} - {delay}"

async  def main():
    print(f"started at {time.strftime('%X')}")
    ret=await asyncio.gather(
        say_after(1,'hello'),
        say_after(2,'world')
    )
    print(ret)

    print(f"finished at {time.strftime('%X')}")

asyncio.run(main())
```
运行结果
``
started at 17:19:56
['hello - 1', 'world - 2']
finished at 17:19:58
``