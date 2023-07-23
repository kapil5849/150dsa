import React from 'react';
import '../styles/faq.css';

const FAQ = ({ question, answer, index, currentIndex, toggleFAQ }) => {
  const isOpen = index === currentIndex;

  const handleClick = () => {
    toggleFAQ(index);
  };

  return (
    <div className="faq-container">
      <div className="faq-question" onClick={handleClick}>
        <h3 className={`faq-question-text ${isOpen ? 'open' : ''}`}>
          {question}
        </h3>
        <span className={`faq-toggle-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQ;

