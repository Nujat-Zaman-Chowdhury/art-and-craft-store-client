import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";



//   const newItem = {name,email,image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus}
const MyArtCraftList = () => {
   const {user} = useContext(AuthContext) || {};
   const [crafts,setCrafts] = useState([]);
   const [filteredCrafts,setFilteredCrafts] = useState([]);

    useEffect(()=>{
        fetch(`https://art-and-craft-store-server-six.vercel.app/crafts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCrafts(data)
            setFilteredCrafts(data)
        })

    },[setCrafts,user?.email])


    const handleFilter = value =>{
        console.log(value);
        if(value === 'yes'){
            const re = crafts.filter(craft=>craft.customization === value)
            setFilteredCrafts(re)
        }
        else if(value === 'no'){
            const re = crafts.filter(craft=>craft.customization === value)
            setFilteredCrafts(re);
        }
        else{
            setFilteredCrafts(crafts)
        }
    }

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-and-craft-store-server-six.vercel.app/crafts/${user.email}/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your Crafts item has been deleted.",
                        icon: "success"
                });
                    }
                    const remaining = crafts.filter(craft=>craft._id !== _id )
                    setCrafts(remaining)
                    setFilteredCrafts(remaining);
                })
              
            }
          });
    }

    return (
        <div className="my-10">
          <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Art and Crafts - Artisanal Crafts</title>
                <link rel="canonical" href="http://mysite.com//" />
            </Helmet>
            </HelmetProvider>
            <h2 className="text-center text-2xl font-lato font-bold mb-5">My Art and Craft List</h2>
            {/* dropdown */}

            <div className=" flex justify-center items-center">
            <details className="dropdown">
            <summary className="m-1 btn bg-transparent border-orange-400 text-[#333]">Customization</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>handleFilter('yes')}><a>Yes</a></li>
                <li onClick={()=>handleFilter('no')}><a>No</a></li>
            </ul>
            </details>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
            {
                filteredCrafts.map(craft=>(
                    <Card key={craft._id} className="w-full  shadow-lg " >
      <CardHeader floated={false} color="blue-gray">
        <div className="flex justify-center py-4 h-[300px]">
        <img
          src={craft.image}
          className="rounded-md w-[250px] object-center  object-cover"
          alt="ui/ux review check"
        />
        </div>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody className="flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5"  className="font-bold font-lato text-[#333] text-xl md:text-2xl">
            {craft.itemName}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-600"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {craft.rating}
          </Typography>
        </div>
        <div className="text-xl">
        <div className="">
        <Typography className="text-[#333] opacity-60">
          {craft.shortDescription}
        </Typography>
        </div>
        <Typography color="gray">
         <span className="font-semibold text-orange-400"> Price: </span>{craft.price}
        </Typography>
        <Typography color="gray">
        <span className="font-semibold text-orange-400"> Customization: </span> {craft.customization}
        </Typography>
        <Typography color="gray">
        <span className="font-semibold text-orange-400"> Stock Status: </span> {craft.stockStatus}
        </Typography>
        </div>
            
        
        
      </CardBody>
      <div className="flex flex-grow justify-center gap-4  my-4 items-end">
       
        <Link to={`/updateCraft/${craft._id}`} className="btn border border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-white">Update</Link>
        
        <button onClick={()=>handleDelete(craft._id)} className="btn border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white">Delete</button>
       </div>
    </Card>
    
                ))
            }
            </div>
        </div>
    );
};

export default MyArtCraftList;