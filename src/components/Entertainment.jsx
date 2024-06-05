import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import CustomModal from './Modal';

Modal.setAppElement('#root');

const terms = [
  'Movie', 'Music', 'Theatre', 'Dance', 'Art', 
  'Television', 'Radio', 'Book', 'Magazine', 'Newspaper',
  'The Lion King', 'Toy Story', 'Finding Nemo', 'Shrek', 'Frozen',
  'Despicable Me', 'Moana', 'The Incredibles', 'Up', 'Zootopia',
  'America\'s Got Talent', 'The Voice', 'American Idol', 'Britain\'s Got Talent', 'The X Factor',
  'Dancing with the Stars', 'So You Think You Can Dance', 'The Masked Singer', 'MasterChef', 'Top Chef',
  'Beyoncé', 'Taylor Swift', 'Brad Pitt', 'Angelina Jolie', 'Tom Cruise',
  'Scarlett Johansson', 'Leonardo DiCaprio', 'Jennifer Lawrence', 'Dwayne Johnson',
  'Ariana Grande', 'Ed Sheeran', 'Emma Watson'
];


const getRandomTerms = (num) => {
  const shuffled = terms.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Entertainment = ({ count }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [timer, setTimer] = useState(30);
  const [randomTerms, setRandomTerms] = useState(() => getRandomTerms(count));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setModalIsOpen(true);
    }
  }, [timer]);

  const handleCheck = (term) => {
    setCheckedItems((prevItems) =>
      prevItems.includes(term) ? prevItems.filter((i) => i !== term) : [...prevItems, term]
    );
  };

  const handleNext = () => {
    setTimer(30);
    setRandomTerms(getRandomTerms(count));
  };

  return (
    <div className="text-xl space-y-2 flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-300  via-purple-400 to-violet-600 ">
      <CustomModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} checkedItems={checkedItems} />
      <div className="absolute top-2 left-2"
      style={{color: 'blue'}}
      >
        <IoArrowBack onClick={() => navigate(-1)} />
      </div>
      <div className="bg-lime-300 bg-opacity-50 text-blue-600 rounded px-12 py-4 text-2xl font-bold" style={{ textShadow: '-1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime'}}>
        Timer: {timer}
      </div>
      {randomTerms.map((term, index) => (
        <div key={index} style={{ textDecoration: checkedItems.includes(term) ? 'line-through' : 'none' }}>
          <input type="checkbox" onChange={() => handleCheck(term)} />
          {term}
        </div>
      ))}
      <motion.button onClick={handleNext} className="bg-white text-blue-500 px-6 py-3 rounded-full text-xl font-bold"
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Entertainment;