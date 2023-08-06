import React from 'react'
import './styles/queue-via-stacks.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example';
import Heading from '../../ArticleComponent/Heading';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Footer from '../../component/Footer';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';


const QueueviaStacks = () => {
    return (
        <div className='queue-via-stacks-container'>
            <ArticleHeading>Queue via Stacks</ArticleHeading>
            <div className='queue-via-stacks-content'>
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
                    Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
                </Predefined>
                <Example code="The problem of implementing a queue using two stacks involves designing a class MyQueue that mimics the behavior of a queue data structure using two stacks."/>
                <Heading level={2}>🌟 Steps to solve the problem:</Heading>
                <BulletPoints
                items={[
                    'Create a class MyQueue with two private stacks: inbox and outbox. inbox is used for enqueue operation, while outbox is used for dequeue operation.',
                    'Implement the enqueue function to push elements onto the inbox stack.',
                    'Implement the dequeue function to remove elements from the queue. If the outbox stack is empty, transfer elements from inbox to outbox. Then, pop the top element from outbox and return it as the dequeued element.',
                    'Implement the isEmpty function to check if both inbox and outbox stacks are empty.',
                ]}
                />
                <Heading level={3}>💥 Code For Problem</Heading>
                <CodeSnippet code={`
                #include <iostream>
                #include <stack>
                
                class MyQueue {
                private:
                    std::stack<int> inbox;   // Used for enqueue operation
                    std::stack<int> outbox;  // Used for dequeue operation
                
                public:
                    // Enqueue an element to the queue
                    void enqueue(int value) {
                        inbox.push(value);
                    }
                
                    // Dequeue an element from the queue
                    int dequeue() {
                        if (outbox.empty()) {
                            // If outbox is empty, transfer elements from inbox to outbox
                            while (!inbox.empty()) {
                                outbox.push(inbox.top());
                                inbox.pop();
                            }
                        }
                
                        if (outbox.empty()) {
                            // If both stacks are empty, the queue is empty
                            std::cout << "Queue is empty. Cannot perform dequeue operation." << std::endl;
                            return -1;
                        }
                
                        int front = outbox.top();
                        outbox.pop();
                        return front;
                    }
                
                    // Check if the queue is empty
                    bool isEmpty() {
                        return inbox.empty() && outbox.empty();
                    }
                };
                
                int main() {
                    MyQueue queue;
                
                    // Enqueue elements to the queue
                    queue.enqueue(5);
                    queue.enqueue(2);
                    queue.enqueue(7);
                
                    // Dequeue elements from the queue
                    int front = queue.dequeue();
                    std::cout << "Dequeued element: " << front << std::endl;
                
                    front = queue.dequeue();
                    std::cout << "Dequeued element: " << front << std::endl;
                
                    // Enqueue more elements
                    queue.enqueue(9);
                    queue.enqueue(1);
                
                    // Dequeue remaining elements
                    while (!queue.isEmpty()) {
                        front = queue.dequeue();
                        std::cout << "Dequeued element: " << front << std::endl;
                    }
                
                    return 0;
                }
                `}/>
                {/* <Heading></Heading> */}
                <Example code="In the example usage, elements are enqueued and dequeued from the MyQueue instance, demonstrating the behavior of a queue implemented using two stacks."/>
                <HorizontalRule/>
                <Footer/>
            </div>
        </div>
    )
}

export default QueueviaStacks