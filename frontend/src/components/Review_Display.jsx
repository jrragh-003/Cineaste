import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegTrashCan, FaPencil } from "react-icons/fa6";
import { Context } from "../../context/Context";
import axios from "axios";

const Display = () => {
    const { user, dispatch } = useContext(Context);
    const { title, id } = useParams();
    const [review, setReview] = useState([])
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState("")
    let navigate = useNavigate();

    const getReviews = async () => {
        try {
            const response = await axios.get(`/api/getReviews/${title}`);

            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }

            const data = response.data;

            setReview(data.reviews);


            // console.log(data.reviews)

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching reviews:', error.message);
        }
    };

    const deleteReviews = async (_id) => {
        try {

            const response = await axios.delete(`/api/deleteReview/${title}/${_id}`);
            console.log(response.status)
            if (response.status === 202) {
                console.log("Deleting")


                // Review deleted successfully, you might want to refresh the reviews
                setReview(prevReviews => prevReviews.filter(review => review._id !== _id));

            } else {
                throw new Error('Failed to delete review');

            }
            console.log("Successfuly deleted ")
        } catch (error) {
            console.error('Error deleting review:', error.message);

        }

    };

    useEffect(() => {
        getReviews();
    }, [display, title]);

    if (loading) {


        <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        </div>

    }

    if (review === null)
        return <div className="text-center">No data available</div>;

    return (
        <div>
            {review && review.length > 0 ? (
                <div className="flex flex-wrap mt-4 ml-6 gap-4">
                    {review.map((r) => (
                        <div key={r._id} className="w-72 bg-white rounded border-t-8 border-gray-400 px-4 py-5 shadow-md">
                            <div className="text-lg font-bold capitalize rounded-md mb-4">
                                {r.title} - {r.name}
                            </div>
                            <div className="rounded-md mb-5">
                                {r.review}
                            </div>
                            <div className="button-container flex justify-evenly mt-2">
                                <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-gray-200 text-gray-700 mt-6 hover:bg-gray-500 hover:text-white">
                                    <FaHeart />
                                </button>

                                {user.name === r.name ? (
                                    <>
                                        <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-gray-200 text-gray-700 mt-6 hover:bg-gray-500 hover:text-white" onClick={() => deleteReviews(r._id)}>
                                            <FaRegTrashCan />
                                        </button>

                                        <NavLink to={`/reviews/${title}/edit/${r._id}`}>
                                            <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-gray-200 text-gray-700 mt-6 hover:bg-gray-500 hover:text-white">
                                                <FaPencil />
                                            </button>
                                        </NavLink>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">No data available</div>
            )}
        </div>
    );
}

export default Display
