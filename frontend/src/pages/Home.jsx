import { Link } from "react-router-dom";
import "../styles/home.css";
import gsap from "gsap";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".hero",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      ".search-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.9 }
    );

    gsap.utils.toArray(".search-box input").forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(".search-box", {
          scale: 1.05,
          duration: 0,
          ease: "power1.out",
        });
      });

      input.addEventListener("blur", () => {
        gsap.to(".search-box", { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Expert legal guidance at your <span>fingertips.</span> <br />
          Connecting you with <span>trusted lawyers,</span> anytime, anywhere.
        </h1>
        <button className="cta-button">Search For Lawyers</button>
        <p className="side-text">
          Get ready to <span className="highlight">accelerate your career</span>{" "}
          with customized courses and leave your mark in the legal industry.
        </p>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for lawyers, specializations..."
          />
          <button className="search-btn">Search</button>
        </div>
      </section>

      {/* Featured Lawyers */}
      <section className="featured-lawyers">
        <h2>Top Lawyers</h2>
        <div className="lawyer-cards">
          <div className="lawyer-card">
            <h3>John Doe</h3>
            <p>Criminal Law | 10+ Years Experience</p>
            <span>⭐ 4.9</span>
            <br />
            <Link to="/lawyer/1" className="btn-primary">
              View Profile
            </Link>
          </div>

          <div className="lawyer-card">
            <h3>Jane Smith</h3>
            <p>Corporate Law | 8+ Years Experience</p>
            <span>⭐ 4.8</span>
            <br />
            <Link to="/lawyer/2" className="btn-primary">
              View Profile
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Search for a Lawyer</h3>
            <p>Find top-rated lawyers based on your legal needs.</p>
          </div>
          <div className="step">
            <h3>2. Book a Consultation</h3>
            <p>Select a date and time for your consultation.</p>
          </div>
          <div className="step">
            <h3>3. Get Legal Advice</h3>
            <p>Connect with a lawyer and get expert guidance.</p>
          </div>
        </div>
      </section>

      {/* Live Consultation Section */}
      <section className="live-consultation">
        <h2>🔴 Live Consultation</h2>
        <p>
          Connect instantly with a lawyer through video calls and get real-time
          legal assistance.
        </p>
        <Link to="/live-consultation" className="btn-primary">
          Start Live Consultation
        </Link>
      </section>

      {/* AI-Powered Legal Assistance */}
      <section className="ai-assistant">
        <h2>🤖 AI-Powered Legal Assistance</h2>
        <p>
          Have legal questions? Get instant answers with our AI-driven
          assistant.
        </p>
        <Link to="/ai-assistant" className="btn-secondary">
          Chat with AI
        </Link>
      </section>
    </div>
  );
}

export default Home;
