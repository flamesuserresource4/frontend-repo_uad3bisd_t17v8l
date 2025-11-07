import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} SocialPilot AI for Academies. All rights reserved.</p>
        <div className="flex items-center gap-3 text-slate-600">
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-900"><Github size={16}/> GitHub</a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-1 hover:text-slate-900"><Mail size={16}/> Contact</a>
        </div>
      </div>
    </footer>
  );
}
