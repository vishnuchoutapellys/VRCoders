import { ArrowDown, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import aiLogo from "../assets/AI.png";
import {
  aiCapabilities,
  clients,
  leadership,
  processSteps,
  reasons,
  services,
  supportServices,
  technologyGroups,
} from "../data/siteContent";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--one" aria-hidden="true"><span /></div>
        <div className="hero-orbit hero-orbit--two" aria-hidden="true"><span /></div>
        <div className="container hero-content">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><span className="live-dot" /> Build. Scale. Transform.</p>
            <h1>Your next idea,<br />built to <span>grow.</span></h1>
            <p className="hero-description">From web and mobile products to custom software and practical AI, we build around your business and support you beyond launch.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Discuss Your Project <ArrowUpRight size={17} /></Link>
              <a className="button button--quiet" href="#services">Explore Services <ArrowDown size={16} /></a>
            </div>
            <div className="hero-assurances" aria-label="How we work">
              <span><Check size={14} aria-hidden="true" />Business-first thinking</span>
              <span><Check size={14} aria-hidden="true" />Clear, collaborative delivery</span>
              <span><Check size={14} aria-hidden="true" />Support beyond launch</span>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="visual-ring visual-ring--outer" />
            <div className="visual-ring visual-ring--middle" />
            <div className="visual-ring visual-ring--inner" />
            <div className="visual-core"><span style={{ width: 35 }}>VR</span><i /></div>
            <div className="visual-node visual-node--one"><span className="node-dot" />Your idea</div>
            <div className="visual-node visual-node--two"><span className="node-dot" />Engineering</div>
            <div className="visual-node visual-node--three"><span className="node-dot" />Long-term support</div>
            <div className="visual-capability-card">
              <span className="visual-capability-label"><Sparkles size={12} /> One partner, end to end</span>
              <div><span>Web</span><span>Mobile</span><span>AI</span></div>
            </div>
            <div className="visual-caption">FROM FIRST IDEA TO WHAT’S NEXT</div>
          </motion.div>
        </div>
        <div className="hero-bottom container"><span>HYDERABAD · WORKING EVERYWHERE</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
      </section>

      <section className="clients-section section-pad" aria-labelledby="clients-title">
        <div className="container">
          <Reveal>
            <div className="clients-intro">
              <p className="eyebrow">Trusted by businesses</p>
              <h2 id="clients-title">Good work starts with<br /><span>good partnerships.</span></h2>
            </div>
          </Reveal>
          <div className="client-marquee" role="region" aria-label="Businesses that work with VR Coders">
            <div className="client-marquee-track">
              {[false, true].map((clone) => (
                <ul className="client-marquee-group" key={String(clone)} aria-hidden={clone || undefined}>
                  {clients.map((client) => (
                    <li className={`client-card${client.logoSurface ? ` client-card--${client.logoSurface}` : ""}`} key={client.name}>
                      {client.logo ? (
                        <img className="client-logo" src={client.logo} alt={client.name} />
                      ) : (
                        <span className="client-name-logo">{client.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad services-section" id="services">
        <div className="container">
          <Reveal><SectionHeading eyebrow="What we do" title="Engineering for the real world." description="From a single product feature to a complete digital platform, we bring the right craft to the right challenge." /></Reveal>
          <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div>
        </div>
      </section>

      <section className="section-pad ai-section" id="solutions">
        <div className="container ai-layout">
          <Reveal>
            <p className="eyebrow">Applied intelligence</p>
            <h2>AI THAT WORKS<br />FOR YOUR <span>BUSINESS.</span></h2>
            <p className="section-description">AI should solve a real problem, fit your workflow and earn its place. We help teams make that practical.</p>
            <Link className="text-link" to="/contact">Explore an AI use case <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="ai-visual">
              <div className="ai-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="ai-center"><img className="ai-center-logo" src={aiLogo} alt="VR Coders AI" /></div>
              {aiCapabilities.map((capability, index) => <div className={`ai-node ai-node--${index + 1}`} key={capability}><span />{capability}</div>)}
              <div className="ai-visual-note">BUILT AROUND YOUR BUSINESS</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad tech-section" id="technologies">
        <div className="container">
          <Reveal><SectionHeading eyebrow="The right tools for the job" title="Technology that fits your ambition." description="We choose tools to serve the product, the people and the problem—not the other way around." /></Reveal>
          <div className="tech-grid">
            {technologyGroups.map((group, groupIndex) => (
              <Reveal key={group.name} delay={groupIndex * 0.05}>
                <div className="tech-group"><h3>{group.name}</h3><div className="tech-badges">{group.technologies.map((technology, badgeIndex) => <motion.span key={technology} className="tech-badge" whileHover={reduceMotion ? undefined : { y: -2, color: "#ffffff" }} transition={{ duration: 0.18, delay: badgeIndex * 0.015 }}><span className="tech-dot" aria-hidden="true" />{technology}</motion.span>)}</div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad process-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="A clear path forward" title="FROM IDEA TO PRODUCTION" description="A collaborative process that keeps decisions visible and progress moving." /></Reveal>
          <div className="process-track">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.055}>
                <article className="process-step">
                  <div className="process-step-top">
                    <h3>{step.title}</h3>
                    <span className="process-point" aria-hidden="true" />
                  </div>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad work-section" id="work">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our work"
              title="Good work deserves a thoughtful story."
              description="We’re preparing detailed project case studies. Until they’re ready, get in touch to talk through your own product or technology challenge."
            />
            <Link className="text-link" to="/contact">Start a conversation <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="work-placeholder" aria-hidden="true">
            <span>CASE STUDIES</span>
            <div className="work-placeholder-line" />
            <span>IN PREPARATION</span>
          </div>
        </div>
      </section>

      <section className="section-pad why-section" id="about">
        <div className="container why-layout">
          <Reveal>
            <p className="eyebrow">Why VR Coders</p>
            <h2>Good engineering.<br /><span>Good people.</span><br />Better outcomes.</h2>
            <p className="section-description">A thoughtful technology partner who stays close to the problem—and stays with you as it evolves.</p>
          </Reveal>
          <div className="reason-list">
            {reasons.map((reason, index) => <Reveal key={reason} delay={index * 0.05}><div className="reason-item"><span className="reason-icon"><Check size={15} /></span><span>{reason}</span><span className="reason-number">0{index + 1}</span></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-pad leadership-section" aria-label="VR Coders leadership team">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The people behind the work"
              title="Leadership with a builder’s mindset."
              description="Meet the team guiding our work and helping businesses turn technology into progress."
            />
          </Reveal>
          <div className="leadership-grid">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <article className="leadership-card">
                  <div className="leadership-copy">
                    <h3>{person.name}</h3>
                    <p className="leadership-description">{person.description}</p>
                  </div>
                  <div className="leadership-profile">
                    {/* <img className="leadership-portrait" src={person.image} alt={person.name} loading="lazy" decoding="async" /> */}
                    <p className="leadership-role">{person.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad support-section">
        <div className="container support-layout">
          <Reveal>
            <p className="eyebrow">Beyond launch</p>
            <h2>YOUR SOFTWARE<br />SHOULDN’T STOP<br /><span>AFTER LAUNCH.</span></h2>
            <p className="section-description">Launch is a beginning. We help you protect, improve and get more from the products you depend on.</p>
            <Link className="text-link" to="/contact">Talk about ongoing support <ArrowRight size={16} /></Link>
          </Reveal>
          <div className="support-list">
            {supportServices.map((service, index) => <Reveal key={service} delay={index * 0.06}><div className="support-item"><span className="support-number">0{index + 1}</span><span>{service}</span><ArrowUpRight size={15} /></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container final-cta-inner">
          <Reveal>
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>LET’S BUILD<br /><span>SOMETHING GREAT.</span></h2>
            <p>Have a project, idea or technology challenge? Let’s talk.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Start Your Project <ArrowUpRight size={17} /></Link>
              <a className="button button--quiet" href="tel:+919014249898">Call 9014249898 <ArrowUpRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
