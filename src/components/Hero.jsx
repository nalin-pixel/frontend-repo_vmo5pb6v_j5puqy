import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-100 via-white to-green-100" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/60 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-200/60 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border text-sm text-gray-700">
              <Sparkles size={16} className="text-green-600" /> New: AI menu optimization
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Grow your food business with Foodza
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              The all‑in‑one platform to manage orders, optimize menus, and delight customers across delivery apps and in‑store.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white bg-gray-900 rounded-lg font-semibold hover:bg-gray-800 shadow">
                Start free trial <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 text-gray-800 bg-white border rounded-lg font-semibold hover:bg-gray-50">
                See features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> No credit card needed</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Setup in minutes</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Works with Uber Eats, DoorDash, more</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> 24/7 support</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white/80 backdrop-blur border shadow-lg p-4">
              <div className="grid grid-cols-3 gap-3 h-full">
                <div className="col-span-2 rounded-lg bg-gradient-to-tr from-green-500 to-lime-400 text-white p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm opacity-90">Today</p>
                    <p className="text-3xl font-bold">482 orders</p>
                  </div>
                  <div className="text-sm opacity-90">+18% vs last week</div>
                </div>
                <div className="rounded-lg bg-white border p-4">
                  <p className="text-sm text-gray-600">Avg. rating</p>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-xs text-green-600 mt-1">+0.2 this week</p>
                </div>
                <div className="rounded-lg bg-white border p-4 col-span-3">
                  <p className="text-sm text-gray-600">Top item</p>
                  <p className="text-lg font-semibold">Spicy Chicken Bowl</p>
                  <div className="mt-2 h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-green-400 rounded-xl blur-2xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
