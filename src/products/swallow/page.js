import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Swallow — CHITU-KA FOODS',
  description: 'Plain cassava-based farina, fibre-enriched and processed to be safer than traditional cassava swallow foods.',
};

const product = {
  name: 'Farina Swallow',
  producer: 'CHITU-KA FOODS',
  desc: 'Plain cassava-based farina, enriched with fibre and processed to be safer than traditional cassava swallow foods. Quick to prepare and naturally wholesome.',
  price: 'Available: 500g – ₦2,500 · 1kg – ₦5,000',
  img: '/img/farina.png',
  imgAlt: 'Farina Swallow',
  benefits: [
    'Safe processing to significantly reduce cyanide',
    'High in carbohydrates for sustained energy',
    'Fibre-enriched to support healthy digestion',
    'No preservatives, no additives — 100% natural',
  ],
  prepMethods: [
    'Swallow: Gradually stir Farina into boiling water until smooth. Serve with any Nigerian soup.',
    'Drink: Soak in cold or warm water for a quick fibre-rich beverage.',
    'With Protein: Serve alongside meat, fish, or chicken for a complete meal.',
  ],
  nutritionText: 'Farina Swallow (Plain) is designed to fuel your day with essential nutrients that promote endurance and vitality. Naturally gluten-free, and fibre-enriched for better digestion, slower sugar absorption, and weight management. Ideal for those seeking a simple, traditional swallow alternative.',
  whoFor: [
    'Health-conscious consumers',
    'Weight watchers',
    'Families seeking safe swallow options',
    'Anyone looking for a quick, nutritious meal',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC compliant. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Swallow',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function SwallowPage() {
  return <ProductLayout product={product} />;
}
