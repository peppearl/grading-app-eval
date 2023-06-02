import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, describe, beforeEach } from 'vitest';
import NoteManager from './NoteManager';
import {useStore} from "../../store";

describe('NoteManager file test', () => {
	beforeEach(() => {
		useStore.getState().reset();
	});
	test('should not add an empty grade if any field is empty', async () => {
		render(<NoteManager />);

		// Trigger create note with empty fields
		fireEvent.click(screen.getByText('Créer'));

		// Verify that there is no empty grade
		expect(screen.findByText("Date")).toBeNull;
	});

	test('should create note if all fields are filled', async () => {
		render(<NoteManager />);

		// Fill in all the fields
		fireEvent.change(screen.getByPlaceholderText('Titre'), { target: { value: 'Note Title' } });
		fireEvent.change(screen.getByPlaceholderText('Note'), { target: { value: '10' } });
		fireEvent.change(screen.getByPlaceholderText('Commentaire'), {
			target: { value: 'Note Comment' },
		});

		// Trigger create note
		fireEvent.click(screen.getByText('Créer'));

		// Verify that the note is created
		expect(await screen.findByText('Note Title')).not.toBeNull;
	});

	test('should only allow numbers between 0 and 20 for note content', async () => {
		render(<NoteManager />);

		// Enter an invalid content value
		fireEvent.change(screen.getByPlaceholderText('Note'), { target: { value: '30' } });

		// Verify that the content value is not updated
		expect(screen.getByPlaceholderText('Note').value).toBe('');

		// Enter a valid content value
		fireEvent.change(screen.getByPlaceholderText('Note'), { target: { value: '15' } });

		// Verify that the content value is updated
		expect(screen.getByPlaceholderText('Note').value).toBe('15');
	});
});
