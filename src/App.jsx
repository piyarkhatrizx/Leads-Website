import { useState } from 'react'
const services = [
  { number: '01', title: 'Tree Removal', text: 'Safe, controlled removal for hazardous, diseased, or unwanted trees.', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85' },
  { number: '02', title: 'Trimming & Pruning', text: 'Precision pruning that gives your canopy room to grow strong and healthy.', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=85' },
  { number: '03', title: 'Stump Grinding', text: 'Leave no trace behind. We reclaim your yard below grade and haul it away.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85' },
  { number: '04', title: 'Emergency Service', text: 'Storm damage cannot wait. Our crews respond around the clock across West Michigan.', image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1000&q=85' },
]

const reasons = ['ISA-certified arborists', 'Fully insured crews', 'Upfront written estimates', '100% debris cleanup']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="announcement">Serving Grand Rapids and West Michigan <span>24/7 emergency response</span></div>
      <header className="site-header"><a className="brand" href="#top" aria-label="Grand Rapids Tree Service home"><span className="brand-mark">GRT</span><span><strong>Grand Rapids</strong><small>Tree Service</small></span></a><button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button><nav className={menuOpen ? 'nav-open' : ''}><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#why-us" onClick={() => setMenuOpen(false)}>Why us</a><a href="#process" onClick={() => setMenuOpen(false)}>Our process</a><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get a free quote <span>↗</span></a></nav></header>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Local tree care. Done right.</p><h1>Strong roots.<br /><em>Safe spaces.</em></h1><p className="hero-text">Expert tree removal and care for the places you call home. Serving Grand Rapids with skill, respect, and a clean finish every time.</p><div className="hero-actions"><a className="button button-light" href="#contact">Request a free quote <span>↗</span></a><a className="text-link" href="tel:6163655009">Call 616-365-5009</a></div><div className="hero-trust"><span>★★★★★</span><span>Trusted by Grand Rapids homeowners</span></div></div><div className="hero-image"><div className="image-note"><strong>Since 2012</strong><span>Keeping West Michigan growing</span></div></div></section>
      <section className="intro" id="why-us"><div><p className="eyebrow dark">The good kind of different</p><h2>Tree work with<br /><em>roots in the community.</em></h2></div><div className="intro-copy"><p>From a careful trim to a complex removal, your property deserves more than a quick fix. It deserves a team that knows trees, respects your time, and leaves your yard better than we found it.</p><a className="arrow-link" href="#process">See how we work <span>→</span></a></div></section>
      <section className="services" id="services"><div className="section-heading"><div><p className="eyebrow dark">What we do</p><h2>Care for every<br /><em>part of your canopy.</em></h2></div><p>Big tree, small tree, unexpected tree. Our certified crews bring the right tools and a steady hand to every job.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>{service.number}</span></div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Get a quote for ${service.title}`}>Learn more <span>↗</span></a></div></article>)}</div></section>
      <section className="proof" id="process"><div className="proof-visual"><div className="circle-stamp">GRAND RAPIDS<br /><strong>ROOTED</strong><br />SINCE 2012</div></div><div className="proof-copy"><p className="eyebrow">Why homeowners call us back</p><h2>Good work is<br /><em>worth growing on.</em></h2><p>We pair arborist knowledge with practical, neighborly service. No confusing jargon, no surprise costs, no shortcuts on cleanup.</p><ul>{reasons.map((reason) => <li key={reason}><span>+</span>{reason}</li>)}</ul><a className="button button-dark" href="#contact">Meet your tree team <span>↗</span></a></div></section>
      <section className="contact" id="contact"><div className="contact-heading"><p className="eyebrow">Let’s talk trees</p><h2>Get a clear plan<br /><em>for your property.</em></h2><p>Tell us what’s going on. We’ll get back to you with next steps and an honest estimate.</p><a href="tel:6163655009" className="phone">616-365-5009 <span>↗</span></a></div><form onSubmit={handleSubmit}>{submitted ? <div className="success"><span>✓</span><h3>Thanks, we’ve got it.</h3><p>Our team will be in touch soon to take a closer look.</p></div> : <><label>Your name<input required type="text" placeholder="Jane Smith" /></label><label>Phone or email<input required type="text" placeholder="How should we reach you?" /></label><label>How can we help?<textarea rows="3" placeholder="Tell us a little about your trees..." /></label><button className="button button-light" type="submit">Send my request <span>↗</span></button></>}</form></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">GRT</span><span><strong>Grand Rapids</strong><small>Tree Service</small></span></a><span>© 2026 Grand Rapids Tree Service</span><a href="tel:6163655009">616-365-5009</a></footer>
    </main>
  )
}

export default App
