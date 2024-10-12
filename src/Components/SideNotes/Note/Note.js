import React from 'react';
import "./Note.css";
import delIcon from "./remove.svg";
import edit from "./edit.svg";
import {useDispatch} from "react-redux";
import {deleteNote} from "../../../store/note/note-slice";

function Note({note}) {

    /*id={note.id}
    title={note.title}
    subtitle={note.subtitle}
    body={note.body}*/

    const dispatch = useDispatch();

    const delNote = () => {
        dispatch(deleteNote(note.id));
    }

    return (
        <li className={"txt-note-prev"}>
            <div className="bloc-note-left">
                <p>{note.title}</p>
                <p>{note.subtitle}</p>
            </div>
            <div className="bloc-note-right">
                <button onClick={delNote} >
                    <img src={delIcon} alt="delete-icon"/>
                </button>
                <button>
                    <img src={edit} alt="edit-icon"/>
                </button>
            </div>
        </li>
    );
}

export default Note;