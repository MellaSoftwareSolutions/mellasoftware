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
      '@type': ['Organization', 'ProfessionalService'],
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
        'Independent software studio designing, building, and operating high-grade digital products, custom platforms, and enterprise systems.',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.0105,
        longitude: 38.7612,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+251944741857',
          contactType: 'sales and customer service',
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
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Product Engineering',
            description:
              'End-to-end design, full-stack development, and production rollout of digital products.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dedicated Engineering Pods',
            description:
              'Senior software developers and UI/UX designers embedded directly into client operations.',
          },
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://advouch.com/#application',
      name: 'AdVouch',
      url: 'https://advouch.com',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Vouched advertising marketplace featuring verified business identity checks, campaign escrow payments, and automated payout settlement.',
      author: {
        '@id': `${siteUrl}/#organization`,
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
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
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Mella Software Solutions PLC do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mella Software Solutions PLC is an independent software studio based in Addis Ababa, Ethiopia. We design, build, launch, and operate web and mobile software products for high-growth businesses, as well as proprietary in-house ventures like AdVouch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Mella Software based, and do you work internationally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We are headquartered in Addis Ababa, Ethiopia (UTC+3). We partner with both local Ethiopian enterprises and international companies across Africa, Europe, North America, and the Middle East.',
          },
        },
        {
          '@type': 'Question',
          name: 'What software products has Mella Software built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mella built and operates AdVouch (a trusted advertising escrow marketplace at advouch.com), Mizan Net (an AI-powered legal intelligence advisor for Ethiopian law), a school management ERP, a clinic EHR platform, and a real-time restaurant POS and order dispatch system.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I work with Mella Software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can start a project by contacting hello@mellasoftware.com or calling +251 944 741 857 / +251 713 184 474. We offer fixed-scope product builds and dedicated engineering pods.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} bg-background`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
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
