import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const newItem = {name,email,image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus}

const AllArtCraft = () => {
    const [allCrafts,setAllCrafts] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/crafts')
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setAllCrafts(data);
      })
    },[])
    return (
        <div className="container mx-auto my-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>User Email</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allCrafts.map((craft,index)=>(
          <tr key={craft._id}>
        <th>{index+1}</th>
        <td>{craft.itemName}</td>
        <td>{craft.subcategory}</td>
        <td>{craft.price}</td>
        <td>{craft.email}</td>
        <td><Link to={`/viewDetails/${craft._id}`}><button  className="btn text-orange-400 bg-transparent border-orange-500 hover:bg-transparent">View Details</button></Link></td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllArtCraft;