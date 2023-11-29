import React, { useState } from "react";
import Details from "./Details";
import { FaHeart } from "react-icons/fa6";
import { LuFilm } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const List = (props) => {

    return (

        <div className="ml-28">
            <div
                class="w-72 bg-white rounded border-t-8 border-gray-400 px-4 py-5 flex flex-col justify-around shadow-md mb-10 hover:shadow-lg"
            >
                <div class="md:flex-shrink-0">
                    <img class="md:w-56 mt-30 ml-4"
                        src={props.Poster}
                        alt="A Quiet Place movie poster" />
                </div>
                <p class="text-lg font-bold font-sans mt-4">{props.title}</p>
                <span class="movie--year text-xl lg:text-sm lg:mb-4 mt-3">Runtime : {props.runtime}</span>
                <span class="movie--year text-xl lg:text-sm lg:mb-4">Genre : {props.genre}</span>
                <span class="movie--year text-xl lg:text-sm lg:mb-4">Language : {props.language}</span>
                <span class="movie--year text-xl lg:text-sm lg:mb-4">Director : {props.director}</span>
                <span class="movie--year text-xl lg:text-sm lg:mb-4">Type : {props.type}</span>

                <div class="py-3">
                    <p class="text-gray-400 text-sm mb-6">
                        {props.plot}
                    </p>
                </div>
                <div class="flex justify-between">
                    <LuFilm className=" text-2xl rounded text-gray-700 mt-1 hover:text-black" />

                    <div class="text-sm flex gap-2">
                        <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded text-gray-700 bg-gray-200 hover:bg-gray-500 hover:text-white" ><FaHeart /> </button>
                        <NavLink to={`/reviews/${props.title}`}>
                            <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-white">Show Reviews</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default List;
