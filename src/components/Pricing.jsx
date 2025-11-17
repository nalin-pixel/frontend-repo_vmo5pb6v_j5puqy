export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-lg text-gray-600">Start free. Upgrade anytime as you grow.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">For new kitchens trying Foodza</p>
            <p className="mt-6 text-4xl font-extrabold">$0<span className="text-base font-medium text-gray-600">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Up to 100 orders / month</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">Get started</a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-md relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            <h3 className="mt-2 text-lg font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-gray-600">For busy restaurants scaling up</p>
            <p className="mt-6 text-4xl font-extrabold">$49<span className="text-base font-medium text-gray-600">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Unlimited orders</li>
              <li>Advanced analytics</li>
              <li>Menu optimization</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">Start free trial</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-gray-600">For franchises and multi‑location brands</p>
            <p className="mt-6 text-4xl font-extrabold">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>Dedicated success manager</li>
              <li>Custom integrations</li>
              <li>SLA & security review</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg bg-white border px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
