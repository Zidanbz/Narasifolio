import { PageIntro } from '@/components/PageIntro';
import { SectionCta } from '@/components/SectionCta';
import { Timeline } from '@/components/Timeline';
import { siteData } from '@/data/siteData';

export default function JourneyPage() {
  const { journey } = siteData;

  return (
    <>
      <PageIntro title={journey.title} intro={journey.intro} />
      <Timeline items={journey.items} />
      <SectionCta
        title={journey.cta.title}
        description={journey.cta.description}
        label={journey.cta.label}
        href={journey.cta.href}
      />
    </>
  );
}
