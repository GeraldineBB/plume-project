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

            <div className="items">
                {products.filter((product) => {
                    if (searchTerms == "") {
                        return product
                    } else if (product.title.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return product
                    }
                }).map((product, index) => (

                    <div className="story content" key={product.id}>
                
                        <h4> {product.title} </h4>
                        <p> {product.story.split("").splice(0, 120).join("")}...</p>
                        <Link to={`/edit/${product.id}`} className="button is-medium edition">Lire <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2Y5YjYwOSI+PHBhdGggZD0iTTg2LDE0LjMzMzMzYy0zOS41ODE1LDAgLTcxLjY2NjY3LDMyLjA4NTE3IC03MS42NjY2Nyw3MS42NjY2N2MwLDM5LjU4MTUgMzIuMDg1MTcsNzEuNjY2NjcgNzEuNjY2NjcsNzEuNjY2NjdjMzkuNTgxNSwwIDcxLjY2NjY3LC0zMi4wODUxNyA3MS42NjY2NywtNzEuNjY2NjdjMCwtMzkuNTgxNSAtMzIuMDg1MTcsLTcxLjY2NjY3IC03MS42NjY2NywtNzEuNjY2Njd6TTcxLjY2NjY3LDExOC4yNXYtNjQuNWw0MywzMi4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/></Link>

                    </div>

                ))}

            </div>



    )
}

export default ProductList; 