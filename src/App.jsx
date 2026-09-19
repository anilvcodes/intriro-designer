import { useEffect, useState } from "react";
import "./App.css";

/* =========================================================
   STÀR TURNKEY INTERIOR SOLUTION
   CHANGE THESE TWO VALUES
   ========================================================= */

const EMAIL = "hello@intriro.com";
const WHATSAPP = "919876543210";

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [
  {
    title: "The Earth House",
    hindi: "द अर्थ हाउस",
    category: "Residential / आवासीय",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "Casa Forma",
    hindi: "कासा फॉर्मा",
    category: "Luxury Interior / लग्ज़री इंटीरियर",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "The Quiet Office",
    hindi: "द क्वाइट ऑफिस",
    category: "Workspace / ऑफिस",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "Oak Residence",
    hindi: "ओक रेजिडेंस",
    category: "Residential / आवासीय",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
  },
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    number: "01",
    title: "Interior Design",
    hindi: "इंटीरियर डिज़ाइन",
    text: "Complete interior concepts designed around your lifestyle, space and budget.",
    hindiText:
      "आपकी जीवनशैली, स्पेस और बजट के अनुसार पूरा इंटीरियर कॉन्सेप्ट।",
  },
  {
    number: "02",
    title: "Space Planning",
    hindi: "स्पेस प्लानिंग",
    text: "Smart layouts that create better movement, comfort, proportion and functionality.",
    hindiText:
      "ऐसे स्मार्ट लेआउट जो स्पेस, मूवमेंट, आराम और उपयोगिता का सही संतुलन बनाएं।",
  },
  {
    number: "03",
    title: "3D Design & Visualization",
    hindi: "3D डिज़ाइन एवं विज़ुअलाइज़ेशन",
    text: "Visualize your final space before execution with realistic 3D designs.",
    hindiText:
      "एक्जीक्यूशन से पहले अपने फाइनल स्पेस को रियलिस्टिक 3D डिज़ाइन में देखें।",
  },
  {
    number: "04",
    title: "Civil & Electrical",
    hindi: "सिविल एवं इलेक्ट्रिकल",
    text: "Complete civil, electrical, plumbing and ceiling work managed by one team.",
    hindiText:
      "सिविल, इलेक्ट्रिकल, प्लंबिंग और सीलिंग का पूरा काम एक ही टीम द्वारा।",
  },
  {
    number: "05",
    title: "Modular & Custom Furniture",
    hindi: "मॉड्यूलर एवं कस्टम फर्नीचर",
    text: "Kitchens, wardrobes and custom furniture designed and executed for your space.",
    hindiText:
      "आपके स्पेस के अनुसार मॉड्यूलर किचन, वार्डरोब और कस्टम फर्नीचर।",
  },
  {
    number: "06",
    title: "Complete Turnkey Solution",
    hindi: "संपूर्ण टर्नकी सॉल्यूशन",
    text: "One team, one point of contact and complete execution from start to finish.",
    hindiText:
      "एक टीम, एक संपर्क और शुरुआत से फिनिश तक पूरा एक्जीक्यूशन।",
  },
];

/* =========================================================
   PROCESS
   ========================================================= */

const process = [
  {
    number: "01",
    title: "Discover",
    hindi: "समझना",
    text: "We understand your requirements, lifestyle, budget and design preferences.",
    hindiText:
      "हम आपकी जरूरत, जीवनशैली, बजट और डिजाइन पसंद को समझते हैं।",
  },
  {
    number: "02",
    title: "Concept",
    hindi: "कॉन्सेप्ट",
    text: "We develop the layout, mood, materials and overall design direction.",
    hindiText:
      "हम लेआउट, मूड, मटेरियल और पूरे डिजाइन की दिशा तैयार करते हैं।",
  },
  {
    number: "03",
    title: "Design",
    hindi: "डिज़ाइन",
    text: "Every detail is refined through drawings, selections and 3D visualization.",
    hindiText:
      "ड्रॉइंग, मटेरियल सेलेक्शन और 3D विज़ुअलाइज़ेशन के माध्यम से हर डिटेल तैयार की जाती है।",
  },
  {
    number: "04",
    title: "Execute",
    hindi: "एक्जीक्यूशन",
    text: "The final design is brought to life with careful execution and craftsmanship.",
    hindiText:
      "बेहतरीन कारीगरी और सावधानीपूर्वक एक्जीक्यूशन के साथ डिज़ाइन को वास्तविक रूप दिया जाता है।",
  },
  {
    number: "05",
    title: "Handover",
    hindi: "हैंडओवर",
    text: "We complete the project and hand over a finished space ready to live in.",
    hindiText:
      "प्रोजेक्ट पूरा करके आपको रहने या उपयोग करने के लिए तैयार स्पेस सौंपते हैं।",
  },
];

