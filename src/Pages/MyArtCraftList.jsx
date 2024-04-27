import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const MyArtCraftList = () => {
    const allCrafts = useLoaderData();
    const [crafts,setCrafts] = useState(allCrafts)
    // const {name,email,image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus} = craft;
    return (
        <div className="my-10">
            <h2 className=" text-center text-2xl font-lato font-bold mb-5">My Art and Craft List</h2>
            {/* dropdown */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                crafts.map(craft=>(
                    
                    <div key={craft._id} className="card py-5 shadow-xl bg-white">
                    <figure className="px-6 pt-10  w-[300px] h-[300px] mx-auto bg-orange-50 mb-3 overflow-hidden rounded shadow">
                        <img src={craft.image} alt="Shoes" className="rounded w-full h-full mx-auto object-cover " />
                    </figure>
                    <div className="p-4  text-base">
                        <div>
                            <h2><span className="text-orange-400 font-bold">Item Name: </span>{craft.itemName}</h2>
                            <p>Price: {craft.price}</p>
                            
                        </div>
                        <div className="">
                            <p>Rating: {craft.rating}</p>
                            <p>Customization: {craft.customization}</p>
                            <p>Stock Status: {craft.stockStatus}</p>
                        </div>

                        
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-5">
                            <button className="btn  bg-orange-400 hover:bg-orange-500 text-white border-0">Update</button>
                            <button className="btn  bg-orange-400 hover:bg-orange-500 text-white border-0">Delete</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default MyArtCraftList;