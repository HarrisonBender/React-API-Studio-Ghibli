import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Vehicles() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/Vehicles")
            .then(res => res.json())
            .then(vehicles => setVehicles(vehicles))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Vehicles</h1>
            <div className="container">
                
                    {vehicles.map(vehicles => (
                        <div key={vehicles.id} className="card my-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                               
                                <h5 className="card-title">{vehicles.name}</h5>
                                <h6 className="card-subtitle mb-2">Description: {vehicles.description}</h6>
                                <h6 className="card-subtitle mb-2">Class: {vehicles.class}</h6>
                                <h6 className="card-subtitle mb-2">Length: {vehicles.length}</h6>
                            
                        
                            </div>
                        </div>
                    ))}
                
            </div>
        </>
    )
}