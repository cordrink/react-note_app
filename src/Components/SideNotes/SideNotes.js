import React, {useEffect, useState} from 'react';
import "./SideNotes.css";
import {useSelector} from "react-redux";
import Note from "./Note/Note";


function SideNotes(props) {

    const {notes} = useSelector((state) => state.NOTE);

    const [notesList, setNotesList] = useState([])

    useEffect(() => {
        setNotesList(notes);
    }, [notes]);

    const preventForm = (e) => {
        e.preventDefault();
    }

    const handleFilter = (e) => {
        const stateCopy = [...notes]

        const filteredArr = stateCopy.filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filteredArr = stateCopy.filter(note => note.title.toLowerCase() === e.target.value.toLowerCase());
        setNotesList(filteredArr);
    }
    
    return (
        <div className={"notes-display"}>
            <h2>Mes Notes</h2>

            <form onSubmit={preventForm}>
                <input onInput={handleFilter} type="search" id={"search-notes"} placeholder="Rechercher" />
            </form>

            <ul className={"notes-list"}>
                { notesList.map((item) => (
                    <Note key={item.id} note={item} />
                )) }
            </ul>
        </div>
    );
}

export default SideNotes;