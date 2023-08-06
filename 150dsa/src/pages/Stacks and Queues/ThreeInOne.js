import React from 'react'
import './styles/threeinone.css'
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example'
import Heading from '../../ArticleComponent/Heading'
import BulletPoints from '../../ArticleComponent/BulletPoints'
import CodeSnippet from '../../ArticleComponent/CodeSnippet'
import HorizontalRule from '../../ArticleComponent/HorizontalRule'
import Footer from '../../component/Footer'


const ThreeInOne = () => {
    return (
        <div className='three-in-one-container'>
            <ArticleHeading>Three In One</ArticleHeading>
            <div className='three-in-one-content'>
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
                    Three in One: Describe how you could use a single array to implement three stacks.
                </Predefined>
                <Example code="To implement three stacks using a single array, you can divide the array into three equal parts and allocate space for each stack within those parts." />
                <Heading level={2}>🌟 Here's a step-by-step approach to achieving this:</Heading>
                <BulletPoints items={[
                    'Determine the total size of the array and divide it equally by 3 to get the size of each stack. Lets assume the array size is N.',
                    'Create an array of size N and initialize three variables to keep track of the top elements of each stack. Lets name these variables top1, top2, and top3, initially set to -1.',
                    'Define the boundaries for each stack within the array. For example, you can set the first stack range from index 0 to (N/3)-1, the second stack range from (N/3) to (2*N/3)-1, and the third stack range from (2*N/3) to N-1.',
                    'To push an element onto any of the stacks, check the corresponding top variable to ensure there is space available in that stack. If there is, increment the top variable and assign the element to the corresponding index in the array.',
                    'To pop an element from any of the stacks, check the corresponding top variable to ensure there are elements present in that stack. If there are, retrieve the element from the corresponding index in the array and decrement the top variable.',
                    'To peek at the top element of any of the stacks, simply access the element at the corresponding index based on the top variable.',
                ]} />
                <Heading level={3}>In this implementation, the ThreeStacks class maintains three separate top variables for each stack and uses them to access the corresponding portions of the array.</Heading>
                <Heading level={3}>💥 Code For Problem</Heading>
                <CodeSnippet code={[
                    `
#include<bits/stdc++.h>
using namespace std;

const int N = 9; // Total size of the array

class ThreeStacks {
private:
    int arr[N]; // Array to store elements
    int top1, top2, top3; // Variables to track top elements of each stack

public:
    ThreeStacks() {
        top1 = -1; // Initialize top of stack 1
        top2 = N / 3 - 1; // Initialize top of stack 2
        top3 = 2 * (N / 3) - 1; // Initialize top of stack 3
    }

    // Push element onto the specified stack
    void push(int stackNum, int value) {
        if (isFull(stackNum)) {
            cout << "Stack overflow!" << endl; // Cannot add element, stack is full
            return;
        }

        if (stackNum == 1)
            arr[++top1] = value; // Increment top1 and add value to stack 1
        else if (stackNum == 2)
            arr[++top2] = value; // Increment top2 and add value to stack 2
        else if (stackNum == 3)
            arr[++top3] = value; // Increment top3 and add value to stack 3
    }

    // Pop element from the specified stack
    void pop(int stackNum) {
        if (isEmpty(stackNum)) {
            cout << "Stack underflow!" << endl; // Cannot remove element, stack is empty
            return;
        }

        if (stackNum == 1)
            top1--; // Decrement top1 to remove element from stack 1
        else if (stackNum == 2)
            top2--; // Decrement top2 to remove element from stack 2
        else if (stackNum == 3)
            top3--; // Decrement top3 to remove element from stack 3
    }

    // Peek at the top element of the specified stack
    int peek(int stackNum) {
        if (isEmpty(stackNum)) {
            cout << "Stack is empty!" << endl; // Stack is empty, cannot peek
            return -1;
        }

        if (stackNum == 1)
            return arr[top1]; // Return top element of stack 1
        else if (stackNum == 2)
            return arr[top2]; // Return top element of stack 2
        else if (stackNum == 3)
            return arr[top3]; // Return top element of stack 3

        return -1; // Invalid stack number
    }

    // Check if the specified stack is empty
    bool isEmpty(int stackNum) {
        if (stackNum == 1 && top1 < 0)
            return true; // Stack 1 is empty
        else if (stackNum == 2 && top2 < N / 3)
            return true; // Stack 2 is empty
        else if (stackNum == 3 && top3 < 2 * (N / 3))
            return true; // Stack 3 is empty

        return false; // Invalid stack number or stack is not empty
    }

    // Check if the specified stack is full
    bool isFull(int stackNum) {
        if (stackNum == 1 && top1 >= N / 3 - 1)
            return true; // Stack 1 is full
        else if (stackNum == 2 && top2 >= 2 * (N / 3) - 1)
            return true; // Stack 2 is full
        else if (stackNum == 3 && top3 >= N - 1)
            return true; // Stack 3 is full

        return false; // Invalid stack number or stack is not full
    }

    // Get the size of the specified stack
    int getSize(int stackNum) {
        if (stackNum == 1)
            return top1 + 1;
        else if (stackNum == 2)
            return top2 - (N / 3) + 1;
        else if (stackNum == 3)
            return top3 - 2 * (N / 3) + 1;

        return 0; // Invalid stack number
    }
};

int main() {
    ThreeStacks stacks;

    stacks.push(1, 5); // Push 5 to stack 1
    stacks.push(2, 10); // Push 10 to stack 2
    stacks.push(3, 15); // Push 15 to stack 3

    cout << stacks.peek(1) << endl; // Output: 5 (top element of stack 1)
    cout << stacks.peek(2) << endl; // Output: 10 (top element of stack 2)
    cout << stacks.peek(3) << endl; // Output: 15 (top element of stack 3)

    stacks.pop(1); // Pop from stack 1

    cout << stacks.peek(1) << endl; // Output: -1 (new top element of stack 1)

    cout << "Size of stack 2: " << stacks.getSize(2) << endl; // Output: 0 (empty stack 2)
    cout << "Is stack 3 empty? " << (stacks.isEmpty(3) ? "Yes" : "No") << endl; // Output: No (stack 3 is not empty)

    return 0;
}
            `
                ]} />
                <Example code="The this keyword in object-oriented programming is used to refer to the current instance of a class. It is mainly used to distinguish between class members and local variables/parameters with the same name.
                Using the this keyword in this example helps to clarify that we are referring to the class members and not local variables or parameters. It ensures that the correct variables are accessed and modified within the class methods."/>
                <Heading level={3}>😍  Benefits of using the this keyword:</Heading>
                <BulletPoints items={[
                    'Distinguishing between class members and parameters: In the constructor, using this helps differentiate the class member variables (length and width) from the constructor parameters with the same names. It allows assigning the parameter values to the class members explicitly.',
                    'Accessing class members within methods: In methods like calculateArea(), isSquare(), setDimensions(), and printDimensions(), using this ensures that the correct class members are accessed. It avoids any naming conflicts with local variables or parameters that might have the same names.',
                    'Improved code readability: The use of this makes it clear that we are referring to class members rather than local variables or parameters. It enhances code readability and reduces ambiguity, making the code easier to understand and maintain.',
                    'Facilitating code refactoring: The use of this allows for easy refactoring of code. If you decide to change the naming convention or add additional logic to class members, using this ensures that the references to the members are updated consistently throughout the code.',
                ]} />
                <HorizontalRule />
                <Footer />
            </div>
        </div>
    )
}

export default ThreeInOne