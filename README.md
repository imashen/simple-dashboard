# 预览图
![](https://github.com/imashen/simple-dashboard/blob/main/preview.png?raw=true)
# 部署与使用
### 克隆或下载项目
`git clone https://github.com/imashen/simple-dashboard.git`
> 如果没有 Git，可以选择从 GitHub 页面上下载 ZIP 文件并解压缩到本地文件夹。
### 安装依赖
进入项目目录，使用 `npm` 或 `yarn` 安装项目依赖。例如，如果你使用 npm，运行：
`npm install`
### 配置项目
`/src/config/index.js` 为后端api对应的配置文件
`/public/conf.yml` 为前端展示内容对应的配置文件 
请自行修改
### 运行项目（非必须）
`npm run serve`
打开浏览器并访问 `http://localhost:8080/` 或终端提示的端口查看仪表板
> 这一步可以提前预览到将生成的静态文件是什么样子，方便修改，为非必须步骤
### 构建项目
`npm run build`
通过build步骤，目录下将生成 `dist` 文件夹，其中均为静态资源文件，可直接部署在服务器和静态托管网站上

本项目基于`Apache 2.0` 许可证，欢迎大家学习交流，当作启蒙项目也是不错的
