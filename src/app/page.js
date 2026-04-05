'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import RevealObserver from '../components/RevealObserver';
import Link from 'next/link';

const gallerySlides = [
  { src: '/img/main3.png', alt: 'Farina Products', caption: { title: 'Wholesome Farina', desc: 'Fibre-enriched for smoother digestion.' } },
  { src: '/img/main2.jpg', alt: 'Farina Variants', caption: { title: 'The Variants', desc: 'Tigernut, Almond & Plain Blends' } },
  { src: '/img/chinchin2.jpg', alt: 'Farina Crunchies', caption: { title: 'Crunchies Delight', desc: 'Super healthy snack from our farina blends' } },
  { src: '/img/chinchin3.jpg', alt: 'Farina Crunchies', caption: { title: 'Nutritious Crunch', desc: 'Fibre-enriched treat for all ages' } },
  { src: '/img/chinchin4.jpg', alt: 'Farina Crunchies', caption: { title: 'Healthy Snack', desc: 'Made from premium farina mixes' } },
  { src: '/img/chinchin5.jpg', alt: 'Farina Crunchies', caption: { title: 'Super Healthy', desc: 'Combines the best of all farina variants' } },
  { src: '/img/chinchin6.jpg', alt: 'Farina Crunchies', caption: { title: 'Everyday Delight', desc: 'Gluten-free and wholesome' } },
  { src: '/img/chinchin7.jpg', alt: 'Farina Crunchies', caption: { title: 'All Mixes Combined', desc: 'Ultimate healthy snack experience' } },
  { src: '/img/chinchin8.jpg', alt: 'Farina Crunchies', caption: { title: 'Fresh Crunch', desc: 'NAFDAC & SON approved — certified safe' } },
];

const servingSlides = [
  { src: '/img/suggestion.jpg', alt: 'Serving Suggestion 1' },
  { src: '/img/suggestion1.jpg', alt: 'Serving Suggestion 2' },
  { src: '/img/sugestion2.jpg', alt: 'Serving Suggestion 3' },
  { src: '/img/Suggestions 3.jpg', alt: 'Serving Suggestion 4' },
  { src: '/img/suggestion4.jpg', alt: 'Serving Suggestion 5' },
];

const products = [
  {
    name: 'Farina Swallow',
    desc: 'Plain cassava-extract, fibre-enriched and quick to prepare.',
    price: '500g – ₦2,500 · 1kg – ₦5,000',
    img: '/img/farina.png',
    href: '/products/swallow',
    waText: "Hi, I'd like to order Farina Swallow.",
    tag: null,
  },
  {
    name: 'Farina Almond Mix',
    desc: 'Cassava combined with almond for extra protein and healthy fats.',
    price: '500g – ₦3,500 · 1kg – ₦7,000',
    img: '/img/almondmix.png',
    href: '/products/almond',
    waText: "Hi, I'd like to order Farina Almond Mix.",
    tag: null,
  },
  {
    name: 'Farina Tiger Nut Mix',
    desc: 'Cassava blended with tiger nut for added fibre and nutty flavour.',
    price: '500g – ₦3,000 · 1kg – ₦6,000',
    img: '/img/farina-tigernut.png',
    href: '/products/tigernut',
    waText: "Hi, I'd like to order Farina Tiger Nut Mix.",
    tag: null,
  },
  {
    name: 'Chitu-Ka Farina Crunchies',
    desc: 'A super healthy snack made from all our farina mixes combined.',
    price: 'Small – ₦500 · Medium – ₦1,000 · Large – ₦2,000',
    img: '/img/chinchin.jpg',
    href: '/products/crunchies',
    waText: "Hi, I'd like to order Chitu-Ka Farina Crunchies.",
    tag: 'new',
  },
];

