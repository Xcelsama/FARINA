import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/img/logo.jpg" alt="CHITU-KA FOODS" width={48} height={48} />
            <div className="footer-brand-name">CHITU-KA FOODS</div>
            <p className="footer-tagline">
              A faith-driven food production company committed to promoting health and wellness
              through nutritious farina products. Proudly Nigerian.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1BQJb95qHg/" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/2348129002681" className="social-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:chitukafoodsng@gmail.com" className="social-btn" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-title">Products</div>
            <ul className="footer-links">
              <li><Link href="/products/swallow">Farina Swallow</Link></li>
              <li><Link href="/products/almond">Farina Almond Mix</Link></li>
              <li><Link href="/products/tigernut">Farina Tiger Nut Mix</Link></li>
              <li><Link href="/products/crunchies">Farina Crunchies</Link></li>
              <li><Link href="/serving-suggestions">Serving Suggestions</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Contact</div>
            <ul className="footer-links">
              <li><a href="https://wa.me/2348129002681" target="_blank" rel="noopener noreferrer">+234 812 900 2681</a></li>
              <li><a href="mailto:chitukafoodsng@gmail.com">chitukafoodsng@gmail.com</a></li>
              <li style={{color:'rgba(255,255,255,0.4)', fontSize:'0.85rem', lineHeight:'1.5'}}>EBIS New Road, Yenagoa, Bayelsa State, Nigeria</li>
            </ul>
            <div style={{marginTop:'1.25rem'}}>
              <span className="nafdac-badge">✓ NAFDAC Approved</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} CHITU-KA FOODS · Fari Fabulous Global Concept Ltd</div>
          <div style={{display:'flex', gap:'1rem'}}>
            <a href="https://wa.me/2348129002681" style={{color:'rgba(255,255,255,0.45)', fontSize:'0.82rem'}} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.facebook.com/share/1BQJb95qHg/" style={{color:'rgba(255,255,255,0.45)', fontSize:'0.82rem'}} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
