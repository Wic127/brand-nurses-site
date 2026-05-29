import { ArrowRight, CheckCircle2 } from 'lucide-react';

const calendlyUrl = 'https://calendly.com/brandnurses/brand-checkup';

const packages = [
  {
    name: 'Brand Checkup',
    description: 'Starter cleanup and recommendations',
    highlights: ['Quick diagnosis', 'Cleanup priorities', 'Next-step plan'],
  },
  {
    name: 'Monthly Brand Care',
    description: 'Ongoing social, profile, and admin support',
    highlights: ['Consistent content', 'Profile updates', 'Admin relief'],
    featured: true,
  },
  {
    name: 'Full Brand Recovery',
    description: 'For businesses that need a deeper refresh',
    highlights: ['Messaging refresh', 'Visual cleanup', 'Reputation systems'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Packages</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">
            Brand Care That Fits the Diagnosis
          </h2>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`card-hover rounded-3xl p-6 shadow-sm ring-1 ${
                item.featured
                  ? 'bg-gradient-to-br from-brandPurple to-brandPink text-white ring-transparent shadow-glossy'
                  : 'bg-white text-brandDark ring-brandPurple/10'
              }`}
            >
              <div className={`mb-5 inline-flex rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] ${
                item.featured ? 'bg-white/18 text-white' : 'bg-brandPeach/25 text-brandPurple'
              }`}>
                Custom pricing after consultation.
              </div>
              <h3 className="font-heading text-2xl font-extrabold">{item.name}</h3>
              <p className={`mt-3 leading-7 ${item.featured ? 'text-white/82' : 'text-brandDark/68'}`}>{item.description}</p>
              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className={`h-5 w-5 ${item.featured ? 'text-brandPeach' : 'text-brandPink'}`} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <a href={calendlyUrl} className={item.featured ? 'mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-brandPurple transition hover:-translate-y-0.5' : 'btn-primary mt-7 w-full'}>
                Book a Call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
