import React, { useState, useEffect } from 'react';

const terms = [
  'HTML', 'CSS', 'Tailwind', 'React', 'JavaScript', 
  'GitHub', 'Copilot', 'ChatGPT', 'Jest', 'package.json', 'API'
];

const getRandomTerms = (num) => {
  const shuffled = terms.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const TermsDisplay = ({ count }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [timer, setTimer] = useState(30);
  const [randomTerms, setRandomTerms] = useState(() => getRandomTerms(count));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      alert(`Time's up! You checked ${checkedItems.length} items.`);
    }
  }, [timer]);

  const handleCheck = (term) => {
    setCheckedItems((prevItems) =>
      prevItems.includes(term) ? prevItems.filter((i) => i !== term) : [...prevItems, term]
    );
  };

  return (
    <div className="text-xl space-y-2">
      {randomTerms.map((term, index) => (
        <div key={index} style={{ textDecoration: checkedItems.includes(term) ? 'line-through' : 'none' }}>
          <input type="checkbox" onChange={() => handleCheck(term)} />
          {term}
        </div>
      ))}
    </div>
  );
};

export default TermsDisplay;