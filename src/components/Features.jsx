import { BadgeCheck, BarChart3, Layers3, MessageSquare } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Unified order hub",
    desc: "Connect all delivery platforms and POS to manage orders in one place.",
  },
  {
    icon: BarChart3,
    title: "Smart insights",
    desc: "Understand top dishes, peak times, and margins with clear analytics.",
  },
  {
    icon: Layers3,
    title: "Menu optimization",
    desc: "AI-powered suggestions to improve photos, pricing, and descriptions.",
  },
  {
    icon: MessageSquare,
    title: "Customer feedback",
    desc: "Capture reviews and respond quickly to boost ratings across apps.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to run smarter
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Built for cloud kitchens, cafes, and restaurants of any size.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
