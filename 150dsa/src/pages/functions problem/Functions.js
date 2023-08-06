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
import Footer from '../../component/Footer';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';

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
        <Paragraph text="Functions are like the building blocks of programming, helping us break down big problems into smaller, manageable pieces. In C++, functions play a crucial role in creating well-organized code that's easy to reuse and understand." />
        <Paragraph text="In this section, we'll explore why functions are so important in C++ programming. We'll learn how they make our code better by promoting good practices and making it easier to handle. We'll cover the following main points:" />
        <Heading level={3}>⏩ Understanding Functions</Heading>
        <Paragraph text="We'll get a clear idea of what functions are and how they help us organize our code into smaller parts. Functions make our programs more organized and easier to maintain." />
        <Heading level={3}>⏩ Advantages of Using Functions</Heading>
        <Paragraph text="We'll see why using functions is beneficial in C++. They make our code easier to read and encourage us to reuse code, saving us time and effort." />
        <Heading level={3}>⏩ Function syntax</Heading>
        <Paragraph text="We'll get familiar with how to create functions in C++. We'll learn how to name them, specify the information they need (parameters), and what they return." />
        <Heading level={3}>⏩ Function Prototypes</Heading>
        <Paragraph text="We'll understand the concept of function prototypes, which allow us to call functions before we define them. This is useful when functions depend on each other." />
        <Heading level={3}>⏩ The main() Function</Heading>
        <Paragraph text="We'll explore the special role of the `main()` function in C++. It's the starting point of our programs, and every C++ program needs it." />
        <Heading level={3}>⏩ Calling Function</Heading>
        <Paragraph text="We'll learn how to use functions in our code. We'll see how to give them data to work with (arguments) and how they give us back results." />
        <Heading level={3}>⏩ Basic Example</Heading>
        <Paragraph text="We'll see a simple example of a function in C++. This will show us how functions make our code more organized and easier to manage." />
        <LineBreak />
        <Paragraph text="By the end of this section, you'll have a strong grasp of the basics of functions in C++. You'll see how they help us handle complex tasks and make our programs more efficient and organized. This knowledge will be a great starting point for diving deeper into advanced functions concepts in the rest of the guide." />
        <HorizontalRule />
        <Heading level={2}>🌟 Creating and Using Functions</Heading>
        <Paragraph text="In C++, a function is a reusable block of code that performs a specific task. It allows you to organize your code into smaller, manageable pieces, and you can call the function whenever you need to perform that task." />
        <CodeSnippet code={`
        #include <iostream>

        // Function declaration (prototype)
        int addNumbers(int a, int b);
        
        int main() {
            // Function call
            int result = addNumbers(5, 10);
            std::cout << "The sum is: " << result << std::endl;
            
            return 0;
        }
        
        // Function definition
        int addNumbers(int a, int b) {
            int sum = a + b;
            return sum;
        }

        `} />

        <Heading level={3}>⏩ Summary of the above code</Heading>
        <BulletPoints
        items={[
          'We include the `<iostream>` header to use the standard input/output stream.',
          'We declare a function named `addNumbers` that takes two integer parameters (`a` and `b`) and returns an integer.',
          'In the `main` function, we call the `addNumbers` function with arguments `5` and `10`, and store the result in the variable `result`.',
          'The `addNumbers` function is defined after the `main` function, where we implement the logic to add the two numbers and return the result.'
        ]}
        />
        <Example
        code="When you run this program, it will output: 'The sum is: 15', as it adds 5 and 10 together using the `addNumbers` function."
        />
        <HorizontalRule />
        <Heading level={2}>🌟 Passing Data To Function</Heading>
        <Paragraph text="Passing data to functions in C++ means giving information or values to a function so that the function can use and work with that data." />
        <Paragraph text="Here's an example of how you can pass data to a function in C++:" />
        <CodeSnippet code={`
        #include <iostream>
        using namespace std;
        
        // Function that takes two integers as parameters and prints their sum
        void printSum(int num1, int num2) {
            int sum = num1 + num2;
            cout << "The sum of " << num1 << " and " << num2 << " is: " << sum << endl;
        }
        
        int main() {
            int a = 5;
            int b = 10;
        
            // Call the function and pass 'a' and 'b' as arguments
            printSum(a, b); // Output : The sum of 5 and 10 is : 15
        
            return 0;
        }
        `} />
        <Paragraph text="In this example, we have a function called `printSum` that takes two integers `num1` and `num2` as parameters. When we call this function in the `main` function and pass the values of `a` and `b`, it will calculate their sum and print it as output." />
        <Paragraph text="So, by passing data to functions, we can perform operations on that data and use the function's logic to process it and get results. This helps in making our code more organized and reusable." />
        <HorizontalRule />
        <Heading level={2}>🌟  Getting Data to Functions</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟 Different Types of Functions</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Functions for Doing Tasks</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Functions that Use Data</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Functions that Give Back Data</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Functions that Call Themselves (Recursion)</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Special Quick Functions (Inlines)</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Making Functions More Flexible</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Managing Variables in Functions</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Handling Data: Copy or Share?</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Default Settings and Making Functions for Anything</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Lambdas: Small, Handy Functions</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Tips for Writing Great Functions</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Fixing Common Mistakes</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Real-Life Examples: Math, Text, and More</Heading>
        <HorizontalRule />
        <Heading level={2}>🌟Wrapping it Up: The Power of Functions in C++</Heading>
        <HorizontalRule />
        <Footer />
      </div>
    </div>
  )
}

export default Pattern;
