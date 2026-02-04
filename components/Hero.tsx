import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '@/data/siteData';

import { Container } from './Container';

export function Hero() {
  const { hero, person } = siteData;

  return (
    <section className="hero">
      <Container className="hero-grid">
        <div className="hero-copy animate-fade-slide">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.headline}</h1>
          <p className="hero-summary">{hero.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="button button-ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="hero-media animate-fade-slide delay-1">
          <div className="hero-image-wrap">
            <Image
              src={person.profileImage.src}
              alt={person.profileImage.alt}
              width={person.profileImage.width}
              height={person.profileImage.height}
              priority
            />
          </div>
          <div className="hero-card">
            <p className="hero-card-title">{person.fullName}</p>
            <p className="hero-card-text">{person.shortSummary}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
