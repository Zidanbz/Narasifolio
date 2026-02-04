import Link from 'next/link';

import { siteData } from '@/data/siteData';

import { Container } from './Container';

export function SiteFooter() {
  const { footer, navigation, brand, contact } = siteData;

  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">{brand.name}</span>
          </div>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-title">{footer.navigationTitle}</p>
            <ul>
              {navigation.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">{footer.socialTitle}</p>
            <ul>
              {contact.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} rel="noreferrer" target="_blank">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p>{footer.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
