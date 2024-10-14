import React from 'react';
import "./DisplayNote.css"
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function DisplayNote(props) {

    const {id} = useParams();

    const {notes} = useSelector((state) => state.NOTE);

    const indexArticle = notes.findIndex((note) => note.title === id);


    return (
        <div className="display-txt-zone">
            <h2 className={"title-display"}>votre note : {notes[indexArticle] ? `${notes[indexArticle].title}` : ""}</h2>
            <span className="subtitle-display">
                 {notes[indexArticle] ? `${notes[indexArticle].subtitle}` : ""}
            </span>
            <p className={'txt-display'}>
                {notes[indexArticle] ? `${notes[indexArticle].body}` : ""}
            </p>
        </div>
    );
}

export default DisplayNote;