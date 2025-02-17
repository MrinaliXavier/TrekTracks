
import React, { useState } from 'react';
import Category from './Category';
import Plans from './Plans';
import './tripDisplay.css';

const App = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [plans, setPlans] = useState(['', '', '']);

    const handleSelectCategory = (category) => {
        setSelectedCategories([...selectedCategories, category]);
    };

    const handleAddPlace = (index, place) => {
        const newPlans = [...plans];
        newPlans[index] = place;
        setPlans(newPlans);
    };

    return (
        <div className="app">
            <h1>Hello, User</h1>
            <Category onSelectCategory={handleSelectCategory} />
            <div className="add-place">
                <h2>Add place to plan</h2>
                {plans.map((plan, index) => (
                    <input 
                        key={index}
                        placeholder={`Plan ${index + 1}`}
                        value={plan}
                        onChange={(e) => handleAddPlace(index, e.target.value)}
                    />
                ))}
            </div>
            <Plans plans={plans} />
        </div>
    );
};

export default App;
