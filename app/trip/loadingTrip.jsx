import React from 'react';

const categories = ['Forest', 'Mountains', 'Beach', 'City', 'Desert'];

const Category = ({ onSelectCategory }) => {
    return (
        <div className="categories">
            <h2>Select Categories</h2>
            {categories.map((category, index) => (
                <button key={index} onClick={() => onSelectCategory(category)}>{category}</button>
            ))}
        </div>
    );
};

export default Category;
