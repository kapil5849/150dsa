import React from 'react';
import './Functions.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading';
import Predefined from '../../ArticleComponent/Predefined';
import Blockquote from '../../ArticleComponent/Blockquote';
import Paragraph from '../../ArticleComponent/Paragraph';
import Heading from '../../ArticleComponent/Heading';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import LineBreak from '../../ArticleComponent/LineBreak';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Example from '../../ArticleComponent/Example';

const Pattern = () => {
  return (
    <div className='function-container'>
      <ArticleHeading>Functions in C++</ArticleHeading>
      <div className='function-content'>
        <Predefined
          guidesLink="../"
          authorLink="https://twitter.com/kapil__vaishnav"
          authorName="Kapil Vaishnav"
          beginnerTag="Beginner Level"
          beginnerTagLink="#"
          smartContractsTag="150 DSA"  // make change last... 
          smartContractsTagLink="../"
          date="27 July 2023"
        >
          Understanding Functions in C++: A Comprehensive Guide
        </Predefined>
        <Blockquote>
          What is Functions ?
        </Blockquote>
        <Paragraph
          text="Functions are like building blocks in programming, helping us break complex tasks into smaller, manageable parts. 
         In C++, functions are essential for organizing code, making it easier to reuse and read. 
         This guide will take you through everything you need to know about functions in C++, using practical examples."
        />
        <Heading level={1}>Table of Contents</Heading>
        <BulletPoints
          items={['Introduction to Functions in cpp', 'Creating and Using Functions', 'Passing Data to Functions', 'Getting Data to Functions',
            {
              item: 'Different Types of Functions :',
              subItems: ['Functions for Doing Tasks', 'Functions that Use Data', 'Functions that Give Back Data', 'Functions that Call Themselves (Recursion)', 'Special Quick Functions (Inlines)']
            },
            'Making Functions More Flexible',
            'Managing Variables in Functions',
            'Handling Data: Copy or Share?',
            'Default Settings and Making Functions for Anything',
            'Lambdas: Small, Handy Functions',
            'Tips for Writing Great Functions',
            'Fixing Common Mistakes',
            'Real-Life Examples: Math, Text, and More',
            'Wrapping it Up: The Power of Functions in C++',
          ]}
        />
        <Heading level={2}>🌟 Introduction to Functions in C++</Heading>
        <Paragraph text="Functions are like the building blocks of programming, helping us break down big problems into smaller, manageable pieces. In C++, functions play a crucial role in creating well-organized code that's easy to reuse and understand."/> 
        <Paragraph text="In this section, we'll explore why functions are so important in C++ programming. We'll learn how they make our code better by promoting good practices and making it easier to handle. We'll cover the following main points:"/>
        <Heading level={3}>⏩ Understanding Functions</Heading>
        <Paragraph text="We'll get a clear idea of what functions are and how they help us organize our code into smaller parts. Functions make our programs more organized and easier to maintain."/>
        <Heading level={3}>⏩ Advantages of Using Functions</Heading>
        <Paragraph text="We'll see why using functions is beneficial in C++. They make our code easier to read and encourage us to reuse code, saving us time and effort."/>
        <Heading level={3}>⏩ Function syntax</Heading>
        <Paragraph text="We'll get familiar with how to create functions in C++. We'll learn how to name them, specify the information they need (parameters), and what they return."/>
        <Heading level={3}>⏩ Function Prototypes</Heading>
        <Paragraph text="We'll understand the concept of function prototypes, which allow us to call functions before we define them. This is useful when functions depend on each other."/>
        <Heading level={3}>⏩ The main() Function</Heading>
        <Paragraph text="We'll explore the special role of the `main()` function in C++. It's the starting point of our programs, and every C++ program needs it."/>
        <Heading level={3}>⏩ Calling Function</Heading>
        <Paragraph text="We'll learn how to use functions in our code. We'll see how to give them data to work with (arguments) and how they give us back results."/>
        <Heading level={3}>⏩ Basic Example</Heading>
        <Paragraph text="We'll see a simple example of a function in C++. This will show us how functions make our code more organized and easier to manage."/>
        <LineBreak/>
        <Paragraph text="By the end of this section, you'll have a strong grasp of the basics of functions in C++. You'll see how they help us handle complex tasks and make our programs more efficient and organized. This knowledge will be a great starting point for diving deeper into advanced functions concepts in the rest of the guide."/>
        <HorizontalRule/>
        <Heading level={2}>🌟 Creating and Using Functions</Heading>
        <Paragraph text="In this section, we'll dive into the world of functions and learn how to create and use them in C++. Functions act as essential building blocks, enabling us to break down complex tasks into smaller, manageable pieces. We'll cover the process of declaring, defining, and calling functions with practical examples."/>
        <Heading level={3}>⏩ Function Declaration</Heading>
        <Paragraph text="To make a function, we start by declaring it. It's like giving the function a blueprint, telling the compiler its name, what it returns, and what inputs (parameters) it needs."/>
        <Example
        title="For Example: "
        code="int addNumbers();  // Declaring a function named addNumbers that returns an integer and has no parameters"
        />
        
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
        <Heading level={2}>🌟</Heading>
        <HorizontalRule/>
      </div>

    </div>
  )
}

export default Pattern;