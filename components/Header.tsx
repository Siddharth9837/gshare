import React, { useState } from 'react';

interface HeaderProps {
  onSellClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const BookIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ onSellClick, isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <BookIcon className="h-8 w-8 text-brand-primary" />
              <span className="text-2xl font-bold text-slate-800">GShare</span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Browse</a>
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
                 <button 
                    onClick={onLogout}
                    className="font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                    Log out
                </button>
            ) : (
                <button className="font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Log in
                </button>
            )}
            <button
              onClick={onSellClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Sell Notes
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
         <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Browse</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How it Works</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pricing</a>
            <button onClick={onSellClick} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-brand-primary hover:text-indigo-700 hover:bg-indigo-50">Sell Notes</button>
            {isLoggedIn ? (
                 <button 
                    onClick={() => { onLogout(); setIsMenuOpen(false); }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                    Log out
                </button>
            ) : (
                <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Log in
                </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;