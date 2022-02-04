import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const ProductList = ({ searchTerms }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => {
                setProducts(res.data);
                console.log(products);
            })
            .catch((err) => console.error(err, 'erreur api'));

    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }

    return (

        <div className="container">
            <div className="column is-flex">
                {products.filter((product) => {
                    if (searchTerms == "") {
                        return product
                    } else if (product.title.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return product
                    }
                }).map((product, index) => (

                    <div className="story" key={product.id}>
                        <img src={process.env.PUBLIC_URL + `assets/${product.picture}`}
                        
                        height='200' width='200' />
                        <div> { product.title } </div>
                        <div> { product.story.split("").splice(0,120).join("") }...</div>
                        <Link to={`/edit/${product.id}`} className="button is-small is-info mr-2">Editer</Link>

                    

                    </div>




                ))}
            </div>


        </div>

    )
}

export default ProductList; 