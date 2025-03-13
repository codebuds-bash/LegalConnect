import { Link } from "react-router-dom";
import "../styles/home.css";
import gsap from "gsap";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    gsap.fromTo(".hero", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
      <h1>
      Expert legal guidance at your <span>fingertips.</span> <br />
      Connecting you with<span> trusted lawyers,</span> anytime, anywhere.
        </h1>
       
        <button className="cta-button">Search For Lawyers</button>
        <p className="side-text">
        Get ready to <span className="highlight">accelerate your career</span> with customized courses
        and leave your mark in the tech industry.
        </p>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <input type="text" placeholder="Search for lawyers, specializations..." />
        <button>Search</button>
      </section>

      {/* Featured Lawyers */}
      <section className="featured-lawyers">
        <h2>Top Lawyers</h2>
        <div className="lawyer-cards">
          {/* Dummy Data */}
          <div className="lawyer-card">
            <h3>John Doe</h3>
            <p>Criminal Law | 10+ Years Experience</p>
            <span>⭐ 4.9</span>
            <br></br>
            <Link to="/lawyer/1" className="btn-primary">View Profile</Link>
          </div>

          <div className="lawyer-card">
            <h3>Jane Smith</h3>
            <p>Corporate Law | 8+ Years Experience</p>
            <span>⭐ 4.8</span>
            <br></br>
            <Link to="/lawyer/2" className="btn-primary">View Profile</Link>
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
    </div>
  );
}

export default Home;
