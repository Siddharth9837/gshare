import React, { useState, useCallback, useMemo } from 'react';
import { MOCK_NOTES } from './constants';
import { Note } from './types';
import Header from './components/Header';
import NoteCard from './components/NoteCard';
import SellNotesForm from './components/SellNotesForm';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSellFormOpen, setIsSellFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = useCallback(() => setIsLoggedIn(true), []);
  const handleLogout = useCallback(() => setIsLoggedIn(false), []);

  const openSellForm = useCallback(() => setIsSellFormOpen(true), []);
  const closeSellForm = useCallback(() => setIsSellFormOpen(false), []);

  const filteredNotes = useMemo(() => {
    return MOCK_NOTES.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header onSellClick={openSellForm} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-primary text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Unlock Your Potential at Graphic Era
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
              Access high-quality, student-created notes for your courses. Or, earn money by sharing your own.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#notes-grid" className="w-full sm:w-auto px-8 py-3 bg-white text-brand-primary font-semibold rounded-md shadow-lg hover:bg-slate-100 transition-colors duration-300">
                Browse Notes
              </a>
              <button 
                onClick={openSellForm}
                className="w-full sm:w-auto px-8 py-3 bg-brand-accent text-white font-semibold rounded-md shadow-lg hover:bg-amber-500 transition-colors duration-300"
              >
                Sell Your Notes
              </button>
            </div>
            <p className="mt-6 text-sm text-indigo-300">* Exclusive for Graphic Era University students.</p>
          </div>
        </section>

        {/* Notes Grid Section */}
        <section id="notes-grid" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Notes</h2>
              <p className="mt-2 text-lg text-slate-600">Top-rated notes from students like you.</p>
            </div>
            
            {/* Search Bar */}
            <div className="mb-10 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by course, professor, or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary sm:text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
            {filteredNotes.length === 0 && (
                <div className="text-center col-span-full py-16">
                    <h3 className="text-xl font-semibold text-slate-700">No notes found</h3>
                    <p className="text-slate-500 mt-2">Try adjusting your search terms.</p>
                </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {isSellFormOpen && <SellNotesForm onClose={closeSellForm} />}
    </div>
  );
};

export default App;