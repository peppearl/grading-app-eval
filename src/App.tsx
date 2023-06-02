import React from 'react';
import './App.css';
import NoteCreator from './components/AddNote'
import ViewNote from "./components/ViewNote";
import NoteEditor from "./components/EditNote";
import AddNote from "./components/AddNote";
import {NoteList} from "./components/NoteList";
import NoteManager from "./components/NoteManager";


function App() {
	return (
		<div>
			<NoteManager/>
			</div>
	)
}

export default App;
