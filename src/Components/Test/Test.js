import React, {useEffect, useState} from 'react';
import {userTextSelect} from "../../recoil/input";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import "./test.css"
import Record from "../Record/Record";

const Test = () => {

    const [userText, setUserText] = useRecoilState(userTextSelect);

    const [inputText, setInputText] = useState('');
    const [time, setTime] = useState(0);

    const [all, setAll] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const [test, setTest] = useState(null);

    const timerFunc = () => {
        setTime(prev => prev + 0.5);
    };

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
                    <h3 className="userText">
                        {inputText}
                        <span style={{color: "black"}}>{userText}</span>
                    </h3>
                    <div className="statistic">
                        <span>Скорость: {((all / time) * 60).toFixed(2)}</span>
                        <span>Точность: {all > 0 ? (100 - (accuracy * 100 / all)).toFixed(2) : 100.00}%</span>
                    </div>
                </div>
                <input className="input" value={inputText} onChange={(e) => {
                    setAll(all + 1);
                    if (e.target.value.split('')[e.target.value.length - 1] === userText.split('')[0]) {
                        setUserText(userText.slice(1));
                        setInputText(
                            inputText + e.target.value.split('')[e.target.value.length - 1]
                        );
                    } else {
                        setAccuracy(accuracy + 1)
                    }
                    if (inputText.length === 1) {
                        setTest(setInterval(timerFunc, 500));
                    }
                    if (userText.length === 1) {
                        clearInterval(test)
                    }
                }}/>
                {userText.length === 0
                    ? <Record accuracy={(100 - (accuracy * 100 / all)).toFixed(2)} all={((all / time) * 60).toFixed(2)}/>
                    : ""
                }
            </div>

        </div>
    );
};

export default Test;