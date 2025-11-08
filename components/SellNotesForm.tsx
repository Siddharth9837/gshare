import React, { useState } from 'react';

interface SellNotesFormProps {
  onClose: () => void;
}

const SellNotesForm: React.FC<SellNotesFormProps> = ({ onClose }) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle form submission, e.g., API call
        alert("Thank you for your submission! Your notes will be reviewed.");
        onClose();
    }

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b border-slate-200 sticky top-0 bg-white">
          <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Sell Your Notes</h2>
                <p className="text-sm text-slate-500 mt-1">Fill out the details below to list your notes on the marketplace.</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="course-code" className="block text-sm font-medium text-slate-700">Course Code</label>
              <input type="text" id="course-code" required placeholder="e.g., CS101" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="course-name" className="block text-sm font-medium text-slate-700">Course Name</label>
              <input type="text" id="course-name" required placeholder="e.g., Intro to Computer Science" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="university" className="block text-sm font-medium text-slate-700">University</label>
              <input 
                type="text"
                id="university"
                name="university"
                defaultValue="Graphic Era University"
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-slate-100 text-slate-500"
              />
            </div>
            <div>
              <label htmlFor="professor" className="block text-sm font-medium text-slate-700">Professor</label>
              <input type="text" id="professor" placeholder="e.g., Dr. John Doe" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
              <textarea id="description" rows={4} required placeholder="Briefly describe what your notes cover..." className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Upload Notes</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="flex text-sm text-slate-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" required className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx,.zip" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF, DOC, DOCX, ZIP up to 10MB</p>
                  {fileName && <p className="text-sm font-medium text-brand-secondary pt-2">{fileName}</p>}
                </div>
              </div>
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-slate-700">Set Your Price (₹)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-slate-500 sm:text-sm">₹</span>
                    </div>
                    <input type="number" id="price" required min="0" step="1" placeholder="300" className="pl-7 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                </div>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-xs text-slate-500">By submitting, you agree to our <a href="#" className="font-medium text-brand-primary hover:underline">Terms of Service</a> and confirm you have the right to share this content.</p>
          </div>
        </form>

        <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 sticky bottom-0">
          <div className="flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
            <button type="submit" onClick={handleSubmit} className="px-6 py-2 bg-brand-primary border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit for Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellNotesForm;
