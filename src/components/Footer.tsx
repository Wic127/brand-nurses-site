import { Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react';

const calendlyUrl = 'https://calendly.com/brandnurses/brand-checkup';

const serviceLinks = ['Social Media', 'Google Profile', 'VA Support', 'Airbnb Support', 'Brand Cleanup'];

export default function Footer() {
  return (
    <footer className="bg-brandDark text-white">
      <div className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_0.8fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 font-heading text-2xl font-extrabold">
              Brand <span className="text-brandPeach">Nurses</span>
              <Sparkles className="h-5 w-5 text-brandPink" aria-hidden="true" />
            </a>
            <p className="mt-3 max-w-sm text-white/68">We nurse brands back to health.</p>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPeach">Services</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {serviceLinks.map((link) => (
                <a key={link} href="#services" className="rounded-full bg-white/8 px-3 py-2 text-sm font-bold text-white/75 transition hover:bg-white/14 hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:text-right">
            <a href={calendlyUrl} className="btn-primary">
              Book a Call
            </a>
            <div className="mt-5 flex gap-3 lg:justify-end" aria-label="Social media links">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  aria-label={`Placeholder social link ${index + 1}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brandPink"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm font-semibold text-white/50">
          Copyright {new Date().getFullYear()} Brand Nurses. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
