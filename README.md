# 项目

## 项目名称

基于 webpack5 和 TypeScript 建立的 react h5 脚手架

## 项目技术栈说明

webpack5 + TypeScript + React

## 代码规范最佳实践

### eslint

通过配置.eslintrc.\*制定团队代码规范，对于不规范代码提供提醒及自动化修复功能，能够帮助开发者及时更正不符合规范的代码

### prettier

根据规范自动格式化代码，通常与 eslint 搭配使用

### editorconfig

编辑器配置。用于覆盖编辑器默认配置，以确保不同编辑器之间，代码格式的统一

### 规范检查增强（husky + lint-staged）

在 git commit 之前，先强制进行 prettier 格式化，再检查代码规范，若检查不通过，阻止提交

### commitlint 约束

使用 commitlint 约束项目 Git 代码提交描述信息格式规范

### conventional-changelog 生成项目变更日志

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
```
