import Link from "next/link";

const footerNav = ["Home", "About", "Courses", "Instructors", "Testimonial", "Blog", "Contact"];
const popular = ["Business finance", "Advanced design", "Web development", "Data visualization"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <span className="dot" />
            <div>
              <strong>Canstudy</strong>
              <p className="muted">Online Academy</p>
            </div>
          </div>
          <p className="muted">We are providing high-quality courses for about ten years.</p>
          <div className="social">
            {["Fb.", "Ig.", "Tw.", "Be."].map((item) => (
              <a key={item} href="#" aria-label={item}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Popular courses</h4>
          <ul>
            {popular.map((item) => (
              <li key={item}>
                <a href="#courses">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Need help?</h4>
          <p className="muted">Call us directly?</p>
          <a className="phone" href="tel:+12345678910">
            +1 234 567 8910 <span className="pill small">Free</span>
          </a>
          <p className="muted" style={{ marginTop: 12 }}>
            Need support?
          </p>
          <a className="link" href="mailto:help@domain.com">
            help@domain.com
          </a>
        </div>

        <div>
          <h4>Subscribe our newsletter</h4>
          <form className="newsletter">
            <input className="input" type="email" placeholder="Your email" />
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
            <div className="privacy">
              <span className="icon" aria-hidden>
                🔒
              </span>
              <span>Protecting your privacy</span>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="links">
            {footerNav.map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
          </div>
          <p className="muted">
            © 2026 Crafto is Proudly Powered by <a href="https://themezaa.com">ThemeZaa</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f1f3a;
          color: #fff;
          padding: 72px 0 32px;
          position: relative;
        }
        .footer-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        h4 {
          margin: 0 0 12px;
          font-size: 18px;
        }
        p {
          margin: 0 0 12px;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        .muted {
          color: rgba(255, 255, 255, 0.7);
        }
        .logo {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 10px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--orange);
        }
        .social {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .phone {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
        }
        .newsletter .btn {
          justify-content: center;
        }
        .privacy {
          display: flex;
          gap: 8px;
          align-items: center;
          color: rgba(255, 255, 255, 0.75);
          font-size: 14px;
        }
        .privacy .icon {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
        }
        .footer-bottom {
          margin-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 18px;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer-bottom .links {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .links a {
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
}
