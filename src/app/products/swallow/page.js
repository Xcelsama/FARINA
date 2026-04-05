import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Swallow — CHITU-KA FOODS',
  description: 'Plain cassava-based farina, fibre-enriched and processed to be safer than traditional cassava swallow foods.',
};

const product = {
  name: 'Farina Swallow',
  producer: 'CHITU-KA FOODS',
  desc: 'Our classic premium Farina Swallow — smooth, satisfying, and packed with dietary fibre. Crafted from the finest cassava and processed to the highest standards of purity and safety. The wholesome swallow your family deserves.',
  price: 'Available: 500g – ₦2,500 · 1kg – ₦5,000',
  img: '/img/farina.png',
  imgAlt: 'Farina Swallow',
  benefits: [
    'Completely cyanide-free — pure, safe nourishment for your whole family',
    'Rich in dietary fibre for healthy digestion and lasting satiety',
    'Steady energy release — keeps you fuelled throughout the day',
    'No preservatives, no additives — nothing but wholesome goodness',
  ],
  prepMethods: [
    'Swallow: Gradually stir Farina into boiling water until smooth. Serve with any Nigerian soup.',
    'Drink: Stir into cold or warm water for a quick, fibre-rich beverage.',
    'With Protein: Serve alongside meat, fish, or chicken for a complete, satisfying meal.',
  ],
  nutritionText: 'Farina Swallow (Plain) delivers clean, sustained energy to power your day. Naturally gluten-free and fibre-enriched, it supports healthy digestion, balanced blood sugar, and effective weight management. The ideal swallow for every Nigerian family — simple, pure, and deeply nourishing.',
  whoFor: [
    'Health-conscious consumers who want quality they can trust',
    'Weight watchers seeking a filling, low-glycemic swallow',
    'Families who want a safe, certified meal for everyone',
    'Anyone who wants a quick, nutritious, delicious meal',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC certified · SON approved. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Swallow',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function SwallowPage() {
  return <ProductLayout product={product} />;
}
