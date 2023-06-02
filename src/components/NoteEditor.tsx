import {useStore} from "../../store";

export const NoteEditor = ({ index, title, content, comment, setShowEditor }) => {
    const updateNote = useStore((state) => state.updateNote);

    const handleUpdateNote = () => {
        // Check if any field is empty
        if (title === "" || content === "" || comment === "") {
            alert("Un ou plusieurs champs sont vides.")
            return; // Do not proceed if any field is empty
        }
        updateNote(index, title, content, comment);
        setShowEditor(false);
    };

    const handleContentChange = (e) => {
        const value = e.target.value;
        // Validate input to only allow numbers between 0 and 20
        if (value === '' || (value >= 0 && value <= 20)) {
            updateNote(index, title, value, comment);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => updateNote(index, e.target.value, content, comment)}
            />
            <input
                type="number"
                value={content}
                onChange={handleContentChange}
            />
            <textarea
                value={comment}
                onChange={(e) => updateNote(index, title, content, e.target.value)}
            ></textarea>
            <button onClick={handleUpdateNote}>Sauvegarder</button>
        </div>
    );
};