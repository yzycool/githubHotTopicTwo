FROM node:18.18.2 AS build
# 设置容器内的目录，通常我们会使用 app 目录
WORKDIR /app
# 项目文件拷贝到容器 /app 下
COPY package*.json ./
# 复制自定义的 Nginx 配置文件到容器中
RUN yarn
COPY . .
# 下载依赖包，并构建打包文件
RUN yarn build

# 使用 nginx 镜像
FROM nginx
# 跳转到 nginx 的 80 静态服务对应的目录
WORKDIR /usr/share/nginx/html

# 复制nginx.conf到容器中

COPY default.conf /etc/nginx/conf.d

# 复制打包后的文件到容器中

# 将我们在 node 镜像的打包文件拷贝到这里
COPY --from=build /app/dist .
# 暴露容器的 80 端口
EXPOSE 80