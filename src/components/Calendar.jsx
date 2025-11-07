import { useMemo } from 'react';
import { Calendar as CalendarIcon, Image as ImageIcon, Copy } from 'lucide-react';

function DayCard({ day }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
          <CalendarIcon size={16} /> {day.date}
        </div>
        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">{day.channel}</span>
      </div>
      <p className="text-sm font-semibold text-slate-900">{day.title}</p>
      <p className="mt-1 text-sm text-slate-700">{day.caption}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs text-slate-600"><ImageIcon size={14} /> Image prompt</div>
        <button
          onClick={() => navigator.clipboard.writeText(day.prompt)}
          className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
        >
          <Copy size={14} /> Copy
        </button>
      </div>
      <p className="mt-1 text-xs text-slate-600">{day.prompt}</p>
    </div>
  );
}

export default function Calendar({ spec }) {
  const plan = useMemo(() => {
    if (!spec) return [];
    const channels = ['LinkedIn', 'Twitter', 'Instagram'];
    const days = Array.from({ length: 14 }).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dd = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      const pillar = spec.pillars[i % spec.pillars.length];
      const channel = channels[i % channels.length];
      const title = `${pillar} — Tip #${i + 1}`;
      const caption = `${spec.brand}: ${pillar} insight. ${spec.tone}. Clear steps with a CTA to enroll.`;
      const prompt = `Create a vibrant, 3D-influenced image illustrating ${pillar}. Style: playful, vibrant, tech, brand-aligned for ${spec.brand}.`;
      return { date: dd, channel, title, caption, prompt };
    });
    return days;
  }, [spec]);

  if (!spec) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Your 2-week content calendar</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plan.map((day, idx) => (
            <DayCard key={idx} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
