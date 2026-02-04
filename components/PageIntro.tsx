import { Container } from './Container';

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageIntro({ eyebrow, title, intro }: PageIntroProps) {
  return (
    <section className="page-intro">
      <Container>
        <div className="page-intro-inner">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {intro ? <p className="intro-text">{intro}</p> : null}
        </div>
      </Container>
    </section>
  );
}
