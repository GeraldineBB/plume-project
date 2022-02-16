import React from "react";
import { Link } from "react-router-dom";

import './AddSection.css';


const AddSection = () => {

    return (
        <div className="addSection">
            <img className="addSection__img" src={`${process.env.PUBLIC_URL}/assets/idea.png`} />

            <Link to="/add" className="button is-primary mt-2 mb-2">Ajouter une histoire</Link>
        </div>
    )

}

export default AddSection; 