import { HeartPulse, Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { calendlyUrl, openCalendlyPopup } from '../lib/calendly';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Book a Call', href: calendlyUrl, isCalendly: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brandPurple/10 bg-white/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Brand Nurses home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brandPink to-brandPurple text-white shadow-softPink">
            <HeartPulse className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-normal text-brandDark">
            Brand <span className="text-brandPink">Nurses</span>
          </span>
          <Sparkles className="hidden h-4 w-4 text-brandPeach transition group-hover:rotate-12 sm:block" aria-hidden="true" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={item.isCalendly ? openCalendlyPopup : undefined}
              className="text-sm font-bold text-brandDark/70 transition hover:text-brandPurple focus:outline-none focus:ring-4 focus:ring-brandPurple/15"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={calendlyUrl} className="btn-primary hidden lg:inline-flex" onClick={openCalendlyPopup}>
          Book a Brand Checkup
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brandPurple/15 text-brandDark lg:hidden"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brandPurple/10 bg-white px-4 pb-5 pt-2 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-brandDark/75 hover:bg-brandPurple/5"
                onClick={(event) => {
                  if (item.isCalendly) {
                    openCalendlyPopup(event);
                  }
                  setOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={calendlyUrl}
              className="btn-primary mt-2"
              onClick={(event) => {
                openCalendlyPopup(event);
                setOpen(false);
              }}
            >
              Book a Brand Checkup
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
