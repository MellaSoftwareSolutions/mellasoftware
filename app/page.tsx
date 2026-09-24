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

export default function Page() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

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
            src="/mella-net.jpeg" 
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
            src="/mella-school.jpeg" 
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
            src="/mella-clinic.jpeg" 
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
            src="/mella-menu.jpeg" 
            alt="Restaurant Management System POS KOT Visual" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      ),
    },
  ]

  const solveItems = [
    {
      num: '01',
      tag: 'You have an idea',
      headlinePrefix: 'You know what to build. ',
      headlineItalic: 'We make it real.',
      desc: 'We turn your concept into a live product people can actually use.',
      transform: 'Concept → Live MVP',
    },
    {
      num: '02',
      tag: 'Manual processes',
      headlinePrefix: 'Your team spends time ',
      headlineItalic: 'software should handle.',
      desc: 'We bring scattered spreadsheets and tools into one automated system.',
      transform: 'Manual Tasks → Unified Flow',
    },
    {
      num: '03',
      tag: 'Current software slow',
      headlinePrefix: 'Your software is slowing ',
      headlineItalic: 'your business down.',
      desc: "We fix bottlenecks, modernize outdated UX, or rebuild what's broken.",
      transform: 'Sluggish Legacy → Fast & Modern',
    },
    {
      num: '04',
      tag: 'Business growing',
      headlinePrefix: "What worked before ",
      headlineItalic: "doesn't work anymore.",
      desc: 'We build scalable cloud architecture that expands with your growth.',
      transform: 'Capacity Limits → Elastic Scale',
    },
    {
      num: '05',
      tag: 'Need real ownership',
      headlinePrefix: "Never left stranded with ",
      headlineItalic: 'a finished project.',
      desc: 'We stay on board for ongoing maintenance, proactive fixes, and new features.',
      transform: 'One-off Handoff → Dedicated Team',
    },
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
          <a href="#services" className="nav-link">What we solve</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-pill btn-md text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">
            Start a project <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </header>

      {/* 2. Cinematic Hero Section with Full-Bleed Addis Ababa Skyline Image */}
      <section 
        className="relative w-full min-h-[820px] md:min-h-[960px] flex items-center justify-center overflow-hidden bg-cover bg-center pt-24 pb-10 md:pt-32 md:pb-14"
        style={{ backgroundImage: "url('/addis-ababa-skyline.jpeg')" }}
      >
        <div className="glow-hero-bg" />

        <div className="section-shell relative z-10 w-full">
          {/* Decoupled Hero Card Container (+50px height, simplified structure) */}
          <div className="card-base rounded-[28px] sm:rounded-[36px] md:rounded-[40px] px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-18 lg:px-16 lg:py-22 min-h-[480px] sm:min-h-[530px] md:min-h-[570px] flex items-center justify-center relative overflow-hidden transition-colors duration-300 backdrop-blur-md bg-[var(--surface)]/90 border border-[var(--border-subtle)]">
            {/* Animated Moving Background Orbs */}
            <div className="hero-moving-orb-1 absolute -top-32 -left-16 w-[360px] h-[360px] bg-[#2563FF] opacity-30 filter blur-[70px] pointer-events-none rounded-full" />
            <div className="hero-moving-orb-2 absolute -bottom-32 -right-16 w-[380px] h-[380px] bg-[#1237A6] opacity-35 filter blur-[70px] pointer-events-none rounded-full" />

            {/* Simplistic Centered Content */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-3xl mx-auto space-y-6 sm:space-y-8 py-2 sm:py-4">
              <span className="eyebrow mx-auto tracking-widest text-[0.7rem] sm:text-xs font-mono text-center">Independent software studio · Addis Ababa</span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.98] sm:leading-[0.95] text-[var(--text-primary)]">
                Make the<br /><em>next thing.</em>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl mx-auto">
                We design, build, and run software products for people with something useful to put into the world.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
                <a href="#contact" className="btn-primary btn-lg text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4">
                  Start a project <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#work" className="btn-ghost btn-lg text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4">
                  See our work <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
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

      {/* 4. What We Solve Section — Spacious Architectural Slates with Unique Patterned Background */}
      <section id="services" className="section-padding solve-section-bg border-y border-[var(--border-subtle)] relative transition-colors duration-300">
        {/* Architectural Blueprint Pattern Grid */}
        <div className="solve-pattern-grid" aria-hidden="true" />

        {/* Ambient Moving Atmospheric Orbs */}
        <div className="hero-moving-orb-1 absolute -top-40 -left-20 w-[550px] h-[550px] bg-[#2563FF] opacity-25 filter blur-[110px] pointer-events-none rounded-full" />
        <div className="hero-moving-orb-2 absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#1237A6] opacity-30 filter blur-[130px] pointer-events-none rounded-full" />

        {/* Subtle Architectural Blueprint Rings & Grid Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] pointer-events-none opacity-20 dark:opacity-25 select-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1100 1100" fill="none">
            <circle cx="550" cy="550" r="220" stroke="var(--bright-blue)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="550" cy="550" r="380" stroke="var(--border-blue)" strokeWidth="1" />
            <circle cx="550" cy="550" r="540" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="6 12" />
            <path d="M 550 0 V 1100 M 0 550 H 1100" stroke="var(--border-blue)" strokeWidth="1" strokeDasharray="3 9" strokeOpacity="0.4" />
          </svg>
        </div>

        <div className="section-shell space-y-16 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">What we solve</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] sm:leading-[1.05]">
              Whatever is in the way,<br />
              <em className="text-[var(--bright-blue)]">we help you move forward.</em>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed pt-1">
              You don&apos;t need to know the tech stack. Just what&apos;s broken, taking too much time, or waiting to be built.
            </p>
          </div>

          {/* Spacious 2-Column Architectural Card Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {solveItems.map((item) => (
              <div
                key={item.num}
                className="rounded-[28px] sm:rounded-[32px] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 border border-[var(--border-subtle)] hover:border-[var(--border-blue)] bg-[var(--elevated)]/90 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(37,99,255,0.14)]"
              >
                {/* Ambient Subtle Corner Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563FF] opacity-10 group-hover:opacity-25 transition-opacity duration-500 filter blur-[60px] pointer-events-none rounded-full" />

                <div className="space-y-5 sm:space-y-6 relative z-10">
                  {/* Top Row: Pill Tag & Transform Indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--bright-blue)] bg-[var(--surface)] border border-[var(--border-subtle)] px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.num} / {item.tag}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-secondary)] px-3 py-1 rounded-full bg-[var(--surface)]/80 border border-[var(--border-subtle)] group-hover:border-[var(--border-blue)] group-hover:text-[var(--bright-blue)] transition-colors">
                      {item.transform}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors duration-300 leading-snug">
                    {item.headlinePrefix}
                    <em className="text-[var(--bright-blue)]">{item.headlineItalic}</em>
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Action Link */}
                <div className="pt-5 sm:pt-6 border-t border-[var(--border-subtle)] mt-6 sm:mt-8 flex items-center justify-between text-sm font-semibold text-[var(--bright-blue)] relative z-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
                    Scope &amp; Ship
                  </span>
                  <a href="#contact" className="group-hover:underline inline-flex items-center gap-1.5">
                    <span>Discuss scenario</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* Card 06: The Manifesto & Commitment Card */}
            <div
              className="rounded-[28px] sm:rounded-[32px] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 border border-[var(--border-blue)] bg-gradient-to-br from-[var(--elevated)]/95 via-[var(--surface)]/90 to-[rgba(37,99,255,0.22)] backdrop-blur-md shadow-[0_0_50px_rgba(37,99,255,0.18)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="hero-moving-orb-1 absolute -top-20 -right-20 w-80 h-80 bg-[#2563FF] opacity-25 filter blur-[60px] pointer-events-none rounded-full" />

              <div className="space-y-5 sm:space-y-6 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-mono text-xs font-bold text-[var(--bright-blue)] bg-[var(--surface)] border border-[var(--border-blue)] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--bright-blue)] animate-pulse" />
                    The Commitment
                  </span>
                  <span className="text-[var(--text-muted)]">Core</span>
                </div>

                <div className="space-y-3">
                  <div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[var(--text-secondary)] leading-snug">
                    <div>A problem to solve.</div>
                    <div>A process to improve.</div>
                    <div>An idea to build.</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[var(--text-primary)] leading-snug pt-1">
                    We&apos;re here to <em className="text-[var(--bright-blue)]">make it work.</em>
                  </h3>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                  No bloated scopes or detached handoffs. Tell us what is in your way, and our senior engineers will carry it forward.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[var(--border-subtle)] mt-6 sm:mt-8 relative z-10">
                <a href="#contact" className="btn-primary w-full justify-center py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-md">
                  Start a project <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Visual Trust Badges */}
          <div className="p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-[var(--elevated)] border border-[var(--border-subtle)] grid grid-cols-2 md:flex md:flex-wrap items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[var(--bright-blue)] shrink-0" />
              <span className="font-bold text-[var(--text-primary)]">100% Senior Talent</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[var(--bright-blue)] shrink-0" />
              <span className="font-bold text-[var(--text-primary)]">Production Uptime</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[var(--bright-blue)] shrink-0" />
              <span className="font-bold text-[var(--text-primary)]">Product Operators</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[var(--bright-blue)] shrink-0" />
              <span className="font-bold text-[var(--text-primary)]">Transparent Delivery</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl">
              Ready to talk through your product requirements or technical challenges?
            </p>
            <a href="#contact" className="btn-primary btn-lg w-full sm:w-auto justify-center">
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



      {/* 10. Contact Section — Visual Climax */}
      <section id="contact" className="relative pt-24 pb-24 md:pt-40 md:pb-40 overflow-hidden">
        <div className="glow-climax-bg" />

        <div className="section-shell relative z-10 text-center max-w-4xl space-y-6 sm:space-y-8">
          <span className="eyebrow">Have a good one?</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none text-[var(--text-primary)]">
            Let&apos;s make<br /><em>it real.</em>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed pt-2">
            Tell us what you&apos;re building, what problem you&apos;re solving, and where you are today.
          </p>

          <div className="pt-4 sm:pt-6">
            <a href="mailto:hello@mellasoftware.com" className="btn-primary btn-lg text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto justify-center">
              Start a project <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 sm:pt-12 text-sm text-[var(--text-secondary)] font-mono leading-loose space-y-2">
            <strong className="text-[var(--text-primary)] text-base block font-sans break-all sm:break-normal">hello@mellasoftware.com</strong>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base font-sans font-medium text-[var(--bright-blue)] pt-1 pb-1">
              <a href="tel:+251944741857" className="hover:underline">
                +251 944 741 857
              </a>
              <span className="text-[var(--text-muted)]">·</span>
              <a href="tel:+251713184474" className="hover:underline">
                +251 713 184 474
              </a>
            </div>
            <span>Addis Ababa, Ethiopia</span><br />
            <span>Monday–Friday · 09:00–18:00 EAT</span>
          </div>
        </div>
      </section>

      {/* 11. Minimal Footer */}
      <footer className="border-t border-[var(--border-subtle)] py-10 sm:py-12 bg-[var(--bg)] transition-colors duration-300">
        <div className="section-shell flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]">
          <div className="space-y-2">
            <a href="#top" className="brand-logo text-lg">
              <img src="/blue icon.svg" alt="Mella Emblem" className="brand-icon" />
              <span>Mella<span className="text-[#2563FF]">.</span></span>
            </a>
            <p className="text-[var(--text-muted)]">Make the next thing.</p>
          </div>

          <nav className="flex flex-wrap gap-8 font-medium text-sm text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</a>
            <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">What we solve</a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
          </nav>

          <div className="space-y-1 text-left md:text-right">
            <div className="flex flex-wrap items-center gap-2 justify-start md:justify-end text-xs font-mono text-[var(--text-secondary)]">
              <a href="tel:+251944741857" className="hover:text-[var(--bright-blue)] transition-colors">+251 944 741 857</a>
              <span>·</span>
              <a href="tel:+251713184474" className="hover:text-[var(--bright-blue)] transition-colors">+251 713 184 474</a>
            </div>
            <div>© 2026 Mella Software Solutions PLC</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
