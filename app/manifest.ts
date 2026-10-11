import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mella Software Solutions PLC',
    short_name: 'Mella',
    description:
      'Software built around how your business works. Custom web applications, mobile apps, and business management systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080A0D',
    theme_color: '#080A0D',
    icons: [
      {
        src: '/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
