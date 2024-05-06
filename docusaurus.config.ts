import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const organizationName = 'nimscore'
const projectName = 'book.warcraft.one'

const config: Config = {
	title: 'BOOK | ONE',
	tagline: 'Руководства по классам World of Warcraft',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: `https://${projectName}`,
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: `/`,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName, // Usually your GitHub org/user name.
	projectName, // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	scripts: [
		// String format.

		// Object format.
		{
			src: 'https://wow.zamimg.com/js/tooltips.js',
			async: true
		}
	],
	
	headTags: [
		{
			tagName: 'script',
			attributes: {
				type: 'text/javascript',
			},
			innerHTML: 'const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};'
		}
	],

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'ru',
		locales: ['ru']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'BOOK | ONE',
			logo: {
				alt: 'WONE LOGO',
				src: 'img/logo.png'
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Руководства'
				},
				{ to: '/blog', label: 'Блог', position: 'left' },
				{
					href: 'https://github.com/nimscore/book.warcraft.one',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Руководства',
					items: [
						{
							label: 'Руководства',
							to: '/docs/общее'
						}
					]
				},
				{
					title: 'Сообщество',
					items: [
						{
							label: 'Сообщество',
							href: 'https://warcraft.one'
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com'
						}
					]
				},
				{
					title: 'Другое',
					items: [
						{
							label: 'Блог',
							to: '/blog'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/nimscore/book.warcraft.one'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} W | ONE`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
}

export default config
