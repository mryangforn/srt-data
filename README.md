# 关于

- 该系统基于智数通项目进行扩展开发，链接：https://gitee.com/LuckyFishSpace/datax-cloud?_from=gitee_search
  主要修复了原系统存在的问题：如首次启动服务之间调用过慢，数据服务 API 初始化无效，各模块删除操作缺乏关联校验，可视化模块回显和保存异常，工作流缓存无效等，同时优化了前台部分模块的属性显示，丰富了元数据的同步方式，支持手动执行数据质量检测等。
- 这是一款为数据治理而生的企业一站式数据中台，采用微服务云原生技术，富含各类开箱即用的组件，提供了统一的元数据采集和维护入口，支持常见的数据库元数据采集，用来帮助构建企业数据资产目录和数据安全体系；数据质量模块可以定时对数据质量进行管控；通过数据 api 模块，可以为各业务系统提供数据检索查询服务，实现数据赋能；可视化模块无需搭配任何开发工具，简单拖拽组合，便可以完成复杂的数据分析任务，以看板，酷屏的方式展现。
- 系统采用 SpringCloud 微服务框架开发，模块划分明确，灵活可拓展，可应对高并发场景需求，兼顾本地，私有，公有云部署
- 支持虚拟机，docker 一键部署

# 主要技术栈

## 后端技术栈

- 开发框架：Spring Boot 2.3
- 微服务框架：Spring Cloud Hoxton.SR9
- 安全框架：Spring Security + Spring OAuth 2.0
- 任务调度：Quartz
- 持久层框架：MyBatis Plus
- 数据库连接池：Hikaricp
- 服务注册与发现: Spring Cloud Config
- 客户端负载均衡：Ribbon
- 熔断组件：Hystrix
- 网关组件：Spring Cloud Gateway
- 消息队列：Rabbitmq
- 缓存：Redis
- 日志管理：Logback
- 运行容器：Undertow
- 工作流: Flowable 6.5.0

## 前端技术栈

- JS框架：Vue、nodejs
- CSS框架：sass
- 组件库：ElementUI
- 打包构建工具：Webpack

# 功能一览

- 平台基础设置
  - 系统管理
    - 岗位管理：配置系统用户所属担任职务。
    - 部门管理：配置系统组织机构，树结构展现支持数据权限。
    - 菜单管理：配置系统菜单，操作权限，按钮权限标识等。
    - 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
    - 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
    - 参数管理：对系统动态配置常用参数。
    - 字典管理：对系统中经常使用的一些较为固定的数据进行维护。
  - 系统监控
    - 登录日志：系统登录日志记录查询。
    - 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
  - 任务调度
    - 任务管理：在线（添加、修改、删除)任务调度。
    - 日志管理：任务调度执行结果日志。
- 元数据管理
  - 数据源：数据源连接信息管理，可生成数据库文档。
  - 元数据：数据库表的元数据信息管理。
  - 数据授权：设置元数据信息权限划分。
  - 变更记录：元数据信息变更记录信息管理。
  - 数据检索：数据源、数据表、元数据等信息查询。
  - 数据地图：元数据的隶属数据表、数据库的图形展示。
  - SQL工作台：在线执行查询sql。
- 数据标准管理
  - 标准字典：国标数据维护。
  - 对照表：本地数据中需要对照标准的数据维护。
  - 字典对照：本地数据与国标数据的对照关系。
  - 对照统计：本地数据与国标数据的对照结果统计分析。
- 数据质量管理
  - 规则配置：数据质量规则配置。
  - 问题统计：数据质量规则统计。
  - 质量报告：数据质量结果统计分析。
  - 定时任务：数据质量定时任务。
  - 任务日志：数据质量定时任务日志。
- 主数据管理
  - 数据模型：主数据数据模型维护。
  - 数据管理：主数据数据管理。
- 数据集市管理
  - 数据服务：动态开发api数据服务，可生成数据服务文档。
  - 数据脱敏：api数据服务返回结果动态脱敏。
  - 接口日志：api数据服务调用日志。
  - 服务集成：三方数据服务集成管理。
  - 服务日志：三方数据服务集成调用日志。
