'use client'

import React, { useState, useEffect } from 'react'

function ArrowUpRight({ className = "w-4 h-4 inline-block ml-1" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

function SunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Page() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('mella-theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('mella-theme', nextTheme)
  }

  const workItems = [
    {
      num: '01',
      tag: 'In-house · Live Marketplace',
      title: 'AdVouch',
      desc: 'A trusted advertising marketplace featuring verified business identity checks, campaign escrow, and automated settlement.',
      flagship: true,
      link: 'https://advouch.com',
      visual: (
        <div className="w-full h-full min-h-[220px] rounded-2xl overflow-hidden relative group border border-[var(--border-blue)]">
          <img 
            src="/advouch-card.jpg" 
            alt="AdVouch Escrow Marketplace Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
    {
      num: '02',
      tag: 'Client · Legal AI',
      title: 'Mizan Net',
      desc: 'An AI-powered legal advisor and intelligence platform built specifically for Ethiopian statutory research, legal precedent, and case analysis.',
      flagship: false,
      visual: (
        <div className="w-full h-full min-h-[190px] rounded-2xl overflow-hidden relative group border border-[var(--border-blue)]">
          <img 
            src="/mizan-net-card.jpg" 
            alt="Mizan Net AI Legal Intelligence Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
    {
      num: '03',
      tag: 'Client · Enterprise Web',
      title: 'School Management System',
      desc: 'An integrated educational ERP streamlining student records, attendance tracking, gradebook analytics, and administrative workflows.',
      flagship: false,
      visual: (
        <div className="w-full h-full min-h-[190px] rounded-2xl overflow-hidden relative group border border-[var(--border-blue)]">
          <img 
            src="/school-system-card.jpg" 
            alt="School Management System ERP Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
    {
      num: '04',
      tag: 'Client · Healthcare',
      title: 'Clinic Management System',
      desc: 'A comprehensive clinical operations platform automating electronic health records, appointment scheduling, prescription tracking, and billing.',
      flagship: false,
      visual: (
        <div className="w-full h-full min-h-[190px] rounded-2xl overflow-hidden relative group border border-[var(--border-blue)]">
          <img 
            src="/clinic-system-card.jpg" 
            alt="Clinic Management System EHR Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
    {
      num: '05',
      tag: 'Client · Hospitality',
      title: 'Restaurant Management System',
      desc: 'A real-time hospitality suite powering point-of-sale operations, kitchen order dispatch, table reservations, and inventory management.',
      flagship: false,
      visual: (
        <div className="w-full h-full min-h-[190px] rounded-2xl overflow-hidden relative group border border-[var(--border-blue)]">
          <img 
            src="/restaurant-system-card.jpg" 
            alt="Restaurant Management System POS KOT Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
  ]

  const services = [
    { num: '01', name: 'Custom software' },
    { num: '02', name: 'Dedicated teams' },
    { num: '03', name: 'Product design' },
    { num: '04', name: 'Web & mobile' },
    { num: '05', name: 'Integrations' },
    { num: '06', name: 'Support & improvements' },
  ]

  const processSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We learn the problem, users, constraints, and what actually needs to be built.',
    },
    {
      num: '02',
      title: 'Build',
      desc: 'Design and engineering happen together. You see working software early.',
    },
    {
      num: '03',
      title: 'Ship',
      desc: 'We get it into production instead of keeping it trapped in development.',
    },
    {
      num: '04',
      title: 'Improve',
      desc: 'We stay involved to fix, maintain, and build the next version.',
    },
  ]

  return (
    <main id="top" className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-300 overflow-hidden">
      {/* 1. Floating Island Header Navigation */}
      <header className="site-header">
        <a href="#top" className="brand-logo">
          <img src="/blue icon.svg" alt="Mella Emblem" className="brand-icon" />
          <span>Mella<span className="text-[#2563FF]">.</span></span>
        </a>

        <nav className="nav-links" aria-label="Primary Navigation">
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#contact" className="btn-pill btn-md">
            Start a project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* 2. Cinematic Hero Section with Full-Bleed Addis Ababa Skyline Image */}
      <section 
        className="relative w-full min-h-[880px] md:min-h-[960px] flex items-center justify-center overflow-hidden bg-cover bg-center pt-28 pb-12 md:pt-32 md:pb-14"
        style={{ backgroundImage: "url('/addis-ababa-skyline.jpeg')" }}
      >
        <div className="glow-hero-bg" />

        <div className="section-shell relative z-10 w-full">
          {/* Decoupled Hero Card Container (+50px height, simplified structure) */}
          <div className="card-base rounded-[32px] md:rounded-[40px] px-6 py-14 md:px-12 md:py-18 lg:px-16 lg:py-22 min-h-[530px] md:min-h-[570px] flex items-center justify-center relative overflow-hidden transition-colors duration-300 backdrop-blur-md bg-[var(--surface)]/90 border border-[var(--border-subtle)]">
            {/* Animated Moving Background Orbs */}
            <div className="hero-moving-orb-1 absolute -top-32 -left-16 w-[360px] h-[360px] bg-[#2563FF] opacity-30 filter blur-[70px] pointer-events-none rounded-full" />
            <div className="hero-moving-orb-2 absolute -bottom-32 -right-16 w-[380px] h-[380px] bg-[#1237A6] opacity-35 filter blur-[70px] pointer-events-none rounded-full" />

            {/* Simplistic Centered Content */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-3xl mx-auto space-y-8 py-4">
              <span className="eyebrow mx-auto tracking-widest text-xs font-mono">Independent software studio · Addis Ababa</span>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-[var(--text-primary)]">
                Make the<br /><em>next thing.</em>
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl mx-auto">
                We design, build, and run software products for people with something useful to put into the world.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a href="#contact" className="btn-primary btn-lg">
                  Start a project <ArrowUpRight className="w-5 h-5" />
                </a>
                <a href="#work" className="btn-ghost btn-lg">
                  See our work <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Work Section */}
      <section id="work" className="section-padding relative">
        <div className="section-shell space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="space-y-3">
              <span className="eyebrow">Selected work / 05</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Things we&apos;ve<br /><em>made useful.</em>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-sm">
              From first thought to daily tool.
            </p>
          </div>

          {/* Repeating Pattern Portfolio Layout (1 Long Full-Width Card -> 3 Row List Cards -> Repeating) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {workItems.map((item, idx) => (
              (idx % 4 === 0) ? (
                /* Long Full-Width Card (Indices 0, 4, 8...) */
                <a
                  key={item.num}
                  href={item.link || '#contact'}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className="card-base rounded-[32px] p-8 md:p-10 border border-[var(--border-subtle)] hover:border-[var(--border-blue)] transition-all duration-300 group overflow-hidden bg-[var(--surface)] lg:col-span-3 min-h-[380px] flex flex-col justify-between block cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6 h-full">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider">{item.tag}</span>
                          <span className="text-[var(--text-muted)] text-sm font-medium">{item.num}</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-[var(--bright-blue)]">
                        <span>{item.link ? "Visit advouch.com" : "Explore Project"}</span>
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>

                    {/* Right Full Blue Image Section */}
                    <div className="lg:col-span-5 h-60 sm:h-72 w-full rounded-2xl overflow-hidden relative border border-[var(--border-blue)] bg-[var(--elevated)]">
                      {item.visual}
                    </div>
                  </div>
                </a>
              ) : (
                /* 3-Row List Card (Indices 1, 2, 3...) */
                <a
                  key={item.num}
                  href={item.link || '#contact'}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  className="card-base rounded-[28px] p-6 md:p-7 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--border-blue)] transition-all duration-300 group overflow-hidden bg-[var(--surface)] lg:col-span-1 min-h-[460px] block cursor-pointer"
                >
                  <div className="space-y-5">
                    <div className="h-52 w-full rounded-2xl overflow-hidden relative border border-[var(--border-blue)] bg-[var(--elevated)]">
                      {item.visual}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider">{item.tag}</span>
                      <span className="text-[var(--text-muted)] text-sm font-medium">{item.num}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] mt-6 flex items-center justify-between text-sm font-semibold text-[var(--bright-blue)]">
                    <span>{item.link ? "Visit Website" : "Explore Project"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              )
            ))}
          </div>

          <div className="pt-4 text-center md:text-left">
            <a href="#contact" className="btn-ghost btn-lg">
              View all work <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. What We Do Section — Ultra-Low Text, High Visual UX Redesign */}
      <section id="services" className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)] relative transition-colors duration-300">
        <div className="section-shell space-y-16">
          {/* Minimalist Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">What we do</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.05]">
              We don&apos;t sell fixed packages.<br />
              <em className="text-[var(--bright-blue)]">We bring engineering &amp; product thinking.</em>
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed pt-1">
              Senior engineering and real systems experience applied directly to the problem in front of us.
            </p>
          </div>

          {/* 3 Visual Feature Cards with Rich Blue Image Structures */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Visual Card 1 */}
            <div className="card-base p-6 rounded-[28px] border border-[var(--border-subtle)] hover:border-[var(--border-blue)] transition-all duration-300 space-y-5 group bg-[var(--bg)]">
              <div className="h-56 w-full rounded-2xl overflow-hidden relative border border-[var(--border-blue)] bg-[var(--elevated)]">
                <img 
                  src="/systems-engineering-card.jpg" 
                  alt="Systems Engineering Cloud Infrastructure Visual" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider">01 / Architecture</span>
                  <span className="text-[var(--text-muted)]">Core Systems</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors">
                  Systems Engineering
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Resilient backends, database architecture, APIs, and high-availability cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Visual Card 2 */}
            <div className="card-base p-6 rounded-[28px] border border-[var(--border-subtle)] hover:border-[var(--border-blue)] transition-all duration-300 space-y-5 group bg-[var(--bg)]">
              <div className="h-56 w-full rounded-2xl overflow-hidden relative border border-[var(--border-blue)] bg-[var(--elevated)]">
                <img 
                  src="/product-design-card.jpg" 
                  alt="Product UI Experience Visual" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider">02 / UI &amp; UX</span>
                  <span className="text-[var(--text-muted)]">Calm Product</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors">
                  Product &amp; UI Design
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Translating complex domain logic into intuitive, calm interfaces built for real users.
                </p>
              </div>
            </div>

            {/* Visual Card 3 */}
            <div className="card-base p-6 rounded-[28px] border border-[var(--border-subtle)] hover:border-[var(--border-blue)] transition-all duration-300 space-y-5 group bg-[var(--bg)]">
              <div className="h-56 w-full rounded-2xl overflow-hidden relative border border-[var(--border-blue)] bg-[var(--elevated)]">
                <img 
                  src="/operational-care-card.jpg" 
                  alt="Operational Care APM Monitoring Visual" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider">03 / Production Care</span>
                  <span className="text-[var(--text-muted)]">Skin in the Game</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors">
                  Operational Care
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Running live production systems with continuous performance tuning and long-term care.
                </p>
              </div>
            </div>
          </div>

          {/* Minimalist Visual Trust Badges */}
          <div className="p-6 rounded-[24px] bg-[var(--elevated)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-6 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--bright-blue)]" />
              <span className="font-bold text-[var(--text-primary)]">100% Senior Talent</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--bright-blue)]" />
              <span className="font-bold text-[var(--text-primary)]">Production Uptime</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--bright-blue)]" />
              <span className="font-bold text-[var(--text-primary)]">Product Operators</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--bright-blue)]" />
              <span className="font-bold text-[var(--text-primary)]">Transparent Delivery</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-6">
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              Ready to talk through your product requirements or technical challenges?
            </p>
            <a href="#contact" className="btn-primary btn-lg">
              Start a project <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5 & 6. Products & Partnerships Split Section */}
      <section className="section-padding relative">
        <div className="section-shell space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Products Panel (In-house) */}
            <div className="card-featured p-8 md:p-12 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563FF] opacity-15 filter blur-[80px] pointer-events-none rounded-full" />
              
              <div className="space-y-4">
                <span className="eyebrow">Our products</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Built with<br /><em>skin in it.</em>
                </h3>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                We build, launch, and operate our own products. The lessons make every client project sharper.
              </p>

              {/* Showcase Card Preview */}
              <div className="p-6 rounded-2xl bg-[var(--elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span className="text-[var(--bright-blue)] font-bold">AdVouch</span>
                  <span>Flagship Release</span>
                </div>
                <div className="text-xl font-bold text-[var(--text-primary)]">Vouched advertising & verified identity marketplace.</div>
              </div>

              <div>
                <a href="#case-study" className="btn-primary btn-lg">
                  Open AdVouch <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Partnerships Panel (Clients) */}
            <div className="card-base p-8 md:p-12 space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <span className="eyebrow">Our partnerships</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Your problem.<br /><em>Our team.</em>
                </h3>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Software built around your business — from a focused first release to an ongoing product team.
              </p>

              <div className="p-6 rounded-2xl bg-[var(--elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Engineering Model</div>
                <div className="text-xl font-bold text-[var(--text-primary)]">Dedicated design & development teams embedded in your workflow.</div>
              </div>

              <div>
                <a href="#contact" className="btn-ghost btn-lg">
                  Work with us <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Mella Method Section */}
      <section className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)] relative transition-colors duration-300">
        <div className="section-shell space-y-16">
          <div className="space-y-3">
            <span className="eyebrow">The Mella method</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Less theatre.<br /><em>More shipping.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="process-chapter space-y-4">
                <div className="process-chapter-num">{step.num}</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{step.title}</h3>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Featured Case Study Section — AdVouch */}
      <section id="case-study" className="section-padding relative">
        <div className="section-shell space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="eyebrow">Featured case study · In-house · Live</span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)]">
                AdVouch
              </h2>
              <p className="text-xl sm:text-2xl text-[var(--text-secondary)]">
                Advertising with a <em>little more proof.</em>
              </p>
            </div>
            <a href="#contact" className="btn-primary btn-lg">
              Open AdVouch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interface Visual Showcase Box */}
          <div className="bg-[var(--case-bg)] border border-[var(--border-blue)] rounded-[32px] p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
            <div className="bg-[var(--case-inner)] border border-[var(--border-subtle)] rounded-2xl p-6 md:p-10 space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 font-bold text-lg text-[var(--text-primary)]">
                  <img src="/blue icon.svg" alt="AdVouch emblem" className="w-6 h-6" />
                  <span>AdVouch</span>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-[var(--text-secondary)]">
                  <span>Discover Ads</span>
                  <span>Businesses</span>
                  <span>Campaigns</span>
                  <span>Identity</span>
                  <span>Payments</span>
                </div>
              </div>

              <div className="space-y-4 max-w-2xl py-4">
                <span className="text-xs font-mono tracking-widest text-[var(--bright-blue)] uppercase font-bold">Discover Ads</span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">
                  Advertising<br />you can trust.
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="h-24 rounded-xl bg-[rgba(37,99,255,0.12)] border border-[rgba(37,99,255,0.3)] p-4 flex flex-col justify-between">
                  <span className="text-xs font-mono text-[var(--bright-blue)]">Vouched Campaigns</span>
                  <span className="text-lg font-bold text-[var(--text-primary)]">Identity Verified</span>
                </div>
                <div className="h-24 rounded-xl bg-[var(--elevated)] border border-[var(--border-subtle)] p-4 flex flex-col justify-between">
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Escrow Payments</span>
                  <span className="text-lg font-bold text-[var(--text-primary)]">Automated Payouts</span>
                </div>
                <div className="h-24 rounded-xl bg-[var(--elevated)] border border-[var(--border-subtle)] p-4 flex flex-col justify-between">
                  <span className="text-xs font-mono text-[var(--text-secondary)]">Audited Proof</span>
                  <span className="text-lg font-bold text-[var(--text-primary)]">Live Signals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Triad Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="triad-col space-y-2">
              <span className="text-xs font-mono text-[var(--bright-blue)] uppercase font-bold tracking-wider">The problem</span>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Informal advertising made trust, identity, and campaign payments difficult to verify.
              </p>
            </div>
            <div className="triad-col space-y-2">
              <span className="text-xs font-mono text-[var(--bright-blue)] uppercase font-bold tracking-wider">The product</span>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Discover Ads · Businesses · Campaigns · Identity · Payments
              </p>
            </div>
            <div className="triad-col space-y-2">
              <span className="text-xs font-mono text-[var(--bright-blue)] uppercase font-bold tracking-wider">The result</span>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                A live product built and operated by Mella.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. About Mella Section */}
      <section id="about" className="section-padding relative">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow">About Mella</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Small team.<br /><em>Big follow-through.</em>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl sm:text-2xl text-[var(--text-primary)] font-medium leading-relaxed">
                Mella Software Solutions PLC builds software products under its own name and works with companies that need a team to design, build, and support their software.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                We&apos;re small enough that you know who is doing the work.
              </p>
              <div className="pt-2">
                <a href="#contact" className="btn-ghost btn-lg">
                  About Mella <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact Section — Visual Climax */}
      <section id="contact" className="relative pt-32 pb-32 md:pt-44 md:pb-44 overflow-hidden">
        <div className="glow-climax-bg" />

        <div className="section-shell relative z-10 text-center max-w-4xl space-y-8">
          <span className="eyebrow">Have a good one?</span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none text-[var(--text-primary)]">
            Let&apos;s make<br /><em>it real.</em>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed pt-2">
            Tell us what you&apos;re building, what problem you&apos;re solving, and where you are today.
          </p>

          <div className="pt-6">
            <a href="mailto:hello@mellasoftware.com" className="btn-primary btn-lg text-lg px-10 py-5">
              Start a project <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-12 text-sm text-[var(--text-secondary)] font-mono leading-loose">
            <strong className="text-[var(--text-primary)] text-base block font-sans">hello@mellasoftware.com</strong>
            <span>Addis Ababa, Ethiopia</span><br />
            <span>Monday–Friday · 09:00–18:00 EAT</span>
          </div>
        </div>
      </section>

      {/* 11. Minimal Footer */}
      <footer className="border-t border-[var(--border-subtle)] py-12 bg-[var(--bg)] transition-colors duration-300">
        <div className="section-shell flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs text-[var(--text-secondary)]">
          <div className="space-y-2">
            <a href="#top" className="brand-logo text-lg">
              <img src="/blue icon.svg" alt="Mella Emblem" className="brand-icon" />
              <span>Mella<span className="text-[#2563FF]">.</span></span>
            </a>
            <p className="text-[var(--text-muted)]">Make the next thing.</p>
          </div>

          <nav className="flex flex-wrap gap-8 font-medium text-sm text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</a>
            <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
          </nav>

          <div className="space-y-1 text-right md:text-right">
            <div>Privacy · Terms</div>
            <div>© 2026 Mella Software Solutions PLC</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
