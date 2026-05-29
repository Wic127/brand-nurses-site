import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

const helpOptions = [
  'Social Media',
  'Google Business Profile',
  'Virtual Assistant Support',
  'Airbnb Co-Host Support',
  'Brand Cleanup',
  'Not Sure Yet',
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lead = Object.fromEntries(formData.entries());

    console.log('Brand Nurses lead request:', lead);
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="section-pad bg-gradient-to-br from-brandPurple/10 via-white to-brandPink/10">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Book a Checkup</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">
            Ready for Your Brand Checkup?
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-9 grid max-w-3xl gap-5 rounded-[2rem] bg-white p-5 shadow-glossy ring-1 ring-brandPurple/10 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" required />
            <Field label="Business name" name="businessName" autoComplete="organization" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
          </div>

          <label className="grid gap-2 text-sm font-extrabold text-brandDark" htmlFor="need">
            What do you need help with?
            <select
              id="need"
              name="need"
              className="min-h-12 rounded-2xl border border-brandPurple/15 bg-white px-4 text-base font-semibold text-brandDark/78 outline-none transition focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/15"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              {helpOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-extrabold text-brandDark" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded-2xl border border-brandPurple/15 px-4 py-3 text-base font-medium text-brandDark/78 outline-none transition focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/15"
              placeholder="Tell us what feels messy, stuck, or overdue."
            />
          </label>

          <button type="submit" className="btn-primary w-full sm:w-auto sm:justify-self-start">
            Request My Brand Checkup
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>

          {submitted && (
            <p className="rounded-2xl bg-brandPeach/28 px-4 py-3 text-sm font-bold text-brandPurple" role="status">
              Your request has been received. The Brand Nurses will be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = 'text', autoComplete, required }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-brandDark" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="min-h-12 rounded-2xl border border-brandPurple/15 px-4 text-base font-medium text-brandDark/78 outline-none transition focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/15"
      />
    </label>
  );
}
