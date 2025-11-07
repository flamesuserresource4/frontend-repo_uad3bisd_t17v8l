import { Check, Zap } from 'lucide-react';

const features = [
  'AI captions tuned to your brand voice',
  '2-week content calendar generator',
  'Image prompts for each post',
  'Export to CSV & copy-to-clipboard',
];

const proFeatures = [
  'Auto-posting to LinkedIn, X, and Instagram',
  'Best-time scheduling & reposting',
  'Team approvals & version history',
  'Priority rendering queue',
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Simple pricing for growing academies</h3>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you want automation and collaboration.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Starter</h4>
            <p className="mt-1 text-sm text-slate-600">Everything you need to plan and create content.</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="pb-1 text-slate-600">/month</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600" /> {f}
                </li>
              ))}
            </ul>
            <a href="#voice" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">Get started free</a>
          </div>

          <div className="relative rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-indigo-600/90 px-2 py-1 text-xs font-medium text-white">
              <Zap className="h-3.5 w-3.5" /> Most popular
            </div>
            <h4 className="text-lg font-semibold text-slate-900">Pro Automation</h4>
            <p className="mt-1 text-sm text-slate-700">Hands-free posting and collaboration.</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">$39</span>
              <span className="pb-1 text-slate-700">/month</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              {[...features, ...proFeatures].map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-800">
                  <Check className="h-4 w-4 text-indigo-600" /> {f}
                </li>
              ))}
            </ul>
            <a href="#voice" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">Start 7-day trial</a>
          </div>
        </div>
      </div>
    </section>
  );
}
