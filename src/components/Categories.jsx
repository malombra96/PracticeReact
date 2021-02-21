import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categoriies = ({children}) => (
    <div className = "categories">
        <h3 className="categories__title">La Lista</h3>
        {children}
    </div>
);  

export default Categoriies;