import { HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="rounded-[2rem] bg-gradient-to-br from-brandPink to-brandPurple p-1 shadow-softPink">
            <div className="rounded-[1.8rem] bg-white p-8">
              <HeartHandshake className="h-14 w-14 text-brandPink" aria-hidden="true" />
              <div className="mt-8 space-y-4">
                <div className="h-3 w-4/5 rounded-full bg-brandPeach/70" />
                <div className="h-3 w-3/5 rounded-full bg-brandPurple/20" />
                <div className="h-3 w-11/12 rounded-full bg-brandPink/18" />
              </div>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brandPurple/8 px-4 py-2 text-sm font-extrabold text-brandPurple">
                <Sparkles className="h-4 w-4 text-brandPink" aria-hidden="true" />
                Care, clarity, and fast follow-through
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">About</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">
            Built by Women Who Know How to Care
          </h2>
          <p className="mt-5 text-lg leading-8 text-brandDark/72">
            Brand Nurses was created by two women with nursing backgrounds who know what it means to show up, care deeply,
            stay organized, and solve problems fast. Now they bring that same care and urgency to small businesses that
            need help looking professional online.
          </p>
        </div>
      </div>
    </section>
  );
}
