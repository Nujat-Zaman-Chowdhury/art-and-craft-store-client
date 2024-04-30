import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";




const SubCategories = () => {
    
    const [crafts, setCrafts] = useState([]);
    const { subcategory_name } = useParams();
    console.log(subcategory_name);

    useEffect(()=>{
fetch(`http://localhost:5000/crafts/subcategory/${subcategory_name}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setCrafts(data)
  });
    },[subcategory_name])

    return (
        <div>
            <h2 className="text-center text-2xl md:text-4xl mt-10">Total : {crafts.length}</h2>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                    crafts.map(craft=>(
                      <div key={craft._id} className="relative bg-gradient-to-r from-orange-400 to-orange-300 block p-4 border border-gray-100 rounded-lg lg:w-96 mx-auto mt-10">
                      <div className="flex justify-center">
                      <Link to={`/viewDetails/${craft._id}`}>
                      <button className="px-2 py-1 bg-white text-orange-400 border border-orange-200 font-semibold rounded hover:bg-orange-400 hover:text-white">View Details</button> 
                      </Link>
                      </div>
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                      <div className="my-4">
                          <div><img className="h-[250px] lg:h-[300px] w-full object-cover object-center" src={craft.image} alt="" /></div>
                          
                      </div>
                      <div className="flex flex-col justify-items-end">
                          <h2 className="text-slate-900 text-2xl font-bold py-2">{craft.subcategory}</h2>
                          <p className="text-gray-900 font-medium py-1">{craft.itemName}</p>
                          <hr className="border-white my-3"/>
                          <p className="text-slate-900 py-1">{craft.shortDescription}</p>
                      </div>
                      <div className="flex flex-col">
                            <p className="bg-transparent  text-slate-700 font-medium p-2">Price: {craft.price} </p>
                            <p className="bg-transparent  text-slate-700 font-medium p-2">Stock Status: {craft.stockStatus} </p>
                            <p className="bg-transparent  text-slate-700 font-medium p-2">Processing Time: {craft.processingTime} </p>
                            
                          </div>
                          <p className="bg-transparent  text-slate-700 font-medium p-2">Rating: {craft.rating} </p>
                    </div>
                    ))
                  }
                </div>
            </div>
        </div>
    );
};

export default SubCategories;