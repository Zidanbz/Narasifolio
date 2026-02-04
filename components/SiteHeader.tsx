import Link from 'next/link';

import { siteData } from '@/data/siteData';

import { Container } from './Container';
import { NavLink } from './NavLink';

export function SiteHeader() {
  const { brand, navigation } = siteData;

  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{brand.shortName}</span>
        </Link>
        <nav aria-label={navigation.ariaLabel} className="site-nav">
          {navigation.items.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <Link className="button button-primary" href={navigation.cta.href}>
          {navigation.cta.label}
        </Link>
      </Container>
    </header>
  );
}
