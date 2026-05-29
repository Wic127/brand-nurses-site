import { ClipboardCheck, HeartPulse, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Diagnose',
    description: 'We review your online presence and identify what needs attention.',
    icon: ClipboardCheck,
  },
  {
    title: 'Treat',
    description: 'We clean up, manage, and improve the brand touchpoints that matter most.',
    icon: HeartPulse,
  },
  {
    title: 'Maintain',
    description: 'We keep your content, profiles, and customer-facing details healthy month after month.',
    icon: ShieldCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-gradient-to-br from-brandPurple/8 via-white to-brandPink/8">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Process</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">How It Works</h2>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="card-hover rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brandPurple/10">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brandPink text-white shadow-softPink">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-heading text-4xl font-extrabold text-brandPeach">{index + 1}</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-brandDark">{title}</h3>
              <p className="mt-3 leading-7 text-brandDark/68">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
