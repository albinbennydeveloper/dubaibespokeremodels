import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dubai Bespoke Remodels',
    short_name: 'Bespoke Remodels',
    description: 'Premier luxury home renovation and remodeling services in Dubai.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a', // luxury-black
    theme_color: '#D4AF37', // luxury-gold
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}
