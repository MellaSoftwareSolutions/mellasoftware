import { Analytics } from '@vercel/analytics/next'
import { Sora } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

const siteUrl = 'https://mellasoftware.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mella Software — Software Built Around How Your Business Works',
    template: '%s | Mella Software',
  },
  description:
    'Mella Software Solutions PLC is a software engineering company based in Addis Ababa. We design and develop custom web applications, mobile apps, and business management systems tailored to your workflows.',
  applicationName: 'Mella Software',
  authors: [{ name: 'Mella Software Solutions PLC', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Mella Software',
    'Mella Software Solutions',
    'Mella Software Solutions PLC',
    'Software Engineering Company Addis Ababa',
    'Custom Software Development Ethiopia',
    'Web Application Developers Ethiopia',
    'Mobile App Development Ethiopia',
    'Business Management Systems',
    'Clinic Management Software',
    'School Management System ERP',
    'Restaurant POS Software',
    'AdVouch',
    'Dedicated Engineering Team Ethiopia',
  ],
  creator: 'Mella Software Solutions PLC',
  publisher: 'Mella Software Solutions PLC',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mella Software',
    title: 'Mella Software — Software Built Around How Your Business Works',
    description:
      'From customer-facing applications to internal business systems, Mella designs and develops software around your workflows, requirements, and goals.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mella Software Solutions PLC — Software built around how your business works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mella Software — Software Built Around How Your Business Works',
    description:
      'From customer-facing applications to internal business systems, Mella designs and develops software around your workflows, requirements, and goals.',
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
        'Software engineering company based in Addis Ababa designing, developing, and operating custom web applications, mobile apps, and business management systems.',
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
            name: 'Custom Web & Mobile Applications',
            description:
              'Design and development of customer-facing applications and digital products tailored to your requirements.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Management Systems',
            description:
              'Purpose-built operational software including ERP, clinic EHR, and restaurant POS systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dedicated Engineering Teams',
            description:
              'Direct access to senior software developers and designers working directly with your team.',
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
            text: 'Mella Software Solutions PLC is a software engineering company based in Addis Ababa, Ethiopia. We design, build, and maintain custom web applications, mobile apps, and business management systems for organizations that need software tailored to their actual workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Mella Software based, and who do you work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We are headquartered in Addis Ababa, Ethiopia (UTC+3). We work with local Ethiopian businesses and international organizations that need dependable custom software engineering with direct developer communication.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of software does Mella build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build customer-facing web and mobile applications as well as internal operational systems — including clinic management software (EHR), school management systems (ERP), restaurant point-of-sale (POS) platforms, legal intelligence tools, and escrow marketplaces like AdVouch.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Mella work with clients on new projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide direct access to the engineering team with clear project scopes and realistic timelines. Clients can work with us on defined-scope system builds or through dedicated engineering arrangements. You can contact us at hello@mellasoftware.com or call +251 944 741 857 / +251 713 184 474.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
