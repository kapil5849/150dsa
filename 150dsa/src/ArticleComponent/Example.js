import React from 'react';
import './ArticleComponentCSS/Example.css'

const Example = ({ title, description, code }) => {
  return (
    <div className="example-container">
      <h3 className="example-title">{title}</h3>
      <p className="example-description">{description}</p>
      <code className="example-code">{code}</code>
    </div>
  );
};

export default Example;
