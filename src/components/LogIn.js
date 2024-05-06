import { useState } from "react";
import { FaEyeSlash , FaEye} from "react-icons/fa6";
import BgImage from "../utils/images/BgImage.jpeg";
import Bg1Image from '../utils/images/Bg1Image.jpeg'
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const [formData , setFormData] = useState({
        storeId: "",
        emp_Id : "",
        password : ""
    });

    const navigate = useNavigate();

    const [showPassword , setShowPawssword] = useState(false);

    const togglePassword = ()=>{
        setShowPawssword(!showPassword);
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData , [name]: value});
    }

    return (
        <>
        <img src={Bg1Image} className="w-full h-screen bg-cover"></img>
        <div className="w-4/5 absolute z-30 left-1/2 top-[5%] transform -translate-y-[5%] -translate-x-1/2 mx-auto p-8 flex items-center justify-center md:mt-40 mt-10 ">
           
            <form 
                onSubmit={(e)=> e.preventDefault()}
                className="max-w-[80%] md:h-[650px] md:w[30%] h-[65vh] p-8 bg-white shadow-xl rounded-lg grid grid-cols-2 gap-4"
            >
                <img src={Bg1Image} alt="img"  
                className="w-full h-full object-cover"></img>

                <div>
                <h2 className="text-3xl my-6 text-center">Pi Cafe</h2>
                <h3 className="text-2xl my-10 text-center font-bold">LOGIN</h3>
                <div className="divider my-4"></div>
                <div className="">
                    <div className="mb-10 ml-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Store ID</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="storeId"
                            placeholder="Store ID"
                            value={formData.storeId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-10 ml-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Employee ID</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="emp_Id"
                            placeholder="Employee ID"
                            value={formData.emp_Id}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-10 ml-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                       <div className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                       <input
                            className="w-[90%] outline-none"
                            type={showPassword? 'text': 'password'}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button onClick={togglePassword}> 
                            {showPassword ? < FaEye/> : <FaEyeSlash/> }
                        </button>
                       </div>
                    </div>

                    <div className="flex justify-center my-10">
                        <button
                            className="bg-[#774936] hover:bg-[#9D6B53] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={()=> {navigate('/posOptions')}}
                        >
                            LogIn
                        </button>
                    </div>
                </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default LogIn;
