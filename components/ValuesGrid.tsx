import { Container } from './Container';

type ValueItem = {
  title: string;
  description: string;
};

type ValuesGridProps = {
  items: ValueItem[];
};

export function ValuesGrid({ items }: ValuesGridProps) {
  return (
    <section className="values">
      <Container>
        <div className="values-grid">
          {items.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
