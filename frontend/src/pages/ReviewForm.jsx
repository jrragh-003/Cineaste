import React, { useState, useContext } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
const ReviewForm = () => {
    const { user, dispatch } = useContext(Context);

    const { title } = useParams();

    let navigate = useNavigate();

    const [formdata, setFormData] = useState({
        name: user.name,
        phoneNumber: user.phoneNumber,
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
            title: title, // Include the movie title
            name: user.name,
            phoneNumber: user.phoneNumber,
            review: formdata.review
        };

        try {
            const response = await axios.post('/api/writeReview', dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log('Review successfully submitted');
                console.log(response.data); // Axios response.data is equivalent to response.json()
                navigate(`/reviews/${title}`);
            } else {
                console.error('Error submitting review:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting review:', error.message);
        }
    };



    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen light">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Cineaste</h2>

                    <form method="POST" className="flex flex-col" onSubmit={handleSubmit}>
                        <input placeholder="Enter your Name" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="text" value={user.name || ""} name="name" onChange={changeHandler} />
                        <input placeholder="Enter Phone Number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="text" value={user.phoneNumber || ""} name="phoneNumber" onChange={changeHandler} />
                        <textarea id="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" placeholder="Write your thoughts here..." value={formdata.review} name="review" onChange={changeHandler} ></textarea>
                        <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-gray-500 hover:text-white transition ease-in-out duration-150 " type="submit" >Add your Review</button>
                    </form>


                </div>
            </div>

        </div >
    )
}
export default ReviewForm
