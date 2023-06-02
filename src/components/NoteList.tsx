import {useStore} from "../../store";
import {useState} from "react";
import {NoteEditor} from "./NoteEditor";

export const NoteList = () => {
    const notes = useStore((state) => state.notes);
    const deleteNote = useStore((state) => state.deleteNote);

    const [showEditor, setShowEditor] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDeleteNote = (index) => {
            deleteNote(index);
            setShowModal(false);
    };

    const handleEditNote = (index) => {
        setShowEditor(true);
        setEditIndex(index);
    };

    const handleShowComment = (index) => {
        const newNotes = [...notes];
        newNotes[index].showFullComment = !newNotes[index].showFullComment;
        setShowEditor(false);
        setEditIndex(null);
        useStore.setState({ notes: newNotes });
    };

    return (
        <div>
            <h2>Liste des notes</h2>
            {notes.map((note, index) => (
                <div
                    data-testid={index}
                    key={index}
                    style={{
                        backgroundColor:
                            note.content < 8
                                ? 'red'
                                : note.content < 10
                                    ? 'orange'
                                    : note.content < 13
                                        ? 'yellow'
                                        : 'green',
                    }}
                >
                    <h3>{note.title}</h3>
                    <p>Date: {note.created}</p>
                    <p>
                        Commentaire:{" "}
                        {note.showFullComment ? note.comment : note.comment.substring(0, 10)}
                    </p>
                    {note.showFullComment ? <p>Note: {note.content}</p> : <p></p>}
                    <button className={"delete" + index.toString()} onClick={() => setShowModal(true)}>Supprimer</button>
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <p>Etes vous sûr de supprimer cette note?</p>
                                <button data-testid="suredelete" onClick={() => handleDeleteNote(index)}>Oui</button>
                                <button onClick={() => setShowModal(false)}>Non</button>
                            </div>
                        </div>
                    )}
                    <button className={"edit" + index.toString()} onClick={() => handleEditNote(index)}>Modifier</button>
                    <button className={"show-hide" + index.toString()} onClick={() => handleShowComment(index)}>
                        {note.showFullComment ? "Cacher la note" : "Afficher entièrement la note"}
                    </button>
                </div>
            ))}
            {showEditor && (
                <NoteEditor
                    index={editIndex}
                    title={notes[editIndex].title}
                    content={notes[editIndex].content}
                    comment={notes[editIndex].comment}
                    setShowEditor={setShowEditor}
                />
            )}
        </div>
    );
};