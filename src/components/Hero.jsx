import { Activity, Utensils, Dumbbell, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium">
              <Shield className="h-4 w-4" />
              Privacy-first wellness for busy lives
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Feel good, stay consistent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> without the overwhelm.</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              A minimalist fitness companion for students and professionals—personalized plans, adaptive tracking, and healthy meals in one calm space.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Start free — it takes 60 seconds
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Activity className="h-4 w-4 text-emerald-600" /> Adaptive workouts</div>
              <div className="flex items-center gap-2"><Utensils className="h-4 w-4 text-emerald-600" /> Meal delivery</div>
              <div className="flex items-center gap-2"><Dumbbell className="h-4 w-4 text-emerald-600" /> Social challenges</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 md:-inset-16 bg-gradient-to-tr from-emerald-200/40 via-teal-200/40 to-transparent blur-3xl rounded-full" aria-hidden />
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-xl overflow-hidden">
              {/* Mock dashboard */}
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Today</p>
                    <p className="text-xl font-semibold text-slate-900">Your wellness snapshot</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs px-3 py-1">Streak: 7 days</span>
                </div>
              </div>
              <div className="p-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4 bg-gradient-to-br from-emerald-50 to-white">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-emerald-600" />
                    <p className="font-medium text-slate-800">Adaptive Workout</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Auto-adjusts sets and reps as you improve.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 bg-gradient-to-br from-teal-50 to-white">
                  <div className="flex items-center gap-3">
                    <Utensils className="h-5 w-5 text-teal-600" />
                    <p className="font-medium text-slate-800">Personalized Diet</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Smart plans matched to your schedule.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=1200&auto=format&fit=crop"
                    alt="Healthy meal"
                    className="h-28 w-full object-cover rounded-xl"
                  />
                  <p className="mt-2 text-sm text-slate-600">Fresh, balanced meals delivered to your door.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=1200&auto=format&fit=crop"
                    alt="People exercising"
                    className="h-28 w-full object-cover rounded-xl"
                  />
                  <p className="mt-2 text-sm text-slate-600">Join friendly leaderboards with classmates and coworkers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
