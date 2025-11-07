import { Sparkles, ListChecks, Brain, ThumbsUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: ListChecks,
      title: "Answer a few questions",
      desc: "We get to know your goals, schedule, and preferences in under a minute.",
    },
    {
      icon: Brain,
      title: "Get smart recommendations",
      desc: "Instant workout and diet plans tailored to your energy, time, and equipment.",
    },
    {
      icon: Sparkles,
      title: "Track and adapt",
      desc: "The tracker adjusts intensity as you progress—no guesswork, just steady gains.",
    },
    {
      icon: ThumbsUp,
      title: "Join challenges, order meals",
      desc: "Compete with friends or coworkers and keep nutrition on track with fast delivery.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Onboarding that respects your time</h2>
          <p className="mt-3 text-slate-600 text-lg">
            Get started quickly with a calm, helpful flow—no noise, just what matters.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="rounded-2xl border border-emerald-200/70 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
                  {idx + 1}
                </span>
                <Icon className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