export default function HomePage() {
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setToastVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <RevealObserver />

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">🇳🇬 Proudly Nigerian · NAFDAC & SON Certified</div>
              <h1 className="hero-title">
                Wholesome <em>Farina</em> for Every Nigerian Home
              </h1>
              <p className="hero-desc">
                We produce premium fibre-enriched Farina Swallow blends — naturally safe, additive-free,
                and certified to the highest Nigerian food standards. Ready in just 3 minutes.
              </p>
              <div className="hero-actions">
                <Link href="#products" className="btn btn-primary">
                  <i className="fas fa-box-open"></i> See Products
                </Link>
                <Link href="#about-farina" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
              <div className="hero-trust">
                <span className="trust-badge"><i className="fas fa-shield-alt" style={{color:'var(--red)'}}></i> NAFDAC Approved</span>
                <span className="trust-dot">·</span>
                <span className="trust-badge"><i className="fas fa-certificate" style={{color:'var(--gold)'}}></i> SON Approved</span>
                <span className="trust-dot">·</span>
                <span className="trust-badge"><i className="fas fa-leaf" style={{color:'#22a163'}}></i> Gluten-Free</span>
                <span className="trust-dot">·</span>
                <span className="trust-badge"><i className="fas fa-bolt" style={{color:'var(--gold)'}}></i> Ready in 3 min</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-img-wrap">
                <img src="/img/main2.jpg" alt="Chitu-Ka Farina Products" loading="eager" />
              </div>
              <div className="hero-float-card top-left">
                <span className="float-icon">🌾</span>
                <span>Naturally Wholesome</span>
              </div>
              <div className="hero-float-card bottom-right">
                <span className="float-icon">✅</span>
                <span>No Preservatives Added</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">4+</div>
              <div className="stat-label">Product Variants</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">3min</div>
              <div className="stat-label">Prep Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2x</div>
              <div className="stat-label">NAFDAC & SON Certified</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">0%</div>
              <div className="stat-label">Preservatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT FARINA ===== */}
      <section id="about-farina" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img reveal">
              <img src="/img/main3.png" alt="About Farina Swallow" loading="lazy" />
            </div>
            <div className="reveal reveal-delay-1">
              <span className="section-label">What is Farina Swallow?</span>
              <h2 className="section-title">A Premium Swallow — Safe, Nutritious & Certified</h2>
              <p style={{color:'var(--muted)', lineHeight:'1.75', marginBottom:'0.75rem'}}>
                Farina Swallow is a modern, premium alternative to traditional swallow foods. Crafted from
                finest cassava, enriched with pure dietary fibre, and processed under strict hygienic conditions
                — it delivers the taste and texture Nigerians love, with superior nutrition.
              </p>
              <p style={{color:'var(--muted)', lineHeight:'1.75'}}>
                Every Chitu-Ka Farina product is <strong>NAFDAC-certified</strong> and <strong>SON-approved</strong>,
                guaranteeing quality and safety you can trust for your entire family.
              </p>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-title">Cyanide-Free</div>
                  <div className="benefit-text">Expertly processed to be completely safe — pure, clean nourishment for your family.</div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌿</div>
                  <div className="benefit-title">Fibre Enriched</div>
                  <div className="benefit-text">Added dietary fibre for improved digestion, lasting satiety, and blood sugar balance.</div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-title">Quick Prep</div>
                  <div className="benefit-text">Ready in just 3 minutes — smooth, delicious swallow with minimal effort.</div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌾</div>
                  <div className="benefit-title">Gluten-Free</div>
                  <div className="benefit-text">Naturally gluten-free, suitable for diverse dietary needs and lifestyles.</div>
                </div>
              </div>

              <div style={{marginTop:'1.75rem', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                <Link href="/serving-suggestions" className="btn btn-primary btn-sm">
                  View Serving Suggestions
                </Link>
                <Link href="#products" className="btn btn-ghost btn-sm">
                  See All Products
                </Link>
              </div>
            </div>
          </div>

          {/* Nutrition detail cards */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.25rem', marginTop:'3rem'}}>
            {[
              {
                name: 'Farina Swallow (Plain)',
                icon: '🍚',
                desc: 'Pure, clean energy for your day. Fibre-enriched for better digestion, steady energy release, and weight management. The wholesome everyday swallow your family deserves.',
              },
              {
                name: 'Farina Almond Mix',
                icon: '🥜',
                desc: 'Elevated with premium almond for extra protein, healthy fats, vitamin E and magnesium. A sophisticated blend for health-conscious consumers who want more from their meal.',
              },
              {
                name: 'Farina Tiger Nut Mix',
                icon: '🌰',
                desc: 'Naturally high in fibre with a distinctive nutty flavour. Low glycemic index, supports healthy cholesterol, and keeps you fuller for longer — great for weight management.',
              },
              {
                name: 'All Variants',
                icon: '✅',
                desc: 'Every variant is NAFDAC & SON approved, gluten-free, additive-free, and made with no preservatives. Certified quality you can taste in every bite.',
              },
            ].map((item) => (
              <div key={item.name} className="benefit-card reveal" style={{background:'white', border:'1px solid var(--border)'}}>
                <div className="benefit-icon">{item.icon}</div>
                <div className="benefit-title">{item.name}</div>
                <div className="benefit-text">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Who it's for */}
          <div style={{
            background:'linear-gradient(135deg, var(--red) 0%, #9e0c23 100%)',
            borderRadius:'var(--radius-lg)',
            padding:'2rem',
            marginTop:'2rem',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'2rem',
            alignItems:'center',
          }} className="reveal">
            <div>
              <h3 style={{fontFamily:'var(--font-display)', color:'white', marginBottom:'0.5rem'}}>Who It's For</h3>
              <p style={{color:'rgba(255,255,255,0.75)', fontSize:'0.92rem', lineHeight:'1.7'}}>
                Our products are NAFDAC-certified and SON-approved, sold nationwide in moisture-protective branded packaging.
              </p>
            </div>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              {['Health-conscious consumers', 'Weight watchers', 'Families seeking safe swallow options', 'Anyone who wants a quick, nutritious meal'].map(i => (
                <li key={i} style={{display:'flex', gap:'0.5rem', alignItems:'center', color:'rgba(255,255,255,0.85)', fontSize:'0.9rem'}}>
                  <span style={{color:'rgba(255,255,255,0.5)'}}>→</span> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section id="about-us" className="section" style={{background:'var(--cream)'}}>
        <div className="container">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">About Chitu-Ka Foods</h2>
          <p className="section-desc">
            A faith-driven food production company committed to promoting health and wellness through nutritious farina products.
          </p>

          <div className="about-us-grid reveal">
            <div className="vm-card">
              <img src="/img/vision.jpeg" alt="Vision" loading="lazy" />
              <div className="vm-body">
                <div className="vm-label">Vision Statement</div>
                <div className="vm-title">Our Vision</div>
                <p className="vm-text">"To be a trusted brand known for healthy, high-quality farina products that nourish lives and reflect excellence."</p>
              </div>
            </div>
            <div className="vm-card">
              <img src="/img/misson.jpeg" alt="Mission" loading="lazy" />
              <div className="vm-body">
                <div className="vm-label">Mission Statement</div>
                <div className="vm-title">Our Mission</div>
                <p className="vm-text">"To produce and deliver natural, nutritious farina products with integrity, guided by faith and a passion for promoting healthy living."</p>
              </div>
            </div>
          </div>

          <div className="values-card reveal">
            <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:'0.25rem'}}>Core Values</h3>
            <p style={{color:'var(--muted)', fontSize:'0.9rem'}}>The principles that guide everything we do at Chitu-Ka Foods.</p>
            <div className="values-grid">
              {[
                { icon: '🙏', name: 'Faith', desc: 'God as our foundation' },
                { icon: '🏆', name: 'Quality', desc: 'Excellence in every pack' },
                { icon: '💚', name: 'Health', desc: 'Wellness & vitality' },
                { icon: '🤝', name: 'Integrity', desc: 'Honesty & transparency' },
                { icon: '💡', name: 'Innovation', desc: 'Always improving' },
              ].map(v => (
                <div key={v.name} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-name">{v.name}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-story reveal">
            <div className="story-title">🏷️ About Chitu-Ka Foods</div>
            <p>Chitu-ka Foods is a flagship product line of Fari Fabulous Global Concept Limited, a faith-driven food production company committed to promoting health and wellness through nutritious farina products. We believe that good food is a gift from God and a source of strength for families and communities.</p>
            <p>Guided by faith and excellence, we produce and package premium farina (kPOKPO Garri) blends that nourish the body and reflect integrity in every detail. Our Farina Swallow is both <strong style={{color:'var(--earth-light)'}}>NAFDAC-certified</strong> and <strong style={{color:'var(--earth-light)'}}>SON-approved</strong> (Standards Organisation of Nigeria), giving you complete confidence in every pack.</p>
            <p>At Chitu-ka Foods, we combine traditional wisdom with modern standards to create foods that bring families together and inspire healthy living.</p>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="section products-section">
        <div className="container">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">Nourishing Every Home</h2>
          <p className="section-desc">Choose from our range of premium farina blends — each crafted for taste, health, and convenience.</p>

          <div className="products-grid">
            {products.map((p, i) => (
              <div key={p.name} className={`product-card reveal reveal-delay-${i % 3}`}>
                <div className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  {p.tag && <span className={`product-tag ${p.tag}`}>{p.tag === 'new' ? '🆕 New' : p.tag}</span>}
                </div>
                <div className="product-body">
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-price">
                    <i className="fas fa-tag" style={{fontSize:'0.8rem'}}></i>
                    {p.price}
                  </div>
                  <div className="product-actions">
                    <a
                      href={`https://wa.me/2348129002681?text=${encodeURIComponent(p.waText)}`}
                      className="btn btn-wa btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i> Order via WhatsApp
                    </a>
                    <Link href={p.href} className="btn btn-ghost btn-sm" style={{textAlign:'center', justifyContent:'center'}}>
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVING SUGGESTIONS ===== */}
      <section id="serving-suggestions" className="section" style={{background:'white'}}>
        <div className="container">
          <span className="section-label">How to Enjoy</span>
          <h2 className="section-title">Serving Suggestions</h2>
          <p className="section-desc">Recommended ways to serve and enjoy our Farina products.</p>

          <div className="serving-grid" style={{marginTop:'2.5rem'}}>
            <div className="reveal">
              <Carousel slides={servingSlides} interval={3500} aspect="4/3" />
            </div>
            <div className="reveal reveal-delay-1">
              <h3 style={{fontFamily:'var(--font-display)', marginBottom:'0.75rem'}}>3 Easy Ways to Enjoy</h3>
              <p style={{color:'var(--muted)', marginBottom:'1.5rem', lineHeight:'1.7'}}>
                Farina is incredibly versatile — serve it as a traditional swallow, a fibre-rich drink, or alongside your favourite protein dish.
              </p>
              <div className="prep-steps">
                {[
                  { title: 'As a Swallow', desc: 'Boil water, gradually stir in Farina until you get a smooth, firm consistency. Serve with any Nigerian soup.' },
                  { title: 'As a Drink', desc: 'Soak in cold or warm water for a quick fibre-rich drink — great for digestion and a light breakfast.' },
                  { title: 'With Protein', desc: 'Serve alongside grilled or stewed meat, fish, or chicken for a complete, balanced meal.' },
                ].map((s, i) => (
                  <div key={i} className="prep-step">
                    <div className="step-num">{i + 1}</div>
                    <div className="step-content">
                      <div className="step-title">{s.title}</div>
                      <div className="step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'1.75rem'}}>
                <Link href="/serving-suggestions" className="btn btn-outline btn-sm">
                  See Full Suggestions Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">A Glimpse of Our Products</h2>
          <p className="section-desc">Click on any image below to view it in full size.</p>

          <div className="gallery-carousel reveal" style={{position:'relative', marginTop:'2rem'}}>
            <Carousel slides={gallerySlides} interval={4500} aspect="16/7" showCaptions={true} />
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section" style={{background:'white'}}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-desc">Ready to order or have a question? We'd love to hear from you.</p>

          <div className="contact-grid">
            <div className="contact-card reveal">
              <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', marginBottom:'1.25rem'}}>Contact Information</h3>
              {[
                { icon: 'fas fa-map-marker-alt', label: 'Address', value: 'EBIS New Road, Yenagoa, Bayelsa State', href: null },
                { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: '+234 812 900 2681', href: 'https://wa.me/2348129002681' },
                { icon: 'fas fa-envelope', label: 'Email', value: 'chitukafoodsng@gmail.com', href: 'mailto:chitukafoodsng@gmail.com' },
                { icon: 'fab fa-facebook', label: 'Facebook', value: 'Chitu-Ka Foods', href: 'https://www.facebook.com/share/1BQJb95qHg/' },
              ].map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon"><i className={item.icon}></i></div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">{item.value}</a>
                        : item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-card reveal reveal-delay-1">
              <h3>Ready to Order?</h3>
              <p>
                For orders, click the "Order via WhatsApp" buttons on any product, or message us directly. We deliver nationwide across Nigeria.
              </p>
              <p style={{fontSize:'0.85rem', opacity:0.7}}>
                Available packaging: 500g & 1kg packs for swallow variants. Crunchies available in small sachets, medium cups, and large refill pouches.
              </p>
              <a
                href="https://wa.me/2348129002681?text=Hello%20Chitu-Ka%20Foods%2C%20I%27d%20like%20to%20make%20an%20order."
                className="btn-wa-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" style={{fontSize:'1.2rem'}}></i>
                Chat with Us on WhatsApp
              </a>
              <div style={{display:'flex', gap:'0.75rem', marginTop:'0.5rem'}}>
                <span style={{fontSize:'0.8rem', opacity:0.65}}>✓ Fast response</span>
                <span style={{fontSize:'0.8rem', opacity:0.65}}>✓ Nationwide delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ===== NEW PRODUCT TOAST ===== */}
      {toastVisible && (
        <div className="toast">
          <div className="toast-header">
            <div className="toast-title">🆕 New Product Alert!</div>
            <button className="toast-close" onClick={() => setToastVisible(false)} aria-label="Close">×</button>
          </div>
          <div className="toast-body">
            Check out our new <strong>Chitu-Ka Farina Crunchies</strong> — a super healthy snack made from all our farina mixes.
          </div>
          <div className="toast-action">
            <Link href="/products/crunchies" className="btn btn-primary btn-sm" onClick={() => setToastVisible(false)}>
              Check it out →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