- 可视化管理
  - 数据集：基于sql的查询结果维护。
  - 图表配置：动态echarts图表配置，支持多维表格、折线、柱状、饼图、雷达、散点等多种图表。
  - 看板配置：拖拽式添加图表组件，调整位置、大小。
  - 酷屏配置：拖拽式添加图表组件，调整背景图、颜色、位置、大小。
- 流程管理
  - 流程定义：流程定义管理。
  - 流程实例
    - 运行中的流程：运行中的流程实例管理。
    - 我发起的流程：我发起的流程实例管理。
    - 我参与的流程：我参与的流程实例管理。
  - 流程任务
    - 待办任务：待办任务管理。
    - 已办任务：已办任务管理。
  - 业务配置：配置业务系统与流程的相关属性。

# 模块导航

```
datax-cloud-pro -- 后端工程
├── datax-ui-pro -- 前端工程[9528]
├── datax-eureka -- 注册中心[8610]
├── datax-config -- 配置中心[8611]
├── datax-gateway -- Spring Cloud Gateway网关[8612]
├── datax-auth -- 授权服务提供[8613]
├── datax-common -- 系统公共模块
├    ├── datax-common-core -- 公共工具类核心包
├    ├── datax-common-database -- 数据库相关工具类包
├    ├── datax-common-log -- 日志服务类包
├    ├── datax-common-mybatis -- 数据源类包
├    ├── datax-common-office -- word工具类包
├    ├── datax-common-rabbitmq -- rabbitmq消息队列类包
├    ├── datax-common-redis -- redis类包
├    ├── datax-common-security -- 安全工具类包
├── datax-modules -- 业务模块
├    ├── codegen-service-parent -- 后端代码生成管理模块[8830]
├    ├── data-market-service-parent -- 数据集市管理模块[8822]
├    ├── data-masterdata-service-parent -- 主数据管理模块[8828]
├    ├── data-metadata-service-parent -- 元数据管理模块[8820]
├    ├── data-quality-service-parent -- 数据质量管理模块[8826]
├    ├── data-standard-service-parent -- 数据标准管理模块[8825]
├    ├── data-visual-service-parent -- 可视化管理模块[8827]
├    ├── email-service-parent -- 邮件管理模块[8812]
├    ├── file-service-parent -- 文件管理模块[8811]
├    ├── quartz-service-parent -- 定时任务管理模块[8813]
├    ├── system-service-parent -- 平台基础设置管理模块[8810]
├    ├── workflow-service-parent -- 流程管理模块[8814]
└── datax-tools -- 图形化模块
├    ├── datax-tool-monitor -- Spring Boot Admin监控 [8711]
```

# 部署方式

数据库版本为 **mysql5.7** 及以上版本

依次创建以下数据库：
**data_cloud**
**data_cloud_flowable**
**data_cloud_quartz**
**foodmart2**
**robot**
字符集：**utf8mb4**
排序规则：**utf8mb4_general_ci**

数据库创建完毕，导入 db 文件夹下的 **sql** 脚本 即可完成数据库初始化

修改 **datax-config** 配置中心 **config** 文件夹下的配置文件，把 **redis**，**mysql** 和 **rabbitmq** 的配置信息改成自己的

把系统导入 **idea** 中，等待 **maven** 依赖下载完毕，在项目根目录下执行 **mvn install**，**install**  完毕后可以获取到各个模块的 **jar** 包，上传到服务器的同一个文件夹，**依次执行**即可，部署脚本在 **sh** 目录下，内容如下（服务较多，一台服务器内存可能不够用，可考虑分开部署，自行修改脚本）：

