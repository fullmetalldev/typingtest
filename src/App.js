import React from 'react';
import Main from "./Components/Main/Main";
import {RecoilRoot} from "recoil";
import "./styles/styles.css";
import {Route, Routes} from "react-router-dom"
import Test from "./Components/Test/Test";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <Routes>
                    <Route element={<Main/>} path=""/>
                    <Route element={<Test/>} path="/test"/>
                </Routes>
            </div>
        </RecoilRoot>
    );
}

export default App;
