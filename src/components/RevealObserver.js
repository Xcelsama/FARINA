'use client';
import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(r => io.observe(r));
    return () => io.disconnect();
  }, []);

  return null;
}
