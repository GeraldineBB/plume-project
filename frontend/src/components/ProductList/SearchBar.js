import React, {useState} from "react";

const SearchBar = ({setSearchTerms}) => {


    return (

        <div className="searchBar">

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