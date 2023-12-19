import { BiSearchAlt } from "react-icons/bi";
const Search = ({ onChange, onSearch }) => {

    return (
        <div>
            <div className="flex items-center justify-center m-10">
                <div className="rounded-lg bg-gray-500 p-1">
                    <div className="flex">

                        <input type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" onChange={onChange} />
                        <input type="button" value="Search" className="bg-gray-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-gray-800 transition-colors" onClick={onSearch} />
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Search
