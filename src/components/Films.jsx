import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setFilms(films))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Films</h1>
            <div className="container">
                
                    {films.map(film => (
                        <div key={film.id} className="card my-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <h6 className="card-subtitle mb-2">{film.director}</h6>
                                <p className="card-text">{film.description.substring(0, 75)}...</p>
                                <Link to={`/films/${film.id}`} className="card-link">
                                    <button className="btn btn-sm btn-primary">See More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                
            </div>
        </>
    )
}