/* =========================================================
   WHATSAPP FUNCTION
   ========================================================= */

function openWhatsApp(customMessage) {
  const message =
    customMessage ||
    "Hello STÀR Turnkey Interior Solution, I would like to discuss my interior project.";

  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  /* =======================================================
     NAVBAR SCROLL
     ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================================================
     CLOSE MOBILE MENU
     ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =======================================================
     EMAIL FORM
     ======================================================= */

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const project = form.get("project");
    const budget = form.get("budget");
    const location = form.get("location");
    const message = form.get("message");

    const subject = `New Interior Enquiry - ${name}`;

    const body = `
Hello STÀR Turnkey Interior Solution,

I have a new interior project enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${project}
Location: ${location}
Budget: ${budget}

Requirements:
${message}

Regards,
${name}
`;

    setFormStatus("Opening your email application...");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  /* =======================================================
     WHATSAPP FORM
     ======================================================= */

  function handleWhatsAppForm(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const phone = form.get("phone");
    const project = form.get("project");
    const budget = form.get("budget");
    const location = form.get("location");
    const message = form.get("message");

    const whatsappMessage = `
Hello STÀR Turnkey Interior Solution,

I would like to discuss an interior project.

Name: ${name}
Phone: ${phone}
Project: ${project}
Location: ${location}
Budget: ${budget}

Requirements:
${message}
`;

    openWhatsApp(whatsappMessage);
  }

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <a href="#home" className="logo" onClick={closeMenu}>
          <strong>STÀR</strong>
          <span>TURNKEY INTERIOR SOLUTION</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a href="#about" onClick={closeMenu}>
            About / परिचय
          </a>

          <a href="#services" onClick={closeMenu}>
            Services / सेवाएं
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects / प्रोजेक्ट्स
          </a>

          <a href="#process" onClick={closeMenu}>
            Process / प्रक्रिया
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="nav-cta"
          >
            Let's Talk / संपर्क
          </a>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

      </header>

      {/* =====================================================
          MAIN
          ===================================================== */}

      <main>

        {/* ===================================================
            HERO
            =================================================== */}

        <section id="home" className="hero">

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury interior designed by STÀR"
            />
          </div>

          <div className="hero-overlay" />

          <div className="hero-content">

            <p className="eyebrow">
              STÀR / TURNKEY INTERIOR SOLUTION
            </p>

            <h1>
              From
              <br />
              <em>Start to Finish.</em>
            </h1>

            <h2 className="hero-hindi">
              शुरुआत से फिनिश तक —
              <br />
              पूरा इंटीरियर सॉल्यूशन।
            </h2>

            <p className="hero-description">
              Complete turnkey interior solutions for homes,
              apartments, offices and commercial spaces —
              from design to execution.
            </p>

            <p className="hero-description hindi-description">
              घर, अपार्टमेंट, ऑफिस और कमर्शियल स्पेस के लिए
              डिज़ाइन से लेकर फाइनल एक्जीक्यूशन तक
              संपूर्ण टर्नकी इंटीरियर सॉल्यूशन।
            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="button button-light"
              >
                Start Your Project / प्रोजेक्ट शुरू करें
                <span>↗</span>
              </a>

              <button
                className="button button-whatsapp"
                onClick={() => openWhatsApp()}
              >
                WhatsApp
                <span>↗</span>
              </button>

            </div>

          </div>

          <div className="hero-bottom">
            <span>
              Scroll to explore / नीचे देखें
            </span>

            <span className="scroll-line" />
          </div>

        </section>

        {/* ===================================================
            TURNKEY STRIP
            =================================================== */}

        <section className="turnkey-strip">

          <div>
            <span>DESIGN</span>
            <b>→</b>
          </div>

          <div>
            <span>PLAN</span>
            <b>→</b>
          </div>

          <div>
            <span>EXECUTE</span>
            <b>→</b>
          </div>

          <div>
            <span>HANDOVER</span>
          </div>

          <p>
            एक टीम · एक संपर्क · पूरा समाधान
          </p>

        </section>

        {/* ===================================================
            ABOUT
            =================================================== */}

        <section id="about" className="section intro">

          <div className="section-label">
            <span>01</span>
            <span>ABOUT / परिचय</span>
          </div>

          <div className="intro-content">

            <div>

              <h2>
                Complete interiors.
                <br />
                <i>One trusted team.</i>
              </h2>

              <h3 className="hindi-heading">
                पूरा इंटीरियर।
                <br />
                <i>एक भरोसेमंद टीम।</i>
              </h3>

            </div>

            <div className="intro-copy">

              <p>
                STÀR is a turnkey interior solution company
                creating beautiful, functional and timeless
                spaces for modern living.
              </p>

              <p className="hindi-text">
                STÀR एक टर्नकी इंटीरियर सॉल्यूशन कंपनी है,
                जो आधुनिक जीवनशैली के लिए खूबसूरत,
                उपयोगी और लंबे समय तक आकर्षक रहने वाले
                स्पेस तैयार करती है।
              </p>

              <p>
                From the first design concept to the final
                handover, our team manages the complete
                interior journey under one roof.
              </p>

              <p className="hindi-text">
                पहले डिज़ाइन कॉन्सेप्ट से लेकर फाइनल
                हैंडओवर तक, हमारी टीम पूरे इंटीरियर
                प्रोजेक्ट को एक ही जगह से मैनेज करती है।
              </p>

              <a
                href="#contact"
                className="text-link"
              >
                Discuss your space /
                अपने स्पेस पर बात करें
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

        {/* ===================================================
            IMAGE BREAK
            =================================================== */}

        <section className="image-break">

          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2200&q=90"
            alt="Modern living room interior"
          />

          <div className="image-break-caption">

            <span>
              STÀR / TURNKEY INTERIOR
            </span>

            <span>
              Designed. Executed. Delivered.
            </span>

          </div>

        </section>

        {/* ===================================================
            SERVICES
            =================================================== */}

        <section
          id="services"
          className="section services"
        >

          <div className="section-label">
            <span>02</span>
            <span>SERVICES / सेवाएं</span>
          </div>

          <div className="services-heading">

            <div>

              <h2>
                Everything your
                <br />
                <i>space needs.</i>
              </h2>

              <h3 className="hindi-heading">
                आपके स्पेस की
                <br />
                <i>हर जरूरत।</i>
              </h3>

            </div>

            <p>
              From concept to completion, STÀR takes care
              of every important design and execution detail.
              <br />
              <br />
              कॉन्सेप्ट से लेकर फाइनल एक्जीक्यूशन तक,
              STÀR हर जरूरी डिजाइन और एक्जीक्यूशन डिटेल
              का ध्यान रखता है।
            </p>

          </div>

          <div className="service-list">

            {services.map((service) => (

              <article
                className="service-item"
                key={service.number}
              >

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-title">

                  <h3>
                    {service.title}
                  </h3>

                  <h4>
                    {service.hindi}
                  </h4>

                </div>

                <div>

                  <p>
                    {service.text}
                  </p>

                  <p className="hindi-text">
                    {service.hindiText}
                  </p>

                </div>

                <span className="service-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </section>

        {/* ===================================================
            PROJECTS
            =================================================== */}

        <section
          id="projects"
          className="section projects"
        >

          <div className="section-label">
            <span>03</span>
            <span>PROJECTS / प्रोजेक्ट्स</span>
          </div>

          <div className="projects-heading">

            <div>

              <h2>
                Spaces we've
                <br />
                <i>shaped.</i>
              </h2>

              <h3 className="hindi-heading">
                कुछ स्पेस जिन्हें
                <br />
                <i>हमने आकार दिया।</i>
              </h3>

            </div>

            <a
              href="#contact"
              className="text-link"
            >
              Start a project /
              प्रोजेक्ट शुरू करें
              <span>↗</span>
            </a>

          </div>

          <div className="project-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-hover">

                    <span>
                      Explore / देखें
                    </span>

                    <span>
                      ↗
                    </span>

                  </div>

                </div>

                <div className="project-info">

                  <div>

                    <h3>
                      {project.title}
                    </h3>

                    <h4>
                      {project.hindi}
                    </h4>

                    <p>
                      {project.category}
                    </p>

                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ===================================================
            STATEMENT
            =================================================== */}

        <section className="statement">

          <div className="statement-inner">

            <span className="statement-mark">
              “
            </span>

            <h2>
              Your space should feel like
              <br />
              <i>you — only elevated.</i>
            </h2>

            <h3>
              आपका स्पेस ऐसा होना चाहिए जो
              <br />
              <i>
                आपकी पहचान को खूबसूरती से दिखाए।
              </i>
            </h3>

            <p>
              STÀR / TURNKEY INTERIOR SOLUTION
            </p>

          </div>

        </section>

        {/* ===================================================
            PROCESS
            =================================================== */}

        <section
          id="process"
          className="section process"
        >

          <div className="section-label">
            <span>04</span>
            <span>PROCESS / प्रक्रिया</span>
          </div>

          <div className="process-layout">

            <div className="process-title">

              <h2>
                From idea
                <br />
                <i>to reality.</i>
              </h2>

              <h3 className="hindi-heading">
                आइडिया से
                <br />
                <i>हकीकत तक।</i>
              </h3>

              <p>
                One simple, transparent and collaborative
                process from start to finish.
              </p>

              <p className="hindi-text">
                शुरुआत से फिनिश तक एक सरल, पारदर्शी
                और सहयोगात्मक प्रक्रिया।
              </p>

            </div>

            <div className="process-steps">

              {process.map((item) => (

                <div
                  className="process-step"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.hindi}
                    </h4>

                    <p>
                      {item.text}
                    </p>

                    <p className="hindi-text">
                      {item.hindiText}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================
            TESTIMONIAL
            =================================================== */}

        <section className="testimonial">

          <div className="testimonial-content">

            <span className="quote">
              “
            </span>

            <blockquote>
              Intriro understood what we wanted before
              we even knew how to explain it.
            </blockquote>

            <p className="testimonial-hindi">
              हमारी जरूरत को समझने और उसे खूबसूरती से
              डिजाइन में बदलने का अनुभव शानदार रहा।
            </p>

            <div className="testimonial-author">

              <span className="author-line" />

              <div>

                <strong>
                  Riya & Arjun
                </strong>

                <span>
                  Private Residence / निजी निवास
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT
            =================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-background">

            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury interior"
            />

          </div>

          <div className="contact-dark" />

          <div className="contact-layout">

            {/* CONTACT INTRO */}

            <div className="contact-intro">

              <p className="eyebrow">
                START A CONVERSATION /
                बातचीत शुरू करें
              </p>

              <h2>
                Let's create
                <br />
                <i>your space.</i>
              </h2>

              <h3>
                आइए मिलकर
                <br />
                <i>आपका स्पेस बनाएं।</i>
              </h3>

              <p>
                Tell us about your project and
                we'll get back to you.
              </p>

              <p>
                अपने प्रोजेक्ट के बारे में हमें बताएं,
                हम जल्द आपसे संपर्क करेंगे।
              </p>

              <div className="direct-contact">

                <a href={`mailto:${EMAIL}`}>

                  <span>
                    Email
                  </span>

                  {EMAIL}

                </a>

                <button
                  onClick={() => openWhatsApp()}
                >

                  <span>
                    WhatsApp
                  </span>

                  Chat with us ↗

                </button>

              </div>

            </div>

            {/* CONTACT FORM */}

            <div className="contact-form-wrapper">

              <div className="form-tabs">

                <span>
                  PROJECT ENQUIRY /
                  प्रोजेक्ट पूछताछ
                </span>

                <span>
                  NO BACKEND
                </span>

              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <label>

                    <span>
                      Name / नाम *
                    </span>

                    <input
                      name="name"
                      type="text"
                      placeholder="Your name / आपका नाम"
                      required
                    />

                  </label>

                  <label>

                    <span>
                      Phone / फोन *
                    </span>

                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />

                  </label>

                </div>

                <label>

                  <span>
                    Email / ईमेल *
                  </span>

                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />

                </label>

                <div className="form-row">

                  <label>

                    <span>
                      Project Type / प्रोजेक्ट
                    </span>

                    <select
                      name="project"
                      defaultValue="Residential"
                    >

                      <option value="Residential">
                        Residential / घर
                      </option>

                      <option value="Apartment">
                        Apartment / अपार्टमेंट
                      </option>

                      <option value="Villa">
                        Villa / विला
                      </option>

                      <option value="Office">
                        Office / ऑफिस
                      </option>

                      <option value="Commercial">
                        Commercial / कमर्शियल
                      </option>

                      <option value="Renovation">
                        Renovation / रिनोवेशन
                      </option>

                      <option value="Other">
                        Other / अन्य
                      </option>

                    </select>

                  </label>

                  <label>

                    <span>
                      Location / लोकेशन
                    </span>

                    <input
                      name="location"
                      type="text"
                      placeholder="City / शहर"
                    />

                  </label>

                </div>

                <label>

                  <span>
                    Approx. Budget / अनुमानित बजट
                  </span>

                  <select
                    name="budget"
                    defaultValue=""
                  >

                    <option value="" disabled>
                      Select budget / बजट चुनें
                    </option>

                    <option value="Below ₹5 Lakh">
                      Below ₹5 Lakh / ₹5 लाख से कम
                    </option>

                    <option value="₹5 - ₹10 Lakh">
                      ₹5 - ₹10 Lakh
                    </option>

                    <option value="₹10 - ₹20 Lakh">
                      ₹10 - ₹20 Lakh
                    </option>

                    <option value="₹20 - ₹40 Lakh">
                      ₹20 - ₹40 Lakh
                    </option>

                    <option value="₹40 Lakh+">
                      ₹40 Lakh+
                    </option>

                    <option value="Not Decided">
                      Not Decided / तय नहीं
                    </option>

                  </select>

                </label>

                <label>

                  <span>
                    Tell us about your project /
                    प्रोजेक्ट के बारे में बताएं
                  </span>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Location, size, requirements, budget etc. / लोकेशन, साइज, जरूरत, बजट आदि..."
                    required
                  />

                </label>

                <div className="form-actions">

                  <button
                    type="submit"
                    className="form-button"
                  >

                    Send Enquiry /
                    ईमेल भेजें

                    <span>
                      ↗
                    </span>

                  </button>

                  <button
                    type="button"
                    className="whatsapp-form-button"
                    onClick={handleWhatsAppForm}
                  >

                    WhatsApp

                    <span>
                      ↗
                    </span>

                  </button>

                </div>

                {formStatus && (
                  <p className="form-status">
                    {formStatus}
                  </p>
                )}

                <small>

                  No backend required.
                  Email opens your default mail application
                  and WhatsApp opens WhatsApp.

                  <br />

                  किसी backend की जरूरत नहीं है।
                  Email button आपका mail application
                  और WhatsApp button WhatsApp खोलता है।

                </small>

              </form>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <a
              href="#home"
              className="footer-logo"
            >

              <strong>
                STÀR
              </strong>

              <span>
                TURNKEY INTERIOR SOLUTION
              </span>

            </a>

            <p className="footer-tagline">

              From start to finish.
              <br />
              Beautifully executed.
              <br />
              <br />

              शुरुआत से फिनिश तक।
              <br />
              खूबसूरती से तैयार।

            </p>

          </div>

          <div className="footer-column">

            <h4>
              Explore
            </h4>

            <a href="#about">
              About / परिचय
            </a>

            <a href="#services">
              Services / सेवाएं
            </a>

            <a href="#projects">
              Projects / प्रोजेक्ट्स
            </a>

            <a href="#process">
              Process / प्रक्रिया
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Contact
            </h4>

            <a href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>

            <button onClick={() => openWhatsApp()}>
              WhatsApp ↗
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Follow
            </h4>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()}
            {" "}
            STÀR Turnkey Interior Solution
          </span>

          <span>
            Designed for better living /
            बेहतर जीवन के लिए डिज़ाइन
          </span>

        </div>

      </footer>

      {/* =====================================================
          FLOATING WHATSAPP
          ===================================================== */}

      <button
        className="floating-whatsapp"
        onClick={() => openWhatsApp()}
        aria-label="Chat on WhatsApp"
      >

        <span className="whatsapp-icon">
          ◉
        </span>

        <span>
          WhatsApp
        </span>

      </button>

    </div>
  );
}

export default App;
