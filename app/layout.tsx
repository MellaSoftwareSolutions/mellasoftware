import { Analytics } from '@vercel/analytics/next'
import { Sora } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

const siteUrl = 'https://mellasoftware.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mella Software | Independent Software Studio',
    template: '%s | Mella Software',
  },
  description:
    'We design, build, and run software products for people with something useful to put into the world. Independent software studio based in Addis Ababa, Ethiopia.',
  applicationName: 'Mella Software',
  authors: [{ name: 'Mella Software Solutions PLC', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Mella Software',
    'Mella Software Solutions',
    'Mella Software Solutions PLC',
    'Software Studio Addis Ababa',
    'Ethiopia Software Company',
    'Custom Software Development Ethiopia',
    'Web Application Development',
    'Mobile App Development',
    'AdVouch',
    'AI Legal Advisor',
    'Healthcare EHR Systems',
    'Enterprise ERP Software',
    'Cloud Architecture',
  ],
  creator: 'Mella Software Solutions PLC',
  publisher: 'Mella Software Solutions PLC',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icon-96x96.png',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mella Software',
    title: 'Mella Software | Independent Software Studio',
    description:
      'We design, build, and run software products for people with something useful to put into the world. Independent software studio based in Addis Ababa, Ethiopia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mella Software Solutions PLC — Make the next thing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mella Software | Independent Software Studio',
    description:
      'We design, build, and run software products for people with something useful to put into the world.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080a0d',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Mella Software Solutions PLC',
      alternateName: ['Mella Software', 'Mella'],
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon-192x192.png`,
        width: 192,
        height: 192,
      },
      image: `${siteUrl}/og-image.png`,
      description:
        'Independent software studio designing, building, and operating high-grade digital products and custom business platforms.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+251944741857',
          contactType: 'customer service',
          email: 'hello@mellasoftware.com',
          areaServed: 'Worldwide',
          availableLanguage: ['English', 'Amharic'],
        },
      ],
      sameAs: [
        'https://github.com/MellaSoftwareSolutions',
        'https://advouch.com',
      ],
      knowsAbout: [
        'Custom Web Applications',
        'Mobile App Development',
        'Enterprise ERP Systems',
        'Fintech & Escrow Platforms',
        'Healthcare EHR Software',
        'AI & Machine Learning Integration',
        'Cloud Infrastructure & DevOps',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Mella Software',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
