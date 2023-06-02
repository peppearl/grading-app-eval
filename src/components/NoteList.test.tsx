import { NoteList } from './NoteList';
import {beforeEach} from "vitest";
import {useStore} from "../../store";
import { render, screen, fireEvent } from '@testing-library/react';

describe('NoteList', () => {
	beforeEach(() => {
		useStore.getState().reset();
	});

	test('should render notes in grade list', () => {
		useStore.getState().addNote('Note 1', '10', 'Comment 1');
		useStore.getState().addNote('Note 2', '15', 'Comment 2');

		render(<NoteList />);

		const note1Element = screen.getByText('Note 1');
		const note2Element = screen.getByText('Note 2');

		expect(note1Element).not.toBeNull;
		expect(note2Element).not.toBeNull;
	});

	test('should delete note when confirmation is accepted', () => {
		useStore.getState().addNote('Note 1', '10', 'Comment 1');

		render(<NoteList />);

		const deleteButton = screen.getByText('Supprimer');

		fireEvent.click(deleteButton);

		expect(screen.queryByText('Note 1')).toBeNull();
	});

	test('should show full comment when "Afficher entièrement la note" button is clicked', () => {
		useStore.getState().addNote('Note 1', '10', 'Comment 1');
		render(<NoteList />);

		const showCommentButton = screen.getByText('Afficher entièrement la note');

		fireEvent.click(showCommentButton);

		expect(screen.queryByText('Afficher entièrement la note')).toBeNull();
	});

	test('should show truncated comment when "Cacher la note" button is clicked', () => {
		useStore.getState().addNote('Note 1', '10', 'Comment 1');
		render(<NoteList />);

		const showCommentButton = screen.getByText('Afficher entièrement la note');

		fireEvent.click(showCommentButton);

		const hideCommentButton = screen.getByText('Cacher la note');

		fireEvent.click(hideCommentButton);


		expect(screen.queryByText('Note: 10')).toBeNull();
		expect(screen.queryByText('Cacher la note')).toBeNull();
	});

	test('should show note editor when "Modifier" button is clicked', () => {
		useStore.getState().addNote('Note 2', '10', 'Comment 2');
		render(<NoteList />);

		const editButton = screen.getByText('Modifier');

		fireEvent.click(editButton);

		//le bouton pour sauvegarder les modifications est affiché
		expect(screen.getByText('Sauvegarder')).not.toBeNull();
	});
});
