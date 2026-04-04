import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Farina Almond Mix — CHITU-KA FOODS',
  description: 'Cassava combined with almond for extra protein, healthy fats, and improved nutrient density.',
};

const product = {
  name: 'Farina Almond Mix',
  producer: 'CHITU-KA FOODS',
  desc: 'Cassava combined with almond for extra protein, healthy fats, and improved nutrient density. A premium blend for health-conscious consumers who want more from their swallow.',
  price: 'Available: 500g – ₦3,500 · 1kg – ₦7,000',
  img: '/img/almondmix.png',
  imgAlt: 'Farina Almond Mix',
  allergenNote: 'Contains tree nuts (almonds). Not suitable for people with nut allergies.',
  benefits: [
    'Adds protein and healthy fats from almonds',
    'Better satiety and improved nutrient content',
    'Gluten-free — made from natural cassava and almond',
    'Enriched with vitamin E and magnesium',
  ],
  prepMethods: [
    'Swallow: Gradually mix into boiling water and stir until smooth. Serve with any Nigerian soup.',
    'Drink: Soak in cold or warm water for a fibre-rich, nutty drink.',
    'With Protein: Serve alongside meat, fish, or chicken for a complete meal.',
  ],
  nutritionText: 'Farina Almond Mix boosts protein, healthy fats, and micronutrients (like vitamin E and magnesium) for improved satiety and nutritive value. Studies show acceptable sensory qualities and increased mineral content, making it great for health-conscious consumers who want a swallow that does more.',
  whoFor: [
    'Health-conscious consumers seeking higher nutrition',
    'Those looking for more protein and healthy fats in their diet',
    'Fitness enthusiasts and active individuals',
    'Anyone looking for a nutritious, tasty alternative',
  ],
  packaging: 'Branded packs sold nationwide. Moisture-protective packaging. NAFDAC compliant. Available in 500g and 1kg sizes.',
  waText: 'I want to order Farina Almond Mix',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function AlmondPage() {
  return <ProductLayout product={product} />;
}
