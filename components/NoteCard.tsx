
import React from 'react';
import { Note } from '../types';
import StarRating from './StarRating';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <img className="h-48 w-full object-cover" src={note.previewImageUrl} alt={note.title} />
        <div className="absolute top-2 right-2 bg-brand-accent text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
          ₹{note.price}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-brand-primary font-semibold">{note.courseCode} &bull; {note.university}</p>
        <h3 className="mt-1 text-lg font-bold text-slate-800 truncate">{note.title}</h3>
        <p className="text-sm text-slate-600 truncate">{note.courseName}</p>
        
        <div className="mt-3 flex items-center">
          <StarRating rating={note.rating} />
          <span className="ml-2 text-sm text-slate-500">({note.reviews} reviews)</span>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center flex-grow justify-between">
            <div className="flex items-center">
                <img className="h-8 w-8 rounded-full object-cover" src={note.authorAvatarUrl} alt={note.author} />
                <p className="ml-2 text-sm font-medium text-slate-700">{note.author}</p>
            </div>
            <a href="#" className="text-sm font-semibold text-brand-primary hover:text-indigo-700 transition-colors">
                View Details
            </a>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