```sh
#!/bin/sh
# eureka 注册中心
dataxEureka=./datax-eureka.jar
# config 配置中心
dataxConfig=./datax-config.jar
# gateway 网关
dataxGateway=./datax-gateway.jar
# oauth2 认证服务
dataxAuth=./datax-auth.jar
# 系统服务
systemService=./system-service.jar
# 任务调度服务
quartzService=./quartz-service.jar
# 工作流服务
workflowService=./workflow-service.jar
# 元数据服务
metadataService=./data-metadata-service.jar
# 元数据 sql 控制台服务
metadataConsoleService=./data-metadata-service-console.jar
# 数据标准服务
standardService=./data-standard-service.jar
# 数据质量服务
qualityService=./data-quality-service.jar
# 数据集市数据集服务
marketService=./data-market-service.jar
# 数据集市接口映射服务
marketServiceMapping=./data-market-service-mapping.jar
# 数据集市数据集成服务
marketServiceIntegration=./data-market-service-integration.jar
# 主数据服务
masterdataService=./data-masterdata-service.jar
# 可视化服务
visualService=./data-visual-service.jar
case "$1" in
start)
    echo "--------dataxEureka 开始启动--------------"
    nohup java -jar $dataxEureka >/dev/null 2>&1 &
    dataxEurekaPid=`ps -ef|grep $dataxEureka |grep -v grep|awk '{print $2}'`
    until [ -n "$dataxEurekaPid" ]
      do
       dataxEurekaPid=`ps -ef|grep $dataxEureka |grep -v grep|awk '{print $2}'`
      done
    echo "dataxEurekaPid is $dataxEurekaPid"
    echo "--------dataxEureka 启动成功--------------"
    sleep 30

    echo "--------dataxConfig 开始启动--------------"
    nohup java -jar $dataxConfig >/dev/null 2>&1 &
    dataxConfigPid=`ps -ef|grep $dataxConfig |grep -v grep|awk '{print $2}'`
    until [ -n "$dataxConfigPid" ]
      do
       dataxConfigPid=`ps -ef|grep $dataxConfig |grep -v grep|awk '{print $2}'`
      done
    echo "dataxConfigPid is $dataxConfigPid"
    echo "--------dataxConfig 启动成功--------------"
    sleep 30

    echo "--------dataxGateway 开始启动--------------"
    nohup java -jar $dataxGateway >/dev/null 2>&1 &
    dataxGatewayPid=`ps -ef|grep $dataxGateway |grep -v grep|awk '{print $2}'`
    until [ -n "$dataxConfigPid" ]
      do
       dataxGatewayPid=`ps -ef|grep $dataxGateway |grep -v grep|awk '{print $2}'`
      done
    echo "dataxGatewayPid is $dataxGatewayPid"
    echo "--------dataxGateway 启动成功--------------"
    sleep 30

    echo "--------dataxAuth 开始启动--------------"
    nohup java -jar $dataxAuth >/dev/null 2>&1 &
    dataxAuthPid=`ps -ef|grep $dataxAuth |grep -v grep|awk '{print $2}'`
    until [ -n "$dataxAuthPid" ]
      do
       dataxAuthPid=`ps -ef|grep $dataxAuth |grep -v grep|awk '{print $2}'`
      done
    echo "dataxAuthPid is $dataxAuthPid"
    echo "--------dataxAuth 启动成功--------------"

    echo "--------systemService 开始启动--------------"
    nohup java -jar $systemService >/dev/null 2>&1 &
    systemServicePid=`ps -ef|grep $systemService |grep -v grep|awk '{print $2}'`
    until [ -n "$systemServicePid" ]
      do
       systemServicePid=`ps -ef|grep $systemService |grep -v grep|awk '{print $2}'`
      done
    echo "systemServicePid is $systemServicePid"
    echo "--------systemService 启动成功--------------"

    echo "--------quartzService 开始启动--------------"
    nohup java -jar $quartzService >/dev/null 2>&1 &
    quartzServicePid=`ps -ef|grep $quartzService |grep -v grep|awk '{print $2}'`
    until [ -n "$quartzServicePid" ]
      do
       quartzServicePid=`ps -ef|grep $quartzService |grep -v grep|awk '{print $2}'`
      done
    echo "quartzServicePid is $quartzServicePid"
    echo "--------quartzService 启动成功--------------"

    echo "--------workflowService 开始启动--------------"
    nohup java -jar $workflowService >/dev/null 2>&1 &
    workflowServicePid=`ps -ef|grep $workflowService |grep -v grep|awk '{print $2}'`
    until [ -n "$workflowServicePid" ]
      do
       workflowServicePid=`ps -ef|grep $workflowService |grep -v grep|awk '{print $2}'`
      done
    echo "workflowServicePid is $workflowServicePid"
    echo "--------workflowService 启动成功--------------"

    echo "--------metadataService 开始启动--------------"
    nohup java -jar $metadataService >/dev/null 2>&1 &
    metadataServicePid=`ps -ef|grep $metadataService |grep -v grep|awk '{print $2}'`
    until [ -n "$metadataServicePid" ]
      do
       metadataServicePid=`ps -ef|grep $metadataService |grep -v grep|awk '{print $2}'`
      done
    echo "metadataServicePid is $metadataServicePid"
    echo "--------metadataService 启动成功--------------"

    echo "--------metadataConsoleService 开始启动--------------"
    nohup java -jar $metadataConsoleService >/dev/null 2>&1 &
    metadataConsoleServicePid=`ps -ef|grep $metadataConsoleService |grep -v grep|awk '{print $2}'`
    until [ -n "$metadataConsoleServicePid" ]
      do
       metadataConsoleServicePid=`ps -ef|grep $metadataConsoleService |grep -v grep|awk '{print $2}'`
      done
    echo "metadataConsoleServicePid is $metadataConsoleServicePid"
    echo "--------metadataConsoleService 启动成功--------------"

    echo "--------standardService 开始启动--------------"
    nohup java -jar $standardService >/dev/null 2>&1 &
    standardServicePid=`ps -ef|grep $standardService |grep -v grep|awk '{print $2}'`
    until [ -n "$standardServicePid" ]
      do
       standardServicePid=`ps -ef|grep $standardService |grep -v grep|awk '{print $2}'`
      done
    echo "standardServicePid is $standardServicePid"
    echo "--------standardService 启动成功--------------"

    echo "--------qualityService 开始启动--------------"
    nohup java -jar $qualityService >/dev/null 2>&1 &
    qualityServicePid=`ps -ef|grep $qualityService |grep -v grep|awk '{print $2}'`
    until [ -n "$qualityServicePid" ]
      do
       qualityServicePid=`ps -ef|grep $qualityService |grep -v grep|awk '{print $2}'`
      done
    echo "qualityServicePid is $qualityServicePid"
    echo "--------qualityService 启动成功--------------"

    echo "--------marketService 开始启动--------------"
    nohup java -jar $marketService >/dev/null 2>&1 &
    marketServicePid=`ps -ef|grep $marketService |grep -v grep|awk '{print $2}'`
    until [ -n "$marketServicePid" ]
      do
       marketServicePid=`ps -ef|grep $marketService |grep -v grep|awk '{print $2}'`
      done
    echo "marketServicePid is $marketServicePid"
    echo "--------marketService 启动成功--------------"
	sleep 30

    echo "--------marketServiceMapping 开始启动--------------"
    nohup java -jar $marketServiceMapping >/dev/null 2>&1 &
    marketServiceMappingPid=`ps -ef|grep $marketServiceMapping |grep -v grep|awk '{print $2}'`
    until [ -n "$marketServiceMappingPid" ]
      do
       marketServiceMappingPid=`ps -ef|grep $marketServiceMapping |grep -v grep|awk '{print $2}'`
      done
    echo "marketServiceMappingPid is $marketServiceMappingPid"
    echo "--------marketServiceMapping 启动成功--------------"

    echo "--------marketServiceIntegration 开始启动--------------"
    nohup java -jar $marketServiceIntegration >/dev/null 2>&1 &
    marketServiceIntegrationPid=`ps -ef|grep $marketServiceIntegration |grep -v grep|awk '{print $2}'`
    until [ -n "$marketServiceIntegrationPid" ]
      do
       marketServiceIntegrationPid=`ps -ef|grep $marketServiceIntegration |grep -v grep|awk '{print $2}'`
      done
    echo "marketServiceIntegrationPid is $marketServiceIntegrationPid"
    echo "--------marketServiceIntegration 启动成功--------------"

    echo "--------masterdataService 开始启动--------------"
    nohup java -jar $masterdataService >/dev/null 2>&1 &
    masterdataServicePid=`ps -ef|grep $masterdataService |grep -v grep|awk '{print $2}'`
    until [ -n "$masterdataServicePid" ]
      do
       masterdataServicePid=`ps -ef|grep $masterdataService |grep -v grep|awk '{print $2}'`
      done
    echo "masterdataServicePid is $masterdataServicePid"
    echo "--------masterdataService 启动成功--------------"

    echo "--------visualService 开始启动--------------"
    nohup java -jar $visualService >/dev/null 2>&1 &
    visualServicePid=`ps -ef|grep $visualService |grep -v grep|awk '{print $2}'`
    until [ -n "$visualServicePid" ]
      do
       visualServicePid=`ps -ef|grep $visualService |grep -v grep|awk '{print $2}'`
      done
    echo "visualServicePid is $visualServicePid"
    echo "--------visualService 启动成功--------------"
;;
stop)
    P_ID=`ps -ef|grep $dataxEureka |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===dataxEureka process not exists or stop success"
    else
      kill -9 $P_ID
      echo "dataxEureka killed success"
    fi

    P_ID=`ps -ef|grep $dataxConfig |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===dataxConfig process not exists or stop success"
    else
      kill -9 $P_ID
      echo "dataxConfig killed success"
    fi

    P_ID=`ps -ef|grep $dataxGateway |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===dataxGateway process not exists or stop success"
    else
      kill -9 $P_ID
      echo "dataxGateway killed success"
    fi

    P_ID=`ps -ef|grep $dataxAuth |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===dataxAuth process not exists or stop success"
    else
      kill -9 $P_ID
      echo "dataxAuth killed success"
    fi

    P_ID=`ps -ef|grep $systemService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===systemService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "systemService killed success"
    fi

    P_ID=`ps -ef|grep $quartzService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===quartzService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "quartzService killed success"
    fi

    P_ID=`ps -ef|grep $workflowService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===workflowService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "workflowService killed success"
    fi

    P_ID=`ps -ef|grep $metadataService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===metadataService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "metadataService killed success"
    fi

    P_ID=`ps -ef|grep $metadataConsoleService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===metadataConsoleService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "metadataConsoleService killed success"
    fi

    P_ID=`ps -ef|grep $standardService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===standardService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "standardService killed success"
    fi

    P_ID=`ps -ef|grep $qualityService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===qualityService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "qualityService killed success"
    fi

    P_ID=`ps -ef|grep $marketService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===marketService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "marketService killed success"
    fi

    P_ID=`ps -ef|grep $marketServiceMapping |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===marketServiceMapping process not exists or stop success"
    else
      kill -9 $P_ID
      echo "marketServiceMapping killed success"
    fi

    P_ID=`ps -ef|grep $marketServiceIntegration |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===marketServiceIntegration process not exists or stop success"
    else
      kill -9 $P_ID
      echo "marketServiceIntegration killed success"
    fi

    P_ID=`ps -ef|grep $masterdataService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===masterdataService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "masterdataService killed success"
    fi

    P_ID=`ps -ef|grep $visualService |grep -v grep|awk '{print $2}'`
    if [ "$P_ID" == "" ]; then
      echo "===visualService process not exists or stop success"
    else
      kill -9 $P_ID
      echo "visualService killed success"
    fi
