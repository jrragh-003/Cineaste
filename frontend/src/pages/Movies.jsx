
import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Search from '../components/Search';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);


    const fetchData = async (e) => {
        try {


            const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=9ef2c3af`);
            const data = await response.json();
            if (data) {

                if (!movies.some((movie) => movie.Title === data.Title)) {
                    setMovies((prevMovies) => [...prevMovies, data]);
                }
            }
        } catch (error) {
            console.error('Error fetching data from OMDB API:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [movies]);


    const handleInputChange = (event) => {
        const userInput = event.target.value;
        setQuery(userInput);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query === '') {
            alert("Please enter a search query");
            return;
        }

        await fetchData();
    };



    return (
        <div>
            <div className="mt-20">
                <Search onChange={handleInputChange} onSearch={handleSearch} />
            </div>

            {
                movies && movies.length ? (
                    <div className="flex flex-wrap -mx-4">
                        {movies.map((movie) => (
                            movie.Title &&
                            <div key={movie.imdbID} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                <List
                                    title={movie.Title}
                                    year={movie.Year}
                                    Poster={movie.Poster}
                                    runtime={movie.Runtime}
                                    genre={movie.Genre}
                                    language={movie.Language}
                                    director={movie.Director}
                                    type={movie.Type}
                                    date={movie.Released}
                                />
                            </div>
                        ))}
                    </div>
                ) :
                    (
                        <div>
                            No data available
                        </div>
                    )

            }
        </div>

    );
};

export default Movies;
