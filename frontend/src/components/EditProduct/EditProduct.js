import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 
import './EditStory.css'; 

const EditProduct = () => {
    
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const {id} = useParams(); 
    const navigate = useNavigate();

    // requête pour udpater le produit
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch (`http://localhost:5000/products/${id}`, {
            title: title, 
            story: story
        });
       navigate ("/"); 
    }

    // useEffect qui va appeler la fonction permettant de récupérer le produit à mettre à jour
    useEffect (() => {
        getProductById(); 
    }, []); 

    const getProductById = async () => {
        const response = await axios.get (`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setStory(response.data.story); 
    }

    return (

        <div>

            <form onSubmit={updateProduct} className="form">

                <div className="field">
                    <label className="label"> Nom du produit </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nom du produit"
                        value={title}
                        onChange = {(e) => setTitle (e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label"> Contenu de l'histoire</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Changer l'histoire"
                        value={story}
                        onChange= {(e)=> setStory(e.target.value)}
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Mettre à jour</button>
                </div>

            </form>

        </div>
    )

}

export default EditProduct;