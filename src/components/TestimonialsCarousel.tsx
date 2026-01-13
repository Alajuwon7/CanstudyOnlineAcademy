'use client';

import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating?: number;
};

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="card carousel">
      <div className="quote">“{current.quote}”</div>
      <div className="person">
        <div className="avatar" aria-hidden />
        <div>
          <strong>{current.name}</strong>
          <p className="muted">{current.title}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => setIndex((index - 1 + items.length) % items.length)}>←</button>
        <div className="dots">
          {items.map((item, i) => (
            <span key={item.id} className={i === index ? "dot active" : "dot"} />
          ))}
        </div>
        <button onClick={() => setIndex((index + 1) % items.length)}>→</button>
      </div>

      <style jsx>{`
        .carousel {
          padding: 24px;
          display: grid;
          gap: 16px;
          background: #fff;
          border-radius: 18px;
          box-shadow: var(--shadow-card);
        }
        .quote {
          font-size: 18px;
          line-height: 1.6;
          color: var(--navy);
        }
        .person {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ed7d3a, #fbb27b);
        }
        .controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        button {
          border: none;
          background: rgba(13, 31, 58, 0.08);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          font-weight: 800;
          color: var(--navy);
          cursor: pointer;
        }
        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(13, 31, 58, 0.2);
        }
        .dot.active {
          background: var(--orange);
          width: 24px;
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}
