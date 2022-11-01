const NoteSearch = (attributes) => {

    const onSearchEventHandler = (event) => {
            attributes.onChange(event.target.value);
    };

    return (
        <input
            {...attributes}
            className="note-input__title"
            value={attributes.value}
            spellCheck={false}
            onChange={onSearchEventHandler}
        />

    );
};

export default NoteSearch;