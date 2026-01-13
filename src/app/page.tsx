'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard, { Course } from "@/components/CourseCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const courses: Course[] = [
  {
    id: "accounting",
    title: "Business accounting and taxation fundamental",
    category: "Design",
    instructor: "Matthew Taylor",
    lessons: 10,
    students: 18,
    rating: 4.9,
    reviews: 20,
    price: 55,
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "finance-planning",
    title: "Finance fundamentals of management and planning",
    category: "Finance",
    instructor: "Leonel Mooney",
    lessons: 22,
    students: 30,
    rating: 4.8,
    reviews: 39,
    price: 65,
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "app-design",
    title: "Introduction to application design and development",
    category: "Design",
    instructor: "Herman Miller",
    lessons: 15,
    students: 55,
    rating: 4.9,
    reviews: 55,
    price: 80,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "genetic",
    title: "Genetic testing and sequencing technique",
    category: "Medicine",
    instructor: "Shoko Mugikura",
    lessons: 10,
    students: 34,
    rating: 4.8,
    reviews: 42,
    price: 60,
    image: "https://images.unsplash.com/photo-1508387024700-9fe5c0b37f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "web-visual",
    title: "Introduction to web design and visualization",
    category: "Design",
    instructor: "Alexa Harvard",
    lessons: 20,
    students: 59,
    rating: 4.9,
    reviews: 56,
    price: 70,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "english",
    title: "Improve your english vocabulary and language",
    category: "Business",
    instructor: "Leonel Mooney",
    lessons: 18,
    students: 80,
    rating: 4.7,
    reviews: 76,
    price: 45,
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Herman Miller",
    title: "Behavioral science",
    quote: "Course materials were good, the mentoring approach was good and working with other people via the internet was good.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alexa Harvard",
    title: "Product designer",
    quote: "Premium learning experience with expert instructors. The projects are practical and truly career-ready.",
    rating: 5,
  },
  {
    id: 3,
    name: "Leonel Mooney",
    title: "Financial analyst",
    quote: "Outstanding online learning that fits my schedule. Mentors are responsive and supportive.",
    rating: 5,
  },
];

const blog = [
  {
    id: 1,
    title: "How to evaluate the effective of training programs.",
    excerpt: "Lorem ipsum has been industry standard dummy text ever...",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    author: "Andy Glamer",
    likes: 65,
  },
  {
    id: 2,
    title: "Experience the breathtaking views and perspectives.",
    excerpt: "Lorem ipsum has been industry standard dummy text ever...",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=900&q=80",
    author: "Den Viliamson",
    likes: 35,
  },
  {
    id: 3,
    title: "Build up healthy habits and strong peaceful life.",
    excerpt: "Lorem ipsum has been industry standard dummy text ever...",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
    author: "Jones Robbert",
    likes: 58,
  },
];

