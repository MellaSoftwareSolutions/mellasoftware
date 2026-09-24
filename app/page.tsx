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

  const solveItems = [
    {
      id: '01',
      num: '01',
      tag: 'You have an idea',
      headlinePrefix: 'You know what you want to build. ',
      headlineItalic: 'We help make it real.',
      desc: 'Maybe you have a business idea, a new service, or a better way of doing something. We help turn that idea into something people can actually use — from figuring out what matters most to launching the finished product.',
      icon: (
        <svg className="w-5 h-5 text-[var(--bright-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: '02',
      num: '02',
      tag: 'Too much is still done manually',
      headlinePrefix: 'Your team spends time doing things ',
      headlineItalic: 'software should handle.',
      desc: 'Information is scattered across spreadsheets, messages, paperwork, and different tools. We bring those processes together into one system that makes everyday work simpler and easier to manage.',
      icon: (
        <svg className="w-5 h-5 text-[var(--bright-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: '03',
      num: '03',
      tag: "Your current system isn't working well",
      headlinePrefix: 'Your software is slowing your business ',
      headlineItalic: 'down.',
      desc: "Maybe it's difficult to use, unreliable, outdated, or no longer fits the way your business works. We help improve what you already have, fix what's holding you back, or build a better system when it's time for a change.",
      icon: (
        <svg className="w-5 h-5 text-[var(--bright-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: '04',
      num: '04',
      tag: 'Your business is growing',
      headlinePrefix: "What worked before doesn't ",
      headlineItalic: 'work anymore.',
      desc: 'As your customers, team, and operations grow, the tools you started with can become a limitation. We build software that grows with the business and continue improving it as new needs come up.',
      icon: (
        <svg className="w-5 h-5 text-[var(--bright-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: '05',
      num: '05',
      tag: 'You need someone to take ownership',
      headlinePrefix: "You don't want to be left with ",
      headlineItalic: 'a finished project.',
      desc: "We stay involved beyond the launch. We can keep the product running, solve problems as they appear, improve it over time, and help you build what's next.",
      icon: (
        <svg className="w-5 h-5 text-[var(--bright-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
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

      {/* 4. What We Solve Section — Interactive Scenario Matrix */}
      <section id="services" className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)] relative transition-colors duration-300">
        <div className="section-shell space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">What we solve</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Whatever is getting in the way,<br />
              <em className="text-[var(--bright-blue)]">we help you move forward.</em>
            </h2>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed pt-1">
              You don&apos;t need to know exactly what software you need. You just need to know what&apos;s not working, what&apos;s taking too much time, or what you want to make possible.
            </p>
          </div>

          {/* 3x2 Scenario & Manifesto Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solveItems.map((item) => (
              <div
                key={item.id}
                className="rounded-[28px] p-7 md:p-8 flex flex-col justify-between border border-[var(--border-subtle)] hover:border-[var(--border-blue)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-[var(--elevated)] relative"
              >
                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#2563FF] opacity-0 group-hover:opacity-10 transition-opacity duration-500 filter blur-[40px] pointer-events-none rounded-full" />

                <div className="space-y-5 relative z-10">
                  {/* Header Row: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--border-blue)] transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="text-[var(--bright-blue)] font-bold">{item.num}</span>
                      <span className="text-[var(--text-muted)]">/ 05</span>
                    </div>
                  </div>

                  {/* Trigger Eyebrow & Punchy Headline */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[var(--bright-blue)] uppercase tracking-wider font-semibold block">
                      {item.num} / {item.tag}
                    </span>
                    <h3 className="text-2xl sm:text-2xl lg:text-[1.6rem] font-extrabold text-[var(--text-primary)] group-hover:text-[var(--bright-blue)] transition-colors duration-300 leading-snug">
                      {item.headlinePrefix}
                      <em className="text-[var(--bright-blue)]">{item.headlineItalic}</em>
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 border-t border-[var(--border-subtle)] mt-6 flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--bright-blue)] relative z-10">
                  <a href="#contact" className="group-hover:underline flex items-center gap-1.5">
                    <span>Talk through this scenario</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            ))}

            {/* Card 06: The Manifesto & Commitment Card */}
            <div
              id="scenario-manifesto"
              className="rounded-[28px] p-7 md:p-8 flex flex-col justify-between border border-[var(--border-blue)] bg-gradient-to-br from-[var(--elevated)] via-[var(--elevated)] to-[rgba(37,99,255,0.15)] shadow-[0_0_35px_rgba(37,99,255,0.12)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="hero-moving-orb-1 absolute -top-16 -right-16 w-52 h-52 bg-[#2563FF] opacity-25 filter blur-[50px] pointer-events-none rounded-full" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--bright-blue)] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--bright-blue)] animate-pulse" />
                    The Mella Commitment
                  </span>
                  <span className="text-[var(--text-muted)]">Summary</span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-lg sm:text-xl font-medium tracking-tight text-[var(--text-secondary)] leading-relaxed">
                    <div>A problem to solve.</div>
                    <div>A process to improve.</div>
                    <div>An idea to build.</div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] pt-2 leading-tight">
                    We&apos;re here to <em className="text-[var(--bright-blue)]">make it work.</em>
                  </h3>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Whether you need an MVP from scratch, an automated internal pipeline, or long-term operational ownership — we get in the trenches with you.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] mt-6 relative z-10">
                <a href="#contact" className="btn-primary w-full justify-center py-3.5 text-sm font-bold shadow-md">
                  Start a project <ArrowUpRight className="w-4 h-4" />
                </a>
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

          <div className="pt-12 text-sm text-[var(--text-secondary)] font-mono leading-loose space-y-2">
            <strong className="text-[var(--text-primary)] text-base block font-sans">hello@mellasoftware.com</strong>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base font-sans font-medium text-[var(--bright-blue)] pt-1 pb-1">
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
            <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">What we solve</a>
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
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
