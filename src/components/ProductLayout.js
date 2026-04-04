import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';

export default function ProductLayout({ product }) {
  const {
    name, producer, desc, price, img, imgAlt,
    benefits, prepMethods, nutritionText, whoFor,
    packaging, waText, servingNote,
    allergenNote,
  } = product;

  return (
    <>
      <Navbar />
      <main className="product-detail">
        <div className="container">
          <Link href="/#products" className="back-link">
            ← Back to Products
          </Link>

          <div className="product-detail-grid">
            {/* Image */}
            <div className="product-detail-img">
              <img src={img} alt={imgAlt || name} loading="eager" />
            </div>

            {/* Content */}
            <div className="product-detail-content">
              <div className="detail-label">Produced by {producer}</div>
              <h1 className="detail-name">{name}</h1>
              <p className="detail-desc">{desc}</p>

              <div className="detail-price">
                <i className="fas fa-tag"></i>
                <span>{price}</span>
              </div>

              {allergenNote && (
                <div style={{
                  background:'rgba(255,193,7,0.1)',
                  border:'1px solid rgba(255,193,7,0.3)',
                  borderRadius:'var(--radius)',
                  padding:'0.75rem 1rem',
                  fontSize:'0.85rem',
                  color:'#7a5c00',
                  marginBottom:'1.5rem',
                  display:'flex', gap:'0.5rem', alignItems:'center',
                }}>
                  <i className="fas fa-exclamation-triangle"></i>
                  {allergenNote}
                </div>
              )}

              <div className="detail-section">
                <h4>Benefits</h4>
                <ul className="detail-list">
                  {benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>

              <div className="detail-section">
                <h4>Preparation Methods</h4>
                <ol className="detail-list numbered">
                  {prepMethods.map((m, i) => <li key={i}>{m}</li>)}
                </ol>
              </div>

              <div className="detail-section">
                <h4>Health &amp; Nutrition Benefits</h4>
                <p style={{fontSize:'0.92rem', color:'var(--mid)', lineHeight:'1.75'}}>{nutritionText}</p>
              </div>

              <div className="detail-section">
                <h4>Who It's For</h4>
                <ul className="detail-list">
                  {whoFor.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>

              <div className="detail-section">
                <h4>Packaging &amp; Distribution</h4>
                <p style={{fontSize:'0.88rem', color:'var(--muted)', lineHeight:'1.65'}}>{packaging}</p>
              </div>

              {servingNote && (
                <p style={{fontSize:'0.85rem', color:'var(--muted)', marginBottom:'1rem'}}>
                  {servingNote} <Link href="/serving-suggestions" style={{fontWeight:600}}>View Serving Suggestions →</Link>
                </p>
              )}

              <div className="detail-actions">
                <a
                  href={`https://wa.me/2348129002681?text=${encodeURIComponent(waText)}`}
                  className="btn btn-wa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Order Now via WhatsApp
                </a>
                <Link href="/#products" className="btn btn-ghost">
                  ← View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
