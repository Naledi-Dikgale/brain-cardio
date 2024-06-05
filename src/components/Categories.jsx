import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';


const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="text-xl space-y-2 flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-300  via-purple-400 to-violet-600 ">
      <h1 className=" text-6xl text-violet-50 text-center font-tang font-bold w-[90vw]" style={{ textShadow: '-1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime' }}
      >
        Select a Category
      </h1>
      <ul className="">
        <li onClick={() => navigate("/categories/coding")} className=" text-centre bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold m-4">
          Coding
        </li>
         <li onClick={() => navigate("/category/animals")} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold m-4">
          Animals
        </li>
        <li onClick={() => navigate("/category/cars")} className="bg-white text-blue-500 px-3 py-3 rounded-full text-xl font-bold m-4">
          Cars
        </li>
        <li onClick={() => navigate("/category/entertainment")} className="bg-white text-blue-500 px-3 py-3 rounded-full text-xl font-bold m-4">
          Entertainment
        </li>
        <li onClick={() => navigate("/category/other")} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold">
          Other
        </li>
      </ul>

      <div className="absolute top-2 left-2">
        <IoArrowBack onClick={() => navigate(-1)} />
      </div>

    </div>
  );
};

export default Categories;