import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 pt-14 pb-[max(2rem,env(safe-area-inset-bottom))] md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1680px]">
        <p className="display text-[11vw] leading-[0.82] break-words md:text-[9vw]">
          SCALEXMEDIA
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {site.manifesto.map((line) => (
            <p key={line} className="display text-[28px] md:text-[36px]">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {site.footerNav.map((item) => (
              <a key={item.href} href={item.href} className="label link-underline inline-flex min-h-11 w-fit items-center">
                {item.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3" aria-label="Social">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="label link-underline inline-flex min-h-11 w-fit items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <a href={`mailto:${site.email}`} className="label link-underline">
              {site.email}
            </a>
            <p className="mt-4 max-w-xs text-muted">
              Your brand deserves more than another Instagram page.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {site.year} {site.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            {site.legal.map((item) => (
              <a key={item.href} href={item.href} className="link-underline">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
