import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, label, setNotes }) {
    return (
        <>
            <h2>{label}</h2>
            <div className="notes-list">
                {
                    notes.length === 0 ? (
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                    ) : (
                        notes.map((note) => (
                            <NoteItem action={setNotes} key={note.id} {...note} />
                        ))
                    )
                }
            </div>
        </>
    );
}

export default NoteList;