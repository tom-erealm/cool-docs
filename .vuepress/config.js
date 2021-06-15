module.exports = {
  title: "HD图书馆系统开发文档",
  description: `文档有始有终，开发如影随形，无中生有，如梦似幻`,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "开发环境", link: "/guides/" },
      { text: "部署", link: "/deploy/" },
      { text: "后端开发", link: "/backend/" },
      { text: "前端开发", link: "/frontend/" },
    ],
    sidebar: [
      {
        title: "起步", // 必要的
        children: ["/guides/", "/guides/READEME"],
      },
      {
        title: "提高",
        children: [
          "/deploy/linux",
          "/deploy/mysql",
        ],
      },
    ],
  },
  dest: "public",
  // 插件设置
  plugins: [
    "@limdongjin/vuepress-plugin-sidebar-on-off",
    "@vuepress/back-to-top",
    [
      "@vuepress/container",
      {
        type: "slot",
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.set({
        html: true,
      });
      md.use(require("markdown-it-katex"));
    },
  },
};
