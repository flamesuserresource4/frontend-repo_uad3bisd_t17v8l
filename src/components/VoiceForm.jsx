import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function VoiceForm({ onGenerate }) {
  const [brand, setBrand] = useState('');
  const [tone, setTone] = useState('inspirational, practical, tech-savvy');
  const [pillars, setPillars] = useState('JavaScript, DevOps, Data Science, Career Tips');

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      brand,
      tone,
      pillars: pillars.split(',').map((p) => p.trim()).filter(Boolean),
    };
    onGenerate?.(payload);
  }

  return (
    <section id="voice" className="relative py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white"><Sparkles size={16} /></span>
          <h2 className="text-xl font-semibold text-slate-900">Describe your brand voice</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Brand / Academy name</label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Acme Skills Academy"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-900/10 focus:ring"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Tone & style</label>
            <input
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-900/10 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Core content pillars (comma separated)</label>
            <input
              value={pillars}
              onChange={(e) => setPillars(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-900/10 focus:ring"
            />
          </div>
          <div className="sm:col-span-2 mt-2 flex items-center justify-between">
            <p className="text-sm text-slate-600">We’ll generate a 2-week calendar, captions, and image prompts.</p>
            <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">Generate calendar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
