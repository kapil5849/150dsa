import React from 'react';
import './ArticleComponentCSS/Heading.css';

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  const className = `heading heading-${level}`;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;




