import ProductLayout from '../../../components/ProductLayout';

export const metadata = {
  title: 'Chitu-Ka Farina Crunchies — CHITU-KA FOODS',
  description: 'A super healthy snack made from all our farina mixes — combining plain, almond, and tiger nut blends.',
};

const product = {
  name: 'Chitu-Ka Farina Crunchies',
  producer: 'CHITU-KA FOODS',
  desc: 'Introducing our newest product — Chitu-Ka Farina Crunchies! A delightful, guilt-free snack that brings together the best of all our premium farina blends in one irresistible crunchy bite.',
  price: 'Small sachet · Medium cup · Large refill pouch — ₦500–₦2,000',
  img: '/img/chinchin.jpg',
  imgAlt: 'Chitu-Ka Farina Crunchies',
  benefits: [
    'The ultimate healthy snack — all the goodness of our farina blends in every crunch',
    'Completely cyanide-free, additive-free, and made with zero preservatives',
    'Rich in dietary fibre — a snack that actually supports your health',
    'Available in three sizes — perfect for on-the-go, sharing, or stocking up',
  ],
  prepMethods: [
    'As a Snack: Enjoy straight from the pack — satisfying, crunchy, and wholesome.',
    'With Drinks: Pair with tea, juice, or your favourite cold drink for a perfect combination.',
    'As a Side: Serve alongside meals as a healthy, fibre-rich alternative to regular chin-chin.',
  ],
  nutritionText: 'Chitu-Ka Farina Crunchies are crafted from our full range of premium farina blends, combining the protein of almond, the exceptional fibre of tiger nut, and the clean energy of plain farina — all in one delicious snack. No junk, no guilt — just wholesome, certified crunch the whole family will love.',
  whoFor: [
    'Health-conscious snack lovers who refuse to compromise on quality',
    'Families wanting a certified, safe treat for children and adults alike',
    'Anyone seeking a wholesome, fibre-rich alternative to traditional chin-chin',
    'On-the-go professionals who need a nutritious, satisfying snack',
  ],
  packaging: 'Available in small sachet packs, medium cups (with lids), and large resealable refill pouches. NAFDAC certified · SON approved. Sold nationwide.',
  waText: 'I want to order Chitu-Ka Farina Crunchies',
  servingNote: 'Recommended ways to serve and enjoy our Farina products.',
};

export default function CrunchiesPage() {
  return <ProductLayout product={product} />;
}
