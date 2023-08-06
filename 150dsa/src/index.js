import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Bop from './pages/basic of programming/Bop';
import Pattern from './pages/patterns problem/Pattern';
import Functions from './pages/functions problem/Functions';
import ArrayString from './pages/Arrays and Strings/ArrayString';
import RecursionBacktracking from './pages/Recursion and Backtracking/RecursionBacktracking';
import BigONotation from './pages/Big O Notation/BigONotation';
import StacksQueues from './pages/Stacks and Queues/StacksQueues';
import LinkedLists from './pages/LinkedList/LinkedList';
import TreesGraphs from './pages/Trees And Graphs/TreesGraphs';
import HashmapHeap from './pages/Hashmap and Heap/HashmapHeap';
import DynamicProgramming from './pages/Dynamic Programming/DynamicProgramming';
import SortingSearching from './pages/Sorting and Searching/SortingSearching'
import ObjectOrientedDesign from './pages/Object Oriented Design/ObjectOrientedDesign'
import STLinCpp from './pages/STL in cpp/STLinCpp';
import BitManipulation from './pages/Bit Manipulation/BitManipulation'
import MathLogicPuzzles from './pages/Math and Logic Puzzles/MathLogicPuzzles'
import BinarySearch from './pages/Binary Search/BinarySearch'
import TwoPointers from './pages/Two Pointers/TwoPointers'
import SlidingWindow from './pages/Sliding Window/SlidingWindow'
import GreedyAlgo from './pages/Greedy Algorithm/GreedyAlgo'
import Tries from './pages/Tries/Tries'
import Projects from './pages/Projects/Projects'
import ResumeTools from './pages/Resume Building Tools/ResumeTools'
import Signup from './pages/signup and login page/SignUp';
import Login from './pages/signup and login page/Login';
import AnimalShelter from './pages/Stacks and Queues/AnimalShelter';
import ThreeInOne from './pages/Stacks and Queues/ThreeInOne';
import StackMin from './pages/Stacks and Queues/StackMin';
import StackOfPlates from './pages/Stacks and Queues/StackOfPlates';
import QueueviaStacks from './pages/Stacks and Queues/QueueviaStacks';
import SortStack from './pages/Stacks and Queues/SortStack';




ReactDOM.render(
  <GoogleOAuthProvider clientId="1010399726357-rrgbu2ciutc3ouvnv3ua0tlbulrol4i3.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bop" element={<Bop />} />
        <Route path="patterns" element={<Pattern />} />
        <Route path="functions" element={<Functions />} />
        <Route path="arrays" element={<ArrayString />} />
        <Route path="recursions" element={<RecursionBacktracking />} />
        <Route path="big" element={<BigONotation />} />
        <Route path="stacks" element={<StacksQueues />} />
        <Route path="linkedLists" element={<LinkedLists />} />
        <Route path="treesGraphs" element={<TreesGraphs />} />
        <Route path="hashmapHeap" element={<HashmapHeap />} />
        <Route path="dynamicProgramming" element={<DynamicProgramming />} />
        <Route path="sortingSearching" element={<SortingSearching />} />
        <Route path="objectOrientedDesign" element={<ObjectOrientedDesign />} />
        <Route path="stl" element={<STLinCpp />} />
        <Route path="bit" element={<BitManipulation />} />
        <Route path="math" element={<MathLogicPuzzles />} />
        <Route path="binary" element={<BinarySearch />} />
        <Route path="twoPointers" element={<TwoPointers />} />
        <Route path="slidingWindow" element={<SlidingWindow />} />
        <Route path="greedyAlgo" element={<GreedyAlgo />} />
        <Route path="tries" element={<Tries />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resumeTools" element={<ResumeTools />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/animal-shelter" element={<AnimalShelter />} />
        <Route path="/three-in-one" element={<ThreeInOne />} />
        <Route path="/stack-min" element={<StackMin />} />
        <Route path="/stack-of-plates" element={<StackOfPlates />} />
        <Route path="/queue-via-stacks" element={<QueueviaStacks />} />
        <Route path="/sort-stack" element={<SortStack />} />





      </Routes>
    </Router>
  </GoogleOAuthProvider>,

  document.getElementById('root')
);

reportWebVitals();
