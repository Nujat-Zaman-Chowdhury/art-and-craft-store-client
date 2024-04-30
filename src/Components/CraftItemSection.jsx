import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CraftItemSection = () => {
	const [CraftItems,setCraftItems] = useState([])
	useEffect(()=>{
		fetch('http://localhost:5000/crafts')
		.then(res=>res.json())
		.then(data=>{
			setCraftItems(data)
		})
	},[])
    return (
        <div className="my-10 md:my-20 container mx-auto px-2 lg:px-0">
            <div className="text-center mt-10 ">
                <h2 className="text-2xl md:text-4xl text-orange-500 font-lato font-bold text-center">Explore Our Craft Items</h2>
                <p className="text-[#333] text-base md:text-xl font-workSans text-center mt-3">Browse through our collection below and click on <span className="text-orange-400">View Details</span> to uncover the secrets behind these exquisite treasures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-10 md:px-12 font-lato">
			{
				CraftItems.slice(0,6).map(craftItem=>(
					<div key={craftItem._id} className="card   shadow-xl bg-slate-100 border border-orange-200">
					<figure className="px-10 py-10 ">
						<img src={craftItem.image} alt="" className="rounded-xl w-full h-[280px] lg:h-[300px] object-cover object-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" />
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">{craftItem.subcategory.toUpperCase()}</h2>
						<p>{craftItem.itemName}</p>
						<div className="card-actions">
						<Link to={`/viewDetails/${craftItem._id}`}><button className="btn bg-orange-400 hover:bg-orange-500 text-white">View Details</button></Link>
						</div>
					</div>
					</div>
				))
			}
			</div>
			</div>
		);
};

export default CraftItemSection;