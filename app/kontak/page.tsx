import { ContactSection } from '@/components/ContactSection';
import { siteData } from '@/data/siteData';

export default function ContactPage() {
  const { contact } = siteData;

  return (
    <ContactSection
      title={contact.title}
      intro={contact.intro}
      noteTitle={contact.noteTitle}
      note={contact.note}
      email={contact.email}
      whatsapp={contact.whatsapp}
      socialsTitle={contact.socialsTitle}
      socials={contact.socials}
    />
  );
}
