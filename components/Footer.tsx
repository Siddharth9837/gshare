import React from 'react';

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2">
              <BookIcon className="h-8 w-8 text-brand-primary" />
              <span className="text-2xl font-bold text-white">GShare</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">By students, for students.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Study Guides</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Lecture Notes</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Exam Prep</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-slate-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-base text-slate-400 hover:text-white">Academic Honesty</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center">
          <p className="text-base text-slate-400">&copy; {new Date().getFullYear()} GShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;