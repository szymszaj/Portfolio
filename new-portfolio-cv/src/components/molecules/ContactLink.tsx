type ContactLinkProps = {
  label: string;
  href: string;
  value: string;
};

export function ContactLink({ label, href, value }: ContactLinkProps) {
  return (
    <p className="text-sm">
      <span className="text-muted">{label}: </span>
      <a
        href={href}
        className="text-ink underline-offset-4 hover:text-accent hover:underline"
      >
        {value}
      </a>
    </p>
  );
}
