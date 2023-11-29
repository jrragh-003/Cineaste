import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
const SignIn = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        try {
            const res = await axios.post('/api/login', {
                // name: userRef.current.value,
                // password: passwordRef.current.value
                email: userRef.current.value,
                password: passwordRef.current.value



            })

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        }
        catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen light">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Cineaste</h2>

                    <form method="POST" className="flex flex-col" onSubmit={handleSubmit}>

                        <input placeholder="Enter username" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="text" ref={userRef} />
                        <input placeholder="Enter Password" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 transition ease-in-out duration-150" type="password" ref={passwordRef} />

                        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-gray-800 hover:text-white transition ease-in-out duration-150 " type="submit" disabled={isFetching}>Let's Go </button>
                    </form>


                </div>
            </div>

        </div >
    )
}

export default SignIn