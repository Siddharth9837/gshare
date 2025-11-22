import React from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd perform validation and an API call here.
    onLogin();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center gap-2 mb-8">
            <BookIcon className="h-10 w-10 text-brand-primary" />
            <span className="text-4xl font-bold text-slate-800">GShare</span>
        </div>
        <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Welcome Back!</h2>
            <p className="text-slate-500 mt-1">Log in to continue to GShare.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@gshare.com"
                  className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-brand-primary hover:text-indigo-700">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Log in
              </button>
            </div>
          </form>

           <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-brand-primary hover:text-indigo-700">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;