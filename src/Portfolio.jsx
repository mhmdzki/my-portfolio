// src/Portfolio.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  Download,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Server,
  Zap,
  Compass,
  Sun,
  Moon,
  Phone,
  Briefcase,
  Award,
  GraduationCap,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Portfolio.jsx
 * - bilingual (EN/ID), default EN
 * - theme toggle (light formal / dark)
 * - framer-motion used for language fade and micro-animations
 * - intersection observer "fade-up" for scroll reveals
 */

/* ---------- helper: fade-up on scroll (simple hook) ---------- */
function useRevealOnScroll(options = { root: null, rootMargin: "0px", threshold: 0.12 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, options);

    // find children with .reveal class
    el.querySelectorAll(".reveal").forEach((node) => {
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return ref;
}

/* ---------- main component ---------- */
export default function Portfolio() {
  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // default formal: light
  const [language, setLanguage] = useState("en"); // default english

  // load preferences
  useEffect(() => {
    const sTheme = localStorage.getItem("theme");
    const sLang = localStorage.getItem("language");
    if (sTheme) setTheme(sTheme);
    if (sLang) setLanguage(sLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));
  const toggleLanguage = () => setLanguage((p) => (p === "en" ? "id" : "en"));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  // translations (English = baseline)
  const t = {
    en: {
      nav: ["// HOME", "// PROJECTS", "// SKILLS", "// EXPERIENCE", "// CONTACT"],
      hi: "Hi, I'm",
      bioShort:
        "A 5th-semester Informatics Engineering student at Politeknik Negeri Malang with 2+ years experience building web and mobile apps using Laravel, Flutter, and modern databases.",
      bioLong:
        "I’m a 5th-semester Informatics Engineering student at Politeknik Negeri Malang learning full-stack development, focusing mainly on frontend design and implementation. I also have experience in QA testing and data analysis, which allows me to ensure both functionality and quality in the projects I work on. Over the past 2+ years, I’ve actively contributed to web projects, and still learning to sharpen my skills. I’m passionate about creating intuitive, user-focused solutions and eager to bring my expertise to collaborative, professional environments.",
      download: "Download CV",
      projectsTitle: "<PROJECTS/> ARCHIVE",
      projectsDesc: "// A few projects I've worked on",
      skillsTitle: "MY STACK",
      experienceTitle: "EXPERIENCE",
      educationTitle: "EDUCATION",
      certsTitle: "LICENSE & CERTIFICATIONS",
      contactTitle: "Let's Connect",
      contactDesc: "I'm open to collaborations and internships. Reach me on email, WhatsApp or socials.",
      sendEmail: "Send Email",
      findMe: "FIND ME HERE",
      footer: "Built with React + Tailwind",
    },
    id: {
      nav: ["// HOME", "// PROYEK", "// KEMAMPUAN", "// PENGALAMAN", "// KONTAK"],
      role: "// PENGEMBANG FULL-STACK",
      hi: "Halo, saya",
      bioShort:
        "Mahasiswa semester 5 Teknik Informatika Politeknik Negeri Malang dengan minat pada pengembangan full stack dan 2+ tahun pengalaman membangun aplikasi menggunakan Laravel, Flutter dan basis data modern.",
      bioLong:
        "Mahasiswa semester 5 Teknik Informatika Politeknik Negeri Malang dengan minat besar pada pengembangan full stack. Memiliki pengalaman lebih dari 2 tahun dalam pembangunan aplikasi full stack menggunakan Laravel, Flutter, dan basis data modern. Saat ini memperluas pengetahuan di pengembangan mobile, business intelligence, machine learning, dan computer vision. Antusias membangun sistem yang efisien, skalabel, dan berpusat pada pengguna sebagai bagian dari tim pengembangan profesional.",
      download: "Unduh CV",
      projectsTitle: "<PROYEK/> ARSIP",
      projectsDesc: "// Beberapa proyek yang pernah saya kerjakan",
      skillsTitle: "KEMAMPUAN SAYA",
      experienceTitle: "PENGALAMAN",
      educationTitle: "PENDIDIKAN",
      certsTitle: "SERTIFIKASI",
      contactTitle: "Mari Terhubung",
      contactDesc: "Saya terbuka untuk kolaborasi dan magang. Hubungi saya lewat email, WhatsApp, atau sosial media.",
      sendEmail: "Kirim Email",
      findMe: "TEMUKAN SAYA DI SINI",
      footer: "Dibangun dengan React + Tailwind",
    },
  };

  const copy = t[language];

  // data sections
  const projects = [
    {
      id: 1,
      title: "Sigmagang - Internship Recommendation",
      description:
        language === "en"
          ? "Internship management system with recommendation feature built using Laravel and MySQL."
          : "Sistem manajemen magang dengan fitur rekomendasi dibangun menggunakan Laravel dan MySQL.",
      tech: ["Laravel", "MySQL", "PHP", "JavaScript", "Tailwind"],
      img: "assets/projects/sigmagang.png",
      link: "https://github.com/mhmdzki/sigmagang",
    },
    {
      id: 2,
      title: "Sipresma - Student Achievement",
      description:
        language === "en"
          ? "Student achievement recording system with role-based access and reporting."
          : "Sistem pencatatan prestasi mahasiswa dengan akses berbasis peran dan pelaporan.",
      tech: ["Bootstrap", "CSS", "JavaScript", "PHP", "MySQL"],
      img: "assets/projects/sipresma.png",
      link: "https://github.com/FarhanMawaludin/PBL-SIPRESMA",
    },
    {
      id: 3,
      title: "ChadShop - E-commerce Web",
      description:
        language === "en"
          ? "Web-based online sales system with product management and cart features."
          : "Sistem penjualan online berbasis web dengan manajemen produk dan fitur keranjang.",
      tech: ["HTML", "CSS", "JS", "PHP"],
      img: "assets/projects/chadshop.png",
      link: "https://github.com/mhmdzki/PWL_Zaki_2E",
    },
    {
    id: 3,
    title: "Newstingting - News Reading Platform",
    description:
      language === "en"
        ? "A web-based news reading platform that allows users to browse, search, and read articles easily."
        : "Platform web untuk membaca berita yang memungkinkan pengguna menjelajah, mencari, dan membaca artikel dengan mudah.",
    tech: ["HTML", "CSS","PHP", "MySQL"],
    img: "assets/projects/newstingting.png",
    link: "https://github.com/lostboiii/basis-data-kel5",
  }

  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Code />,
      items: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 85 },
        { name: "JavaScript", percent: 80 },
        { name: "React", percent: 60 },
      ],
    },
    {
      category: "Backend",
      icon: <Server />,
      items: [
        { name: "Laravel", percent: 85 },
        { name: "PHP", percent: 80 },
        { name: "MySQL", percent: 85 },
        { name: "Node.js", percent: 60 },
      ],
    },
    {
      category: "Tools",
      icon: <Zap />,
      items: [
        { name: "Git", percent: 95 },
        { name: "VS Code", percent: 90 },
        { name: "Figma", percent: 70 },
        { name: "Flutter", percent: 60 },
      ],
    },
  ];

  const experience = {
    role: "Academic Project Developer — Politeknik Negeri Malang",
    place: "Malang, Indonesia",
    period: "Aug 2023 – Present",
    bullets_en: [
      "Designed and developed several academic projects using HTML, CSS, JavaScript, PHP, Laravel, and MySQL.",
      "Built systems such as Sipresma (Student Achievement Recording System) and Sigmagang (Internship Management System with Recommendation Feature).",
      "Developed ChadShop (Web E-Commerce) and Web Learning (interactive web project).",
      "Implemented frontend, backend, and database schema for scalable systems.",
      "Designed creative assets using Canva aligning with branding needs.",
      "Applied software quality assurance and project management principles in team environments.",
    ],
    bullets_id: [
      "Merancang dan mengembangkan berbagai proyek akademik menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan MySQL.",
      "Membangun sistem seperti Sipresma (Sistem Pencatatan Prestasi Mahasiswa) dan Sigmagang (Sistem Manajemen Magang dengan Fitur Rekomendasi).",
      "Mengembangkan ChadShop (E-Commerce Web) dan Web Learning (proyek web interaktif).",
      "Menerapkan arsitektur frontend, backend, dan skema basis data untuk sistem yang skalabel.",
      "Mendesain aset kreatif menggunakan Canva sesuai kebutuhan branding.",
      "Menerapkan QA perangkat lunak dan prinsip manajemen proyek dalam tim.",
    ],
  };

  const education = {
    school: "Politeknik Negeri Malang",
    period: "Aug 2023 – Present",
    degree_en: "Undergraduate in Informatics Engineering",
    degree_id: "Sarjana Terapan Teknik Informatika",
    gpa: "GPA: 3.72 / 4.00",
    highlights_en:
      "Highlighted courses: Programming, Web Development, Databases, Software Engineering, AI, Networking, Mathematics, Project Management.",
    highlights_id:
      "Mata kuliah unggulan: Pemrograman, Pengembangan Web, Basis Data, Rekayasa Perangkat Lunak, AI, Jaringan, Matematika, Manajemen Proyek.",
  };

  const certifications = [
    {
      title_en: 'Copyright Certificate — "Sigmagang"',
      title_id: 'Sertifikat Hak Cipta — "Sigmagang"',
      issuer_en:
        "Directorate General of Intellectual Property — Ministry of Law and Human Rights, Republic of Indonesia (2025)",
      issuer_id:
        "Direktorat Jenderal Kekayaan Intelektual — Kementerian Hukum dan HAM RI (2025)",
    },
  ];

  // reveal hook for scroll reveals
  const revealRef = useRevealOnScroll();

  /* ----- animation variants ----- */
  const fadeVariant = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"} transition-colors duration-500`}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          

          <div className="hidden md:flex items-center gap-6 text-sm">
            {copy.nav.map((label, idx) => {
              const ids = ["home", "projects", "skills", "experience", "contact"];
              return (
                <button
                  key={label}
                  onClick={() => scrollToSection(ids[idx])}
                  className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-purple-300 transition"
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-sm bg-white/60 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition"
              title="Toggle Language"
            >
              {language === "en" ? "EN" : "ID"}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="md:hidden p-2 rounded-md border border-slate-200 dark:border-slate-700" onClick={() => setMenuOpen((s) => !s)}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-2 flex flex-col">
              {["home", "projects", "skills", "experience", "contact"].map((id) => (
                <button key={id} onClick={() => scrollToSection(id)} className="py-3 text-left border-b last:border-b-0 border-slate-100 dark:border-slate-800">
                  {id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-20">
        {/* HERO */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text column */}
            <div>
              <div className="text-sm font-medium text-blue-600 mb-3">{copy.role}</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={language} // re-render on language change to animate
                  variants={fadeVariant}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 0.45 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {copy.hi}{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Muhammad Zaki
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl">{copy.bioShort}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/assets/CV_ATS_Muhammad Zaki.pdf"
                      download="CV_Muhammad_Zaki.pdf"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-[1.02] transition"
                    >
                      <Download size={16} /> {copy.download}
                    </a>

                    <button
                      onClick={() => scrollToSection("projects")}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md hover:-translate-y-0.5 transition"
                    >
                      <ExternalLink size={14} /> {language === "en" ? "View Projects" : "Lihat Proyek"}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* photo area (big, no visible frame, subtle mask & slow zoom) */}
            <div className="flex justify-center items-center">
              <div className="relative w-[360px] md:w-[460px] lg:w-[560px]">
                {/* soft gradient behind */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-300/25 blur-3xl opacity-80"></div>

                <motion.img
                  src="assets/zaki.png"
                  alt="Muhammad Zaki"
                  className="relative w-full aspect-square object-cover rounded-full shadow-2xl"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0))",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0))",
                  }}
                />

                {/* gradient overlay to blend bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white dark:from-slate-900"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / LONG BIO */}
        <section className="py-12 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal-container" ref={revealRef}>
              <motion.div
                className="reveal p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-3">{language === "en" ? "About Me" : "Tentang Saya"}</h3>
                <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{language === "en" ? copy.bioLong : copy.bioLong}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{copy.projectsTitle}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{copy.projectsDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.article
                  key={p.id}
                  className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transform transition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <a href={p.link} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:text-purple-600 flex items-center gap-2">
                        View Repo <ExternalLink size={14} />
                      </a>
                      <a href={p.img} target="_blank" rel="noreferrer" className="text-sm text-slate-500 hover:text-slate-700">
                        Preview
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS / MY STACK */}
        <section id="skills" className="py-16 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{copy.skillsTitle}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Core technologies & tools I use</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((s) => (
                <motion.div
                  key={s.category}
                  className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">{s.icon}</div>
                    <h3 className="text-lg font-semibold">{s.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it.name} className="flex items-center justify-between">
                        <span className="text-slate-700 dark:text-slate-200">{it.name}</span>
                        <div className="w-1/2 bg-slate-100 dark:bg-slate-700 h-2 rounded-full">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                            style={{ width: `${it.percent}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">{copy.experienceTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <p className="text-sm text-slate-500">{experience.place} • {experience.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-4 text-slate-700 dark:text-slate-200 space-y-2 text-sm">
                  {(language === "en" ? experience.bullets_en : experience.bullets_id).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Education + Certifications */}
              <div className="space-y-6">
                <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">{education.school}</h3>
                  <p className="text-sm text-slate-500">{education.period} • {language === "en" ? education.degree_en : education.degree_id}</p>
                  <p className="text-sm mt-2 text-slate-700 dark:text-slate-200">{education.gpa}</p>
                  <p className="text-sm mt-3 text-slate-600 dark:text-slate-300">{language === "en" ? education.highlights_en : education.highlights_id}</p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">{copy.certsTitle}</h3>
                  <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200 space-y-2">
                    {certifications.map((c, i) => (
                      <li key={i}>
                        <strong className="text-blue-600">{language === "en" ? c.title_en : c.title_id}</strong>
                        <div className="text-slate-500 text-sm">{language === "en" ? c.issuer_en : c.issuer_id}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">{copy.contactTitle}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{copy.contactDesc}</p>
              <div className="flex gap-3 flex-wrap">
                <a href="mailto:mhmdzki00@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:scale-[1.02] transition">
                  <Mail size={16} /> {copy.sendEmail}
                </a>
                <a href="https://wa.me/6285954711445" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700">
                  <Phone size={16} /> +62 859-5471-1445
                </a>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{copy.findMe}</h3>
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Mail size={16} /> <span>Email</span>
                  </div>
                  <a href="mailto:mhmdzki00@gmail.com" className="text-blue-600">mhmdzki00@gmail.com</a>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Linkedin size={16} /> <span>LinkedIn</span>
                  </div>
                  <a href="https://linkedin.com/in/muhammad-zakii" target="_blank" rel="noreferrer" className="text-blue-600">/muhammad-zakii</a>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Github size={16} /> <span>GitHub</span>
                  </div>
                  <a href="https://github.com/mhmdzki" target="_blank" rel="noreferrer" className="text-blue-600">/mhmdzki</a>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Phone size={16} /> <span>WhatsApp</span>
                  </div>
                  <a href="https://wa.me/6285954711445" target="_blank" rel="noreferrer" className="text-blue-600">+62 859-5471-1445</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-300">© 2025 Muhammad Zaki • {copy.footer}</div>

          <div className="flex items-center gap-3">
            {/* language toggle with small fade animation */}
            <AnimatePresence mode="wait">
              <motion.button
                key={language}
                onClick={toggleLanguage}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700"
                title="Toggle language"
              >
                {language === "en" ? "EN" : "ID"}
              </motion.button>
            </AnimatePresence>

            {/* theme toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-md border border-slate-200 dark:border-slate-700">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </footer>

      {/* Minimal styles for reveal */}
      <style>{`
        .reveal { opacity: 0; transform: translateY(12px); transition: all 0.6s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}
