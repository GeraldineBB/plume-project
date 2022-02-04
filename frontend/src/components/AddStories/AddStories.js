import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStories = () => {

const [title, setTitle] = useState ('');
const [story, setStory] = useState (''); 
const navigate = useNavigate();


const saveProduct = async (e) => {
    e.preventDefault (); 
    await axios
    .post ('http://localhost:5000/products', {
        title: title, 
        story: story,
    })
    .then (console.log ('ajout OK'))
    .catch ((err) => console.error (err, 'erreur api'));
    navigate ("/"); 
}

return (

    <div>

        <form onSubmit={saveProduct}>

            <div className="field">
            <label className="label"> Nom du produit </label>
            <input
                className="input"
                type="text"
                placeholder="Nom du produit"
                value={title}
                onChange = { (e) => setTitle (e.target.value)}
            />
            </div>

            <div className="field">
            <label className="label"> Histoire </label>
            <input
                className= "input"
                type="text"
                placeholder="Changer le cours de l'histoire"
                value={story}
                onChange = { (e) => setStory (e.target.value)}
            />
            </div>

            <div className="field">
                <button className="button is-primary">Enregistrer</button>
            </div>


        </form>

    </div>

)

}

export default AddStories; 