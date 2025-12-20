# 快速开始

> Wildpig暂不适合在生产环境中使用（还需经过时间的检验），仅用于开发和测试。

## 0. 克隆项目

先安装git，用命令将项目克隆到本地。

```bash
git clone https://github.com/Eriktse/wildpig-starter.git
```

如果网络环境不佳，可以考虑使用github加速镜像。

## 1. 安装bun

Wildpig 基于 Bun 运行，因此您需要先安装 Bun。请根据您的操作系统按照 [Bun 官方文档](https://bun.sh/docs/installation) 进行安装。

## 2. 安装依赖

在项目根目录下运行以下命令安装依赖：

```bash
bun install
```

## 3. 启动项目

在项目根目录下运行以下命令启动项目：

```bash
bun run dev
```

## 4. 访问项目

在浏览器中访问 `http://localhost:3000` 即可查看项目。

您可以在项目根目录下创建`.env`文件，并在其中配置端口和主机名，例如：

```bash
PORT=3000
HOST=localhost
```

## 5. 构建项目

在项目根目录下运行以下命令构建项目：

```bash
bun run build
```

## 6. 启动生产环境

在项目根目录下运行以下命令启动生产环境：

```bash
bun run start
```

# 框架结构

## src 目录

src 目录是主要的代码文件，大量的开发工作将在这里进行。

### App.tsx

客户端与服务端渲染的共同入口文件，用于衔接服务端渲染和客户端渲染，一般情况下无需改动。

### page目录

page目录下存放所有客户端的代码，主要是各种react组件，注意这些组件在生产模式下会被服务端渲染，请确保所有客户端操作（例如对document, window, localstorage等的操作）都存在在useEffect钩子，或其他的客户端事件处理函数中。

### api目录

api目录下的所有命名为"index.ts"的文件，会被自动识别为api路由。

例如，api目录下有一个名为"hello.ts"的文件，那么它的路由路径就是"/api/hello"。

api目录支持动态路由（带参数的路由），参数通过"[id]"的形式传递，但注意不要将参数路由与固定路由混用，可能导致路由冲突，路由参数在服务端通过`request.params`来获取。

例如，我想要写一个路由为"/api/hello/:id"的文件，那么他的文件路径是"/api/hello/[id]/index.ts"。

在api文件中，支持导出GET, POST两个函数（非默认导出），分别表示GET和POST请求（咱不支持其他类型，其实这两种请求类型已经够够的了）。

具体可见本项目文件示例。

### api/middleware.ts

这个文件将包裹所有的api请求，可以在这里做一些中间件，例如拦截器、过滤器等等。

当然，你可以方便地在这里加上CORS，或方便地更新用户Cookie。

例如我要给所有响应都加上CORS头，我可以这样写：

```typescript
export const middleware = async (req: Request, next: (req: Request) => Promise<Response>) => {
    // 你可以在这里进行一些鉴权操作，或者是改造所有的接口参数

    const response = await next(req);

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
}
```

### src/router/routes.ts

这个文件定义了路由，路由文件支持动态路由，必须默认导出，他会被服务端和客户端同时利用。

其中每个组件的serverDataApi表示进入该页面时，会用GET请求调用该接口，将返回值放入`serverDataStore`，以供组件使用。

例如：

```typescript
import { NotFound } from "@/page/404";
import { Welcome } from "@/page/welcome";
import { WildPigRouteObject } from "wildpig/router/types";

export default [
    {
        path: "/",
        // 注意，当访问"/"时，不会调用这个接口
        // 而是会去调用路由的终端节点（即没有children的节点）的serverDataApi
        serverDataApi: "/api/server-data/index", 
        children: [
            {
                index: true,
                Component: Welcome,
                serverDataApi: "/api/server-data/welcome"
            }
        ]
    },
    {
        path: "*",
        Component: NotFound,
        serverDataApi: "/api/server-data/404"
    }
] as WildPigRouteObject[];
```

### 更多钩子开发中

计划开发的钩子：

- afterServerStart: 服务器启动并监听端口后调用