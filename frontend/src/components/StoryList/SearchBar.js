import React from "react";

const SearchBar = ({setSearchTerms}) => {


    return (

        <div className="searchBar">
            <img className ="searchBar__img" src={`${process.env.PUBLIC_URL}/assets/casual-book.png`} width={150}/>

            <h1 className="searchBar__title">Créer votre propre histoire</h1>
            <div className="is-flex column is-half is-offset-one-quarter">
                <input 
                className="input"
                type="text" 
                placeholder="Rechercher une histoire" 
                onChange= { (e) => setSearchTerms(e.target.value)} />
                {/* <button className="button">Lancer</button> */}
            </div>
            

        </div>
    )

}

export default SearchBar; 