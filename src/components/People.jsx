import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => setPeople(people))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>People</h1>
            <div className="container">
                
                    {people.map(people => (
                        <div key={people.id} className="card my-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                               
                                <h5 className="card-title">{people.name}</h5>
                                <h6 className="card-subtitle mb-2">Gender: {people.gender}</h6>
                                <h6 className="card-subtitle mb-2">Age: {people.age}</h6>
                                <h6 className="card-subtitle mb-2">Eye Color: {people.eye_color}</h6>
                                <h6 className="card-subtitle mb-2">Hair Color: {people.hair_color}</h6>
                        
                            </div>
                        </div>
                    ))}
                
            </div>
        </>
    )
}