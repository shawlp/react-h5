# 项目

## 项目名称

基于 webpack5 和 TypeScript 建立的 react h5 脚手架

## 项目技术栈说明

webpack5 + TypeScript + React

## 文件目录结构

```
.
├── README.md
├── babel.config.js           # babel相关配置
├── build                     # 项目构建相关
│   ├── paths.js
│   ├── webpack.base.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── commitlint.config.js      # commit提交格式配置
├── config                    # 开发环境配置
│   └── index.js
├── dist                      # 打包之后的文件存放处
├── package.json
├── postcss.config.js         # postcss配置
├── src                       # 源文件
│   ├── @types                # ts类型说明文件
│   │   ├── declaration.d.ts
│   │   ├── global.d.ts
│   │   └── route.d.ts
│   ├── App.less
│   ├── App.tsx
│   ├── asserts               # 存放共有的静态资源
│   │   └── images
│   ├── components            # 页面共有的组件
│   │   └── error-boundary
│   │       └── index.tsx
│   ├── hooks                 # react hooks
│   ├── index.tsx             # entry point
│   ├── routes                # router config
│   │   ├── config.ts
│   │   └── index.tsx
│   ├── service               # 接口请求相关
│   │   └── request.ts
│   ├── utils                 # 工具类方法
│   │   └── tool.ts
│   └── views                 # 页面组件
│       └── home
│           ├── index.less
│           └── index.tsx
├── static                    # 项目的静态资源，模板
│   ├── favicon.svg
│   ├── index.html
│   └── js
│       └── fastclick.min.js
├── tsconfig.json             # ts配置文件

```

## 项目脚本

```bash
init project: npm run init

bootstrap project: npm run start

build project: npm run build

analyze project: npm run analyze
``
```
