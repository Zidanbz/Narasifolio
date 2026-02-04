import { Container } from './Container';

const whatsappBaseUrl = 'https://wa.me/';

function buildWhatsAppLink(number: string, message: string) {
  const sanitized = number.replace(/[^\d]/g, '');
  const text = encodeURIComponent(message);
  return `${whatsappBaseUrl}${sanitized}?text=${text}`;
}

type ContactCardProps = {
  label: string;
  description: string;
  detail: string;
  buttonLabel: string;
  href: string;
  variant: 'primary' | 'success';
};

function ContactCard({ label, description, detail, buttonLabel, href, variant }: ContactCardProps) {
  return (
    <article className="contact-card">
      <div className="contact-card-header">
        <div className="contact-icon" aria-hidden="true" />
        <div>
          <p className="contact-card-title">{label}</p>
          <p className="contact-card-desc">{description}</p>
        </div>
      </div>
      <div className="contact-detail">{detail}</div>
      <a className={`button button-${variant}`} href={href}>
        {buttonLabel}
      </a>
    </article>
  );
}

type SocialItem = {
  label: string;
  href: string;
};

type ContactSectionProps = {
  title: string;
  intro: string;
  noteTitle: string;
  note: string;
  email: {
    label: string;
    description: string;
    address: string;
    buttonLabel: string;
    subject: string;
    body: string;
  };
  whatsapp: {
    label: string;
    description: string;
    number: string;
    buttonLabel: string;
    message: string;
  };
  socialsTitle: string;
  socials: SocialItem[];
};

export function ContactSection({
  title,
  intro,
  noteTitle,
  note,
  email,
  whatsapp,
  socialsTitle,
  socials,
}: ContactSectionProps) {
  const emailLink = `mailto:${email.address}?subject=${encodeURIComponent(
    email.subject,
  )}&body=${encodeURIComponent(email.body)}`;
  const whatsappLink = buildWhatsAppLink(whatsapp.number, whatsapp.message);

  return (
    <section className="contact">
      <Container>
        <div className="contact-heading">
          <h1>{title}</h1>
          <p className="intro-text">{intro}</p>
        </div>
        <div className="contact-note">
          <span className="contact-note-title">{noteTitle}</span>
          <span className="contact-note-text">{note}</span>
        </div>
        <div className="contact-grid">
          <ContactCard
            label={email.label}
            description={email.description}
            detail={email.address}
            buttonLabel={email.buttonLabel}
            href={emailLink}
            variant="primary"
          />
          <ContactCard
            label={whatsapp.label}
            description={whatsapp.description}
            detail={whatsapp.number}
            buttonLabel={whatsapp.buttonLabel}
            href={whatsappLink}
            variant="success"
          />
        </div>
        <div className="contact-socials">
          <p className="contact-socials-title">{socialsTitle}</p>
          <div className="contact-socials-list">
            {socials.map((social) => (
              <a key={social.href} href={social.href} rel="noreferrer" target="_blank">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
