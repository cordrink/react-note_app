import { configureStore } from '@reduxjs/toolkit'
import {noteSlice} from "./note/note-slice";
import {selectedSlice} from "./selected/selected-slice";

export default configureStore({
    reducer: {
        NOTE: noteSlice.reducer,
        SELECTED: selectedSlice.reducer
    },
})