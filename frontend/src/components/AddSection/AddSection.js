import React from "react";
import { Link } from "react-router-dom";

import './AddSection.css';


const AddSection = () => {

    return (
        <div className="addSection">
            <img className="addSection__img" src={`${process.env.PUBLIC_URL}/assets/idea.png`} />
            <div className="addSection__txt">
                <p> Vous avez une histoire à raconter ? <br/> Ecrivez là et partager là à la communauté ! </p>
                <Link to="/add" className="button is-primary mt-2 mb-2">Ajouter une histoire</Link>
            </div>
        </div>
    )

}

export default AddSection; 