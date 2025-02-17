import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Trips from './Trips';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate a 2 second loading time
    }, []);

    return (
        <div className="app">
            {loading ? <Loading /> : <Trips />}
        </div>
    );
};

export default App;
