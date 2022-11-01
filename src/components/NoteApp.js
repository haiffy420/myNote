import { useState, useEffect } from "react";
import { getInitialData } from "../utils/index";

import HeaderSection from "./page/HeaderSection";
import BodySection from "./page/BodySection";

function NoteApp() {
    const [query, setQuery] = useState("");
    const [searchNotes, setSearchNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
    const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <div className="note-app" >
            <HeaderSection search={query} setQuery={setQuery} />
            <BodySection activeNotes={activeNotes} archivedNotes={archivedNotes} setNotes={setNotes} />
        </div>
    );

}

export default NoteApp;
