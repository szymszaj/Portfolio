type ContactLinkProps = {
  label: string;
  href: string;
  value: string;
};

export function ContactLink({ label, href, value }: ContactLinkProps) {
  return (
    <p>
      <span className="text-slate-500 dark:text-slate-400">{label}: </span>
      <a
        href={href}
        className="text-slate-900 underline-offset-2 hover:underline dark:text-slate-100 print:text-slate-900"
      >
        {value}
      </a>
    </p>
  );
}
