# 说明

本模板项目, 用于开发类库项目

# 打包说明

1. 使用 rollup 打包, 打包命令: npm run build
2. 内置 typescript
3. 打包入口文件 src/index.ts

# 开发文件

1. 入口文件 src/index.ts, 建议开发内容都在 src 目录下
2. 打包后, 优先检查是否存在 dist/node_modules 目录, 在 rollup.config.js external 配置项中按需排除
