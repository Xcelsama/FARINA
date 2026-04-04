import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Serving Suggestions — CHITU-KA FOODS',
  description: 'Recommended ways to serve and enjoy our Farina products.',
};

const images = [
  { src: '/img/suggestion.jpg', alt: 'Serving Suggestion 1' },
  { src: '/img/suggestion1.jpg', alt: 'Serving Suggestion 2' },
  { src: '/img/sugestion2.jpg', alt: 'Serving Suggestion 3' },
  { src: '/img/Suggestions 3.jpg', alt: 'Serving Suggestion 4' },
  { src: '/img/suggestion4.jpg', alt: 'Serving Suggestion 5' },
];

export default function ServingSuggestionsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <div style={{background:'var(--cream)', padding:'3.5rem 0 2rem', borderBottom:'1px solid var(--border)'}}>
          <div className="container">
            <Link href="/" className="back-link">← Back to Home</Link>
            <span className="section-label">How to Enjoy</span>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,5vw,3rem)', marginBottom:'0.75rem'}}>
              Serving Suggestions
            </h1>
            <p style={{color:'var(--muted)', fontSize:'1.05rem', maxWidth:'520px', lineHeight:'1.7'}}>
              Recommended ways to serve and enjoy our Farina products. Versatile, delicious, and nutritious — every time.
            </p>
          </div>
        </div>

        {/* Ways to serve */}
        <section className="section">
          <div className="container">
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.6rem', marginBottom:'0.5rem'}}>3 Ways to Serve Farina</h2>
            <p style={{color:'var(--muted)', marginBottom:'2.5rem'}}>Simple, flexible, and always satisfying.</p>

            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.5rem', marginBottom:'3rem'}}>
              {[
                {
                  icon: '🍲',
                  title: 'As a Swallow',
                  desc: 'The classic Nigerian way. Gradually pour Farina into boiling water while stirring until smooth and firm. Serve with any soup — egusi, oha, banga, okra, or afang.',
                  tip: 'Ready in just 3 minutes!'
                },
                {
                  icon: '🥤',
                  title: 'As a Drink',
                  desc: 'Stir or soak Farina in cold or warm water for a quick, fibre-rich beverage. Add honey or a pinch of sugar to taste. Great as a light breakfast or post-workout drink.',
                  tip: 'Great for digestion.'
                },
                {
                  icon: '🍗',
                  title: 'With Protein',
                  desc: 'Serve Farina Swallow alongside grilled chicken, stewed beef, baked fish, or smoked turkey for a complete, balanced, protein-rich Nigerian meal.',
                  tip: 'Balanced & filling.'
                },
              ].map(item => (
                <div key={item.title} style={{
                  background:'white',
                  borderRadius:'var(--radius-lg)',
                  padding:'1.75rem',
                  border:'1px solid var(--border)',
                  boxShadow:'var(--shadow)',
                }}>
                  <div style={{fontSize:'2.5rem', marginBottom:'0.75rem'}}>{item.icon}</div>
                  <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.15rem', marginBottom:'0.5rem'}}>{item.title}</h3>
                  <p style={{color:'var(--muted)', fontSize:'0.9rem', lineHeight:'1.7', marginBottom:'0.75rem'}}>{item.desc}</p>
                  <span style={{
                    display:'inline-block',
                    background:'rgba(200,16,46,0.07)',
                    color:'var(--red)',
                    borderRadius:'100px',
                    padding:'0.2rem 0.65rem',
                    fontSize:'0.75rem',
                    fontWeight:'700',
                  }}>{item.tip}</span>
                </div>
              ))}
            </div>

            {/* Gallery grid */}
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.6rem', marginBottom:'0.5rem'}}>Photo Gallery</h2>
            <p style={{color:'var(--muted)', marginBottom:'2rem'}}>Visual serving ideas to inspire your next Farina meal.</p>

            <div className="suggestion-grid">
              {images.map((img, i) => (
                <div key={i} className="suggestion-img">
                  <img src={img.src} alt={img.alt} loading={i < 2 ? 'eager' : 'lazy'} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              background:'linear-gradient(135deg, var(--dark), #2d1a0e)',
              borderRadius:'var(--radius-lg)',
              padding:'2.5rem',
              marginTop:'3rem',
              textAlign:'center',
              color:'white',
            }}>
              <h3 style={{fontFamily:'var(--font-display)', color:'var(--earth-light)', marginBottom:'0.75rem', fontSize:'1.5rem'}}>
                Ready to Try Chitu-Ka Farina?
              </h3>
              <p style={{color:'rgba(255,255,255,0.7)', marginBottom:'1.5rem', maxWidth:'400px', margin:'0 auto 1.5rem'}}>
                Order directly via WhatsApp and get your favourite Farina variant delivered to your door.
              </p>
              <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
                <a
                  href="https://wa.me/2348129002681?text=Hello%20Chitu-Ka%20Foods%2C%20I%27d%20like%20to%20make%20an%20order."
                  className="btn btn-wa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
                <Link href="/#products" className="btn btn-outline" style={{color:'white', borderColor:'rgba(255,255,255,0.3)'}}>
                  See All Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
