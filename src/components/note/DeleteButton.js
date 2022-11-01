import React from "react";

function DeleteButton({ id, onDeleteNote }) {
    return (     
        <button title="Delete" className="note-item__delete-button" onClick={() => onDeleteNote(id)}><i class="gg-trash"></i></button>

    )
}

export default DeleteButton;