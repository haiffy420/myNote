import React from "react";
import NoteSearch from "../note/NoteSearch";

function HeaderSection({ search, setQuery }) {
    return (
        <div className="note-app__header">
            <h1>myNotes</h1>
            <div className="note-search">
                <NoteSearch
                    value={search}
                    onChange={setQuery}
                    type='search'
                    id='search_note'
                    name='search_note'
                    placeholder="Search" />
            </div>
        </div>
    );
}

export default HeaderSection;