import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImArrowLeft } from "react-icons/im";
import { motion } from "framer-motion";



const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="text-xl space-y-2 flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-300  via-purple-400 to-violet-600 "
    style={{ backgroundImage: 'url(/category.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
     }}
    >
         <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(200, 191, 231, 0.3)',
        zIndex: 1,
      }}></div>
      <h1 className=" text-6xl text-violet-50 text-center font-tang font-bold w-[90vw]" 
      style={{ textShadow: '-1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime', position: 'relative', zIndex: 2}}
      >
        Select a Category
      </h1>
      <ul className="text-center" style={{ position: 'relative', zIndex: 2 }}
      >
        <motion.li onClick={() => navigate("/categories/coding")} className=" text-centre bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold m-4"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        >
          Coding
        </motion.li>
         <motion.li onClick={() => navigate("/category/animals")} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold m-4"
         whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
         whileTap={{ scale: 0.9 }}
         transition={{ type: "spring", stiffness: 300 }}
         >
          Animals
        </motion.li>
        <motion.li onClick={() => navigate("/category/cars")} className="bg-white text-blue-500 px-3 py-3 rounded-full text-xl font-bold m-4"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        >
          Cars
        </motion.li>
        <motion.li onClick={() => navigate("/category/entertainment")} className="bg-white text-blue-500 px-3 py-3 rounded-full text-xl font-bold m-4"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        >
          Entertainment
        </motion.li>
        <motion.li onClick={() => navigate("/category/other")} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}>
          Other
        </motion.li>
      </ul>

      <div className="absolute top-2 left-2"
      style={{color: 'blue', zIndex: 2 }}
      >
        <ImArrowLeft onClick={() => navigate(-1)} />
      </div>

    </div>
  );
};

export default Categories;