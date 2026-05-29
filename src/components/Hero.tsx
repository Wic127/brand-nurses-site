import { ArrowRight, BadgeCheck, CheckCircle2, HeartPulse, Sparkles } from 'lucide-react';
import { calendlyUrl, openCalendlyPopup } from '../lib/calendly';

const checklist = [
  'Social presence',
  'Google profile',
  'Content consistency',
  'Reviews & reputation',
  'Admin support',
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-brandPeach/35 via-brandPink/10 to-brandPurple/15" aria-hidden="true" />
      <div className="section-shell section-pad relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brandPink/15 bg-white/80 px-4 py-2 text-sm font-extrabold text-brandPurple shadow-sm">
            <Sparkles className="h-4 w-4 text-brandPink" aria-hidden="true" />
            Brand support with serious bedside manner
          </div>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.03] tracking-normal text-brandDark sm:text-6xl lg:text-7xl">
            We Bring Brands Back to Life
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brandDark/72">
            Social media, Google profiles, virtual assistant support, Airbnb co-hosting, and everyday brand cleanup for
            busy small business owners.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={calendlyUrl} className="btn-primary" onClick={openCalendlyPopup}>
              Book a Brand Checkup
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-secondary">
              See Our Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-3 top-10 h-16 w-16 rounded-full bg-brandPeach/70 blur-xl" aria-hidden="true" />
          <div className="absolute -right-3 bottom-12 h-20 w-20 rounded-full bg-brandPurple/20 blur-2xl" aria-hidden="true" />
          <div className="gloss relative rounded-[2rem] border border-white/70 bg-white p-5 shadow-glossy sm:p-7">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-brandPurple to-brandPink p-1">
              <div className="rounded-[1.35rem] bg-white p-5 sm:p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Brand Health Check</p>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-brandDark">Vitals look fixable.</h2>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brandPeach/45 text-brandPurple">
                    <HeartPulse className="h-7 w-7" aria-hidden="true" />
                  </span>
                </div>
                <div className="mb-6 h-3 overflow-hidden rounded-full bg-brandPurple/10">
                  <div className="h-full w-4/5 origin-left rounded-full bg-gradient-to-r from-brandPink to-brandPurple animate-pulseLine" />
                </div>
                <ul className="space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl bg-brandPeach/16 px-4 py-3 text-sm font-bold text-brandDark/78">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brandPink" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brandPurple/10 bg-brandPurple/5 p-4 text-sm font-bold text-brandPurple">
                  <BadgeCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Treatment plan ready after your call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
