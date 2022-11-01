import React from "react";
import NoteItemContent from "./NoteItemContent";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItem({ createdAt, id, title, body, archived, action }) {

    const onDeleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

    const onArchiveNote = (item) => {
        action((notes) =>
            notes.map((note) => {
                if (note.id === item) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            }),
        );
    };

    return (
        <div className="note-item">
            <NoteItemContent
                createdAt={createdAt}
                title={title}
                body={body}
                archived={archived}
                action={action}
            />
            <div className="note-item__action">
                <ArchiveButton id={id} onArchiveNote={onArchiveNote} archived={archived} />
                <DeleteButton id={id} onDeleteNote={onDeleteNote} />
            </div>
        </div>
    );
}

export default NoteItem;