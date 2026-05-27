import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://saas-glassmorphic.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'SaaS Glassmorphic',
    description: 'Modern SaaS landing page with frosted-glass cards, gradient backgrounds, pricing tables, and feature grids.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'SaaS Glassmorphic',
        description: 'Modern SaaS landing page with frosted-glass cards, gradient backgrounds, pricing tables, and feature grids.',
        url: BASE_URL,
        siteName: 'SaaS Glassmorphic',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SaaS Glassmorphic',
        description: 'Modern SaaS landing page with frosted-glass cards, gradient backgrounds, pricing tables, and feature grids.',
        images: ['https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SaaS Glassmorphic',
    description: 'Modern SaaS landing page with frosted-glass cards, gradient backgrounds, pricing tables, and feature grids.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_saas_glassmorphic.avif',
};

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