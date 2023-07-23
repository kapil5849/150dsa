import React, { useState } from 'react'
import './App.css';
import NeonContainer from './component/NeonContainer';
import Footer from './component/Footer';
import Header from './component/Header';
import FAQ from './component/FAQ';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const toggleFAQ = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="neon bd-container">
      <Header />
      <NeonContainer />
      <div className="faq-containers">
        <header style={{color: 'white',fontSize:'24px', margin:'3px', marginBottom:'20px',}}>
        Frequently Asked Questions
        </header>
        <FAQ
          question="What is 150DSA?"
          answer="150DSA is a web app designed to help individuals practice and improve their data structures and algorithms skills. It provides a collection of 150 coding problems along with explanations and solutions."
          index={0}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
        <FAQ
          question="How can I use 150DSA?"
          answer="To use 150DSA, simply visit the website and navigate to the problem section. Each problem is categorized based on different data structures and algorithms topics. You can choose a problem, read the problem statement, and attempt to solve it using your preferred programming language."
          index={1}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
        <FAQ
          question="Is 150DSA suitable for beginners?"
          answer="Yes, 150DSA is suitable for beginners. It provides a gradual learning curve with problems categorized from easy to advanced levels. Beginners can start with the easier problems and gradually progress to more challenging ones."
          index={2}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
        <FAQ
          question="Are the solutions provided for each problem?"
          answer="Yes, 150DSA provides detailed solutions for each problem. After attempting a problem, you can refer to the solution section to understand different approaches and implementations."
          index={3}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
        <FAQ
          question="Can I track my progress on 150DSA?"
          answer="Currently, 150DSA does not have a built-in progress tracking feature. However, you can keep track of the problems you have solved manually or using external tools."
          index={4}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
        <FAQ
          question="Are there any discussions or forums for problem-solving?"
          answer="Currently, 150DSA does not have a dedicated discussion or forum section. However, you can engage in discussions and seek help from online coding communities or forums to discuss problem-solving approaches and clarifications."
          index={5}
          currentIndex={currentIndex}
          toggleFAQ={toggleFAQ}
        />
      </div>

      <Footer />
    </section>
  );
}

export default App

