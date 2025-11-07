import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this static demo, we simply clear the input.
    setEmail("");
    alert("Thanks! We'll be in touch with early access.");
  };

  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Ready to feel better with less effort?
        </h2>
        <p className="mt-3 text-slate-600 text-lg">
          Join a community focused on steady, private progress. Get early access and a launch discount.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="relative w-full sm:w-auto sm:min-w-[320px]">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 bg-white px-10 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Get early access <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-3 text-xs text-slate-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
