import {useStore} from "../../store";
import {useState} from "react";

export const NoteEditor = ({ index, title, content, setShowEditor }) => {
    const updateNote = useStore((state) => state.updateNote);

    const handleUpdateNote = () => {
        updateNote(index, title, content);
        setShowEditor(false);
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => updateNote(index, e.target.value, content)}
            />
            <textarea
                value={content}
                onChange={(e) => updateNote(index, title, e.target.value)}
            ></textarea>
            <button onClick={handleUpdateNote}>Sauvegarder</button>
        </div>
    );
};