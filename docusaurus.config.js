// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "QCefView - A QWidget-based Web View Component Integrated with CEF",
  tagline: "A QWidget-based Web View Component Integrated with CEF",
  url: "https://CefView.github.io",
  baseUrl: "/QCefView/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cefview", // Usually your GitHub org/user name.
  projectName: "qcefview", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "keywords", content: "Qt, CEF, Qt+CEF, Qt CEF integration" },
      ],

      navbar: {
        title: "QCefView",
        logo: {
          alt: "QCefView Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intros/index",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "doc",
            docId: "guide/index",
            position: "left",
            label: "Guide",
          },
          {
            type: "doc",
            docId: "reference/index",
            position: "left",
            label: "Reference",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/cefview/qcefview",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
