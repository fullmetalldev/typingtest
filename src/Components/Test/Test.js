import React, {useEffect, useState} from 'react';
import {userTextSelect} from "../../recoil/input";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import "./test.css"

const Test = () => {

    const [userText, setUserText] = useRecoilState(userTextSelect);

    const [inputText, setInputText] = useState('');
    const [time, setTime] = useState(0);

    const [all, setAll] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const [test, setTest] = useState(null);

    const timerFunc = () => {
        setTime(prev => prev + 0.5);
        if (userText.length === 0) {
            clearInterval()
        }
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
                <input value={inputText} onChange={(e) => {
                    console.log(userText.length)
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
                    if (userText.length === 0) {
                        console.log("TEST");
                        console.log(test)
                        clearInterval(test)
                    }

                }}/>
            </div>
        </div>
    );
};

export default Test;