import '../styles/globals.css';

export const metadata = {
  title: 'CHITU-KA FOODS — Farina Swallow',
  description: 'Discover fibre-enriched Farina Swallow blends – safe, quick, and nutritious. Proudly Nigerian. NAFDAC certified & SON approved.',
  openGraph: {
    title: 'CKF Farina Swallow – Healthy Foods',
    description: 'Discover fibre-enriched Farina Swallow blends – safe, quick, and nutritious. Proudly Nigerian.',
    url: 'https://ckf-farina-swallow.vercel.app',
    type: 'website',
    images: [{ url: 'https://ckf-farina-swallow.vercel.app/img/logo.jpg', width: 1078, height: 808 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CKF Farina Swallow – Healthy Foods',
    description: 'Discover fibre-enriched Farina Swallow blends – safe, quick, and nutritious. Proudly Nigerian.',
    images: ['https://ckf-farina-swallow.vercel.app/img/main3.png'],
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
