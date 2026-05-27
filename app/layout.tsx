import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://template-saas-glassmorphic.seojack.site';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Glassmorphism SaaS Landing Page Template | SEOJack',
    description: 'Free glassmorphism SaaS landing page template — frosted glass cards, dark gradient, pricing table. Live demo. Customise with SEOJack.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Glassmorphism SaaS Landing Page Template | SEOJack',
        description: 'Free glassmorphism SaaS landing page template — frosted glass cards, dark gradient, pricing table. Live demo. Customise with SEOJack.',
        url: BASE_URL,
        siteName: 'SEOJack Templates',
        type: 'website',
        locale: 'en_GB',
        images: [
            {
                url: 'https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif',
                width: 1600,
                height: 1000,
                alt: 'Glassmorphism SaaS landing page template preview — frosted glass cards, dark gradient background, pricing table',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Glassmorphism SaaS Landing Page Template | SEOJack',
        description: 'Free glassmorphism SaaS landing page template — frosted glass cards, dark gradient, pricing table. Live demo. Customise with SEOJack.',
        images: ['https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SEOJack Templates',
        url: BASE_URL,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Glassmorphism SaaS Landing Page Template',
        description:
            'A modern glassmorphism SaaS landing page template with frosted glass cards, dark gradient backgrounds, animated orbs, pricing tables, and feature grids. Built with Next.js and deployable instantly.',
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'GBP',
        },
        url: BASE_URL,
        image: 'https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif',
        publisher: {
            '@type': 'Organization',
            name: 'SEOJack',
            url: 'https://seojack.site',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is glassmorphism in web design?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Glassmorphism is a UI design style that mimics frosted glass using CSS backdrop-filter blur, semi-transparent backgrounds, and subtle borders. It creates depth and layering in dark-theme interfaces — popular for SaaS dashboards and landing pages.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do I make a glassmorphism SaaS landing page?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Apply backdrop-filter: blur() with a semi-transparent background (rgba with low opacity) to card elements, set against a dark gradient or vibrant gradient background. This template gives you a ready-made implementation with animated orbs, floating glass cards, and a pricing grid.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is glassmorphism still popular in 2025 and 2026?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Glassmorphism remains a leading UI trend for SaaS and AI product landing pages, especially with dark backgrounds and gradient colour schemes. It pairs well with modern tech branding and is widely used by tools like Linear, Vercel, and Arc Browser.',
                },
            },
            {
                '@type': 'Question',
                name: 'What are frosted glass cards in UI design?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Frosted glass cards are UI components that use CSS backdrop-filter blur and translucent backgrounds to appear as if they are printed on etched or frosted glass. They float visually above background layers, creating a sense of depth and modern aesthetics.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I use this template for free?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can preview the live demo for free. Customisation, export, and deployment are available through SEOJack. Visit seojack.site to learn about pricing and included templates.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does this template work with Next.js and Tailwind CSS?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. This template is built on Next.js with scoped CSS and can be adapted for Tailwind CSS. It uses Inter font, CSS custom properties, and standard backdrop-filter — fully compatible with modern React and Next.js stacks.',
                },
            },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'SEOJack Templates',
                item: 'https://seojack.site/templates',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'SaaS Templates',
                item: 'https://seojack.site/templates?category=saas',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Glassmorphism SaaS Landing Page Template',
                item: BASE_URL,
            },
        ],
    },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
