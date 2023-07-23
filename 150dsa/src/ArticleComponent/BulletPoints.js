import React from 'react';
import './ArticleComponentCSS/BulletPoints.css';

const BulletPoints = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'object' ? (
            <>
              {item.item}
              {item.subItems && item.subItems.length > 0 && (
                <ul>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;
