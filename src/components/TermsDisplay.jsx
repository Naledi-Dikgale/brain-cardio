import React from 'react';

const terms = [
  'HTML', 'CSS', 'Tailwind', 'React', 'JavaScript', 
  'GitHub', 'Copilot', 'ChatGPT', 'Jest', 'package.json', 'API'
];

const getRandomTerms = (num) => {
  const shuffled = terms.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const TermsDisplay = ({ count }) => {
  const randomTerms = getRandomTerms(count);

  return (
    <div className="text-xl space-y-2">
      {randomTerms.map((term, index) => (
        <div key={index}>{term}</div>
      ))}
    </div>
  );
};

export default TermsDisplay;
