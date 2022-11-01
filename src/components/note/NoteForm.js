import { useState } from "react";
import NoteInput  from "./NoteInput";

function NoteForm({ setNotes }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            { id: timestamp, createdAt: timestamp, title: title, body: body, archived: false },
        ]);
    };

    return (
        <div className="note-input">
            <h2>New Note</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa karakter: {50 - title.length}</p>
                <NoteInput 
                    value={title}
                    onChange={setTitle}
                    id='title'
                    name='title'
                    type="text"
                    placeholder="Title"
                    required
                />
                <NoteInput 
                    value={body}
                    onChange={setBody}
                    id="body"
                    name="body"
                    type='textarea'
                    placeholder="Write your note here..."
                    required
                />
                <button className="submit-btn" type="submit">Save</button>
            </form>
        </div>
    );
}

export default NoteForm;