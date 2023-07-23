import React from 'react'
import '../App.css';
import NeonCard from './NeonCard';
// import Bop from '../pages/basic of programming/Bop';

const NeonContainer = () => {
    return (
        <div className="neon__container">
            <NeonCard
                title="Basic of Programming"
                description="Learn fundamental concepts and principles to build a strong foundation in programming and problem-solving."
                route="bop"
            />
            <NeonCard
                title="Patterns"
                description="Discover the power of patterns in programming and unlock efficient solutions for common coding challenges."
                route="patterns"
            />
            <NeonCard
                title="Functions Problem"
                description="A reusable block of code that performs a specific task, enhancing code organization and reusability in programming."
                route="functions"
            />
            <NeonCard
                title="Arrays and Strings"
                description="Learn the fundamentals of working with arrays and strings, including indexing, searching, sorting, and basic string operations."
                route="arrays"
            />
            <NeonCard
                title="Recursion and Backtracking"
                description="Learn the power of recursion and backtracking techniques to solve complex problems by breaking them down into smaller, manageable steps."
                route="recursions"
            />
            <NeonCard
                title="Big O Notation"
                description="Understand the efficiency and scalability of algorithms with Big O notation, a measure of algorithm performance in terms of input size."
                route="big"
            />
            <NeonCard
                title="Stacks and Queues"
                description="Learn about stack and queue data structures used for organizing and managing data. Stacks follow a last-in, first-out (LIFO) approach, while queues follow a first-in, first-out (FIFO) approach."
                route="stacks"
            />
            <NeonCard
                title="Linked List"
                description="A linked list is a linear data structure consisting of nodes that store data and references to the next node, enabling dynamic memory allocation and efficient insertion, deletion, and traversal operations."
                route="linkedLists"
            />
            <NeonCard
                title="Trees And Graphs"
                description="Trees and graphs are essential data structures used to represent hierarchical relationships and complex networks, enabling efficient manipulation and traversal in various algorithms and applications."
                route="treesGraphs"
            />
            <NeonCard
                title="Hashmap and Heap"
                description="Hashmap is a key-value data structure that provides fast access to values, while Heap is a binary tree-based structure used for efficient element insertion, deletion, and finding the minimum or maximum value."
                route="hashmapHeap"
            />
            <NeonCard
                title="Dynamic Programming"
                description="Dynamic programming is an algorithmic technique used to solve complex problems by breaking them down into smaller overlapping subproblems and storing their solutions for efficient computation."
                route="dynamicProgramming"
            />
            <NeonCard
                title="Sorting and Searching"
                description="Sorting and searching algorithms are essential tools in computer science, enabling the organization of data in a specific order and efficient retrieval of desired elements from large collections."
                route="sortingSearching"
            />
            <NeonCard
                title="Object-oriented Design"
                description=" Object-oriented design in C++ focuses on designing and implementing modular and reusable code using classes, objects, inheritance, and polymorphism to achieve code organization and maintainability."
                route="objectOrientedDesign"
            />
            <NeonCard
                title="STL in cpp"
                description="Standard Template Library (STL) is a powerful library that provides reusable data structures, algorithms, and containers, enhancing the efficiency and productivity of C++ programming."
                route="stl"
            />
            <NeonCard
                title="Bit Manipulation"
                description="Bit Manipulation involves performing logical and arithmetic operations on individual bits, providing efficient solutions for problems in cryptography, compression, and low-level programming."
                route="bit"          
            />
            <NeonCard
                title="Math and Logic puzzles"
                description="Math and logic puzzles are engaging brain teasers that require critical thinking and problem-solving skills to solve mathematical and logical challenges in a fun and interactive way."
                route="math"
           />
            <NeonCard
                title="Binary Search"
                description="Binary Search is a fast search algorithm that finds the position of a target value within a sorted array."
                route="binary"
            />
            <NeonCard
                title="Two Pointers"
                description=" Two Pointers is a technique that uses two pointers to traverse or manipulate elements in an array or linked list efficiently."
                route="twoPointers"
            />
            <NeonCard
                title="Sliding Window"
                description="Sliding Window is a technique that maintains a dynamic window to efficiently process subarrays or subsequences in an array or string."
                route="slidingWindow"
            />
            <NeonCard
                title="Greedy Algorithm"
                description="Greedy is an algorithmic paradigm that makes locally optimal choices at each stage."
                route="greedyAlgo"
            />
            <NeonCard
                title="Tries"
                description="Tries, or prefix trees, are data structures used for efficient string searching and retrieval."
                route="tries"
            />
            <NeonCard
                title="Project"
                description="Explore a collection of hands-on projects that apply various concepts and technologies, providing practical experience and enhancing your problem-solving skills in real-world scenarios."
                route="projects"
            />
            <NeonCard
                title="Resume Building Tools"
                description="Discover helpful tools and resources to create professional resumes that highlight your skills, experience, and qualifications effectively."
                route="resumeTools"
            />
        </div>
    );
}

export default NeonContainer;

