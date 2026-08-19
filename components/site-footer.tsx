import { LinkedIn, GitHub, X, LogoMark } from "./icons";
import { contactEmail } from "@/content/site-data";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="brand">
              <LogoMark className="mark" width={36} height={36} aria-hidden="true" />
              Codes<em>Foundry</em>
            </a>
            <p>An independent engineering studio building custom software for teams that expect craft.</p>
            <div className="tag">A distributed team · Working across timezones</div>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Custom applications</a></li>
              <li><a href="#services">Maintenance &amp; support</a></li>
              <li><a href="#services">Legacy modernization</a></li>
              <li><a href="#services">Performance &amp; QA</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Reach us</h5>
            <ul>
              <li><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
              <li><a href="#contact">Book a discovery call</a></li>
              <li><a href="#contact">Response within 24 hours</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} CodesFoundry</span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><LinkedIn width={16} height={16} /></a>
            <a href="#" aria-label="GitHub"><GitHub width={16} height={16} /></a>
            <a href="#" aria-label="X / Twitter"><X width={16} height={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
