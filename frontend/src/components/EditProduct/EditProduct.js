import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStory.css';

const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');

    const [titleFollow, setTitleFollow] = useState('');
    const [content, setContent] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    // requête pour udpater l'histoire (à enlever ensuite car on veut updater la suite de l'histoire)
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`, {
            title: title,
            story: story
        });
        navigate("/");
    }

    const createFollow = async (e) => {
        e.preventDefault();
        await axios
            .post('http://localhost:5000/products/follow', {
                titleFollow: titleFollow,
                content: content,
            })
            .then(console.log('ajout OK'))
            .catch((err) => console.error(err, 'erreur api'));
        navigate("/");
    }

    // useEffect qui va appeler la fonction permettant de récupérer le produit à mettre à jour
    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
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
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label"> Contenu de l'histoire</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Changer l'histoire"
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Mettre à jour</button>
                </div>

            </form>

            <form onSubmit={createFollow}>
                <div className="field">
                    <label className="label"> Donner un nom à votre suite </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nom du follow"
                        value={titleFollow}
                        onChange={(e) => setTitleFollow(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label"> Histoire </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Changer le cours de l'histoire"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Enregistrer</button>
                </div>
            </form>

        </div>
    )

}

export default EditProduct;