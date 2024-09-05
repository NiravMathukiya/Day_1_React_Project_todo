import React, { useState } from 'react';

const TaskCards = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({ id: null, text: '' });
    const [isEditing, setIsEditing] = useState(false);

    const handleAddNote = () => {
        if (currentNote.text.trim()) {
            if (isEditing) {
                setNotes(notes.map(note => note.id === currentNote.id ? { ...note, text: currentNote.text } : note));
                setIsEditing(false);
            } else {
                setNotes([...notes, { id: Date.now(), text: currentNote.text }]);
            }
            setCurrentNote({ id: null, text: '' });
        }
    };

    const handleEditNote = (note) => {
        setCurrentNote(note);
        setIsEditing(true);
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="flex flex-col md:flex-row items-start justify-center ml-3 mt-0 gap-4 md:p-3 h-scrren bg0sky-600">
            <div>
                <div className="flex flex-col md:flex-row items-start justify-center gap-4 w-full">
                    {/* Today Card */}
                    <div className="bg-blue-400 w-full md:w-[18rem] h-[8rem] rounded-lg flex flex-col items-center justify-center text-white">
                        <div>
                            <img src="/images/logo.png" alt="Today Icon" className="w-12 h-12 mb-2" />
                        </div>
                        <p>Today</p>
                    </div>

                    {/* All Tasks Card */}
                    <div className="bg-yellow-400 w-full md:w-[18rem] h-[8rem] rounded-lg flex flex-col items-center justify-center text-white">
                        <div>
                            <img src="/images/logo.png" alt="All Tasks Icon" className="w-12 h-12 mb-2" />
                        </div>
                        <p>All tasks</p>
                    </div>

                    {/* Upcoming Card */}
                    <div className="bg-pink-400 w-full md:w-[18rem] h-[8rem] rounded-lg flex flex-col items-center justify-center text-white">
                        <div>
                            <img src="/images/logo.png" alt="Upcoming Icon" className="w-12 h-12 mb-2" />
                        </div>
                        <p>Upcoming</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2" >
                    <input
                        type="text"
                        value={currentNote.text}
                        onChange={(e) => setCurrentNote({ ...currentNote, text: e.target.value })}
                        placeholder="Enter note text"
                        className="p-6 border rounded h-1 w-[90%]"
                    />
                    <button
                        onClick={handleAddNote}
                        className="bg-green-500 text-white w-full md:w-[7rem] h-12 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-green-600 "
                    >
                        {isEditing ? 'Update Todo' : 'Add Todo'}
                    </button>
                </div>

                <div className="mt-4">
                    {notes.map(note => (
                        <div key={note.id} className="bg-gray-200 p-4 rounded mb-2 flex justify-between items-center">
                            <span>{note.text}</span>
                            <div>
                                <button
                                    onClick={() => handleEditNote(note)}
                                    className="bg-yellow-500 text-white p-3 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteNote(note.id)}
                                    className="bg-red-500 text-white p-3 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskCards;
