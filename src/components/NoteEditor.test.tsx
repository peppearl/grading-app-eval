/* doesnt work */

/*import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NoteEditor } from './NoteEditor';
import {test, expect, describe, beforeEach} from 'vitest';
import {useStore} from "../../store";


describe('NoteEditor tests', () => {
	beforeEach(() => {
		useStore.getState().reset();
	});

	test('add grade', () => {
		const { addNote } = useStore.getState();
		addNote(
			{title: 'Note 1'},
			{content: ''},
			{comment: 'Comment 1'}
		)
		const { notes } = useStore.getState();
		expect(notes).toMatchSnapshot();

		const updateNote = vi.fn();
		const setShowEditor = vi.fn();
		const index = 0;
		const title = 'Note Title';
		const content = '10';
		const comment = 'Note Comment';

		render(
			<NoteEditor
				index={index}
				title={title}
				content={content}
				comment={comment}
				setShowEditor={setShowEditor}
			/>
		);

		// Empty the title field
		fireEvent.change(screen.getByTestId('title'), { target: { value: '' } });

		// Click the "Sauvegarder" button
		fireEvent.click(screen.getByText('Sauvegarder'));

		// Verify that the updateNote and setShowEditor functions were not called
		expect(updateNote).not.toHaveBeenCalled();
		expect(setShowEditor).not.toHaveBeenCalled();
	});

	test('should update note if all fields are filled', () => {
		useStore.getState().addNote('Note 1', '10', 'Comment 1');
		const updateNote = vi.fn();
		const setShowEditor = vi.fn();
		const index = 0;
		const title = 'Note Title';
		const content = '10';
		const comment = 'Note Comment';

		render(
			<NoteEditor
				index={index}
				title={title}
				content={content}
				comment={comment}
				setShowEditor={setShowEditor}
			/>
		);

		// Click the "Sauvegarder" button
		fireEvent.click(screen.getByText('Sauvegarder'));

		// Verify that the updateNote function was called with the correct arguments
		expect(updateNote).toHaveBeenCalledWith(index, title, content, comment);

		// Verify that the setShowEditor function was called with false
		expect(setShowEditor).toHaveBeenCalledWith(false);
	});
});
*/