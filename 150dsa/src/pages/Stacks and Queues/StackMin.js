import React from 'react'
import './styles/stackmin.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import Heading from '../../ArticleComponent/Heading';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Footer from '../../component/Footer';

const StackMin = () => {
    return (
        <div className='stack-min-container'>
            <ArticleHeading>Stack Min</ArticleHeading>
            <div className='stack-min-content'>
                <Predefined
                    guidesLink="../"
                    authorLink="https://twitter.com/kapil__vaishnav"
                    authorName="Kapil Vaishnav"
                    beginnerTag="Beginner Level"
                    beginnerTagLink="#"
                    smartContractsTag="150 DSA"  // make change last... 
                    smartContractsTagLink="../"
                    date="08 August 2023"
                >
                    How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
                </Predefined>
                <Example code="The problem is asking for the design of a stack data structure that supports three operations:" />
                <BulletPoints
                    items={[
                        'Push: Insert an element onto the stack.',
                        'Pop: Remove and return the top element from the stack.',
                        'Min: Retrieve the minimum element from the stack.',
                    ]}
                />
                <Example code="The key requirement is that all three operations should have a time complexity of O(1), meaning they should execute in constant time regardless of the size of the stack." />
                <Example code="To solve this problem, we can use an additional stack, called the `min stack`, to keep track of the minimum element at each step. The min stack will store the current minimum element corresponding to the elements pushed onto the main stack." />
                <Heading level={2}>🌟 Steps for solving the problem:</Heading>
                <BulletPoints items={['Create a class called MinStack.',
                'Declare two stacks as private members: mainStack for storing the elements and minStack for storing the minimum elements.',
                {
                    item:'Implement the push function to add elements to the main stack.',
                    subItems: ['Push the element onto the main stack.',
                    'Check if the element is smaller or equal to the current minimum in the min stack.',
                    'If it is, push the element onto the min stack as well.',]
                },
                {
                    item:'Implement the pop function to remove elements from the main stack',
                    subItems:['Check if the element being popped is the current minimum in the min stack.',
                    'If it is, also remove it from the min stack.',
                    'Remove the top element from the main stack.']
                },
                'Implement the top function to return the top element from the main stack.',
                'Implement the getMin function to return the minimum element from the min stack.',
                'Test the implementation to ensure it satisfies the requirements of O(1) time complexity for all three operations.',
                ]} />
                <Example code="By following these steps, you can solve the `Stack Min` problem and have a stack data structure that supports push, pop, and min operations in constant time."/>
                <Heading level={3}>💥 Code For Problem</Heading>
                <CodeSnippet code={[`
                #include <iostream>
                #include <stack>
                
                class MinStack {
                private:
                    std::stack<int> dataStack;
                    std::stack<int> minStack;
                
                public:
                    // Push an element onto the stack
                    void push(int value) {
                        dataStack.push(value);
                        if (minStack.empty() || value <= minStack.top()) {
                            minStack.push(value);
                        }
                    }
                
                    // Remove the top element from the stack
                    void pop() {
                        if (dataStack.empty()) {
                            std::cout << "Stack is empty. Cannot perform pop operation." << std::endl;
                            return;
                        }
                
                        int topElement = dataStack.top();
                        dataStack.pop();
                
                        if (topElement == minStack.top()) {
                            minStack.pop();
                        }
                    }
                
                    // Get the top element of the stack
                    int top() {
                        if (dataStack.empty()) {
                            std::cout << "Stack is empty. Cannot perform top operation." << std::endl;
                            return -1;
                        }
                
                        return dataStack.top();
                    }
                
                    // Get the minimum element in the stack
                    int getMin() {
                        if (minStack.empty()) {
                            std::cout << "Stack is empty. Cannot retrieve minimum element." << std::endl;
                            return -1;
                        }
                
                        return minStack.top();
                    }
                };
                
                int main() {
                    // Create an instance of the MinStack
                    MinStack stack;
                
                    // Push elements onto the stack
                    stack.push(5);
                    stack.push(2);
                    stack.push(7);
                    stack.push(1);
                
                    // Get the minimum element
                    int minElement = stack.getMin();
                    std::cout << "Minimum element: " << minElement << std::endl;  // Output: Minimum element: 1
                
                    // Pop an element from the stack
                    stack.pop();
                
                    // Get the top element
                    int topElement = stack.top();
                    std::cout << "Top element: " << topElement << std::endl;  // Output: Top element: 7
                
                    // Get the updated minimum element
                    minElement = stack.getMin();
                    std::cout << "Updated minimum element: " << minElement << std::endl;  // Output: Updated minimum element: 2
                
                    return 0;
                }
                `]}/>
                <Heading level={3}>😎 Explain</Heading>
                <Example code="In this example, we create an instance of the MinStack class and perform the following operations:"/>
                <BulletPoints items={[
                    'Push the elements 5, 2, 7, and 1 onto the stack using the push function.',
                    'Retrieve the minimum element from the stack using the getMin function, which returns 1.',
                    'Pop an element from the stack using the pop function.',
                    'Retrieve the top element from the stack using the top function, which returns 7.',
                    'Retrieve the updated minimum element from the stack using the getMin function, which returns 2.',
                    'The MinStack class ensures that the minimum element is always accessible in constant time, even after performing push and pop operations on the stack.',
                ]}/>
                <Example code="This code combines the implementation of the MinStack class along with the example usage in the main function. It demonstrates how to push elements onto the stack, retrieve the minimum element, pop an element, get the top element, and retrieve the updated minimum element."/>
                <HorizontalRule/>
                <Footer/>
            </div>
        </div>
    )
}

export default StackMin