;;
restart)
    $0 stop
    sleep 10
    $0 start
    echo "===restart success==="
;;
esac
exit 0
```

启动：datx-cloud-pro.sh start

关闭：datx-cloud-pro.sh stop

重启：datx-cloud-pro.sh restart

用户名：admin

密码：123456

# 系统截图

![登录](image/登录.png)

![数据源](image/数据源.png)

![数据源详情](image/数据源详情.png)

![元数据](image/元数据.png)

![数据地图](image/数据地图.png)

![sql工作台](image/sql工作台.png)

![标准字典](image/标准字典.png)

![字典对照](image/字典对照.png)

![规则配置](image/规则配置.png)

![问题统计](image/问题统计.png)

![质量报告](image/质量报告.png)

![数据模型](image/数据模型.png)

![数据管理](image/数据管理.png)

![数据集](image/数据集.png)

![数据服务](image/数据服务.png)

![接口调用](image/接口调用.png)

![数据集](image/数据集.png)

![图表配置](image/图表配置.png)

![图表预览](image/图表预览.png)

![看板预览](image/看板预览.png)

![酷屏预览](image/酷屏预览.png)

![流程定义](image/流程定义.png)

![流程图](image/流程图.png)

![我参与的流程](image/我参与的流程.png)

![已办任务](image/已办任务.png)

# 帮助

如有问题可关注公众号 **螺旋编程极客** 交流，共同学习进步。
