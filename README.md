# 个人网站项目

基于 Jekyll + GitHub Pages 的个人博客网站，支持多栏目分类、标签系统、响应式设计。

## 🚀 项目概述

### 核心功能
- **多栏目博客系统**：主页、课程学习、科研、心得、杂谈
- **标签分类系统**：文章标签+侧边栏标签云过滤
- **响应式设计**：适配桌面端和移动端
- **现代化UI**：简约美观的设计风格，支持动画效果
- **SEO友好**：支持sitemap、feed等

### 技术栈
- **静态站点生成器**：Jekyll 4.x
- **部署平台**：GitHub Pages
- **样式**：SCSS/CSS3 + CSS变量
- **脚本**：原生JavaScript
- **标记语言**：Markdown + Liquid模板
- **字体**：Inter字体系列

## 📁 项目文件结构

```
personal-website/
├── README.md                   # 项目说明文档
├── _config.yml                 # Jekyll核心配置文件
├── Gemfile                     # Ruby依赖管理
├── index.html                  # 网站主页
│
├── _layouts/                   # 页面布局模板
│   ├── default.html           # 基础页面布局
│   └── post.html              # 博客文章布局
│
├── _includes/                  # 可复用HTML组件
│   ├── header.html            # 网站头部（标题+导航）
│   ├── footer.html            # 网站底部
│   ├── navigation.html        # 主导航菜单
│   └── sidebar.html           # 侧边栏（标签云+最新文章）
│
├── assets/                     # 静态资源文件
│   ├── css/
│   │   └── main.scss          # 主样式文件（包含所有CSS）
│   └── js/
│       └── main.js            # JavaScript功能脚本
│
├── _posts/                     # 博客文章存储
│   ├── 课程学习/              # 课程学习相关文章
│   ├── 科研/                  # 科研相关文章
│   ├── 心得/                  # 个人心得文章
│   └── 杂谈/                  # 杂谈类文章
│
├── 课程学习.html               # 课程学习栏目页面
├── 科研.html                   # 科研栏目页面
├── 心得.html                   # 心得栏目页面
└── 杂谈.html                   # 杂谈栏目页面
```

## 🔧 核心文件说明

### 配置文件
- **`_config.yml`**：Jekyll主配置，包含网站基本信息、插件配置、栏目设置
- **`Gemfile`**：Ruby gems依赖管理，包含Jekyll和相关插件

### 模板文件
- **`_layouts/default.html`**：网站基础布局，包含HTML结构、head、导航、主内容区、侧边栏、底部
- **`_layouts/post.html`**：文章页面布局，继承default.html，增加文章标题、元信息、标签、上下页导航

### 组件文件
- **`_includes/header.html`**：网站头部，包含网站标题和主导航
- **`_includes/navigation.html`**：主导航菜单，包含各栏目链接
- **`_includes/sidebar.html`**：侧边栏，包含标签云和最新文章列表
- **`_includes/footer.html`**：网站底部版权信息

### 样式和脚本
- **`assets/css/main.scss`**：整合所有CSS样式，包含CSS变量、基础样式、组件样式、响应式媒体查询
- **`assets/js/main.js`**：网站交互功能，包含标签过滤、平滑滚动、移动端适配

### 内容文件
- **`index.html`**：网站主页，展示最新文章和欢迎信息
- **栏目页面**：各栏目的文章列表页面，过滤显示对应分类的文章
- **`_posts/`**：所有博客文章，按栏目分文件夹存储

## ⚙️ 配置详解

### 网站基本配置 (`_config.yml`)
```yaml
# 网站信息
title: "网站标题"
email: email@example.com
description: "网站描述"
url: "https://username.github.io"

# 栏目配置
categories:
  - name: "学习"
    slug: "course"
  - name: "科研"
    slug: "research"
  - name: "心得"
    slug: "thoughts"
  - name: "杂谈"
    slug: "misc"
```

### 文章配置 (Front Matter)
```yaml
---
layout: post                    # 使用的布局模板
title: "文章标题"              # 文章标题
date: 2025-01-15               # 发布日期
category: "course"             # 文章分类
tags: ["标签1", "标签2"]       # 文章标签
excerpt: "文章摘要"            # 文章摘要
---
```

## 🖥️ 开发环境设置

### 本地开发
```bash
# 1. 克隆仓库
git clone https://github.com/username/username.github.io.git
cd username.github.io

# 2. 安装依赖
bundle install

# 3. 启动本地服务器
bundle exec jekyll serve

# 4. 访问网站
# http://localhost:4000
```

### 环境要求
- Ruby 2.7+
- Jekyll 4.x
- Bundler

## 📝 内容管理

### 创建新文章
1. 在对应栏目文件夹中创建文件：`_posts/栏目名/YYYY-MM-DD-文章标题.md`
2. 添加Front Matter头部信息
3. 使用Markdown编写文章内容
4. 提交并推送到GitHub

### 文章命名规范
- 文件名格式：`YYYY-MM-DD-文章标题.md`
- 使用英文或拼音命名，避免特殊字符
- 日期格式：四位年份-两位月份-两位日期

### 标签管理
- 标签使用中文或英文，保持一致性
- 常用标签：编程、算法、机器学习、深度学习、项目、总结、笔记等
- 避免创建过多相似标签

## 🎨 样式自定义

### CSS变量 (在 `assets/css/main.scss` 中)
```css
:root {
    --primary-color: #2563eb;      /* 主色调 */
    --secondary-color: #64748b;    /* 辅助色 */
    --accent-color: #f59e0b;       /* 强调色 */
    --text-color: #1e293b;         /* 主文本色 */
    --bg-color: #ffffff;           /* 背景色 */
    --border-radius: 8px;          /* 圆角大小 */
}
```

### 响应式断点
- 移动端：`max-width: 768px`
- 平板端：`769px - 1024px`
- 桌面端：`min-width: 1025px`

## 🚀 部署说明

### GitHub Pages 自动部署
1. 推送代码到 `main` 分支
2. GitHub Pages 自动构建和部署
3. 访问 `https://username.github.io`

### 部署检查清单
- [ ] `_config.yml` 中的 `url` 和 `baseurl` 配置正确
- [ ] 所有文件路径使用相对路径
- [ ] 图片和资源文件放在 `assets/` 目录下
- [ ] 文章文件名和Front Matter格式正确

## 🔍 功能说明

### 标签过滤功能
- 点击侧边栏标签云中的标签
- 自动过滤显示包含该标签的文章
- JavaScript实现，无需页面刷新

### 文章导航
- 文章页面底部显示上一篇/下一篇导航
- 按发布时间顺序排列
- 自动显示文章标题

### 搜索功能 (可扩展)
- 预留搜索接口
- 可集成 Lunr.js 或 Algolia 搜索

## 🐛 常见问题

### 样式不显示
1. 检查 `assets/css/main.scss` 文件开头的YAML Front Matter
2. 确保CSS变量和SCSS语法正确
3. 清除浏览器缓存

### 文章不显示
1. 检查文件名格式：`YYYY-MM-DD-title.md`
2. 确认Front Matter语法正确
3. 检查文章分类是否匹配栏目配置

### GitHub Pages构建失败
1. 查看仓库 Actions 页面的错误信息
2. 检查 `_config.yml` 语法
3. 确保所有必需文件存在

---

**最后更新**: 2025-07-18  
**维护者**: [Ruilin Wu]  
