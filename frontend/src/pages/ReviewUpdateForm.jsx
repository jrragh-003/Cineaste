import { FaHeart } from "react-icons/fa6";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

const UpdateReview = () => {

    const { title, id } = useParams();
    let navigate = useNavigate();

    const [formdata, setFormData] = useState({
        review: ""
    });


    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataToSend = {
            review: formdata.review
        };

        try {
            const response = await axios.patch(`/api/editReview/${title}/${id}`, dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Review successfully updates');
                console.log(response.data);
                navigate(`/reviews/${title}`);
            } else {
                console.error('Error updating review:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating review:', error.message);
        }
    };




    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen light">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Cineaste</h2>

                    <form method="PATCH" className="flex flex-col" onSubmit={handleSubmit}>

                        <textarea id="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" placeholder="Change your thoughts here..." name="review" onChange={changeHandler}></textarea>
                        <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-gray-200 text-gray-700" type="submit">Change your thought</button>
                    </form>


                </div>
            </div>

        </div >
    )
}

export default UpdateReview
