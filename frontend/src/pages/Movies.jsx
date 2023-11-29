import React from 'react'
import { useState } from 'react';
import List from '../components/List';


import Search from '../components/Search'
const Movies = () => {

    const [query, setQuery] = useState('')


    const search =
        [

            {
                "Title": "Oppenheimer",
                "Year": "2023",
                "Rated": "R",
                "Released": "21 Jul 2023",
                "Runtime": "180 min",
                "Genre": "Biography, Drama, History",
                "Director": "Christopher Nolan",
                "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
                "Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
                "Plot": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
                "Language": "English",
                "Country": "United States, United Kingdom",
                "Awards": "2 wins & 1 nomination",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
                "Type": "Movie"
            },
            {
                "Title": "Breaking Bad",
                "Year": "2008–2013",
                "Rated": "TV-MA",
                "Released": "20 Jan 2008",
                "Runtime": "49 min per Episode",
                "Genre": "Crime, Drama, Thriller",
                "Director": "N/A",
                "Writer": "Vince Gilligan",
                "Actors": "Bryan Cranston, Aaron Paul, Anna Gunn",
                "Plot": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
                "Language": "English",
                "Country": "United States",
                "Awards": "Won 16 Primetime Emmys. 156 wins & 247 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_SX300.jpg",
                "Type": "TV-Show"

            },
            {
                "Title": "Nayakan",
                "Year": "1987",
                "Rated": "Not Rated",
                "Released": "21 Oct 1987",
                "Runtime": "145 min",
                "Genre": "Crime, Drama",
                "Director": "Mani Ratnam",
                "Writer": "Balakumaran, Rajasri, Mani Ratnam",
                "Actors": "Kamal Haasan, Saranya Ponvannan, Delhi Ganesh",
                "Plot": "A common man's struggles against a corrupt police force put him on the wrong side of the law. He becomes a don, who is loved and respected by many, but his growing power and influence exact a heavy toll.",
                "Language": "Tamil",
                "Country": "India",
                "Awards": "6 wins & 1 nomination",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzEyZTFmZTItYWU2My00ZWZkLTg2NWMtMTEwYmM5YzFmNzFhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
                "Type": "Movie"
            },
            {
                "Title": "The Godfather",
                "Year": "1972",
                "Rated": "R",
                "Released": "24 Mar 1972",
                "Runtime": "175 min",
                "Genre": "Crime, Drama",
                "Director": "Francis Ford Coppola",
                "Writer": "Mario Puzo, Francis Ford Coppola",
                "Actors": "Marlon Brando, Al Pacino, James Caan",
                "Plot": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
                "Language": "English",
                "Country": "United States",
                "Awards": "Won 3 Oscars. 30 wins & 31 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Type": "Movie"
            },


            {
                "Title": "Jailer",
                "Year": "2023",
                "Rated": "N/A",
                "Released": "10 Aug 2023",
                "Runtime": "168 min",
                "Genre": "Action, Comedy, Crime",
                "Director": "Nelson Dilipkumar",
                "Writer": "Nelson Dilipkumar",
                "Actors": "Rajinikanth, Mohanlal, Shivarajkumar",
                "Plot": "A retired jailer goes on a manhunt to find his son's killers. But the road leads him to a familiar, albeit a bit darker place. Can he emerge from this complex situation successfully?",
                "Language": "Tamil",
                "Country": "India",
                "Awards": "N/A",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzFkNmZkMTctYjRhMS00ODZiLWFlNjQtZmZmN2IzMDJlNmVkXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_SX300.jpg",
                "Type": "Movie"
            },
            {
                "Title": "Friends",
                "Year": "1994–2004",
                "Rated": "TV-14",
                "Released": "22 Sep 1994",
                "Runtime": "22 min per Episode",
                "Genre": "Comedy, Romance",
                "Director": "N/A",
                "Writer": "David Crane, Marta Kauffman",
                "Actors": "Jennifer Aniston, Courteney Cox, Lisa Kudrow",
                "Plot": "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
                "Language": "English",
                "Country": "United States",
                "Awards": "Won 6 Primetime Emmys. 78 wins & 231 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
                "Type": "TV-Show"

            },
            {
                "Title": "Paramathma",
                "Year": "2011",
                "Rated": "N/A",
                "Released": "06 Oct 2011",
                "Runtime": "N/A",
                "Genre": "Romance",
                "Director": "Yograj Bhat",
                "Writer": "Yograj Bhat, Duniya Soori",
                "Actors": "Puneeth Rajkumar, Aindrita Ray, Deepa Sannidhi",
                "Plot": "Param (Puneeth Rajakumat), son of heart specialist Jayanth, is eager to know many things in life. He keeps shuffling from one place to another. A gold medalist in Bachelor of Science takes six attempts to complete his Master degre...",
                "Language": "Kannada",
                "Country": "India",
                "Awards": "7 nominations",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMWM3OTBjZDAtMjkyMS00MmIxLTliZjgtZTdmYTlmMDlhY2VhXkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_SX300.jpg",
                "Type": "Movie"
            },
            {
                "Title": "Kannur Squad",
                "Year": "2023",
                "Rated": "N/A",
                "Released": "28 Sep 2023",
                "Runtime": "161 min",
                "Genre": "Action, Crime, Drama",
                "Director": "Roby Varghese Raj",
                "Writer": "Rony David, Muhammed Shafi",
                "Actors": "Mammootty, Kishore Kumar G., Vijayaraghavan",
                "Plot": "The gripping saga of a police officer and his team, their challenging journey to nab a criminal gang across the country. Further, it shows how he leads his team towards triumph, amidst professional uncertainties in this gripping d...",
                "Language": "Malayalam",
                "Country": "India",
                "Awards": "N/A",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTMxZTQ1ZmEtOWM3Ny00MGQzLTgyMjgtZGMzNDM0YjVhZjMzXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
                "Type": "Movie"
            },

            {
                "Title": "Lucifer", "Year": "2019", "Rated": "Not Rated", "Released": "28 Mar 2019", "Runtime": "175 min", "Genre": "Action, Crime, Drama", "Director": "Prithviraj Sukumaran", "Writer": "Murali Gopy", "Actors": "Mohanlal, Vivek Oberoi, Manju Warrier", "Plot": "A political Godfather dies and a lot of thieves dressed up as politicians took over the rule. Question arises regarding the successor of the God, unfolding few names, along with the God's most beloved angel, Lucifer.", "Language": "Malayalam", "Country": "India", "Awards": "13 wins & 1 nomination", "Poster": "https://m.media-amazon.com/images/M/MV5BZGY2NzRkNmUtYjUzZS00ZDkxLTkxN2EtNDI2NjFiOGY3OGM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
                "Type": "Movie"

            },
            {
                "Title": "Kantara",
                "Year": "2022",
                "Rated": "Not Rated",
                "Released": "30 Sep 2022",
                "Runtime": "148 min",
                "Genre": "Action, Adventure, Drama",
                "Director": "Rishab Shetty",
                "Writer": "Shanil Guru, Anirudh Mahesh, Sham Prasad",
                "Actors": "Rishab Shetty, Kishore Kumar G., Achyuth Kumar",
                "Plot": "When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.",
                "Language": "Kannada",
                "Country": "India",
                "Awards": "12 wins & 8 nominations",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjQyNGI5OWEtZjI1Yy00NDVjLWE4MTAtMzRlNzU1NzM2OGVkXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_SX300.jpg",
                "Type": "Movie"
            },



        ]


    // Update searchQuery state as the user types
    const [filteredSearch, setFilteredSearch] = useState(search);
    const handleInputChange = (event) => {
        setQuery(event.target.value);
        // console.log(event.target.value)
        let filteredResults;

        if (event.target.value === '')
            filteredResults = search;
        else {
            filteredResults = search.filter((item) =>
                item.Title.toLowerCase().includes(query.toLowerCase()))
        }

        setFilteredSearch(filteredResults);


    };

    return (
        <div>
            <div className="mt-20">
                <Search onChange={handleInputChange} />
            </div>
            <div className="flex flex-wrap -mx-4">
                {filteredSearch.map((s) => (
                    <div key={s.imdbID} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <List title={s.Title} year={s.Year} Poster={s.Poster} runtime={s.Runtime} genre={s.Genre} language={s.Language} director={s.Director} type={s.Type} date={s.Released} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Movies
