import {useState} from "react";
import {useStore} from "../../store";
import {NoteList} from "./NoteList";

function NoteManager() {
    const notes = useStore((state) => state.notes);
    const addNote = useStore((state) => state.addNote);

    const [newNote, setNewNote] = useState({ title: '', content: '', comment: '' });

    const handleCreateNote = () => {
        addNote(newNote.title, newNote.content, newNote.comment);
        setNewNote({ title: '', content: '', comment: '' });
    };

    return (
        <div>
            <h1>Note Manager</h1>

            {/* Create Note */}
            <div>
                <h2>Créer une nouvelle note</h2>
                <input
                    type="text"
                    placeholder="Titre"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                <textarea
                    placeholder="Note"
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                ></textarea>
                <input
                    type="text"
                    placeholder="Commentaire"
                    value={newNote.comment}
                    onChange={(e) => setNewNote({ ...newNote, comment: e.target.value })}
                />
                <button onClick={handleCreateNote}>Créer</button>
            </div>

            {/* Note List */}
            <NoteList />

            {/* Edit Note */}

        </div>
    );
}

export default NoteManager;