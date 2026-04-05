import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Tiger Nut Mix — CHITU-KA FOODS',
  description: 'Cassava blended with tiger nut to deliver extra fibre, a nutty flavour, and improved digestion support.',
};

const product = {
  name: 'Farina Tiger Nut Mix',
  producer: 'CHITU-KA FOODS',
  desc: 'Our Farina Tiger Nut Mix — a beautifully nutty, fibre-packed blend that nourishes and satisfies. Tiger nut brings a rich, natural flavour alongside remarkable digestive and metabolic benefits.',
  price: 'Available: 500g – ₦3,000 · 1kg – ₦6,000',
  img: '/img/farina-tigernut.png',
  imgAlt: 'Farina Tiger Nut Mix',
  benefits: [
    'Exceptionally high in dietary fibre — one of nature\'s best digestive aids',
    'Low glycemic index — ideal for healthy blood sugar management',
    'Supports healthy cholesterol levels and cardiovascular wellness',
    'Completely cyanide-free, gluten-free, and entirely plant-based',
  ],
  prepMethods: [
    'Swallow: Gradually stir into boiling water and mix until beautifully smooth. Serve with any Nigerian soup.',
    'Drink: Stir into cold or warm water for a naturally sweet, nutty fibre drink.',
    'With Protein: Serve alongside meat, fish, or chicken for a balanced, wholesome meal.',
  ],
  nutritionText: 'Farina Tiger Nut Mix stands out for its exceptional fibre content and natural low glycemic index — making it outstanding for digestion, blood sugar balance, and sustainable weight management. The subtle nutty flavour of tiger nut elevates every serving, while healthy fats support heart health and lasting energy.',
  whoFor: [
    'Those focused on digestive health and gut wellness',
    'Weight-conscious consumers and those on low-glycemic diets',
    'People managing blood sugar or cholesterol levels',
    'Anyone who enjoys a naturally rich, flavourful swallow experience',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC certified · SON approved. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Tiger Nut Mix',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function TigernutPage() {
  return <ProductLayout product={product} />;
}
