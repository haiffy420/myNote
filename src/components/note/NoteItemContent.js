import React from "react";
import { showFormattedDate } from "../../utils";

function NoteItemContent({ createdAt, title, body }) {

    return (
        <div className="note-item__content">
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <br />
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemContent;