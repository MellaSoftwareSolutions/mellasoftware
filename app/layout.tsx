import { Analytics } from '@vercel/analytics/next'
import { Sora } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'Mella — Software that ships.',
  description: 'Mella designs, builds, and runs software products for ambitious businesses.',
  icons: {
    icon: [
      { url: '/blue icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/blue icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eef5ff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