const partners = ["Walmart", "Logitech", "Invision", "Yahoo", "Monday.com"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = useMemo(
    () => (activeCategory === "All" ? courses : courses.filter((c) => c.category === activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="bg-shape" aria-hidden />
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="pill">Premium learning experience</span>
              <h1>Providing amazing online courses.</h1>
              <p className="lead">Master the skills that matter to you with flexible, guided, and outcome-driven learning.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#courses">
                  Explore courses
                </a>
                <a className="btn btn-ghost" href="#testimonials">
                  Why students trust us →
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>99%</strong>
                  <span>Students complete course successfully.</span>
                </div>
                <div>
                  <strong>1.8k+</strong>
                  <span>Career transitions powered.</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image primary">
                <Image
                  src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80"
                  alt="Learner at desk"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="hero-image secondary">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                  alt="Live class"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-tight why" id="about">
          <div className="container-wide cards-grid">
            {[
              { title: "Master the skills that matter to you", desc: "Web-based training you can consume at your own pace. Courses are interactive." },
              { title: "Connect with effective methods", desc: "Mentor-led sessions, live workshops, and on-demand content keep you on track." },
              { title: "Increase your learning skills", desc: "Sharpen the habits that make you unstoppable with accountability and feedback." },
            ].map((item) => (
              <article key={item.title} className="card feature">
                <span className="pill">Featured</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section courses" id="courses">
          <div className="container">
            <div className="section-heading courses-head">
              <div>
                <span className="overline">Courses</span>
                <h2>Popular courses</h2>
              </div>
              <div className="filters">
                {["All", "Design", "Business", "Finance", "Medicine"].map((cat) => (
                  <button
                    key={cat}
                    className={`chip ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid course-grid">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <div className="note-bar">
              <p>We help you find the perfect tutor. It&apos;s completely free.</p>
              <a className="link-arrow" href="#courses">
                Explore all courses →
              </a>
            </div>
          </div>
        </section>

        <section className="section premium" id="how">
          <div className="container premium-grid">
            <div className="premium-visual">
              <div className="floating-card">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="premium-copy">
              <span className="pill">Premium learning experience</span>
              <h2>Providing amazing online courses.</h2>
              <ul className="premium-list">
                <li>
                  <strong>Master the skills that matter to you</strong>
                  <p>Web-based training you can consume at your own pace. Courses are interactive.</p>
                </li>
                <li>
                  <strong>Connect with effective methods</strong>
                  <p>On-demand and live sessions so you can learn whenever and wherever you want.</p>
                </li>
                <li>
                  <strong>Increase your learning skills</strong>
                  <p>Accountability, community, and feedback to help you reach your next level.</p>
                </li>
              </ul>
              <a className="btn btn-primary" href="#courses">
                Explore courses
              </a>
            </div>
          </div>
        </section>

        <section className="marquee-wrap">
          <div className="marquee">
            <span>Outstanding online learning</span>
            <span>Outstanding online learning</span>
            <span>Outstanding online learning</span>
          </div>
          <div className="marquee-overlay">
            <h3>Online learning wherever and whenever.</h3>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="container testimonials-grid">
            <div className="testimonial-copy">
              <span className="pill">Students feedback</span>
              <h2>Trusted by genius people.</h2>
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictum nec.
              </p>
              <div className="stat-block">
                <strong>99%</strong>
                <span>Student&apos;s complete course successfully.</span>
              </div>
            </div>
            <TestimonialsCarousel items={testimonials} />
          </div>
          <div className="container partners">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section className="section blog" id="blog">
          <div className="container">
            <div className="section-heading blog-head">
              <div>
                <span className="overline">Articles</span>
                <h2>Latest articles</h2>
              </div>
              <a className="link-arrow" href="#">
                Explore all articles →
              </a>
            </div>

            <div className="grid blog-grid">
              {blog.map((post) => (
                <article key={post.id} className="card blog-card">
                  <div className="thumb">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="body">
                    <div className="author">
                      <span className="avatar" />
                      <span>
                        By <strong>{post.author}</strong>
                      </span>
                      <span className="likes">♥ {post.likes}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="cta-slim">
              <div className="cta-item">
                <span className="icon" aria-hidden>
                  ?
                </span>
                <div>
                  <strong>Looking for help?</strong>
                  <a className="link-arrow" href="mailto:help@canstudy.academy">
                    Contact us today
                  </a>
                </div>
              </div>
              <div className="cta-item">
                <span className="icon" aria-hidden>
                  ★
                </span>
                <div>
                  <strong>Keep in touch.</strong>
                  <a className="link-arrow" href="https://facebook.com" target="_blank" rel="noreferrer">
                    Like us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .hero {
          position: relative;
          padding: 56px 0 80px;
          overflow: hidden;
        }
        .bg-shape {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(237, 125, 58, 0.28), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(13, 31, 58, 0.14), transparent 35%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(244, 246, 251, 0.9));
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          display: grid;
          gap: 36px;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          align-items: center;
        }
        .hero-copy h1 {
          font-size: clamp(36px, 6vw, 54px);
          line-height: 1.05;
          margin: 10px 0 14px;
        }
        .lead {
          max-width: 540px;
          color: var(--muted);
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin: 18px 0 12px;
          flex-wrap: wrap;
        }
        .hero-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          margin-top: 12px;
        }
        .hero-meta strong {
          display: block;
          font-size: 26px;
          color: var(--navy);
        }
        .hero-visual {
          position: relative;
          min-height: 380px;
        }
        .hero-image {
          position: absolute;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .hero-image.primary {
          inset: 0 0 0 10%;
        }
        .hero-image.secondary {
          width: 42%;
          height: 48%;
          bottom: -24px;
          right: 0;
          border: 6px solid #fff;
        }
        .hero-image :global(img) {
          object-fit: cover;
        }
        .cards-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .feature {
          padding: 24px;
          display: grid;
          gap: 10px;
        }
        .feature h3 {
          font-size: 20px;
        }
        .courses {
          position: relative;
        }
        .courses-head {
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .chip {
          border: 1px solid rgba(14, 34, 68, 0.12);
          border-radius: 999px;
          padding: 10px 16px;
          background: #fff;
          color: var(--navy);
          font-weight: 600;
        }
        .chip.active {
          background: var(--navy);
          color: #fff;
          box-shadow: 0 12px 20px rgba(13, 31, 58, 0.18);
        }
        .course-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          margin-top: 24px;
        }
        .note-bar {
          margin-top: 24px;
          padding: 14px 18px;
          border-radius: 14px;
          background: linear-gradient(90deg, rgba(13, 31, 58, 0.08), rgba(237, 125, 58, 0.08));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--navy);
          font-weight: 600;
        }
        .link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          color: var(--navy);
        }
        .premium {
          background: #fff;
        }
        .premium-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          align-items: center;
        }
        .premium-visual {
          position: relative;
          min-height: 480px;
        }
        .floating-card {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          background: linear-gradient(135deg, #d9e9ff, #fff);
        }
        .floating-card :global(img) {
          object-fit: cover;
        }
        .premium-copy h2 {
          font-size: clamp(30px, 4vw, 42px);
        }
        .premium-list {
          list-style: none;
          padding: 0;
          margin: 18px 0 22px;
          display: grid;
          gap: 14px;
        }
        .premium-list li strong {
          display: block;
          margin-bottom: 6px;
        }
        .premium-list p {
          margin: 0;
          color: var(--muted);
        }
        .marquee-wrap {
          position: relative;
          background: var(--navy);
          color: #fff;
          padding: 40px 0;
          overflow: hidden;
        }
        .marquee {
          animation: slide 16s linear infinite;
          opacity: 0.12;
        }
        .marquee span {
          text-transform: uppercase;
          font-weight: 800;
        }
        .marquee-overlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          text-align: center;
          pointer-events: none;
        }
        .marquee-overlay h3 {
          font-size: clamp(24px, 3vw, 34px);
          color: #fff;
          margin: 0;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .testimonials {
          background: #f6f8fe;
        }
        .testimonials-grid {
          display: grid;
          gap: 26px;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          align-items: center;
        }
        .testimonial-copy h2 {
          margin: 6px 0 10px;
        }
        .stat-block {
          margin-top: 18px;
          padding: 14px 16px;
          border-radius: 14px;
          background: #fff;
          box-shadow: var(--shadow-card);
          display: grid;
          gap: 4px;
          width: fit-content;
        }
        .stat-block strong {
          font-size: 30px;
          color: var(--navy);
        }
        .partners {
          margin-top: 24px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: center;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .blog-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .blog-grid {
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          margin-top: 20px;
        }
        .blog-card {
          display: grid;
          grid-template-rows: 240px 1fr;
        }
        .blog-card .thumb {
          position: relative;
        }
        .blog-card .body {
          padding: 18px;
          display: grid;
          gap: 10px;
        }
        .author {
          display: flex;
          gap: 10px;
          align-items: center;
          color: var(--muted);
          font-weight: 600;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ed7d3a, #fbb27b);
        }
        .likes {
          margin-left: auto;
          color: var(--navy);
        }
        .cta-slim {
          margin-top: 22px;
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          align-items: center;
        }
        .cta-item {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 14px 16px;
          background: #fff;
          border-radius: 14px;
          box-shadow: var(--shadow-soft);
        }
        .cta-item .icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(13, 31, 58, 0.08);
          display: grid;
          place-items: center;
          font-weight: 800;
          color: var(--navy);
        }
      `}</style>
    </>
  );
}
