
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("https://art-and-craft-store-server-six.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);




  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl text-orange-500 font-lato font-bold text-center mb-6">Explore the World of Art & Craft Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-0">
        {categories.map((category) => (
          <Link to={`/subcategories/${category.subcategory_name}`}

            key={category._id}
            className="p-6 rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-900 cursor-pointer"
          >
            <img
              src={category.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-md text-center mb-2" >
              <h2 className=" block text-base md:text-xl font-medium tracking-widest uppercase dark:text-orange-500">
                {category.subcategory_name}
              </h2>
              </div>
              <span className="text-base font-lato font-semibold tracking-wide mt-2">
                {category.origins.slice(0,100)}
              </span>
            </div>
            <p className="dark:text-gray-800">
           {category.key_elements.slice(0,100)}
            </p>
              <small className="text-orange-500">Read more</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
