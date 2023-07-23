import React from 'react';
import ArticleHeading from '../../ArticleComponent/ArticleHeading';
import Blockquote from '../../ArticleComponent/Blockquote';
import Heading from '../../ArticleComponent/Heading';
import LineBreak from '../../ArticleComponent/LineBreak';
import HorizontalRule from '../../ArticleComponent/HorizontalRule';
import './Bop.css';
import CodeSnippet from '../../ArticleComponent/CodeSnippet';
import Paragraph from '../../ArticleComponent/Paragraph';
import BulletPoints from '../../ArticleComponent/BulletPoints';
import Example from '../../ArticleComponent/Example';
import Footer from '../../component/Footer';
import Predefined from '../../ArticleComponent/Predefined';
import YouTubeEmbed from '../../ArticleComponent/YouTubeEmbed';

const Bop = () => {
  return (
    <div className="bop-container">
      <ArticleHeading>Basic Of Programming</ArticleHeading>
      <div className="bop-content">
        <Predefined
          guidesLink="../"
          authorLink="https://twitter.com/kapil__vaishnav"
          authorName="Kapil Vaishnav"
          beginnerTag="Beginner Level"
          beginnerTagLink="#"
          smartContractsTag="150 DSA"  // make change last... 
          smartContractsTagLink="../"
          date="21 July 2023"
        >
          Computer Programming - An Overview of Basic Concepts
        </Predefined>

        <Blockquote>
          Regardless of the programming language you choose to learn, the fundamental concepts of programming remain consistent across languages. These concepts provide the foundation for understanding and writing code effectively.
          <LineBreak />
          Let's explore some of these key concepts:
        </Blockquote>

        <Paragraph
          text="In the exciting world of computer programming, there are essential keys or elements that every aspiring programmer should be familiar with. These foundational concepts serve as building blocks for understanding and creating code in any programming language. 
          Let's explore these fundamental keys that unlock the doors to the world of programming:"
        />
        <BulletPoints
          items={[
            'IDEs and Programming Environment', 'Basic Syntax', 'Data Types', 'Variables', 'Keywords', 'Basic Operators', 'Decision Making', 'Loops', 'Numbers', 'Characters', 'Input / Output'
            , {
              item: 'Intermediate-level Concept :',
              subItems: ['Arrays', 'Strings', 'Functions']
            }
          ]}
        />
        <Heading level={2}>🌟  Programming Environment</Heading>
        <Paragraph
          text="Before we begin with setting up IDEs and coding environments, it's essential to choose your programming language wisely, as it plays a crucial role in exploring the world of data structures and algorithm problem-solving. If you desire a language that offers power, speed, and versatility, C++ is the perfect choice. Get ready to embrace the challenge, as this guide takes you on a journey with the mighty C++ language, where problem-solving skills are highly valued and will lead you to success."
        />
        <Paragraph
          text="Although we'll be using C++ in our journey, problem-solving goes beyond any specific language. The key lies in mastering the art of problem-solving and understanding core concepts. Remember, the language is just a tool, while the real power comes from your problem-solving skills, enabling you to conquer any coding challenge that comes your way."
        />
        <Paragraph
          text="Some common examples of IDE’s are:"
        />
        <BulletPoints
          items={['Visual Studio code 💻',
            'Sublime Text',
            'Eclipse',
            'Replit 🤣 ']}
        />
        <Paragraph
          text="Now, I have included a helpful YouTube video that guides you through the process of setting up your programming environment and IDEs for C++. You can watch the video to follow along with the necessary steps and ensure that you have a smooth setup for your coding journey."
        />
        <YouTubeEmbed
          videoId="9VE7p-he4fA"
        />
        <Paragraph
          text="I hope everyone has set up their programming environments and IDEs successfully. If you haven't done it yet, don't worry! You can watch the YouTube video I shared earlier to guide you through the setup process."
        />
        <Paragraph
          text="Now, let's move on to the exciting part of our journey! Get ready to explore the amazing world of algorithms, problem-solving, and the endless possibilities in computer programming. Don't hesitate, and let's get started on this incredible adventure! Happy coding!"
        />
        <HorizontalRule />
        <Heading level={2}>🌟  Basic Syntax </Heading>
        <Paragraph
          text="In the world of programming, just like when we use human languages, we need to follow certain rules to communicate with computers effectively. These rules are called syntax. Think of it as the grammar and structure of the language computers understand."
        />
        <Paragraph
          text="When we write code in C++, we have to pay attention to the syntax. It's like building sentences with specific words and punctuation. Here are some important things to know about basic syntax in C++:"
        />
        <BulletPoints items={['Comments']} />
        <Paragraph
          text="Comments are essential for adding explanations or notes within your code.They are not executed by the computer and are meant to help other programmers understand the code.In C++, there are two types of comments: single-line comments (using `//`) and multi-line comments (using `/* ... */`)."
        />
        <CodeSnippet
          code={
            `
          // This is a single-line comment in C++



          /*
            This is a multi-line comment
            in C++ spanning multiple lines
          */
          `
          }
        />
        <BulletPoints items={['Main Functions']} />
        <Paragraph
          text="Every C++ program starts with the `main` function. It serves as the entry point for the program, and execution begins from here."
        />
        <CodeSnippet
          code={`
          #include <iostream>

          int main() {
              // Code goes here
              return 0;
          }
        `}
        />
        <BulletPoints items={['Semicolon']} />
        <Paragraph
          text="In C++, a semicolon `;` is used to terminate statements. It acts as a separator for individual code statements."
        />
        <CodeSnippet
          code={`
        int x = 10; // Statement 1
        int y = 20; // Statement 2
        `}
        />
        <BulletPoints items={['Curly Braces']} />
        <Paragraph
          text="Curly braces `{}` are used to define blocks of code. These are used to group multiple statements together."
        />
        <CodeSnippet
          code={`
        int main() {
          // Start of the main function block
          int x = 10;
          int y = 20;
          // End of the main function block
          return 0;
        }
        `}
        />
        <BulletPoints items={['Data Types']} />
        <Paragraph
          text="C++ supports various data types such as `int`, `float`, `double`, `char`, and more. These define the type of data a variable can hold."
        />
        <CodeSnippet
          code={`
        int age = 25;
        float pi = 3.14;
        char grade = 'A';
        `}
        />
        <BulletPoints items={['Variables']} />
        <Paragraph
          text="Variables are used to store data values. They must be declared with their data type before they can be used."
        />
        <CodeSnippet
          code={`
        int num1;
        int num2 = 5;
        `}
        />
        <BulletPoints items={['Output and Input']} />
        <Paragraph
          text="C++ provides the `cout` and `cin` streams for output and input operations, respectively."
        />
        <CodeSnippet
          code={`
        #include <iostream>

        int main() {
            int age;
            std::cout << "Enter your age: ";
            std::cin >> age;
            std::cout << "You are " << age << " years old." << std::endl;
            return 0;
        }
        `}
        />
        <Paragraph
          text="Mastering the basic syntax is like learning the ABCs of programming. It's the foundation that allows us to write powerful and meaningful code. So, as you start your coding journey in C++, remember to pay attention to the rules of syntax and practice building correct sentences for the computer to understand."
        />
        <HorizontalRule />
        <Heading level={2}>🌟Data Types </Heading>
        <Paragraph
          text="In C++, data types play a crucial role in determining the type of data that can be stored in a variable. They define the size and format of the data, which allows the compiler to allocate the appropriate amount of memory for the variable. Understanding data types is essential as it enables us to work with different kinds of data and perform various operations on them."
        />
        <Paragraph
          text="C++ offers a wide range of built-in data types, and they can be broadly categorized into the following groups:"
        />
        <BulletPoints
          items={[{
            item: 'Fundamental Data Types',
            subItems: [
              'int : Used to store whole numbers (e.g., -1, 0, 100).',
              'float : Used to store floating-point numbers with single precision (e.g., 3.14).',
              'double : Used to store floating-point numbers with double precision (e.g., 3.14159265359).',
              'char : Used to store single characters (e.g., `A`, `b`, `$`).',
              'bool : Used to store boolean values (true or false).'
            ]
          }]}
        />
        <LineBreak />
        <BulletPoints
          items={[{
            item: 'Modifier Data Types',
            subItems: [
              'short : Used to reduce the size of an int (e.g., short int).',
              'long : Used to increase the size of an int (e.g., long int).',
              'signed : Used to declare variables that can hold both positive and negative values.',
              'unsigned : Used to declare variables that can hold only non-negative values.'
            ]
          }]}
        />
        <LineBreak />
        <BulletPoints
          items={[{
            item: 'Derived Data Types',
            subItems: [
              'Arrays : Used to store a collection of elements of the same data type in contiguous memory locations.',
              'Pointers : Used to store the memory address of variables, functions, or objects.',
              'References : Used to create aliases for existing variables.'
            ]
          }]}
        />
        <LineBreak />
        <Heading level={4}>Note:</Heading>
        <Paragraph
          text="C++ also allows users to create their own user-defined data types using classes and structures. These data types provide a way to encapsulate data and functions into a single unit, promoting code reusability and organization.
        Choosing the appropriate data type is essential for memory efficiency and the correct representation of data. For example, if we know that a variable will only store positive values, using an unsigned data type can help optimize memory usage."
        />
        <HorizontalRule />
        <Heading level={2}>🌟 Variables</Heading>
        <Paragraph
          text="In C++, variables are like containers that hold different types of information, such as numbers or 
        characters. They allow a program to remember and work with data. To use a variable, we give it a
        special name and tell the computer what type of data it will store. "
        />
        <Example
          title="For Example:"
          description=" you can declare a variable to store whole numbers (integers) using the ` int ` data type like this:"
          code="int age; // Declaring a variable named `age` of integer type"
        />
        <Example
          description="After declaring a variable, you can assign a value to it using the assignment operator ` = ` : "
          code="age = 30; // Assigning the value 30 to the variable ` age `"
        />
        <Example
          description="Alternatively, you can declare and initialize a variable in one step:"
          code="int score = 95; // Declaring and initializing a variable named ` score ` with the value 95"
        />
        <Example
          description="C++ also allows you to change the value of a variable during the program's execution:"
          code="score = 85; // Changing the value of the variable ` score `` to 85"
        />
        <Heading level={4}>Note :</Heading>
        <Paragraph
          text="Variables make programs flexible because they can store different information during the
        program's run. We can use them to save user input, do calculations, and perform various tasks. 
        Just remember, variable names must follow some rules, like starting with a letter or underscore 
        and using only letters, numbers, or underscores.
        With variables, you can work with data effectively and build powerful applications that can adapt and perform various tasks."
        />
        <HorizontalRule />
        <Heading level={2}>🌟 Keywords</Heading>
        <Paragraph
          text="In C++, keywords are special words with specific meanings that the computer already knows. 
        They are like building blocks we use to create our programs. As programmers, we need to use these 
        keywords correctly to make our code work.
        C++ has a list of reserved keywords that we cannot use as names for things like variables or 
        functions. These words have special jobs in the language."
        />
        <Example
          title="For Example: "
          code="` int ` is used to declare whole numbers, ` double ` for numbers with decimals, ` if ` to make decisions, ` else ` for alternate
        choices, ` while ` to repeat tasks, and ` return ` to give back a value."
        />
        <Paragraph
          text="Think of keywords as the computer's language. By using these words in our code, we can tell the 
        computer what to do and when to do it. They help us do all sorts of things, like storing data,
        making choices, and doing repetitive tasks.
        
        As we learn C++ and write programs, we'll use these keywords a lot. Getting familiar with them is 
        essential for writing good code and making our programs work well. Mastering C++ keywords gives 
        us the power to communicate with the computer effectively and turn our ideas into working programs."
        />
        <HorizontalRule />
        <Heading level={2}>🌟 Basic Operators</Heading>
        <Paragraph text="In C++, operators are like tools that help us work with data and perform different tasks in our
        programs. They are represented by symbols or special characters and allow us to do things like
        adding, subtracting, comparing, and making decisions in our code."/>
        <Heading level={3}>Here are some types of operators in C++ :</Heading>
        <BulletPoints
          items={['Arithmetic Operators: These are used for basic math operations like adding `+`, subtracting `-`, multiplying `*`, and dividing `/` numbers.',
            'Relational Operators: They help us compare values, like checking if two values are equal `==`, not equal `!=`, or if one value is greater or smaller than another `<`, `>`, `<=`, `>=`.',
            'Logical Operators: These operators are used for making logical decisions, like combining conditions with `&&` (AND) or `||` (OR), and negating conditions with `!` (NOT).',
            'Assignment Operators: We use these to assign values to variables using `=`.',
            'Increment and Decrement Operators: They help us increase `++` or decrease `--` the value of a variable by one.',
            'Conditional Operator (Ternary Operator): It is a shorthand way to make decisions in a single line of code, like an if-else statement.',
            'Bitwise Operators: These operators work with individual bits of data, useful for low-level operations.'
          ]}
        />
        <Paragraph text="Understanding how these operators work and using them effectively allows us to perform calculations, 
          comparisons, and logical operations in our programs. They are essential tools in C++ and help us write
          efficient and powerful code."/>
        <HorizontalRule />
        <Heading level={2}>🌟 Decision Making</Heading>
        <Paragraph text="In C++, decision-making is like making choices in a game or solving problems 
        in real life. Programs need to decide what to do based on certain conditions,
        just like we decide what action to take depending on the situation."/>
        <Paragraph text="To do this in C++, we use conditional statements. These statements help us set 
        conditions and then perform specific actions if those conditions are met. 
        There are two main types of conditional statements: ` if ` and ` switch `."/>
        <BulletPoints
          items={['if statements: Imagine if you are deciding whether to go outside. If it is sunny (the condition is true), you will go out. Otherwise (the condition is false), you will stay indoors. In C++, ` if ` statements work the same way. They check if something is true and then do something accordingly.',
            'switch statements: Now, think about choosing a dress for different occasions. You have multiple dresses, and each dress fits a specific occasion. The ` switch ` statement in C++ is like that. It checks the value of a variable and then performs actions based on different cases.'
          ]}
        />
        <Example
          title="For Example :"
          code="In a game, the program can check if a player has enough points to
         move to the next level. Or in a banking app, it can verify if a user has enough
          money for a transaction."
        />
        <Paragraph text="Using decision-making in C++ makes your programs smarter and more adaptable. 
        It helps them respond to different situations and solve problems effectively. 
        Understanding decision-making is crucial for writing powerful and efficient 
        programs that handle real-life challenges and tasks. So, mastering this concept
        in C++ is essential for becoming a skilled programmer!"/>
        <HorizontalRule />
        <Heading level={2}>🌟 Loops </Heading>
        <Paragraph text="In C++ programming, loops are like a powerful tool that allows us to do the same thing over and over again without writing the same code multiple times. They help us repeat a block of code, making it easier to handle repetitive tasks. " />
        <Heading level={3}>C++ provides three main types of loops:</Heading>
        <BulletPoints
          items={['While Loop: It keeps running the code block as long as a specific condition remains true. Before running the code, it checks if the condition is true.']}
        />
        <CodeSnippet
          code={`
        while (condition) {
          // Code block to be executed repeatedly
        }
        `}
        />
        <BulletPoints
          items={['For Loop: This loop is used when we know exactly how many times we want the code block to run. It has three parts: where we start, when we stop, and how we move through each step.']}
        />
        <CodeSnippet
          code={`
          for (initialization; condition; increment/decrement) {
            // Code block to be executed repeatedly
        }
        `}
        />
        <BulletPoints
          items={['Do-While Loop: Similar to the while loop, but it runs the code block at least once before checking the condition.']}
        />
        <CodeSnippet
          code={`
          do {
            // Code block to be executed repeatedly
        } while (condition);
        `}
        />
        <HorizontalRule />
        <Heading level={2}>🌟 Numbers</Heading>
        <Paragraph
          text="Numbers are a crucial part of programming, and in C++, there are many powerful tools to work with them. Whether you're new to coding or have some experience, knowing how to handle numbers in C++ is essential. Here, we'll explore the basics of numeric data types, arithmetic operations, and other useful concepts in C++."
        />
        <Heading level={3}>⏩ Numeric Data Types</Heading>
        <Paragraph text="C++ provides different types to represent numbers with different ranges and precision. Here are the basic ones:" />
        <BulletPoints
          items={['int: Used for whole numbers within a specific range.',
            'double: Ideal for real numbers with decimal points and more precision.',
            'float: Similar to double but with less precision.',
            'long: Stores larger whole numbers than int',
            'short: Stores smaller whole numbers than int.',
            'char: Represents single characters, but it can also hold small whole numbers.'
          ]}
        />
        <Heading level={3}>⏩ Arithmetic operations</Heading>
        <Paragraph text="With C++, you can do various math operations on numbers. These include addition (+), subtraction (-), multiplication (*), division (/), and the modulo operator (%), which gives you the remainder after division." />
        <CodeSnippet
          code={`
        int num1 = 10, num2 = 3;
        int sum = num1 + num2; // 13
        int difference = num1 - num2; // 7
        int product = num1 * num2; // 30
        int quotient = num1 / num2; // 3
        int remainder = num1 % num2; // 1
        `}
        />
        <Heading level={3}>⏩ Mathematical Theory</Heading>
        <Paragraph text="C++ also offers many math functions through the <cmath> header. These functions include sqrt() (for square root), pow() (for raising to a power), abs() (for absolute value), sin(), cos(), and more." />
        <CodeSnippet code={`

        #include <iostream>
        #include <cmath>
        
        int main() {
            double num = 16.0;
            double squareRoot = sqrt(num); // 4.0
            double power = pow(num, 3); // 4096.0
            double absolute = abs(-7.5); // 7.5
            // You can use other math functions similarly
        
            return 0;
        }

        `} />
        <HorizontalRule />
        <Heading level={2}>🌟 Characters</Heading>
        <Paragraph text="Characters are like the building blocks of coding that go beyond simple letters. In the world of programming, they are essential for creating words, handling user inputs, and performing various text operations. C++ provides powerful tools to work with characters, whether you're dealing with single ones or entire strings. Here, We will take you on an exciting journey through the world of characters in C++ and how they can level up your coding skills." />
        <Heading level={3}>⏩ What Are Characters in C++?</Heading>
        <Paragraph text="In C++, characters are represented using the char data type. It's like a special container that can hold one character, such as a letter, number, symbol, or even special sequences like '\n' (newline) or '\t' (tab). Every character is associated with a unique number called ASCII value, which makes them easy to manipulate and compare." />
        <CodeSnippet code={`
        char firstLetter = 'A';
        char digit = '5';
        char symbol = '$';
        char newline = 'n'; // ( n = /n )        
        `} />
        <Heading level={3}>⏩ The Magical ASCII Values</Heading>
        <Paragraph text="Every character has a secret numeric code called the ASCII value. For example, 'A' has an ASCII value of 65, 'a' has 97, and '0' has 48. These numeric values allow you to do cool things like calculations and comparisons with characters." />
        <CodeSnippet code={`
        char letter = 'B';
        int asciiValue = static_cast<int>(letter); // asciiValue will be 66       
        `} />
        <Heading level={3}>⏩ Becoming a Text Master: Working with Strings</Heading>
        <Paragraph text="In C++, strings are like groups of characters stored in a magical memory box. You can use the ` string  ` data type or character arrays to handle entire sentences and manipulate individual characters." />
        <CodeSnippet code={`
             #include <iostream>
             #include <string>
             
             int main() {
                 std::string greeting = "Hello";
                 char name[] = "John";
             
                 std::cout << greeting << " " << name << std::endl;
                 return 0;
             }
        `} />
        <Heading level={3}>⏩ Character Wizardry: Special Functions</Heading>
        <Paragraph text="To perform character tricks, C++ has a special book called <cctype> that contains useful functions. You can check if a character is alphabetic, numeric, uppercase, lowercase, and much more." />
        <CodeSnippet code={`
             #include <iostream>
             #include <cctype>
             
             int main() {
                 char letter = 'g';
                 if (std::islower(letter)) {
                     std::cout << "The character is lowercase." << std::endl;
                 } else {
                     std::cout << "The character is not lowercase." << std::endl;
                 }
             
                 return 0;
             }
        `} />
        <Heading level={3}>Note :</Heading>
        <Paragraph text="Characters are like the magic wands of C++, allowing you to perform amazing text-related operations. 
          Whether you're dealing with a single character 
          or a whole bunch of them in a string, understanding characters in C++ will unlock countless coding possibilities."/>
        <HorizontalRule />
        <Heading level={2}>🌟 Input / Output</Heading>
        <Paragraph text="C++ makes it easy to get input from users and show output. ` cin ` is used to read input, and ` cout ` is used to display output." />
        <CodeSnippet code={`
        int age;
        cout << "Enter your age: ";
        cin >> age;
        cout << "Your age is: " << age << endl;
        `} />
        <HorizontalRule />
        <Heading level={2}>🌟 Intermediate-level Concept </Heading>
        <Paragraph text="In the future, we'll dive deeper into Intermediate-level Concept {Arrays, Strings, Functions} and provide coding problems to help you understand it better. So, keep an eye out for more detailed explanations coming your way!" />
        <HorizontalRule />
        <Footer />
      </div>
    </div>
  );
};

export default Bop;
