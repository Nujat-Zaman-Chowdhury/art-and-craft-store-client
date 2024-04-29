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
        <div className="my-20">
            <div className="text-center mt-10 ">
                <h2 className="text-2xl md:text-4xl text-orange-500 font-lato font-bold text-center">Explore Our Craft Items</h2>
                <p className="text-[#333]">Browse through our collection below and click on "View Details" to uncover the secrets behind these exquisite treasures.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 container mx-auto mt-10 px-12 font-lato">
			{
				CraftItems.slice(0,6).map(craftItem=>(
					<div key={craftItem._id} className="card w-96 bg-base-100 shadow-xl border border-orange-400">
					<figure className="px-10 pt-10">
						<img src={craftItem.image} alt="Shoes" className="rounded-xl w-full h-[250px] object-cover object-center" />
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