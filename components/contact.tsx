import {
  availability,
  contactAddress,
  contactEmail,
  contactHours,
  contactPhone,
  contactPhoneHref,
} from "@/content/site-data";
import { AustraliaMap, Clock, GitHub, LinkedIn, Mail, MapPin, Phone, X } from "./icons";
import { ContactForm } from "./contact-form";
import { Reveal } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="final">
      <div className="wrap">
        <div className="contact-grid">
          {/* Left column — rich contact info + map */}
          <div className="contact-info">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                09 / Contact
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display h-section">
                Have something you want <em>built properly?</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="contact-lede">
                Tell us about the project. We'll respond within one business day and,
                if it looks like a good fit, book a 30-minute discovery call — free,
                no pitch deck.
              </p>
            </Reveal>

            <Reveal delay={2} className="contact-card">
              <a href={`mailto:${contactEmail}`} className="ci-row">
                <span className="ci-icon"><Mail width={16} height={16} /></span>
                <span className="ci-body">
                  <span className="ci-label">Email</span>
                  <span className="ci-value">{contactEmail}</span>
                </span>
              </a>
              <a href={`tel:${contactPhoneHref}`} className="ci-row">
                <span className="ci-icon"><Phone width={16} height={16} /></span>
                <span className="ci-body">
                  <span className="ci-label">Phone</span>
                  <span className="ci-value">{contactPhone}</span>
                </span>
              </a>
              <div className="ci-row">
                <span className="ci-icon"><MapPin width={16} height={16} /></span>
                <span className="ci-body">
                  <span className="ci-label">Address</span>
                  <span className="ci-value">{contactAddress}</span>
                </span>
              </div>
              <div className="ci-row">
                <span className="ci-icon"><Clock width={16} height={16} /></span>
                <span className="ci-body">
                  <span className="ci-label">Hours</span>
                  <span className="ci-value">{contactHours}</span>
                </span>
              </div>
              <div className="ci-avail">
                <span className="ci-pulse" />
                <strong>Currently:</strong> {availability}
              </div>
              <div className="ci-socials">
                <a href="#" aria-label="LinkedIn"><LinkedIn width={16} height={16} /></a>
                <a href="#" aria-label="GitHub"><GitHub width={16} height={16} /></a>
                <a href="#" aria-label="X / Twitter"><X width={16} height={16} /></a>
              </div>
            </Reveal>

            <Reveal delay={3} className="contact-map">
              <div className="map-frame">
                <AustraliaMap width="100%" />
              </div>
              <div className="map-caption">
                <span className="ping" />
                Based near Melbourne · Working across timezones
              </div>
            </Reveal>
          </div>

          {/* Right column — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
