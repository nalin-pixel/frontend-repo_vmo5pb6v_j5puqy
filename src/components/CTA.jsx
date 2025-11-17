export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to grow with Foodza?</h2>
            <p className="mt-3 text-lg text-gray-300">Launch in minutes, connect your delivery apps, and start seeing insights today.</p>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4 flex gap-3 w-full">
            <input type="email" required placeholder="Enter your work email" className="flex-1 rounded-lg bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none" />
            <button type="submit" className="rounded-lg bg-green-500 px-5 py-3 font-semibold text-gray-900 hover:bg-green-400">Get invite</button>
          </form>
        </div>
        <p className="mt-4 text-sm text-gray-400">Free 14‑day trial. No credit card needed.</p>
      </div>
    </section>
  );
}
