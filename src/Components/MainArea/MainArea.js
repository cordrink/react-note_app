import React, {useEffect, useRef, useState} from 'react';
import "./MainArea.css";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addNote, updateNote} from "../../store/note/note-slice";
import {resetNote} from "../../store/selected/selected-slice";

function MainArea(props) {
    // state de gestion  des informations venant du note-slice
    const [inpInfo, setInpInfo] = useState({
        title: "",
        subtitle: "",
        body: ""
    });
    // State de gestion de information venant du selected-slice et selon que la note est en mode edit ou non
    const [inpModify, setInpModify] = useState({
        title: "",
        subtitle: "",
        body: ""
    });
    // Recuperation des information venant du selected-slice
    const selected = useSelector((state) => state.SELECTED.selectedNote);
    // chargement de la page en hydratant  les information sur les champs
    useEffect(() => {
        setInpModify(selected)
    }, [selected]);

    const dispatch = useDispatch();

    const [validation, setValidation] = useState(true);
    // Mise en place des references sur les differents champs(input)
    const allInp = useRef([]);
    const addInp = el => {
        if (el && !allInp.current.includes(el)) {
            allInp.current.push(el);
        }
    }
    // Fonction d'envoie d'information se trouvant dans les champs
    const handleForm = (e) => {
        e.preventDefault();

        if (selected.toggle) {
            if (selected.title.length < 1) {
                setValidation(false);
                return;
            }

            setValidation(true);

            dispatch(updateNote(inpModify));

            dispatch(resetNote());

            setInpModify({
                title: "",
                subtitle: "",
                body: ""
            });
        } else if (selected.toggle === false) {
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
            });
        }
    }

    const updateInputs = (e) => {
        const el = e.target;
        const actualInp = el.getAttribute('id');

        if (selected.toggle) {
            const newObjState = {...inpModify, [actualInp]: el.value};
            setInpModify(newObjState);
        }else if (selected.toggle === false) {
            const newObjSate = {...inpInfo, [actualInp]: el.value};

            setInpInfo(newObjSate);
        }
    }

    return (
        <div className="container-content">
            <h2>Votre plume</h2>

            <form onSubmit={handleForm}>
                <label htmlFor="title">Le Titre</label>
                <input
                    ref={addInp}
                    onChange={updateInputs}
                    value={inpModify.toggle ? inpModify.title : inpInfo.title}
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
                    value={inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
                    type="text"
                    id="subtitle"

                />

                <label htmlFor="txtbody">Votre Texte</label>
                <textarea
                    ref={addInp}
                    onChange={updateInputs}
                    value={inpModify.toggle ? inpModify.body : inpInfo.body}
                    id="body"
                    placeholder="Votre Texte ..."
                ></textarea>

                <button>Enregistrer</button>
            </form>
        </div>
    );
}

export default MainArea;