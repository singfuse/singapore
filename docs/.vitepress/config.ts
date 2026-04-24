import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/singapore/',
  title: 'Singapore Data SDK',
  description:
    "Unofficial TypeScript/JavaScript SDK for Singapore Government's Open Data and LTA DataMall APIs.",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Docs', link: '/get-started' }],

    sidebar: [
      {
        text: 'Get Started',
        items: [{ text: 'Introduction', link: '/get-started' }],
      },
      {
        text: 'Data Sources',
        items: [
          { text: 'Open Data', link: '/open-data' },
          { text: 'LTA DataMall', link: '/lta-datamall' },
          { text: 'Static Data', link: '/static-data' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/singfuse/singapore' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright &copy; 2026-present Vinkas Technologies Pte. Ltd.',
    },
  },
})
