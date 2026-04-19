import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const faqs = [
  {
    category: "Getting Started",
    items: [
      { q: "What is CourseCraft?", a: "CourseCraft is an online learning platform offering 10,000+ courses across technology, design, business, and more — taught by industry experts." },
      { q: "How do I create an account?", a: "Click the 'Register' button in the navbar, fill in your details, and you're ready to start learning within minutes." },
      { q: "Is CourseCraft free to use?", a: "We offer both free and paid plans. You can browse courses for free, and subscribe to a plan to unlock full access to all content." },
    ],
  },
  {
    category: "Courses & Learning",
    items: [
      { q: "How do I enroll in a course?", a: "Browse our course catalog, select a course you like, and click 'Enroll'. If it's part of a paid plan, you'll be prompted to subscribe first." },
      { q: "Can I learn at my own pace?", a: "Absolutely! All courses are self-paced. You can start, pause, and resume anytime that suits your schedule." },
      { q: "Do I get a certificate after completing a course?", a: "Yes! Upon successful completion of a course, you'll receive a verified digital certificate that you can share on LinkedIn or your resume." },
      { q: "Are the courses updated regularly?", a: "Yes, our instructors regularly update course content to keep it aligned with the latest industry trends and technologies." },
    ],
  },
  {
    category: "Plans & Billing",
    items: [
      { q: "What plans are available?", a: "We offer Starter, Pro, and Enterprise plans. Each plan unlocks different levels of access. Visit our Pricing page for full details." },
      { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period." },
      { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, JazzCash, EasyPaisa, and bank transfers." },
    ],
  },
  {
    category: "Technical Support",
    items: [
      { q: "What devices can I use to access CourseCraft?", a: "CourseCraft works on all modern browsers on desktop, tablet, and mobile. We also have Android and iOS apps coming soon." },
      { q: "I forgot my password. What should I do?", a: "Click 'Forgot Password' on the login page and enter your registered email. You'll receive a reset link within a few minutes." },
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section style={{ background: "var(--chrome-bg)", padding: "70px 0 50px" }}>
        <div className="container text-center">
          <p className="mb-2" style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: 1 }}>GOT QUESTIONS?</p>
          <h1 className="hero-title mb-3">Frequently Asked <span className="highlight-brush">Questions</span></h1>
          <p style={{ color: "var(--chrome-text-muted)", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem" }}>
            Find answers to the most common questions about CourseCraft, our courses, plans, and support.
          </p>
        </div>
      </section>

      <div className="hero-to-content-bridge"></div>

      <section className="py-5 my-bg-dark">
        <div className="container" style={{ maxWidth: 800 }}>
          {faqs.map((section) => (
            <div key={section.category} className="mb-5">
              <h5 className="mb-3 pb-2" style={{ color: "var(--accent)", borderBottom: "2px solid var(--accent)", display: "inline-block" }}>
                {section.category}
              </h5>
              <div className="d-flex flex-column gap-3">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className="rounded-3 overflow-hidden" style={{ border: `1px solid ${isOpen ? "var(--accent)" : "var(--border-card)"}`, background: "var(--bg-card)", boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)", transition: "var(--transition)" }}>
                      <button
                        className="w-100 d-flex justify-content-between align-items-center p-4"
                        style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                        onClick={() => toggle(key)}
                      >
                        <span style={{ fontWeight: 600, color: "var(--text-heading)", fontSize: "0.95rem" }}>{item.q}</span>
                        <span style={{ color: "var(--accent)", flexShrink: 0, marginLeft: 12 }}>
                          {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4" style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions CTA */}
          <div className="text-center mt-4 p-5 rounded-3" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-card)" }}>
            <h5 style={{ color: "var(--text-heading)" }}>Still have questions?</h5>
            <p style={{ color: "var(--text-secondary)" }}>Our support team is happy to help you out.</p>
            <a href="/contact" className="my-btn mt-2 d-inline-block">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
