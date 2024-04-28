import { useEffect, useState } from "react";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">{categories.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category._id}
            className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 cursor-pointer"
          >
            <img
              src={category.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-md text-center" >
              <h2 className="block text-base md:text-xl font-medium tracking-widest uppercase dark:text-orange-500">
                {category.subcategoty_name}
              </h2>
              </div>
              <span className="text-xl font-semibold tracking-wide">
                {category.origins.slice(0,100)}...
              </span>
            </div>
            <p className="dark:text-gray-800">
              {category.key_elements.slice(0,100)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
