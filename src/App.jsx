import { useState } from 'react'
const services = [
  { number: '01', title: 'Tree Removal', text: 'Safe, controlled removal for hazardous, diseased, or unwanted trees.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85' },
  { number: '02', title: 'Trimming & Pruning', text: 'Precision pruning that gives your canopy room to grow strong and healthy.', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=85' },
  { number: '03', title: 'Stump Grinding', text: 'Leave no trace behind. We reclaim your yard below grade and haul it away.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85' },
  { number: '04', title: 'Emergency Service', text: 'Storm damage cannot wait. Our crews respond around the clock across Northwest Indiana.', image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1000&q=85' },
]

const reasons = ['ISA-certified arborists', 'Fully insured crews', 'Upfront written estimates', '100% debris cleanup']

const details = [
  { label: 'Hours', value: 'Mon–Sat, 7am–7pm' },
  { label: 'Emergency', value: '24/7 storm response' },
  { label: 'Service area', value: 'Hammond & Northwest Indiana' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="announcement">Serving Hammond and Northwest Indiana <span>24/7 emergency response</span></div>
      <header className="site-header"><a className="brand" href="#top" aria-label="Hammond Tree Service home"><span className="brand-mark">HTS</span><span><strong>Hammond</strong><small>Tree Service</small></span></a><button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button><nav className={menuOpen ? 'nav-open' : ''}><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#why-us" onClick={() => setMenuOpen(false)}>Why us</a><a href="#process" onClick={() => setMenuOpen(false)}>Our process</a><a href="#quote" className="nav-cta" onClick={() => setMenuOpen(false)}>Get a free quote <span>↗</span></a></nav></header>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Local tree care. Done right.</p><h1>Strong roots.<br /><em>Safe spaces.</em></h1><p className="hero-text">Expert tree removal and care for the places you call home. Serving Hammond with skill, respect, and a clean finish every time.</p><div className="hero-actions"><a className="text-link" href="tel:2193655009">Call 219-365-5009</a><span className="hero-since">Since 2012 · Keeping Northwest Indiana growing</span></div><div className="hero-trust"><span>★★★★★</span><span>Trusted by Hammond homeowners</span></div></div><div className="hero-image"><div className="quote-card" id="quote"><p className="eyebrow">Free estimate</p><h3>Request a quote</h3><p className="quote-intro">Tell us what’s going on. We’ll come back with next steps and an honest price.</p><form onSubmit={handleSubmit}>{submitted ? <div className="success"><span>✓</span><h3>Thanks, we’ve got it.</h3><p>Our team will be in touch soon to take a closer look.</p></div> : <><label>Your name<input required type="text" placeholder="Jane Smith" /></label><label>Phone or email<input required type="text" placeholder="How should we reach you?" /></label><label>How can we help?<textarea rows="3" placeholder="Tell us a little about your trees..." /></label><button className="button button-light" type="submit">Send my request <span>↗</span></button></>}</form><p className="quote-note">No obligation · Same-day response</p></div></div></section>
      <section className="intro" id="why-us"><div><p className="eyebrow dark">The good kind of different</p><h2>Tree work with<br /><em>roots in the community.</em></h2></div><div className="intro-copy"><p>From a careful trim to a complex removal, your property deserves more than a quick fix. It deserves a team that knows trees, respects your time, and leaves your yard better than we found it.</p><a className="arrow-link" href="#process">See how we work <span>→</span></a></div></section>
      <section className="services" id="services"><div className="section-heading"><div><p className="eyebrow dark">What we do</p><h2>Care for every<br /><em>part of your canopy.</em></h2></div><p>Big tree, small tree, unexpected tree. Our certified crews bring the right tools and a steady hand to every job.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>{service.number}</span></div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><a href="#quote" aria-label={`Get a quote for ${service.title}`}>Learn more <span>↗</span></a></div></article>)}</div></section>
      <section className="proof" id="process"><div className="proof-visual"><div className="circle-stamp">HAMMOND<br /><strong>ROOTED</strong><br />SINCE 2012</div></div><div className="proof-copy"><p className="eyebrow">Why homeowners call us back</p><h2>Good work is<br /><em>worth growing on.</em></h2><p>We pair arborist knowledge with practical, neighborly service. No confusing jargon, no surprise costs, no shortcuts on cleanup.</p><ul>{reasons.map((reason) => <li key={reason}><span>+</span>{reason}</li>)}</ul><a className="button button-dark" href="#quote">Meet your tree team <span>↗</span></a></div></section>
      <section className="contact" id="contact"><div className="contact-heading"><p className="eyebrow">Let’s talk trees</p><h2>Get a clear plan<br /><em>for your property.</em></h2><p>Prefer to talk it through? Call us and a real person will pick up.</p><a href="tel:2193655009" className="phone">219-365-5009 <span>↗</span></a></div><div className="contact-details"><ul>{details.map((detail) => <li key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></li>)}</ul><a className="button button-light" href="#quote">Request a free quote <span>↗</span></a></div></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">HTS</span><span><strong>Hammond</strong><small>Tree Service</small></span></a><span>© 2026 Hammond Tree Service</span><a href="tel:2193655009">219-365-5009</a><p className="disclaimer">Hammond Tree Service is a referral service. We connect homeowners with independent, licensed and insured tree care contractors in Northwest Indiana; we do not perform the work ourselves.</p></footer>
    </main>
  )
}

export default App
