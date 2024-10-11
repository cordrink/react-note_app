import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store/index';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} >
                    <Route index element={<ListNotes /> }  />
                    <Route path={"/edit"} element={<MainArea /> }  />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
