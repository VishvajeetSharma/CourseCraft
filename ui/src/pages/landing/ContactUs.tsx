import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const contactInfo = [
  { icon: <FaMapMarkerAlt size={22} />, title: "Our Office", detail: "123 Learning Street, Tech City, Pakistan", color: "var(--accent)" },
  { icon: <FaPhoneAlt size={22} />, title: "Phone", detail: "+1234 568 963", color: "var(--success)" },
  { icon: <FaEnvelope size={22} />, title: "Email", detail: "support@coursecraft.com", color: "var(--warning)" },
  { icon: <FaClock size={22} />, title: "Working Hours", detail: "Mon – Sat: 9:00 AM – 8:00 PM IST", color: "var(--info)" },
];

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section style={{ background: "var(--chrome-bg)", padding: "70px 0 50px" }}>
        <div className="container text-center">
          <p className="mb-2" style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: 1 }}>GET IN TOUCH</p>
          <h1 className="hero-title mb-3">Contact <span className="highlight-brush">Us</span></h1>
          <p style={{ color: "var(--chrome-text-muted)", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem" }}>
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="hero-to-content-bridge"></div>

      <section className="py-5 my-bg-dark">
        <div className="container">

          {/* Info Cards */}
          <div className="row g-4 mb-5">
            {contactInfo.map((info) => (
              <div className="col-sm-6 col-lg-3" key={info.title}>
                <div className="text-center p-4 rounded-3 h-100" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                    style={{ width: 56, height: 56, background: `${info.color}18`, color: info.color }}>
                    {info.icon}
                  </div>
                  <h6 style={{ color: "var(--text-heading)" }}>{info.title}</h6>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-3 h-100" style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-md)" }}>
                <h4 className="mb-4" style={{ color: "var(--text-heading)" }}>Send us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Your Name</label>
                      <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="John Doe" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <input name="subject" value={form.subject} onChange={handleChange} className="form-control" placeholder="How can we help?" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows={5} placeholder="Write your message here..." required />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="my-btn w-100">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded-3 overflow-hidden h-100" style={{ minHeight: 400, border: "1px solid var(--border-card)", boxShadow: "var(--shadow-md)" }}>
                <iframe
                  title="CourseCraft Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMzUuNiJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
