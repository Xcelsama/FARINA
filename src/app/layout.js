import '../styles/globals.css';

export const metadata = {
  title: 'CHITU-KA FOODS',
  description: 'Discover premium fibre-enriched Farina Swallow blends – cyanide-free, additive-free, and certified by NAFDAC & SON. Wholesome Nigerian food for every home. Ready in 3 minutes.',
  metadataBase: new URL('https://ckf-farina-swallow.vercel.app'),
  icons: {
    icon: '/img/logo.jpg',
    shortcut: '/img/logo.jpg',
    apple: '/img/logo.jpg',
  },
  openGraph: {
    title: 'CHITU-KA FOODS',
    description: 'Premium fibre-enriched Farina Swallow blends – cyanide-free, additive-free, and certified by NAFDAC & SON. Wholesome Nigerian food ready in 3 minutes.',
    url: 'https://ckf-farina-swallow.vercel.app',
    siteName: 'CHITU-KA FOODS',
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: '/img/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'CHITU-KA FOODS — Premium Farina Swallow, NAFDAC & SON Approved',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHITU-KA FOODS — Premium Farina Swallow',
    description: 'Premium fibre-enriched Farina Swallow blends – cyanide-free, additive-free, NAFDAC & SON certified. Ready in 3 minutes.',
    images: ['/img/logo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
