import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const blogs = [
  {
    id: 1,
    title: "Top 10 Programming Languages to Learn in 2025",
    excerpt: "Explore the most in-demand programming languages that will shape the tech industry this year and beyond.",
    category: "Technology",
    author: "Ali Hassan",
    date: "Jan 15, 2025",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "How to Stay Consistent While Learning Online",
    excerpt: "Practical tips and strategies to maintain your learning momentum and avoid burnout in online courses.",
    category: "Learning Tips",
    author: "Sara Khan",
    date: "Jan 22, 2025",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "CourseCraft Launches New AI & ML Learning Path",
    excerpt: "We're excited to announce our brand new Artificial Intelligence and Machine Learning curriculum.",
    category: "News",
    author: "Usman Tariq",
    date: "Feb 3, 2025",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Why Certifications Matter in Today's Job Market",
    excerpt: "Employers are increasingly valuing certified skills. Here's how CourseCraft certificates can boost your career.",
    category: "Career",
    author: "Ayesha Noor",
    date: "Feb 10, 2025",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Building Your First Full-Stack App: A Beginner's Guide",
    excerpt: "Step-by-step walkthrough to create your first full-stack web application using React and Node.js.",
    category: "Tutorial",
    author: "Ali Hassan",
    date: "Feb 18, 2025",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "CourseCraft Crosses 60,000 Students Milestone",
    excerpt: "We're thrilled to share that our platform has now helped over 60,000 students achieve their learning goals.",
    category: "News",
    author: "Sara Khan",
    date: "Mar 1, 2025",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Technology: "var(--accent)",
  "Learning Tips": "var(--success)",
  News: "var(--info)",
  Career: "var(--warning)",
  Tutorial: "#9333ea",
};

const NewsBlogs = () => {
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section style={{ background: "var(--chrome-bg)", padding: "70px 0 50px" }}>
        <div className="container text-center">
          <p className="mb-2" style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: 1 }}>STAY UPDATED</p>
          <h1 className="hero-title mb-3">News & <span className="highlight-brush">Blogs</span></h1>
          <p style={{ color: "var(--chrome-text-muted)", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem" }}>
            Latest updates, tutorials, career tips, and announcements from the CourseCraft team.
          </p>
        </div>
      </section>

      <div className="hero-to-content-bridge"></div>

      <section className="py-5 my-bg-dark">
        <div className="container">

          {/* Featured Post */}
          {featured && (
            <div className="mb-5">
              <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: 1 }}>FEATURED POST</p>
              <div className="row g-0 rounded-3 overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-md)" }}>
                <div className="col-md-6">
                  <img src={featured.img} alt={featured.title} className="w-100 h-100" style={{ objectFit: "cover", minHeight: 280 }} />
                </div>
                <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                  <span className="badge mb-3 px-3 py-2" style={{ background: `${categoryColors[featured.category]}18`, color: categoryColors[featured.category], borderRadius: 20, width: "fit-content" }}>
                    <FaTag size={10} className="me-1" />{featured.category}
                  </span>
                  <h3 style={{ color: "var(--text-heading)" }}>{featured.title}</h3>
                  <p className="mt-2" style={{ color: "var(--text-secondary)" }}>{featured.excerpt}</p>
                  <div className="d-flex gap-3 mt-3 flex-wrap" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    <span><FaUser size={11} className="me-1" />{featured.author}</span>
                    <span><FaCalendarAlt size={11} className="me-1" />{featured.date}</span>
                  </div>
                  <button className="my-btn mt-4" style={{ width: "fit-content" }}>Read More</button>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="row g-4">
            {rest.map((blog) => (
              <div className="col-md-6 col-lg-4" key={blog.id}>
                <div className="h-100 rounded-3 overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <img src={blog.img} alt={blog.title} className="w-100" style={{ height: 200, objectFit: "cover" }} />
                  <div className="p-4">
                    <span className="badge mb-2 px-3 py-1" style={{ background: `${categoryColors[blog.category]}18`, color: categoryColors[blog.category], borderRadius: 20 }}>
                      <FaTag size={10} className="me-1" />{blog.category}
                    </span>
                    <h5 className="mt-1" style={{ color: "var(--text-heading)" }}>{blog.title}</h5>
                    <p className="mt-2" style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{blog.excerpt}</p>
                    <div className="d-flex gap-3 mt-3 flex-wrap" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <span><FaUser size={10} className="me-1" />{blog.author}</span>
                      <span><FaCalendarAlt size={10} className="me-1" />{blog.date}</span>
                    </div>
                  </div>
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

export default NewsBlogs;
