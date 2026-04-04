import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Tiger Nut Mix — CHITU-KA FOODS',
  description: 'Cassava blended with tiger nut to deliver extra fibre, a nutty flavour, and improved digestion support.',
};

const product = {
  name: 'Farina Tiger Nut Mix',
  producer: 'CHITU-KA FOODS',
  desc: 'Cassava blended with tiger nut to deliver extra fibre, a delicious nutty flavour, and superior digestion support. A naturally low-glycemic, plant-based blend.',
  price: 'Available: 500g – ₦3,000 · 1kg – ₦6,000',
  img: '/img/farina-tigernut.png',
  imgAlt: 'Farina Tiger Nut Mix',
  benefits: [
    'High fibre from tiger nut — supports and improves digestion',
    'Gluten-free and entirely plant-based',
    'Low glycemic index — great for blood sugar control',
    'Aids cholesterol management and provides healthy fats',
  ],
  prepMethods: [
    'Swallow: Gradually stir into boiling water and mix until smooth. Serve with any Nigerian soup.',
    'Drink: Soak in cold or warm water for a fibre-rich, naturally nutty drink.',
    'With Protein: Serve alongside meat, fish, or chicken for a balanced, satisfying meal.',
  ],
  nutritionText: 'Farina Tiger Nut Mix is rich in fibre for digestion, weight control, and blood sugar management, with a nutty flavor and gluten-free appeal. Offers low glycemic index benefits, aids cholesterol control, and provides healthy fats for overall wellness. Ideal for weight-conscious consumers and those managing blood sugar levels.',
  whoFor: [
    'Health-conscious consumers',
    'Weight watchers and those on low-glycemic diets',
    'Those seeking better digestion and blood sugar control',
    'Anyone who enjoys a naturally nutty, fibre-rich meal',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC compliant. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Tiger Nut Mix',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function TigernutPage() {
  return <ProductLayout product={product} />;
}
