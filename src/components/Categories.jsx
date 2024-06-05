import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select a Category</h1>
      <ul>
        <li onClick={() => navigate("/categories/coding")}>Coding</li>
         <li onClick={() => navigate("/category/animals")}>Animals</li>
        <li onClick={() => navigate("/category/cars")}>Cars</li>
        <li onClick={() => navigate("/category/entertainment")}>Entertainment</li>
        <li onClick={() => navigate("/category/other")}>Other</li>
      </ul>
    </div>
  );
};

export default Categories;