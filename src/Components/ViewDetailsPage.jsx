
import { useLoaderData } from "react-router-dom";


const ViewDetailsPage = () => {
    const loadedCraft = useLoaderData();
    const{name,email,image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus} = loadedCraft;
   
    return (
        <div className="my-10 container mx-auto">
            <h2 className="font-semibold text-center my-6 md:text-2xl">Details of <span className="font-lato text-orange-400">{subcategory}</span></h2>
            <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-3 items-center">
            
                <div className="border-2 border-orange-400 rounded w-1/2">
                    <img className="h-[100vh] w-full object-cover object-center" src={image} alt="" />
                </div>
                <div className="w-1/2 bg-[#F9FAFB] p-5">
                    <div className="bg-white p-3">
                        <ul>
                            <li className="font-lato mt-3 font-bold text-lg">User: <span className="text-orange-500 font-medium">{name}</span> </li>
                            <li className="font-lato mt-3 font-bold text-lg">Email: <span className="text-orange-500 font-medium"> {email}</span></li>
                        </ul>
                    </div>
                    <hr className="my-3 border border-orange-300 w-full"/>
                    <div className="bg-white shadow-sm p-4">
                        <h4 className="text-center font-workSans bg-orange-50 rounded p-2 w-[300px] mx-auto text-xl">Subcategory: <span>{subcategory}</span></h4>
                        <div className="mt-6">
                            <p><span className="text-orange-400 font-lato font-semibold my-3">Item name:</span> {itemName}</p>
                            <p><span className="text-orange-400 font-lato font-semibold my-3">Price:</span> {price}</p>
                            <p><span className="text-orange-400 font-lato font-semibold my-3">Rating:</span> {rating}</p>
                            <div className="flex flex-col gap-3 md:flex-row my-3">
                                <div className="bg-blue-300 p-2 rounded shadow text-white font-semibold cursor-pointer">
                                    <p>Customization: {customization}</p>
                                </div>
                                <div className="bg-lime-300 p-2 rounded shadow text-white font-semibold cursor-pointer">
                                    <p>Processing Time: {processingTime}</p>
                                </div>
                                <div className="bg-red-300 p-2 rounded shadow text-white font-semibold cursor-pointer">
                                    <p>Stock Status: {stockStatus}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p><span className="text-orange-400 font-lato font-semibold my-2">Description:</span> {shortDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsPage;