"use client";

import {
  Code2, GraduationCap, Video, Palette, Music, CheckCircle2, Monitor, Wifi, Baby, ShieldCheck, Clock,
  ChevronRight, Menu, X, Sparkles, MessageCircle, Mail, Phone, MapPin, Globe
} from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AIAssistantBubble } from "@/components/AIAssistantBubble";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#1D6FE0]/20">
      {/* Announcement pill above nav */}
      <div className="bg-[#0B1220] text-center text-xs font-semibold uppercase tracking-widest text-white/90 py-2.5">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
        Admissions open for next cohort
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0B1220]/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1D6FE0] to-[#22C55E]">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">AI Pioneers</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Modules", href: "#modules" },
              { label: "For Schools", href: "#pathways" },
              { label: "Requirements", href: "#requirements" },
              { label: "Free Trial", href: "#enroll", className: "text-[#22C55E]" },
            ].map((item) => (
              <a key={item.href} href={item.href} className={`hover:text-white transition ${item.className || ""}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#enroll" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0B1220] shadow transition hover:bg-[#EAF2FE]">
              Enroll Now <ChevronRight size={16} />
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white" aria-label="Menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 bg-[#0B1220]/95 border-t border-white/10 space-y-3">
            {["Overview", "Modules", "For Schools", "Requirements", "Free Trial"].map((label) => (
              <a key={label} href="#" className="block text-white/90 text-sm font-medium" onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="overview" className="relative overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#0f1a30] to-[#0B1220] text-white">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                Admissions open for next cohort
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Empower Your Child to Become an <span className="text-[#1D6FE0]">AI Pioneer</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                Transform from a technology consumer to a confident creator. A comprehensive <strong>100% Virtual</strong> weekend program for ages 7–20, adults, and schools.
              </p>
              <p className="mt-3 text-sm text-white/60">🛈 No disruption to academic activities.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#enroll" className="inline-flex items-center gap-2 rounded-lg bg-[#1D6FE0] px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-[#1D6FE0]/20 transition hover:bg-[#1558c4]">
                  Enroll Now <ChevronRight size={18} />
                </a>
                <a href="#modules" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/10">
                  Explore Syllabus
                </a>
              </div>

              <div className="mt-6">
                <a href="#enroll" className="text-sm font-semibold text-[#22C55E] hover:underline">Get a FREE TRIAL today before registration →</a>
              </div>
            </div>

            <div className="relative">
              <img src="/images/hero-collage.jpg" alt="Students learning AI" className="rounded-2xl shadow-2xl shadow-black/40 w-full object-cover" />
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[#0B1220]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl">
                <p className="text-xs uppercase tracking-wider text-white/60">Program Format</p>
                <p className="text-lg font-extrabold">100% Virtual</p>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Just Coding */}
        <section className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">More Than Just Coding. <span className="text-[#1D6FE0]">Future-Ready Skills.</span></h2>
            <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
              Our weekend program is meticulously designed to equip young learners with practical skills in Artificial Intelligence (AI) and digital creation.
            </p>
            <p className="mt-4 text-[#6B7280] text-lg leading-relaxed">
              Through our <strong>100% Virtual</strong> project-based approach, students move from being passive consumers of technology to becoming <strong>confident creators</strong>, learning to use AI tools responsibly to build, innovate, and express their ideas.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Monitor, label: "Project-Based Learning Approach" },
                { icon: CheckCircle2, label: "Practical, Hands-on Experience" },
                { icon: ShieldCheck, label: "Responsible AI Usage & Ethics" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-[#111827] font-medium">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D6FE0]/10 text-[#1D6FE0]">
                    <item.icon size={18} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton message="Hi, I'm interested in the AI Pioneers weekend program. Can you tell me more?" label="Chat Us on WhatsApp Now" />
            </div>
          </div>

          <div className="relative">
            <img src="/images/student-vr.jpg" alt="Student in VR headset" className="rounded-2xl shadow-xl w-full object-cover" />
          </div>
        </section>

        {/* Learning Pathways */}
        <section id="pathways" className="bg-[#F8FAFC] py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D6FE0]">Who is this for?</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Learning Pathways for Everyone</h2>
              <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">Whether you're a student, a professional, or an educational institution, we have a tailored approach to help you harness the power of AI.</p>
              <a href="#enroll" className="inline-block mt-4 text-sm font-bold text-[#22C55E] hover:underline">Get a Free Trial Today Before Registration</a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Young Innovators */}
              <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition overflow-hidden">
                <div className="h-1.5 w-full bg-[#1D6FE0]" />
                <div className="p-8">
                  <h3 className="text-xl font-extrabold">Young Innovators <span className="text-sm font-bold text-[#6B7280]">(7–20)</span></h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed">The core program designed to turn consumers of technology into confident creators.</p>
                  <ul className="mt-6 space-y-3 text-sm text-[#111827]">
                    {["Weekend interactive sessions", "Project-based learning", "Future-ready skill acquisition", "Safe, guided environment"].map((item) => (
                      <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" /> {item}</li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3">
                    <a href="#enroll" className="block w-full text-center rounded-lg bg-[#1D6FE0] px-5 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#1558c4]">Enroll Your Child</a>
                    <WhatsAppButton message="Hi, I'd like to ask about the Young Innovators pathway for ages 7-20." label="Chat on WhatsApp" />
                  </div>
                </div>
              </div>

              {/* Adults */}
              <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition overflow-hidden">
                <div className="h-1.5 w-full bg-[#101010]" />
                <div className="p-8">
                  <h3 className="text-xl font-extrabold">Adults & Professionals</h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed">Don't get left behind. Master the tools that are reshaping industries and productivity.</p>
                  <ul className="mt-6 space-y-3 text-sm text-[#111827]">
                    {["Boost workplace productivity", "Automate mundane tasks", "Create professional content quickly", "Understand the AI landscape"].map((item) => (
                      <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" /> {item}</li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3">
                    <a href="#enroll" className="block w-full text-center rounded-lg bg-[#101010] px-5 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#333]">Join Adult Cohort</a>
                    <WhatsAppButton message="Hi, I'm an adult/professional interested in joining the adult cohort." label="Chat on WhatsApp" />
                  </div>
                </div>
              </div>

              {/* Schools */}
              <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition overflow-hidden">
                <div className="h-1.5 w-full bg-[#7B3FE4]" />
                <div className="p-8">
                  <h3 className="text-xl font-extrabold">Schools & Institutions</h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed">Partner with us to bring cutting-edge AI education to your classrooms and curriculum.</p>
                  <ul className="mt-6 space-y-3 text-sm text-[#111827]">
                    {["Custom curriculum integration", "Teacher training workshops", "After-school program partnerships", "Prepare students for the future economy"].map((item) => (
                      <li key={item} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" /> {item}</li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3">
                    <a href="#enroll" className="block w-full text-center rounded-lg bg-[#7B3FE4] px-5 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#692bc7]">Partner With Us</a>
                    <WhatsAppButton message="Hi, I'm representing a school or institution and want to discuss a partnership." label="Chat on WhatsApp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="modules" className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D6FE0]">Curriculum</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Detailed Module Breakdown</h2>
            <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto">A comprehensive journey from the foundations of web development to advanced AI prompt engineering and multimedia creation.</p>
            <a href="#" className="inline-block mt-3 text-sm font-bold text-[#1D6FE0] hover:underline">💬 Questions about the syllabus? Chat us on WhatsApp now</a>
          </div>

          <div className="space-y-16">
            {[
              {
                num: "01",
                title: "Foundations of AI & Web Development",
                desc: "Build digital products from scratch",
                icon: Code2,
                accent: "#1D6FE0",
                rows: [
                  { head: "Building Real Web Apps", body: "AI-powered platforms to design, build, and publish functional websites instantly" },
                  { head: "Creating Mini-Games", body: "Apply logic to build fun, interactive mini-games using proven AI models" },
                ]
              },
              {
                num: "02",
                title: "AI-Powered Learning & Academic Excellence",
                desc: "Transform study habits with AI",
                icon: GraduationCap,
                accent: "#1D6FE0",
                rows: [
                  { head: "AI Research Assistant", body: "Learn to find reliable info, summarize lessons, and condense topics efficiently" },
                  { head: "Text-to-Speech Mastery", body: "Use AI voice tools to convert study materials into audio for better retention" },
                  { head: "Interactive Quizzes", body: "Generate personalized quizzes and flashcards tailored to your curriculum" },
                ]
              },
              {
                num: "03",
                title: "Creative Multimedia & Content Creation",
                desc: "Modern storytelling through video & audio",
                icon: Video,
                accent: "#1D6FE0",
                rows: [
                  { head: "AI Video Production", body: "From concept to final edit; scripting, editing, and effects with AI" },
                  { head: "Podcast Production", body: "Plan, record, and clean audio for professional-sounding podcasts" },
                  { head: "AI Animation", body: "Bring stories to life with simplified AI animation tools" },
                ]
              },
              {
                num: "04",
                title: "Visual Design & Storytelling",
                desc: "Present ideas powerfully",
                icon: Palette,
                accent: "#1D6FE0",
                rows: [
                  { head: "Dynamic Presentations", body: "Design visually compelling slides that move beyond the basics" },
                  { head: "AI Image Generation", body: "Master the art of 'prompting' to create high-quality artwork" },
                  { head: "Digital Storybooks", body: "Combine AI writing and images to create captivating stories" },
                ]
              },
              {
                num: "05",
                title: "Advanced Skills: Music & Prompt Engineering",
                desc: "Mastering the artistic side of AI",
                icon: Music,
                accent: "#1D6FE0",
                rows: [
                  { head: "AI Music Creation", body: "Compose original melodies, beats, and soundtracks" },
                  { head: "Prompt Engineering", body: "The core skill of the future: how to talk to AI effectively" },
                  { head: "Professional Design", body: "Create professional flyers and social media assets" },
                ]
              },
            ].map((mod) => (
              <div key={mod.num} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div className="rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#152842] text-white p-8 shadow-xl">
                  <div className="flex items-center gap-2 text-[#1D6FE0] text-xs font-extrabold uppercase tracking-widest mb-4">
                    <mod.icon size={16} /> Module {mod.num}
                  </div>
                  <h3 className="text-2xl font-extrabold leading-snug">{mod.title}</h3>
                  <p className="mt-3 text-white/80">{mod.desc}</p>
                </div>
                <div className="space-y-5">
                  {mod.rows.map((row) => (
                    <div key={row.head} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                      <h4 className="font-extrabold text-[#111827]">{row.head}</h4>
                      <p className="mt-1 text-sm text-[#6B7280]">{row.body}</p>
                    </div>
                  ))}
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#1D6FE0] hover:underline">
                    Learn more about Module {mod.num} on WhatsApp <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Requirements + Ready to Innovate */}
        <section id="requirements" className="bg-[#0B1220] text-white py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Program Requirements</h2>
              <p className="mt-4 text-white/70 leading-relaxed">To ensure a successful and smooth Virtual Learning experience for everyone, participants must meet the following simple requirements.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Baby, label: "Age Group", desc: "Ages 7–20 (Adults also welcome)" },
                  { icon: Monitor, label: "Equipment", desc: "Access to Computer, Laptop, or Tablet" },
                  { icon: Wifi, label: "Internet", desc: "Stable connection for virtual sessions" },
                  { icon: ShieldCheck, label: "Consent", desc: "Parental consent for minors" },
                  { icon: Clock, label: "Commitment", desc: "Agree to program duration" },
                ].map((r) => (
                  <div key={r.label} className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <r.icon size={22} className="text-[#22C55E] mb-3" />
                    <h4 className="font-extrabold">{r.label}</h4>
                    <p className="text-sm text-white/60 mt-1">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <WhatsAppButton message="Hi, I have questions about the program requirements for AI Pioneers." label="Chat Us on WhatsApp Now" />
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#1D6FE0] to-[#1558c4] p-10 text-white shadow-2xl shadow-[#1D6FE0]/20">
              <h3 className="text-3xl font-extrabold">Ready to Innovate?</h3>
              <p className="mt-4 text-white/90 leading-relaxed">Unlock your child's creative potential with AI today. Spots fill up quickly for our weekend cohorts.</p>
              <a href="#enroll" className="mt-8 inline-block rounded-lg bg-white px-7 py-3.5 text-base font-extrabold text-[#0B1220] shadow transition hover:bg-[#EAF2FE]">Enroll Now</a>
              <div className="mt-6">
                <a href="#enroll" className="text-sm font-bold text-white/90 hover:underline">Get a Free Trial Today</a>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section id="enroll" className="bg-[#EAF2FE] py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D6FE0]">Secure Your Spot</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Enrollment Form</h2>
              <p className="mt-4 text-[#6B7280] text-lg">Fill out the form below to register. Training is <strong>100% Virtual</strong> and flexible.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B7280]">Program Fee</p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-5xl font-extrabold text-[#111827]">₦30,000</span>
                  <span className="text-xl text-[#6B7280] line-through">₦45,000</span>
                </div>
                <p className="mt-2 text-sm font-bold text-[#22C55E]">Early Bird (Ends July 31, 2026)</p>
                <p className="mt-4 text-xs text-[#6B7280]">Fees are non-refundable but transferable to another cohort or participant with 7 days' notice.</p>

                <ul className="mt-6 space-y-3 text-sm text-[#111827]">
                  {[
                    "Full Access to All 5 Modules",
                    "Live Virtual Sessions",
                    "Project Portfolio Building",
                    "Mentorship Support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#22C55E]" /> {item}</li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-6 py-3 text-sm font-extrabold text-white shadow transition hover:bg-[#16a34a]">Get a Free Trial Today</a>
                  <p className="mt-2 text-xs text-[#6B7280]">Get a free trial call before registering</p>
                </div>
              </div>

              <form
                className="lg:col-span-3 rounded-2xl bg-white border border-slate-200 p-8 shadow-sm"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    studentName: (form.elements.namedItem("studentName") as HTMLInputElement)?.value,
                    studentAge: (form.elements.namedItem("studentAge") as HTMLSelectElement)?.value,
                    parentName: (form.elements.namedItem("parentName") as HTMLInputElement)?.value,
                    whatsappPhone: (form.elements.namedItem("whatsappPhone") as HTMLInputElement)?.value,
                    email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
                    learningGoal: (form.elements.namedItem("learningGoal") as HTMLTextAreaElement)?.value,
                  };
                  await fetch("/api/enroll", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  alert("Enrollment submitted! We'll reach out via WhatsApp and email.");
                  form.reset();
                }}
              >
                <h3 className="text-xl font-extrabold mb-6">Student Registration</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">Student Name</label>
                    <input id="studentName" name="studentName" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30" placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="studentAge" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">Student Age</label>
                    <select id="studentAge" name="studentAge" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30">
                      <option value="">Select age</option>
                      {Array.from({ length: 14 }, (_, i) => i + 7).map((age) => (
                        <option key={age} value={String(age)}>{age}</option>
                      ))}
                      <option value="Adult">Adult / Professional</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">Parent / Guardian Name</label>
                    <input id="parentName" name="parentName" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30" placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="whatsappPhone" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">WhatsApp Phone Number <span className="text-[#22C55E]">*</span></label>
                    <input id="whatsappPhone" name="whatsappPhone" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30" placeholder="+234 ..." />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">Email Address</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30" placeholder="you@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="learningGoal" className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">Primary Learning Goal (optional)</label>
                    <textarea id="learningGoal" name="learningGoal" rows={3} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D6FE0]/30" placeholder="What do you hope to achieve from this program?" />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full rounded-xl bg-[#0B1220] px-6 py-4 text-base font-extrabold text-white shadow transition hover:bg-[#152842]">
                  Complete Registration ✈
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1220] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 text-white mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1D6FE0] to-[#22C55E]">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">AI Pioneers</span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed">Equipping the next generation of young minds with the tools, ethics, and skills to thrive in an AI-driven world.</p>
            <a href="#enroll" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-5 py-2.5 text-sm font-extrabold text-white shadow transition hover:bg-[#16a34a]">Get a Free Trial</a>
            <div className="mt-6 flex gap-3">
              {[Globe, Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition" aria-label="Social link"><Icon size={16} /></a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-extrabold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Home", "Syllabus", "For Schools", "Requirements", "Enroll Now"].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#22C55E]" /> +234 906 339 4802</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#22C55E]" /> +234 906 339 4802</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#22C55E]" /> hello@aipioneers.ng</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#22C55E]" /> Lagos, Nigeria</li>
            </ul>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#22C55E] hover:underline">Chat with us on WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1280px] px-6 py-6 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-2">
            <span>© 2026 AI Pioneers Program. All rights reserved.</span>
            <span>Equipping the next generation for an AI-driven world.</span>
          </div>
        </div>
      </footer>

      <AIAssistantBubble />
    </div>
  );
}
