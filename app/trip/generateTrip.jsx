import React from 'react';

const Plans = ({ plans }) => {
    return (
        <div className="plans">
            <h2>Trip Plans</h2>
            {plans.map((plan, index) => (
                <div key={index} className="plan">
                    <h3>Plan {index + 1}</h3>
                    <p>{plan}</p>
                </div>
            ))}
        </div>
    );
};

export default Plans;
