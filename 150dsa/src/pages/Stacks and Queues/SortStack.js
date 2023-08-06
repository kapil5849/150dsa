import React from 'react'
import './styles/sort-stack.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example';
import Heading from '../../ArticleComponent/Heading';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Footer from '../../component/Footer';

const SortStack = () => {
    return (
        <div className='sort-stack-container'>
            <ArticleHeading>Sort Stack</ArticleHeading>
            <div className='sort-stack-content'>
                <Predefined
                    guidesLink="../"
                    authorLink="https://twitter.com/kapil__vaishnav"
                    authorName="Kapil Vaishnav"
                    beginnerTag="Beginner Level"
                    beginnerTagLink="#"
                    smartContractsTag="150 DSA"  // make change last... 
                    smartContractsTagLink="../"
                    date="06 August 2023"
                >
                    Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.
                </Predefined>
                <Example code="The question asks us to implement a program to sort a stack in ascending order, where the smallest items are on the top. We are allowed to use an additional temporary stack, but we cannot copy the elements into any other data structure such as an array. The stack supports the following operations: push, pop, peek, and isEmpty." />
                <Heading level={3}>🌟 To solve this problem, we can use the following approach:</Heading>
                <BulletPoints items={[
                    'Create two stacks: mainStack and tempStack.',
                    {
                        item: 'While the mainStack is not empty:',
                        subItems: ['Pop the top element from the mainStack and store it in a variable called temp.',
                            'While the tempStack is not empty and the top element of the tempStack is greater than temp, pop elements from the tempStack and push them back to the mainStack.',
                            'Push temp onto the tempStack.']
                    },
                    'After the above steps, the tempStack will contain the sorted stack, with the smallest items on the top.',
                    'If needed, you can transfer the elements back to the mainStack while maintaining the sorted order.',
                ]} />
                <Heading level={3}>💥 Code For Problem</Heading>
                <CodeSnippet code={`
#include <iostream>
#include <stack>

void sortStack(std::stack<int>& mainStack) {
    std::stack<int> tempStack;

    while (!mainStack.empty()) {
        int temp = mainStack.top();
        mainStack.pop();

        while (!tempStack.empty() && tempStack.top() > temp) {
            mainStack.push(tempStack.top());
            tempStack.pop();
        }

        tempStack.push(temp);
    }

    // Transfer elements back to the mainStack (optional)
    while (!tempStack.empty()) {
        mainStack.push(tempStack.top());
        tempStack.pop();
    }
}

int main() {
    std::stack<int> stack;

    // Push elements onto the stack
    stack.push(5);
    stack.push(2);
    stack.push(7);
    stack.push(1);

    // Sort the stack
    sortStack(stack);

    // Pop and print the sorted elements
    while (!stack.empty()) {
        std::cout << stack.top() << " ";
        stack.pop();
    }
    std::cout << std::endl;

    return 0;
}
                `} />
                <Heading level={3}>😇 Explanation:</Heading>
                <BulletPoints items={['We create a stack called mainStack and push the elements onto it: 5, 2, 7, and 1.',
                    'We call the sortStack function, passing mainStack as a reference.',
                    'In the sortStack function, we create a temporary stack called tempStack.',
                    {
                        item: 'We iterate through mainStack until it becomes empty:',
                        subItems: ['We pop the top element from mainStack and store it in the temp variable.',
                            'We compare temp with the elements in tempStack and transfer elements from tempStack to mainStack if they are greater than temp.',
                            'We push temp onto tempStack.',
                        ]
                    },
                    'After the sorting is done, we can transfer the elements from tempStack back to mainStack if needed.',
                    'Finally, we pop and print the elements from mainStack, which are now sorted in ascending order: 1, 2, 5, 7.',
                ]} />
                <HorizontalRule/>
                <Footer/>
            </div>
        </div>
    )
}

export default SortStack
