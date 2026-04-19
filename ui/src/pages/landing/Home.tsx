import Counter from "../../components/landing/Counter"
import HeroSection from "../../components/landing/HeroSection"
import Navbar from "../../components/landing/Navbar"
import Footer from "../../components/landing/Footer"
import PricingSection from "../../components/landing/PricingSection"
import { FaCode, FaPaintBrush, FaChartLine, FaBullhorn, FaCamera, FaDatabase, FaStar, FaQuoteLeft } from "react-icons/fa"
import "../../styles/style.css"

const categories = [
  { icon: <FaCode size={28} />, name: "Web Development", courses: 320, color: "var(--accent)" },
  { icon: <FaPaintBrush size={28} />, name: "UI/UX Design", courses: 180, color: "#9333ea" },
  { icon: <FaChartLine size={28} />, name: "Data Science", courses: 210, color: "var(--info)" },
  { icon: <FaBullhorn size={28} />, name: "Digital Marketing", courses: 150, color: "var(--warning)" },
  { icon: <FaCamera size={28} />, name: "Photography", courses: 95, color: "var(--success)" },
  { icon: <FaDatabase size={28} />, name: "Database & Cloud", courses: 130, color: "var(--danger)" },
]

const testimonials = [
  {
    name: "Hamza Raza",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "CourseCraft completely changed my career. The React course was so well-structured that I landed my first job within 3 months of completing it!",
    rating: 5,
  },
  {
    name: "Fatima Malik",
    role: "UX Designer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "The UI/UX design path is absolutely top-notch. Real-world projects and expert feedback made all the difference. Highly recommend!",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Data Analyst",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "I went from zero Python knowledge to building data dashboards in just 2 months. The instructors are incredibly knowledgeable.",
    rating: 5,
  },
]

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <HeroSection />
        <Counter />
        <PricingSection />
      </div>

      {/* Popular Categories */}
      <section className="py-5" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>EXPLORE TOPICS</p>
            <h2 style={{ color: "var(--text-heading)" }}>Browse Top Categories</h2>
          </div>
          <div className="row g-4">
            {categories.map((cat) => (
              <div className="col-6 col-md-4 col-lg-2" key={cat.name}>
                <div
                  className="text-center p-4 rounded-3 h-100"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)", cursor: "pointer", transition: "var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                    style={{ width: 56, height: 56, background: `${cat.color}18`, color: cat.color }}>
                    {cat.icon}
                  </div>
                  <p className="mb-1 fw-600" style={{ color: "var(--text-heading)", fontWeight: 600, fontSize: "0.88rem" }}>{cat.name}</p>
                  <small style={{ color: "var(--text-muted)" }}>{cat.courses} Courses</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 my-bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>WHAT STUDENTS SAY</p>
            <h2 style={{ color: "var(--text-heading)" }}>Loved by Thousands of Learners</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="p-4 rounded-3 h-100" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}>
                  <FaQuoteLeft size={24} style={{ color: "var(--accent)", opacity: 0.4 }} />
                  <p className="mt-3 mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>{t.text}</p>
                  <div className="d-flex align-items-center gap-3">
                    <img src={t.img} alt={t.name} className="rounded-circle" width={46} height={46} style={{ border: "2px solid var(--accent)" }} />
                    <div>
                      <p className="mb-0 fw-bold" style={{ color: "var(--text-heading)", fontSize: "0.9rem" }}>{t.name}</p>
                      <small style={{ color: "var(--accent)" }}>{t.role}</small>
                    </div>
                    <div className="ms-auto d-flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} size={12} style={{ color: "var(--warning)" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-5" style={{ background: "linear-gradient(135deg, var(--accent) 0%, #9333ea 100%)" }}>
        <div className="container text-center">
          <h2 style={{ color: "#fff", fontWeight: 800 }}>Ready to Start Learning?</h2>
          <p className="mt-2 mb-4" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem" }}>
            Join 60,000+ students already learning on CourseCraft. Get started for free today.
          </p>
          <a href="/registration" className="btn px-5 py-3 fw-bold rounded-3"
            style={{ background: "#fff", color: "var(--accent)", fontSize: "1rem", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}>
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
