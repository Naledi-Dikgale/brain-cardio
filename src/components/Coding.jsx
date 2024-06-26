import React, { useState, useEffect } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import CustomModal from './Modal';

Modal.setAppElement('#root');

const terms = [
  'HTML', 'CSS', 'Tailwind', 'React', 'JavaScript', 
  'GitHub', 'Copilot', 'ChatGPT', 'Jest', 'package.json', 'API',
  'JSX', 'React Router', 'Redux', 'Context API', 'Next.js', 'Create React App',
  'React Hooks', 'PropTypes', 'Rails', 'Ruby on Rails',
  'RSpec', 'Capybara', 'Webpack', 'Sass',
  'PostCSS', 'Bootstrap', 'Material-UI', 'Emotion',
  'useState', 'useEffect', 'useContext', 'useReducer', 'useMemo', 'useCallback', 'Rails API',
  'Local Storage'
];

const getRandomTerms = (num) => {
  const shuffled = terms.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Coding = ({ count }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [timer, setTimer] = useState(30);
  const [randomTerms, setRandomTerms] = useState(() => getRandomTerms(count));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

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
    setCheckedItems([]);

    setForceUpdate(Date.now());
  };

  return (
    <div className="text-xl space-y-2 flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-300 via-purple-400 to-violet-600">
      <CustomModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} checkedItems={checkedItems} />
      <div className="absolute top-2 left-2" style={{ color: 'blue' }}>
        <ImArrowLeft onClick={() => navigate(-1)} />
      </div>
      <div className="bg-lime-300 bg-opacity-50 text-blue-600 rounded px-12 py-4 text-2xl font-bold" style={{ textShadow: '-1px 0 lime, 0 1px lime, 1px 0 lime, 0 -1px lime' }}>
        Timer: {timer}
      </div>
      {randomTerms.map((term, index) => (
        <div key={index} style={{ textDecoration: checkedItems.includes(term) ? 'line-through' : 'none' }}>
          <input type="checkbox" onChange={() => handleCheck(term)} checked={checkedItems.includes(term)} />
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

export default Coding;
