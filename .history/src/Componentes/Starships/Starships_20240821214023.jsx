import React, { useEffect, useState } from 'react';

const Starships = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        // API
        fetch('https://swapi.dev/api/starships/')
            .then(response => response.json())
            .then(data => setStarships(data.results));
    }, []);

    return (
        <div>
            <h2>Naves</h2>
            <ul>
                {starships.map(starship => (
                    <li key={starship.name}>
                        {starship.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Starships;