import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const{user} = useContext(AuthContext)
    const loadedCraft = useLoaderData();
    const {_id,email} = loadedCraft
    // console.log(loader);
    
    // // console.log(loaded);
    // const {_id,email,image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus} = loadedCraft;

    

    const handleUpdate = e =>{

        e.preventDefault();
        // const email = user?.email;
        const form = e.target;
        const image = form.image.value;
        const itemName = form.item_name.value;
        const subcategory = form.subcategory.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processing_time.value;
        const stockStatus = form.stock_status.value;
        const updatedItem = {image,itemName,subcategory,shortDescription,price,rating,customization,processingTime,stockStatus}
        // console.log(updatedItem);

        fetch(`http://localhost:5000/crafts/${email}/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedItem)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#FCFFE0] p-20">
        <h2 className="text-xl md:text-3xl font-extrabold font-lato text-center mb-10">Update Your Items</h2>
        <form onSubmit={handleUpdate}>

           {/* from row- imageurl and itemname*/}
          <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Image URL</span>
              </label>
              <label className="input-group">
                  <input type="url" name="image" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Image URL"/>
              </label>
          </div>
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Item Name</span>
              </label>
              <label className="input-group">
                  <input type="text" name="item_name" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Item Name"/>
              </label>
          </div>
          </div>

          {/* from row- subcategory and shortdescription*/}
          <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Subcategory Name</span>
              </label>
              <label className="input-group">
                  <select name="subcategory" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow">
                  <option value="" selected disabled hidden>Select</option>
                    <option value="embroidery">Embroidery</option>
                    <option value="knitting">Knitting & Crocheting</option>
                    <option value="quilling">Quilting</option>
                    <option value="breadwork">Beadwork</option>
                    <option value="tie_dyeing">Tie-Dyeing</option>
                    <option value="macrame">Macrame</option>
                    </select>
              </label>
          </div>
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Short Description</span>
              </label>
              <label className="input-group">
                  <input type="text" name="short_description" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Short Description"/>
              </label>
          </div>
          </div>

          {/* from row- price and rating*/}
          <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Price</span>
              </label>
              <label className="input-group">
                  <input type="number" min={0} name="price" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Price"/>
              </label>
          </div>
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Rating</span>
              </label>
              <label className="input-group">
                  <input type="number" min={0} max={5} name="rating" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Rating"/>
              </label>
          </div>
          </div>

          {/* from row- customization*/}
          <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Customization</span>
              </label>
              <label className="input-group">
                  <select name="customization" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Rating">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select>
              </label>
          </div>

          {/* from row- processingtime*/}
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Processing Time</span>
              </label>
              <label className="input-group">
                  <input type="text" name="processing_time" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow" placeholder="Processing Time"/>
              </label>
          </div>
          {/* from row- stock status*/}
          <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-lg">Stock Status</span>
              </label>
              <label className="input-group">
                  <select name="stock_status" className="p-3 rounded-md  w-full focus:outline-none border-0 bg-white shadow">
                  <option value="" selected disabled hidden>Status</option>
                    <option value="In stock">In Stock</option>
                    <option value="Made to order">Made To Order</option>
                    </select>
              </label>
          </div>
          </div>
         <div className="w-full mt-8 flex justify-center">
         <input type="submit" value="Update" className="btn  bg-orange-400 hover:bg-orange-500 border w-1/3 mx-auto text-white font-lato text-center"/>
         </div>
        </form>
      </div>
    );
};

export default UpdateCraft;