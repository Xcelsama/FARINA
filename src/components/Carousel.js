'use client';
import { useState, useEffect, useCallback } from 'react';

export default function Carousel({ slides, autoPlay = true, interval = 4000, aspect = '4/3', showCaptions = false }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, next]);

  return (
    <div className="carousel-wrap">
      <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img
              src={slide.src}
              alt={slide.alt || `Slide ${i + 1}`}
              style={{ width: '100%', aspectRatio: aspect, objectFit: 'cover' }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {showCaptions && slides[current]?.caption && (
        <div className="gallery-caption">
          <h5>{slides[current].caption.title}</h5>
          <p>{slides[current].caption.desc}</p>
        </div>
      )}

      <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>
      <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
