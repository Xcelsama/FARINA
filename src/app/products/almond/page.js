import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Almond Mix — CHITU-KA FOODS',
  description: 'Cassava combined with almond for extra protein, healthy fats, and improved nutrient density.',
};

const product = {
  name: 'Farina Almond Mix',
  producer: 'CHITU-KA FOODS',
  desc: 'Our premium Farina Almond Mix — the perfect union of wholesome cassava farina and the goodness of almond. Rich in protein, healthy fats, and essential micronutrients for a truly elevated swallow experience.',
  price: 'Available: 500g – ₦3,500 · 1kg – ₦7,000',
  img: '/img/almondmix.png',
  imgAlt: 'Farina Almond Mix',
  allergenNote: 'Contains tree nuts (almonds). Not suitable for people with nut allergies.',
  benefits: [
    'Protein-rich blend — almonds add quality plant protein to every serving',
    'Loaded with healthy fats, vitamin E, and magnesium for overall wellness',
    'Superior satiety — keeps you fuller, longer',
    'Completely cyanide-free, gluten-free, and additive-free',
  ],
  prepMethods: [
    'Swallow: Gradually pour into boiling water while stirring until beautifully smooth. Serve with any Nigerian soup.',
    'Drink: Stir into cold or warm water for a naturally nutty, fibre-rich beverage.',
    'With Protein: Pair with meat, fish, or chicken for a nutrient-dense, satisfying meal.',
  ],
  nutritionText: 'Farina Almond Mix is a powerhouse blend designed for those who want more from their swallow. The addition of premium almonds boosts protein, healthy fats, and key micronutrients including vitamin E and magnesium — supporting muscle health, sustained energy, and overall vitality. Certified safe and delicious.',
  whoFor: [
    'Health-conscious consumers who want superior nutrition',
    'Fitness enthusiasts and active individuals',
    'Those seeking more protein and healthy fats in their diet',
    'Anyone who wants a premium, nutrient-dense swallow experience',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC certified · SON approved. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Almond Mix',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function AlmondPage() {
  return <ProductLayout product={product} />;
}
