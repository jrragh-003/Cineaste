import React from "react";
import Display from "./Review_Display";
import { FaNoteSticky, FaHeart } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";

const Details = () => {
    const { title } = useParams();
    return (
        <div>
            <button class="bg-gray-200 text-gray-700 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md mt-24 ml-4 hover:bg-gray-500 hover:text-white" >
                <NavLink to={`/reviews/${title}/write`}>Add a Review</NavLink>
            </button>
            <button class="bg-gray-200 text-gray-700 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md mt-24 ml-4 hover:bg-gray-500 hover:text-white" >
                <NavLink to={'/'}>Go to Home</NavLink>
            </button>
            <Display />



        </div >
    );
}

export default Details;
