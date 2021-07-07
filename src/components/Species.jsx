import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Species() {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/Species")
            .then(res => res.json())
            .then(species => setSpecies(species))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Species</h1>
            <div className="container">
                
                    {species.map(species => (
                        <div key={species.id} className="card my-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                               
                                <h5 className="card-title">{species.name}</h5>
                                <h6 className="card-subtitle mb-2">Class: {species.classification}</h6>
                                <h6 className="card-subtitle mb-2">Eye Colors: {species.eye_colors}</h6>
                                <h6 className="card-subtitle mb-2">Hair Colors: {species.hair_color}</h6>
                                {/* <h6 className="card-subtitle mb-2">People: {species.people}</h6>
                                <h6 className="card-subtitle mb-2">Films: {species.films}</h6> */}
                        
                            </div>
                        </div>
                    ))}
                
            </div>
        </>
    )
}