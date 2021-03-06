import React, {useEffect} from 'react';
import "./Records.css"
import {recordsState} from "../../recoil/Statistic";
import {useRecoilState} from "recoil";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";


const Records = () => {

    const [records, setRecords] = useRecoilState(recordsState);

    const firebaseConfig = {
        apiKey: "AIzaSyCslumB1g5qLYATfYCj2MAqI3RRwbimDKs",
        authDomain: "speedtyping-76b6b.firebaseapp.com",
        databaseURL: "https://speedtyping-76b6b-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "speedtyping-76b6b",
        storageBucket: "speedtyping-76b6b.appspot.com",
        messagingSenderId: "267696737784",
        appId: "1:267696737784:web:65d6e940e65f15ff899a0d"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const starCountRef = ref(database, 'records');
    useEffect(() => {
        onValue(starCountRef, async (snapshot) => {
            const data = snapshot.val();
            setRecords(Object.values(data).sort((prev, next)=>  next.length - prev.length))
        });
    }, []);

    const recordList = ()=>{
      return  records.map((item ,idx)=>(
            <li key={idx}>
                <span>{idx+1}.{item.name}</span>
                <span>{item.length}</span>
                <span>{item.accuracy}%</span>
            </li>
        ))
    };

    return (
        <div className="Records">
            <h2>Таблица рекордов:</h2>
            <ul>
                <li>
                    <span>Имя:</span>
                    <span>Скорость:</span>
                    <span>Аккуратность:</span>
                </li>
                {records ?
                    recordList()
 : "EMPTY!"}
            </ul>

        </div>
    );
};

export default Records;