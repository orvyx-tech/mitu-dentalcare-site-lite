
/** The built-in mark; replace it (and public/icon.svg) with the client logo. */
export function DefaultMark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="mark-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22bcc0" />
          <stop offset="1" stopColor="#0a4a58" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#mark-g)" />
      <path d="M32 21C28 17 21 17 19 23c-1.5 5 1 9 2 14 1 6 3 12 6 12 3 0 3-8 5-8s2 8 5 8c3 0 5-6 6-12 1-5 3.5-9 2-14-2-6-9-6-13-2z" fill="#fff" />
      <circle cx="48" cy="16" r="4.5" fill="#ff8a65" />
    </svg>
  )
}

/** Logo next to the site name. `dark` is for use on the dark footer. */
export function SiteLogo({ settings, dark = false }: { settings: { site_name: string }; dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <DefaultMark />
      <span className={`font-display text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>{settings.site_name}</span>
    </span>
  )
}
