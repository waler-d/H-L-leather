# DEPLOY.md

本项目是纯静态网站，由 `index.html`、`css/`、`js/`、`assets/` 组成，不需要 Node.js、构建工具或打包流程。

## 部署前检查

请确保项目根目录包含：

- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/` 图片与视频资源

当前资源路径均为相对路径，例如：

- `css/styles.css`
- `js/main.js`
- `assets/m11-leather.jpg`
- `assets/hero.mp4`

因此可以直接作为静态网站发布。

## 使用 GitHub Pages 发布

1. 在 GitHub 新建一个仓库。
2. 将本项目中的所有文件上传到仓库根目录。
3. 进入仓库的 **Settings**。
4. 找到 **Pages**。
5. 在 **Build and deployment** 中选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
6. 保存后等待 GitHub Pages 构建完成。
7. GitHub 会生成一个公网访问地址，例如：

   `https://你的用户名.github.io/仓库名/`

## 使用 Netlify 拖拽发布

1. 打开 Netlify 官网并登录。
2. 进入 **Sites**。
3. 选择手动部署或拖拽部署。
4. 将整个项目文件夹拖入 Netlify 的部署区域。
5. 等待上传完成。
6. Netlify 会自动生成一个访问地址。

## 注意事项

- 不要只上传 `index.html`，必须同时上传 `css/`、`js/`、`assets/` 文件夹。
- 保持当前目录结构不变。
- 如果删除或重命名 `assets/` 中的图片、视频，需要同步修改 `index.html` 中的引用路径。
