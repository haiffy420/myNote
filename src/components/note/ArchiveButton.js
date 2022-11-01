import React from "react";

function ArchiveButton({ id, onArchiveNote, archived }) {
    return (
        <button title={archived ? "Unarchive" : "Archive"} className="note-item__archive-button" onClick={() => onArchiveNote(id)}>{archived ? <i class="gg-undo"></i> : <i class="gg-bookmark"></i>}</button>
    )
}

export default ArchiveButton;