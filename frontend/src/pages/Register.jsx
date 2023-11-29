
import { useState } from "react";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhonenumber] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/api/register", {
                name,
                phoneNumber,
                email,
                password,
            });
            console.log(res.data)
            res.data && window.location.replace("/signin");
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen light">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Cineaste</h2>

                    <form method="POST" className="flex flex-col" onSubmit={handleSubmit}>
                        <input placeholder="Enter your Name" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="text" onChange={(e) => setName(e.target.value)} />
                        <input placeholder="Enter Phone Number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="text" onChange={(e) => setPhonenumber(e.target.value)} />
                        <input placeholder="Enter Mail" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="email" onChange={(e) => setEmail(e.target.value)} />
                        < input placeholder="Enter Password" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-gray-800 hover:text-white transition ease-in-out duration-150 " type="submit" >Register as a Cineaste </button>
                    </form>


                </div>
                {error && <span style={{ color: "black", marginTop: "10px" }}>Something went wrong!</span>}
            </div>

        </div >
    )
}

export default Register