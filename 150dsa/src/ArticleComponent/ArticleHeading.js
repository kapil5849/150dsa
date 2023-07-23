import React from 'react';
import "./ArticleComponentCSS/ArticleHeading.css";


const ArticleHeading = ({ children }) => {
  return <h1 className="article-heading">{children}</h1>;
};

export default ArticleHeading;
