// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'City Guide Pro',
  tagline: 'cgp are cool',
  favicon: 'img/favicon.svg',
  // Set the production url of your site here
  url: 'https://calgary-3sy.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cityguidepro', // Usually your GitHub org/user name.
  projectName: 'wiki-cgp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cityguidepro/wiki-cgp',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-auto-sidebars'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '城市指南wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/resource', label: 'Resource', position: 'left' },
          {
            href: 'https://github.com/cityguidepro/wiki-cgp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'CGP',
            items: [
              {
                label: 'Home',
                to: 'https://cityguidepro.com/',
              },
            ],
          },
          {
            title: 'Wiki',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'About City Guide',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
              {
                label: 'Contact us',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              }, {
                label: 'Terms of Service',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              }, {
                label: 'Privacy Policy',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Xiaohongshu',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
              {
                label: 'Twitter',
                to: 'https://www.xiaohongshu.com/user/profile/584e45dd6a6a693c6733d67e',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/cityguidepro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cityguidepro, inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
