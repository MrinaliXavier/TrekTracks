// Trips.js
import React from 'react';

const trips = [
    { id: 1, destination: 'Galle', days: 7, cost: '1500' },
    { id: 2, destination: 'Galle', days: 10, cost: '2000' },
    { id: 3, destination: 'Galle', days: 5, cost: '1200' }
];

const Trips = () => {
    return (
        <div className="trips">
            <h2>Trip Plans</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.destination}</h3>
                        <p>Days: {trip.days}</p>
                        <p>Cost: {trip.cost}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Trips;
