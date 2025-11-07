import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <Rocket className="h-3.5 w-3.5" />
          AI Social Media Manager for EdTech & Skills Brands
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 drop-shadow-sm sm:text-6xl">
          Plan, write, and design your social posts in minutes.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          Share your academy’s wins, bootcamps, and success stories with an AI that matches your brand voice. Get an instant content calendar, auto-generated captions, and on-brand visuals.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#voice"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
          >
            Get started free
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow backdrop-blur transition hover:bg-white"
          >
            See pricing
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
