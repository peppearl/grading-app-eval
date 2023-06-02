import create from "zustand";

export const useStore = create((set) => ({
    notes: [],
    addNote: (title, content, comment) => {
        const newNote = {
            title,
            content,
            comment,
            created: new Date().toLocaleString(),
        };
        set((state) => ({ notes: [...state.notes, newNote] }));
    },
    deleteNote: (index) => {
        set((state) => {
            const updatedNotes = [...state.notes];
            updatedNotes.splice(index, 1);
            return { notes: updatedNotes };
        });
    },
    updateNote: (index, title, content) => {
        set((state) => {
            const updatedNotes = [...state.notes];
            updatedNotes[index].title = title;
            updatedNotes[index].content = content;
            return { notes: updatedNotes };
        });
    },
}));