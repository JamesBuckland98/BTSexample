import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getIndex, postIndex } from '../api/indexAPI';
import '../css/app.css'

export const Home = () => {

    const [name, setName] = useState('');
    const [showHiddenDiv, setShowHiddenDiv] = useState(false);
    const [serverStatus, setServerStatus] = useState('Down');

    useEffect(() => {
        getIndex().then((response) =>{
            response == 200 ? setServerStatus('Up') : setServerStatus('Down');
        });
    }, []);

    useEffect(() =>{
        name != '' ? setShowHiddenDiv(true) : setShowHiddenDiv(false);
    },[name]);

    const submitForm = () => {
        postIndex(name).then((data) => {
            setName(data);
        });
    }

    return(
        <div className="center">
            <h1>Welcome to Home</h1>
            <div>
                <h3>PHP server is {serverStatus}</h3>
                { showHiddenDiv 
                    ? <span> Hi {name} !</span>
                    : ''
                }
                    <label> Name:</label>
                    <input type="text" name="name" maxlength="15" onChange={(e) => setName(e.target.value)} />
                    <button type="submit" value="Submit" onClick={submitForm}> Reverse </button>
                    <br/>
                <Link to="/page2">
                    <button variant="outlined">
                        Page 2
                    </button>
                </Link>
            
            </div>
        </div>
        
    )
}