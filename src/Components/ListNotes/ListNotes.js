import React from 'react';
import "./ListNotes.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function ListNotes(props) {

    const {notes} = useSelector((state) => state.NOTE);
    return (
        <div className={"container-content"}>
            <h2>Voici vos notes</h2>
            <ul className="notes-list-card">
                {notes.map((note, index) => (
                    <Link to={`/displayNote/${note.title}`} key={index}>
                        <li>
                            <h2>{note.title}</h2>
                            <p>{note.subtitle}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ListNotes;