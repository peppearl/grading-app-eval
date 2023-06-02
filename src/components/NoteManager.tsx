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

    const handleContentChange = (e) => {
        const value = e.target.value;
        // Validate input to only allow numbers between 0 and 20
        if (value === '' || (value >= 0 && value <= 20)) {
            setNewNote({ ...newNote, content: value });
        }
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
                <input
                    type="number"
                    placeholder="Note"
                    value={newNote.content}
                    onChange={handleContentChange}
                ></input>
                <textarea
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