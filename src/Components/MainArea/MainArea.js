import React, {useRef, useState} from 'react';
import "./MainArea.css";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addNote} from "../../store/note/note-slice";

function MainArea(props) {

    const [inpInfo, setInpInfo] = useState({
        title: "",
        subtitle: "",
        body: ""
    });

    const dispatch = useDispatch();

    const [validation, setValidation] = useState(true);

    const allInp = useRef([]);
    const addInp = el => {
        if (el && !allInp.current.includes(el)) {
            allInp.current.push(el);
        }
    }

    console.log("*** : " + allInp);

    const handleForm = (e) => {
        e.preventDefault();

        if (inpInfo.title.length < 1) {
            setValidation(false);
            return;
        }

        setValidation(true);

        dispatch(addNote({...inpInfo, id: uuidv4()}));

        setInpInfo({
            title: "",
            subtitle: "",
            body: "",
        })
    }

    const updateInputs = (e) => {
        const el = e.target;
        const actualInp = el.getAttribute('id');

        const newObjSate = {...inpInfo, [actualInp]: el.value};

        setInpInfo(newObjSate);
    }

    return (
        <div className="container-content">
            <h2>Votre plume</h2>

            <form onSubmit={handleForm}>
                <label htmlFor="title">Le Titre</label>
                <input
                    ref={addInp}
                    onChange={updateInputs}
                    value={inpInfo.title}
                    type="text"
                    id="title"
                />
                {!validation && (
                    <span>Veuillez renseigner un titre</span>
                )}

                <label htmlFor="subtitle">Sous-titre</label>
                <input
                    ref={addInp}
                    onChange={updateInputs}
                    value={inpInfo.subtitle}
                    type="text"
                    id="subtitle"

                />

                <label htmlFor="txtbody">Votre Texte</label>
                <textarea
                    ref={addInp}
                    onChange={updateInputs}
                    value={inpInfo.body}
                    id="body"
                    placeholder="Votre Texte ..."
                ></textarea>

                <button>Enregistrer</button>
            </form>
        </div>
    );
}

export default MainArea;