import { BadgePlus, Clock, MessageCircleWarning, SearchX, Sparkles, Star, Stethoscope, WifiOff } from 'lucide-react';

const symptoms = [
  { title: 'Inconsistent posting', icon: Clock },
  { title: 'Outdated Google profile', icon: SearchX },
  { title: 'Low engagement', icon: WifiOff },
  { title: 'No time for admin work', icon: BadgePlus },
  { title: 'Airbnb listing needs polish', icon: Sparkles },
  { title: "Customers can't find or trust you online", icon: MessageCircleWarning },
];

const services = [
  {
    title: 'Social Media Management',
    label: 'Treatment Plan',
    description: 'We create, schedule, and manage content that keeps your business visible and consistent.',
  },
  {
    title: 'Google Business Profile Management',
    label: 'Profile CPR',
    description: 'We clean up your Google profile, update photos, services, hours, posts, and help improve local trust.',
  },
  {
    title: 'Virtual Assistant Support',
    label: 'Growth Prescription',
    description: 'We handle everyday digital admin tasks so business owners can focus on customers.',
  },
  {
    title: 'Airbnb Co-Host Support',
    label: 'Emergency Fix',
    description:
      'We help optimize listings, improve guest communication, refresh descriptions, manage checklists, and support smoother hosting.',
  },
  {
    title: 'Brand Cleanup',
    label: 'Treatment Plan',
    description: 'We tighten up your visuals, messaging, bios, links, profiles, and customer-facing content.',
  },
  {
    title: 'Reputation & Review Support',
    label: 'Profile CPR',
    description: 'We help create systems to request, organize, and respond to customer reviews.',
  },
];

type ServicesProps = {
  includeSymptoms?: boolean;
};

export default function Services({ includeSymptoms = false }: ServicesProps) {
  return (
    <>
      {includeSymptoms && (
        <section className="bg-brandPeach/16 section-pad">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Symptoms</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">
                Is Your Brand Showing Symptoms?
              </h2>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map(({ title, icon: Icon }) => (
                <article key={title} className="card-hover rounded-3xl border border-white/80 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brandPink/10 text-brandPink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-extrabold text-brandDark">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="services" className="section-pad bg-white">
        <div className="section-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Services</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">Our Treatments</h2>
            </div>
            <Stethoscope className="hidden h-12 w-12 text-brandPeach sm:block" aria-hidden="true" />
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card-hover rounded-3xl border border-brandPurple/10 bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brandPurple/8 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-brandPurple">
                  <Star className="h-3.5 w-3.5 fill-brandPeach text-brandPeach" aria-hidden="true" />
                  {service.label}
                </div>
                <h3 className="font-heading text-xl font-extrabold text-brandDark">{service.title}</h3>
                <p className="mt-3 leading-7 text-brandDark/68">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
