import Link from 'next/link';

import { Container } from './Container';

type SectionCtaProps = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export function SectionCta({ title, description, label, href }: SectionCtaProps) {
  return (
    <section className="section-cta">
      <Container>
        <div className="section-cta-inner">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link className="button button-primary" href={href}>
            {label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
