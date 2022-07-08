import React from 'react';
import Records from "../Records/Records";
import {useRecoilState} from "recoil";
import {userTextSelect} from "../../recoil/input";
import {useNavigate, Link} from "react-router-dom";


const Main = () => {

    const [userText, setUserText] = useRecoilState(userTextSelect);

    const navigate = useNavigate();

    return (
        <div className="Main">
            <div className="container">
                <div className="Main__header">
                    <h2 className="Main__header-title">Вставь сюда текст:</h2>
                    <textarea value={userText} onChange={(e)=> {
                        setUserText(e.target.value);
                    }} className="Main__header-input">

                    </textarea>
                    <a onClick={()=>{
                        if (userText.length < 300){
                            alert("Длина текста должна превышать 300 символов!")
                        }
                        else {
                            navigate('/test')
                        }
                    }} className="Main__header-href">
                        Готово!
                    </a>
                </div>
                <Records/>
            </div>
        </div>
    );
};

export default Main;