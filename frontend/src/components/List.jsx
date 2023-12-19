import React, { useState } from "react";
import { FaHeart, FaTicket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from 'axios'
const List = (props) => {

    async function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }



    async function displayRazorpay() {
        try {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?');
                return;
            }

            const data = await axios.post('/api/razorpay');

            console.log(data.data);

            const options = {
                key: "rzp_test_w5gM0MlnOtBwFl",
                currency: data.data.currency,
                amount: data.data.amount.toString(),
                order_id: data.data.id,
                name: 'Donation',
                description: 'Thank you for booking the tickets...',
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature);
                },
                prefill: {
                    name: "Cineaste",
                    email: 'cineaste@gmail.com',
                    phone_number: '9899999999'
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Error initiating Razorpay:', error);
            // Handle error (e.g., show an alert or display an error message to the user)
        }
    }

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

                    <button
                        className="text-lg lg:text-sm font-bold py-2 px-4 rounded text-gray-700 bg-gray-200 hover:bg-gray-500 hover:text-white"
                        onClick={() => displayRazorpay()}// Call the displayRazorpay function on click
                    ><FaTicket /> </button>

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
