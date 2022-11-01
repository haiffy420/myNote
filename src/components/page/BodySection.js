import React from "react";
import NoteForm from "../note/NoteForm";
import NoteList from "../note/NoteList";

function BodySection({ activeNotes, archivedNotes, setNotes }) {
    return (
        <div className="note-app__body">
            <NoteForm setNotes={setNotes} />
            <NoteList label="My Notes" setNotes={setNotes} notes={activeNotes} />
            <NoteList label="Archives" setNotes={setNotes} notes={archivedNotes} />
        </div>
    );
}

export default BodySection;