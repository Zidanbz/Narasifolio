import { Container } from '@/components/Container';
import { PageIntro } from '@/components/PageIntro';
import { siteData } from '@/data/siteData';

export default function AboutPage() {
  const { about } = siteData;

  return (
    <>
      <PageIntro title={about.title} intro={about.subtitle} />
      <section className="about">
        <Container>
          <div className="prose">
            {about.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph.slice(0, 12)}-${index}`}>{paragraph}</p>
            ))}
            <blockquote>
              <p>{about.quote}</p>
            </blockquote>
            <p className="signature">{about.signature}</p>
            <p className="closing">{about.closing}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
