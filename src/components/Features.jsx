import { Users, Goal, Apple, ClipboardList, Medal, Truck } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Goal,
      title: "Custom workout plans",
      desc: "Build routines that adapt to your progress with an intelligent tracker that adjusts sets, reps, and rest times.",
    },
    {
      icon: Apple,
      title: "Personalized diet plans",
      desc: "Nutrition built around your preferences, schedule, and goals—balanced, flexible, and sustainable.",
    },
    {
      icon: Truck,
      title: "Integrated meal delivery",
      desc: "Order chef-prepared meals directly in-app so you never miss a healthy option.",
    },
    {
      icon: Medal,
      title: "Leaderboards & challenges",
      desc: "Stay motivated with friendly competition across classes, teams, and departments.",
    },
    {
      icon: ClipboardList,
      title: "Quick start onboarding",
      desc: "Answer a few questions and get a tailored plan in under a minute.",
    },
    {
      icon: Users,
      title: "Privacy-first community",
      desc: "Celebrate progress without oversharing. You control what others see.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Designed for real life</h2>
          <p className="mt-3 text-slate-600 text-lg">
            Simple, trustworthy, and motivating—everything you need to feel confident and stay consistent.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
