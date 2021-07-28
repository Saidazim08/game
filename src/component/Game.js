import "./Style.css"
import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

let randomNumber = Math.round(Math.random() * 100);


const GuessTheNumber = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState("");




    const onClick = () => {
        const userGuess = parseInt(value, setValue)

        setResults(<p className="alert alert-danger">Raqam tanlang!</p>);

        if (userGuess === randomNumber)
            setResults(<p className="alert alert-success">Topdingiz gap yo'q :)</p>);

        if (userGuess > randomNumber)
            setResults(<p className="alert alert-warning">Ko'payib ketti!</p>);

        if (userGuess < randomNumber)
            setResults(<p className="alert alert-warning">Sal qo'shing!</p>);
    };



    return <div>
        <h1>Raqam topish o'yini</h1>
        <input type="number" onChange={e => setValue(e.target.value)} />
        <br />
        <Button className="mt-3 me-4" color="primary" type="submit" onClick={onClick}>Topdim</Button>
        <Button className="mt-3" color="primary" type="submit" >Boshqa</Button>
        <br />
        <br />
        {results}
    </div>
}

export default GuessTheNumber;

