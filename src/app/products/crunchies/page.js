import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Chitu-Ka Farina Crunchies — CHITU-KA FOODS',
  description: 'A super healthy snack made from all our farina mixes — combining plain, almond, and tiger nut blends.',
};

const product = {
  name: 'Chitu-Ka Farina Crunchies',
  producer: 'CHITU-KA FOODS',
  desc: 'A delightful snack made from all our farina mixes, combining the best of plain, almond, and tiger nut blends for a super healthy, crunchy treat. Our newest product!',
  price: 'Small sachet (red dotted nylon) · Medium cup (plastic lid) · Large refill pouch — ₦500–₦2,000',
  img: '/img/chinchin.jpg',
  imgAlt: 'Chitu-Ka Farina Crunchies',
  benefits: [
    'Super healthy snack combining benefits of all farina variants',
    'Gluten-free and naturally fibre-enriched',
    'Cyanide-free and additive-free — entirely wholesome',
    'Available in multiple pack sizes for every occasion',
  ],
  prepMethods: [
    'As a Snack: Enjoy straight from the pack as a satisfying crunchy treat.',
    'With Drinks: Pair with your favourite beverage — tea, juice, or a cold drink.',
    'As a Side: Serve alongside meals as a healthy alternative to traditional chin-chin.',
  ],
  nutritionText: 'Chitu-Ka Farina Crunchies are crafted from our premium farina mixes, offering a blend of fibre, protein, and healthy fats from both almond and tiger nut variants. Cyanide-free and additive-free, they make a wholesome snack that supports digestion, weight management, and overall wellness — guilt-free crunch for the whole family.',
  whoFor: [
    'Health-conscious snack lovers of all ages',
    'Families seeking safe, nutritious treats for children and adults',
    'Anyone looking for a fibre-rich alternative to traditional chin-chin',
    'On-the-go professionals who want a healthy snack option',
  ],
  packaging: 'Available in small sachet packs (red dotted nylon), medium cups (plastic containers with lids), and large refill packs (resealable pouches). NAFDAC compliant. Sold nationwide.',
  waText: 'I want to order Chitu-Ka Farina Crunchies',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function CrunchiesPage() {
  return <ProductLayout product={product} />;
}
