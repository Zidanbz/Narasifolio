import { PageIntro } from '@/components/PageIntro';
import { SectionCta } from '@/components/SectionCta';
import { ValuesGrid } from '@/components/ValuesGrid';
import { siteData } from '@/data/siteData';

export default function ValuesPage() {
  const { values } = siteData;

  return (
    <>
      <PageIntro title={values.title} intro={values.intro} />
      <ValuesGrid items={values.items} />
      <SectionCta
        title={values.closing.title}
        description={values.closing.description}
        label={values.closing.label}
        href={values.closing.href}
      />
    </>
  );
}
