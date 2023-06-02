import {useState} from "react";
import {useStore} from "../../store";

const NoteViewer = () => {
    const notes = useStore((state) => state.notes);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };

    const getNoteColor = (note) => {
        const noteValue = parseFloat(note.content);
        if (noteValue < 8) {
            return 'red';
        } else if (noteValue < 10) {
            return 'orange';
        } else if (noteValue < 13) {
            return 'yellow';
        } else {
            return 'green';
        }
    };

    return (
        <div>
            <h2>Note List</h2>
            {notes.map((note, index) => (
                <div
                    key={index}
                    onClick={() => handleNoteClick(note)}
                    style={{ backgroundColor: getNoteColor(note) }}
                >
                    <h3>{note.title}</h3>
                    <p>Date: {note.created}</p>
                    <p>Comment: {note.comment.substring(0, 20)}</p>
                </div>
            ))}

            {selectedNote && (
                <div>
                    <h2>Selected Note</h2>
                    <h3>{selectedNote.title}</h3>
                    <p>Date: {selectedNote.created}</p>
                    <p>Note: {selectedNote.content}</p>
                    <p>Comment: {selectedNote.comment}</p>
                </div>
            )}
        </div>
    );
};

export default NoteViewer;