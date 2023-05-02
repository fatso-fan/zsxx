## 推荐IDE

推荐使用 [VS Code](https://code.visualstudio.com/)，并进行如下的配置。

### 必须安装的插件

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)，Vue 官方发布；
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，Microsoft 微软官方发布。

### 推荐安装的插件

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)，Tailwind Labs 官方发布。

### **不可以**安装的插件

- Vuter。该插件已经废弃，如果安装了此插件则建议卸载，如果启用则会造成错误。

### 禁用 VS Code 内置的 JavaScript 语言功能

- 点击左侧侧边栏的对应图标打开 VS Code 的扩展面板（或使用快捷键`Ctrl+Shift+X`）；
- 在打开的面板内的搜索框中输入`@builtin`；
- 找到名称为 *JavaScript 和 TypeScript 的语言功能* 的功能，点击齿轮图标，选择 *禁用（工作区）*；
- 打开项目中任意一个 `*.vue` 或者 `*.ts` 文件，验证 VS Code 窗口最下方的状态栏中是否有小子显示 *4.9.5(takeover)* 字样（版本号可能不为 4.9.5，但只要包含`(takeover)`字样即说明配置成功）。

注：未禁用此功能，可能导致 VS Code 无法识别部分文件的路径从而报错。

## 运行项目

首次下载项目后，执行

```sh
npm install
```

安装项目的前端依赖。该指令类似`maven install`，根据 `package.json` 文件的内容安装指定的 js 库和版本。

> 此后，如果`package.json`文件 **没有** 更新，则无需再次运行`npm install`指令。

若要在本地运行项目，执行

```sh
npm run dev
```

该指令将默认占用`5173`端口运行前端服务。如果 5173 端口被占用则会使用 5174 端口，以此类推。

## 其他指令

**编译项目：**

```sh
npm run build
```

> 编译项目指令首先检查项目中未修复的格式问题和错误，随后将 vue，ts，scss 文件编译为标准的 html，js，css 文件。编译的产物在新生成的`dist`文件夹下，可以直接用于部署。

**自动修复错误和格式错误：**

```sh
# 尝试修复全部项目文件
npm run lint

# 仅尝试修复当前未上传到 git 的文件
npm run lint-staged
```
