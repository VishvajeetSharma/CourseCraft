import { FaGraduationCap, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const teamMembers = [
  { name: "Ali Hassan", role: "Co-Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sara Khan", role: "Head of Curriculum", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Usman Tariq", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Ayesha Noor", role: "UX Designer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const values = [
  { icon: <FaGraduationCap size={28} />, title: "Quality Education", desc: "We deliver expert-crafted courses that meet industry standards and real-world needs.", color: "var(--accent)" },
  { icon: <FaUsers size={28} />, title: "Community First", desc: "A thriving community of learners and instructors who grow together.", color: "var(--success)" },
  { icon: <FaLightbulb size={28} />, title: "Innovation", desc: "We constantly evolve our platform to bring the best learning experience.", color: "var(--warning)" },
  { icon: <FaGlobe size={28} />, title: "Global Reach", desc: "Accessible to students worldwide, breaking barriers of geography.", color: "var(--info)" },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section style={{ background: "var(--chrome-bg)", padding: "70px 0 50px" }}>
        <div className="container text-center">
          <p className="mb-2" style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: 1 }}>WHO WE ARE</p>
          <h1 className="hero-title mb-3">About <span className="highlight-brush">CourseCraft</span></h1>
          <p style={{ color: "var(--chrome-text-muted)", maxWidth: 560, margin: "0 auto", fontSize: "1.05rem" }}>
            We are a passionate team building the future of online education — making quality learning accessible, affordable, and engaging for everyone.
          </p>
        </div>
      </section>

      <div className="hero-to-content-bridge"></div>

      {/* Mission */}
      <section className="py-5 my-bg-dark">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://themes.stackbros.in/eduport_ng/assets/images/element/07.png"
                alt="Mission"
                className="img-fluid"
                style={{ filter: "drop-shadow(0 10px 30px var(--accent-glow))" }}
              />
            </div>
            <div className="col-lg-6">
              <p style={{ color: "var(--accent)", fontWeight: 600 }}>OUR MISSION</p>
              <h2 style={{ color: "var(--text-heading)" }}>Empowering learners with world-class education</h2>
              <p className="mt-3" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                CourseCraft was founded with a single goal — to democratize education. We believe every student deserves access to high-quality courses taught by industry experts, regardless of their background or location.
              </p>
              <p className="mt-2" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Since our launch, we've helped over 60,000 students gain new skills, earn certifications, and advance their careers through our curated learning paths.
              </p>
              <div className="d-flex gap-4 mt-4 flex-wrap">
                {[["60K+", "Students"], ["200+", "Instructors"], ["10K+", "Courses"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent)" }}>{val}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>WHAT DRIVES US</p>
            <h2 style={{ color: "var(--text-heading)" }}>Our Core Values</h2>
          </div>
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-6 col-lg-3" key={v.title}>
                <div className="h-100 p-4 rounded-3 text-center" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle mx-auto"
                    style={{ width: 60, height: 60, background: `${v.color}18`, color: v.color }}>
                    {v.icon}
                  </div>
                  <h5 style={{ color: "var(--text-heading)" }}>{v.title}</h5>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5 my-bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>THE PEOPLE BEHIND IT</p>
            <h2 style={{ color: "var(--text-heading)" }}>Meet Our Team</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((m) => (
              <div className="col-6 col-md-3" key={m.name}>
                <div className="text-center p-4 rounded-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}>
                  <img src={m.img} alt={m.name} className="rounded-circle mb-3" width={80} height={80} style={{ border: "3px solid var(--accent)" }} />
                  <h6 style={{ color: "var(--text-heading)", marginBottom: 4 }}>{m.name}</h6>
                  <small style={{ color: "var(--accent)" }}>{m.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
