import React from 'react'
import './styles/animal-shelter.css';
import ArticleHeading from '../../ArticleComponent/ArticleHeading'
import Predefined from '../../ArticleComponent/Predefined'
import Example from '../../ArticleComponent/Example';
import Heading from '../../ArticleComponent/Heading';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import Footer from '../../component/Footer';

const AnimalShelter = () => {
  return (
    <div className='animal-shelter-container'>
      <ArticleHeading>Animal Shelter</ArticleHeading>
      <div className='animal-shelter-content'>
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
          Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked list data structure.
        </Predefined>
        <Example code="The question asks us to design a system for an animal shelter that operates on a `first in, first out` basis. The shelter holds dogs and cats, and people can adopt either the oldest animal overall or choose a specific type (dog or cat) and receive the oldest animal of that type. We need to create data structures and implement operations such as enqueue (to add animals to the shelter), dequeueAny (to adopt the oldest animal), dequeueDog (to adopt the oldest dog), and dequeueCat (to adopt the oldest cat). We can use the built-in linked list data structure to implement this system."/>
        <Heading level={2}>🌟 To solve this problem, we can use the following approach:</Heading>
        <BulletPoints
        items={[
          'Create a class called Animal with attributes such as name, type (dog or cat), and arrivalTime.',
          'Create separate queues for dogs and cats to maintain the arrival order of each animal type.',
          'Implement the enqueue operation to add an animal to the appropriate queue. The enqueue operation will take the animals name, type, and arrival time as parameters.',
          'Implement the dequeueAny operation to adopt the oldest animal overall. Compare the arrival times of the animals at the front of both queues and dequeue the one with the earlier arrival time.',
          'Implement the dequeueDog operation to adopt the oldest dog. Dequeue the animal from the dog queue.',
          'Implement the dequeueCat operation to adopt the oldest cat. Dequeue the animal from the cat queue.',
        ]}
        />
        <Heading level={3}>💥 Code For Problem</Heading>
        <CodeSnippet code={`    
#include <iostream>
#include <queue>
#include <string>

class Animal {
public:
    std::string name;
    std::string type;
    int arrivalTime;

    Animal(std::string animalName, std::string animalType, int time) {
        name = animalName;
        type = animalType;
        arrivalTime = time;
    }
};

class AnimalShelter {
private:
    std::queue<Animal*> dogQueue;
    std::queue<Animal*> catQueue;
    int timestamp;

public:
    AnimalShelter() {
        timestamp = 0;
    }

    void enqueue(std::string name, std::string type) {
        Animal* animal = new Animal(name, type, timestamp++);
        if (type == "dog") {
            dogQueue.push(animal);
        } else if (type == "cat") {
            catQueue.push(animal);
        }
    }

    Animal* dequeueAny() {
        if (dogQueue.empty() && catQueue.empty()) {
            std::cout << "No animals available for adoption." << std::endl;
            return nullptr;
        } else if (dogQueue.empty()) {
            return dequeueCat();
        } else if (catQueue.empty()) {
            return dequeueDog();
        } else {
            Animal* dog = dogQueue.front();
            Animal* cat = catQueue.front();
            if (dog->arrivalTime < cat->arrivalTime) {
                return dequeueDog();
            } else {
                return dequeueCat();
            }
        }
    }

    Animal* dequeueDog() {
        if (dogQueue.empty()) {
            std::cout << "No dogs available for adoption." << std::endl;
            return nullptr;
        }

        Animal* dog = dogQueue.front();
        dogQueue.pop();
        return dog;
    }

    Animal* dequeueCat() {
        if (catQueue.empty()) {
            std::cout << "No cats available for adoption." << std::endl;
            return nullptr;
        }

        Animal* cat = catQueue.front();
        catQueue.pop();
        return cat;
    }
};

int main() {
    AnimalShelter shelter;

    // Enqueue animals


    shelter.enqueue("Dog 1", "dog");
    shelter.enqueue("Cat 1", "cat");
    shelter.enqueue("Dog 2", "dog");
    shelter.enqueue("Cat 2", "cat");

    // Dequeue the oldest animal overall
    Animal* oldestAnimal = shelter.dequeueAny();
    if (oldestAnimal) {
        std::cout << "Adopted the oldest animal overall: " << oldestAnimal->name << " (Type: " << oldestAnimal->type << ")" << std::endl;
    }

    // Dequeue the oldest dog
    Animal* oldestDog = shelter.dequeueDog();
    if (oldestDog) {
        std::cout << "Adopted the oldest dog: " << oldestDog->name << std::endl;
    }

    // Dequeue the oldest cat
    Animal* oldestCat = shelter.dequeueCat();
    if (oldestCat) {
        std::cout << "Adopted the oldest cat: " << oldestCat->name << std::endl;
    }

    return 0;
}
        `}/>
        <Heading level={2}>😑 Explanation:</Heading>
        <BulletPoints items={[
          'We define a class called Animal to represent an animal in the shelter. It has attributes such as name, type (dog or cat), and arrivalTime.',
          'We create a class called AnimalShelter to manage the animal shelter system. It has two queues: dogQueue and catQueue to hold dogs and cats, respectively. We also have a timestamp variable to track the arrival time of animals.',
          'The enqueue operation takes the animals name and type as parameters. It creates an Animal object with the given details and adds it to the appropriate queue based on the animals type.',
          'The dequeueAny operation dequeues the oldest animal overall. If one of the queues is empty, it dequeues the animal from the non-empty queue. Otherwise, it compares the arrival times of the animals at the front of both queues and dequeues the one with the earlier arrival time.',
          'The dequeueDog operation dequeues the oldest dog from the dogQueue.',
          'The dequeueCat operation dequeues the oldest cat from the catQueue.',
          'In the main function, we create an instance of AnimalShelter called shelter.',
          'We enqueue four animals: two dogs and two cats.',
          'We dequeue the oldest animal overall using the dequeueAny operation and print its details if available.',
          'We dequeue the oldest dog using the dequeueDog operation and print its name if available.',
          'We dequeue the oldest cat using the dequeueCat operation and print its name if available.',
        ]}/>
        <Example code="This implementation demonstrates how to create a data structure to manage an animal shelter system where animals can be enqueued and dequeued based on their arrival time or specific type."/>
        <HorizontalRule/>
        <Footer/>
      </div>
    </div>
  )
}

export default AnimalShelter
