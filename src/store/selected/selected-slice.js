import {createSlice} from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
    name: "selected",
    initialState: {
        selectedNote: {
            title: "",
            subtitle: "",
            body: "",
            id: "",
            toggle: false
        }
    },
    reducers: {
        visualizeNote: (state, action) => {
            state.selectedNote = action.payload;
            // state.selectedNote.toggle = true;
        },
        resetNote: (state, action) => {
            state.selectedNote.title = "";
            state.selectedNote.subtitle = "";
            state.selectedNote.body = "";
            state.selectedNote.id = "";
            state.selectedNote.toggle = true;
        }
    }
});

const {visualizeNote, resetNote} = selectedSlice.actions;
export {visualizeNote, resetNote};