import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
	defaultTitle: '理科大機械工学研究会 スポンサー',
	titleTemplate: `%s | 理科大機械工学研究会 スポンサー`,
	description: '理科大機械工学研究会 協賛ページ',
	openGraph: {
		type: 'website',
		title: '理科大機械工学研究会 スポンサー',
		description: '理科大機械工学研究会 協賛ページ',
		url: 'https://tusfr-hp-sponsorship-j.vercel.app/',
		site_name: 'Tusfr Sponsorship',
		images: [
			{
				url: 'https://tusfr-hp-sponsorship-j.vercel.app/images/tusfrLogo.jpg',
				alt: '理科大機械工学研究会 協賛ページ'
			}
		]
	},
	twitter: {
		handle: '@tusfr',
		site: '@tusfr',
		cardType: 'summary_large_image'
	},
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/tusfrLogo.ico'
		}
	]
};

export default SEO;
