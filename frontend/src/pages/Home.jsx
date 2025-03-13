import { Link } from "react-router-dom";
import "../styles/home.css";
import gsap from "gsap";
import { useEffect } from "react";
const courses = [
  {
    title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    img: "/images/lawyer1.avif", // Update with actual image path
    language: "HINDI",
    batchType: "LIVE BATCH",
    price: "5999",
    oldPrice: "₹11099",
    discount: "50% OFF",
  },
  {
    title: "Three.js Domination",
    img: "/images/course2.png",
    language: "HINDI",
    batchType: "ANIMATION",
    price: "₹2499",
    oldPrice: "₹3500",
    discount: "29% OFF",
  },
  {
    title: "Java & DSA Domination",
    img: "/images/course3.png",
    language: "HINGLISH",
    batchType: "IN-DEPTH",
    price: "₹4999",
    oldPrice: "₹9999",
    discount: "50% OFF",
  },
  {
    title: "Aptitude & Reasoning for Campus Placements",
    img: "/images/course4.png",
    language: "HINGLISH",
    batchType: "PLACEMENTS",
    price: "₹999",
    oldPrice: "₹1500",
    discount: "67% OFF",
  },
];


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
      <div className="lawyer-cards-container">
      {courses.map((course, index) => (
        <div className="lawyer-card" key={index}>
          <div className="card-image">
            <img src={course.img} alt={course.title} />
            <div className="tag-batch tag-live">{course.batchType}</div>
          </div>
          <div className="card-content">
            <h3 className="card-title">{course.title}</h3>
            <div className="card-tags">
              <div className="tag-language">{course.language}</div>
            </div>
            <p className="card-price">
              ₹{course.price} <span className="card-old-price">{course.oldPrice}</span>
              <span className="discount-badge">{course.discount}</span>
            </p>
            <Link to={`/lawyer/${course.title.replaceAll(" ", "-").toLowerCase()}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        </div>
      ))}
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
