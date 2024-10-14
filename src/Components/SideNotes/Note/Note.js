// composant de gestion de l'apparition d'une note
import React from 'react';
import "./Note.css";
import delIcon from "./remove.svg";
import edit from "./edit.svg";
import {useDispatch} from "react-redux";
import {deleteNote} from "../../../store/note/note-slice";
import {Link} from "react-router-dom";
import {visualizeNote} from "../../../store/selected/selected-slice";

function Note({note}) {

    /*id={note.id}
    title={note.title}
    subtitle={note.subtitle}
    body={note.body}*/

    const dispatch = useDispatch();

    const delNote = () => {
        dispatch(deleteNote(note.id));
    }

    const modifyNote = () => {
        dispatch(visualizeNote({...note, toggle: true}));
    }

    return (
        <li className={"txt-note-prev"}>
            <Link to={`/displayNote/${note.title}`}>
                <div className="bloc-note-left">
                    <p>{note.title}</p>
                    <p>{note.subtitle}</p>
                </div>
            </Link>
            <div className="bloc-note-right">
                <button onClick={delNote}>
                    <img src={delIcon} alt="delete-icon"/>
                </button>
                <Link to={'/edit'}>
                    <button onClick={modifyNote}>
                        <img src={edit} alt="edit-icon"/>
                    </button>
                </Link>
            </div>
        </li>
    );
}

export default Note;