import React from 'react'
import './styles/stacks-of-plates.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Footer from '../../component/Footer';
import Heading from '../../ArticleComponent/Heading';

const StackOfPlates = () => {
    return (
        <div className='stacks-of-plates-container'>
            <ArticleHeading>Stack of Plates</ArticleHeading>
            <div className='stacks-of-plates-content'>
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
                    Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack). FOLLOW UP Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.
                </Predefined>
                <Example code="The problem `Stack of Plates` requires implementing a data structure called SetOfStacks that behaves like a stack but automatically creates a new stack once the previous stack exceeds a certain capacity. Additionally, a popAt function needs to be implemented to perform a pop operation on a specific sub-stack." />
                <BulletPoints items={[
                    'This code implements the SetOfStacks class, which internally uses a vector of stacks to store the elements. The push operation checks if the last stack is full and creates a new stack if necessary. The pop operation removes the top element from the last stack and removes the stack if it becomes empty. The popAt operation removes the top element from a specific sub-stack. The top operation returns the top element of the last stack, and isEmpty checks if the stack is empty.',
                    'Example usage is provided in the main function, where elements are pushed onto the stack, popped from the stack, popped from a specific sub-stack, and the top element is retrieved.',
                ]} />
                <Heading level={3}>💥 Code For Problem</Heading>
                <CodeSnippet code={`
                #include <iostream>
                #include <vector>
                #include <stack>
                
                class SetOfStacks {
                private:
                    std::vector<std::stack<int>> stacks;
                    int capacity;
                public:
                    SetOfStacks(int stackCapacity) : capacity(stackCapacity) {}
                
                    // Push an element onto the stack
                    void push(int value) {
                        if (stacks.empty() || stacks.back().size() == capacity) {
                            // Create a new stack if the current one is full
                            std::stack<int> newStack;
                            newStack.push(value);
                            stacks.push_back(newStack);
                        } else {
                            // Push the element onto the last stack
                            stacks.back().push(value);
                        }
                    }
                
                    // Pop the top element from the stack
                    void pop() {
                        if (stacks.empty()) {
                            std::cout << "Stack is empty. Cannot perform pop operation." << std::endl;
                            return;
                        }
                
                        stacks.back().pop();
                        if (stacks.back().empty()) {
                            // Remove the empty stack
                            stacks.pop_back();
                        }
                    }
                
                    // Pop an element from a specific sub-stack
                    void popAt(int index) {
                        if (index < 0 || index >= stacks.size()) {
                            std::cout << "Invalid sub-stack index." << std::endl;
                            return;
                        }
                
                        stacks[index].pop();
                        if (stacks[index].empty()) {
                            // Remove the empty stack
                            stacks.erase(stacks.begin() + index);
                        }
                    }
                
                    // Get the top element of the stack
                    int top() {
                        if (stacks.empty()) {
                            std::cout << "Stack is empty. Cannot perform top operation." << std::endl;
                            return -1;
                        }
                
                        return stacks.back().top();
                    }
                
                    // Check if the stack is empty
                    bool isEmpty() {
                        return stacks.empty();
                    }
                };
                
                int main() {
                    // Create an instance of SetOfStacks with a capacity of 3
                    SetOfStacks stack(3);
                
                    // Push elements onto the stack
                    stack.push(5);
                    stack.push(2);
                    stack.push(7);
                    stack.push(1);
                    stack.push(9);
                    stack.push(4);
                    stack.push(3);
                
                    // Pop an element from the stack
                    stack.pop();
                
                    // Pop an element from a specific sub-stack
                    stack.popAt(1);
                
                    // Get the top element
                    int topElement = stack.top();
                    std::cout << "Top element: " << topElement << std::endl;
                
                    return 0;
                }
                `} />
                <Example code="In summary, the code implements the SetOfStacks class, which allows pushing elements onto the stack, popping elements from the stack, popping elements from specific sub-stacks, getting the top element, and checking if the stack is empty. The capacity of each sub-stack is defined, and when a sub-stack becomes full, a new one is automatically created. This mimics a stack of plates, where a new stack is started when the previous stack exceeds the defined capacity." />
                <HorizontalRule />
                <Footer />
            </div>
        </div>
    )
}

export default StackOfPlates;