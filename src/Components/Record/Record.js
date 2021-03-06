import React from 'react';
import {getDatabase, ref, child, push, update} from "firebase/database";
import "./record.css";

const Record = ({all, accuracy}) => {

    function writeNewPost(name) {
        const db = getDatabase();

        const postData = {
            name: name,
            accuracy: accuracy,
            length: all
        };
        const newPostKey = push(child(ref(db), 'records')).key;

        const updates = {};
        updates['/records/' + newPostKey] = postData;

        return update(ref(db), updates);
    }

    return (
        <form className="formRecord" onSubmit={(e) => {
            writeNewPost(e.target[0].value)
        }} style={{position: "relative", zIndex: 3, cursor: "pointer"}}>
            <label>
                <h2>Ваше имя:</h2>
                <input type="text"/>
            </label>
            <button>Готово!</button>
        </form>
    );
};

export default Record;