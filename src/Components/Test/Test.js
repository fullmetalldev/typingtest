import React, {useEffect, useState} from 'react';
import {userTextSelect} from "../../recoil/input";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import "./test.css"

const Test = () => {
    const [userText, setUserText] = useRecoilState(userTextSelect);

    const [inputText, setInputText] = useState('');



    const navigate = useNavigate();
    useEffect
    (() => {
        if (userText.length < 300) {
            navigate("/")
        }

    }, []);

    return (

        <div className="Test">
            <div className="container">
                <div className="text">
                    <h3>{userText}</h3>
                    <h3 className="userText">
                        {inputText}
                    </h3>
                </div>
                <input value={inputText} onChange={(e) => {
                    if (e.target.value.split('')[e.target.value.length-1] === userText.split('')[e.target.value.length-1]) {
                       setInputText(
                           inputText + e.target.value.split('')[e.target.value.length-1]
                       )
                    }
                }}/>
            </div>
        </div>
    );
};

export default Test;