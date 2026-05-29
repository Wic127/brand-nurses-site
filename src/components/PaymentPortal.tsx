import { CreditCard, LockKeyhole } from 'lucide-react';

const portalActions = ['Pay Invoice', 'Manage Subscription', 'View Packages'];

export default function PaymentPortal() {
  return (
    <section className="section-pad bg-brandPeach/18">
      <div className="section-shell">
        <div className="gloss rounded-[2rem] bg-white p-6 shadow-glossy ring-1 ring-brandPurple/10 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brandPurple text-white">
                <CreditCard className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brandPink">Coming Soon</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-brandPurple sm:text-4xl">
                Client Payment Portal
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-brandDark/68">
                Existing clients will soon be able to pay invoices, manage subscriptions, and access service packages here.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[440px] lg:grid-cols-1">
              {portalActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-brandPurple/10 bg-brandDark/5 px-5 py-3 text-sm font-extrabold text-brandDark/45"
                >
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/*
          Stripe Checkout placeholder
          Stripe Customer Portal placeholder
          Invoice payment placeholder
          Subscription plan IDs placeholder
        */}
      </div>
    </section>
  );
}
