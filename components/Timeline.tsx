import { Container } from './Container';

type TimelineItem = {
  year: string;
  title: string;
  story: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="timeline">
      <Container>
        <div className="timeline-list">
          {items.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div>
                <div className="timeline-heading">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.story}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
