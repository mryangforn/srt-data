## 简介

数睿通的 vmware centos 虚拟镜像，包含了所有软件运行所需环境，宿主机最好是 16g 内存，8g 内存也可，vmware 版本 15.5.5，版本不同可能会导入失败，导入时选择的镜像存储地址确保剩余空间大于等于 20 g。

关注公众号 螺旋编程极客 发送 数据中台 获取

## 环境介绍

- mysql 8.0.16 用户名/密码 root/?rrq,oq),8cX

- rabbitmq 3.3.5

- redis 4.x

- Java 1.8

## 检查运行环境

systemctl status mysqld

systemctl status redis

systemctl status rabbitmq-server

## 使用方式

- 打开 vmware，左上角-》文件-》打开，即可导入镜像，导入镜像之后，如果宿主机内存大，可以适当调大镜像内存，默认为 8 g

- 打开并运行虚拟镜像，用户名/密码 root/root

- cd /server/deployment/srt-jar/

- 如果电脑内存小于等于 8 g，强烈推荐运行 datax-cloud-pro-only-core-service.sh，不然大概率会内存不足无法启动，电脑卡死等，该脚本只会启动系统必要服务，系统服务以及元数据管理服务

- 运行 ：./datax-cloud-pro-only-core-service.sh start

- 停止： ./datax-cloud-pro-only-core-service.sh stop

- 重启：./datax-cloud-pro-only-core-service.sh restart

- 服务启动完成后，大概需要等 5 分钟的时间才能启动注册完毕，可以去 srt-jar 的 logs 文件夹查看每个服务的启动日志

- 浏览器访问 http://ip:8612 即可

- 用户名/密码 admin/123456



