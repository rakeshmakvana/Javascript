const ques = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "'55'", "55", "Error"],
        answer: "'55'"
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        options: ["To enable strict mode", "To disable strict mode", "To declare a variable", "To include external scripts"],
        answer: "To enable strict mode"
    },
    {
        question: "Which method is used to add new elements to the end of an array?",
        options: [".push()", ".pop()", ".concat()", ".join()"],
        answer: ".push()"
    },
    {
        question: "What is the scope of a variable declared with the 'let' keyword?",
        options: ["Global scope", "Local scope", "Function scope", "Block scope"],
        answer: "Block scope"
    },
    {
        question: "What is a closure in JavaScript?",
        options: ["A function that is not defined within another function", "A function that does not have access to its outer scope", "A combination of a function and the lexical environment within which that function was declared", "A function that only runs once"],
        answer: "A combination of a function and the lexical environment within which that function was declared"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["To refer to the current function", "To refer to the parent function", "To refer to the global object", "To refer to the current object"],
        answer: "To refer to the current object"
    },
    {
        question: "What is the output of typeof typeof 1?",
        options: ["'number'", "'string'", "'object'", "'undefined'"],
        answer: "'string'"
    },
    {
        question: "Which method is used to remove the last element from an array?",
        options: [".pop()", ".shift()", ".slice()", ".splice()"],
        answer: ".pop()"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Object Navigation", "JavaScript Object Naming", "JavaScript Object Number"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "Which event is triggered when a form element loses focus?",
        options: ["onblur", "onfocus", "onclick", "onchange"],
        answer: "onblur"
    },
    {
        question: "What does NaN stand for?",
        options: ["Not a Number", "Not any Number", "New Arithmetic Number", "Negative Absolute Number"],
        answer: "Not a Number"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "<!--", "#"],
        answer: "//"
    },
    {
        question: "What is the purpose of the 'new' keyword in JavaScript?",
        options: ["To create a new instance of an object", "To declare a new variable", "To define a new function", "To delete an object"],
        answer: "To create a new instance of an object"
    },
    {
        question: "What is the result of '5' + 2 in JavaScript?",
        options: ["52", "7", "Error", "'52'"],
        answer: "'52'"
    },
    {
        question: "Which built-in method returns the length of a string?",
        options: [".length()", ".size()", ".count()", ".index()"],
        answer: ".length()"
    },
    {
        question: "What is the result of 3 === '3' in JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        answer: "false"
    },
    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        options: ["+", "&", "*", "~"],
        answer: "+"
    },
    {
        question: "What is the result of 10 / 0 in JavaScript?",
        options: ["0", "Infinity", "Error", "NaN"],
        answer: "Infinity"
    },
    {
        question: "Which function is used to convert a string to lowercase in JavaScript?",
        options: [".toLowerCase()", ".toUpperCase()", ".convertToLower()", ".toLower()"],
        answer: ".toLowerCase()"
    },
    {
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: ["break", "exit", "return", "continue"],
        answer: "break"
    },
    {
        question: "What does the 'typeof' operator return for null?",
        options: ["'null'", "'object'", "'undefined'", "'boolean'"],
        answer: "'object'"
    },
    {
        question: "Which method is used to sort elements in an array in JavaScript?",
        options: [".sort()", ".sorted()", ".order()", ".arrange()"],
        answer: ".sort()"
    },
    {
        question: "What is the purpose of the '=== 'operator in JavaScript?",
        options: ["To assign a value to a variable", "To compare both value and type", "To compare only value", "To compare only type"],
        answer: "To compare both value and type"
    },
    {
        question: "Which built-in object is used to perform mathematical operations in JavaScript?",
        options: ["Math", "Number", "Numeric", "Mathematics"],
        answer: "Math"
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        options: ["'null'", "'object'", "'undefined'", "'boolean'"],
        answer: "'object'"
    },
    {
        question: "What is the purpose of the 'arguments' object in JavaScript?",
        options: ["To pass arguments to a function", "To access all arguments passed to a function", "To return multiple values from a function", "To declare function arguments"],
        answer: "To access all arguments passed to a function"
    },
    {
        question: "Which method is used to remove the first element from an array in JavaScript?",
        options: [".shift()", ".pop()", ".slice()", ".splice()"],
        answer: ".shift()"
    },
    {
        question: "What is the output of 0.1 + 0.2 in JavaScript?",
        options: ["0.3", "0.30000000000000004", "0.31", "Error"],
        answer: "0.30000000000000004"
    },
    {
        question: "Which operator is used to test whether a particular property exists in an object?",
        options: ["in", "exists", "has", "include"],
        answer: "in"
    }
];

const myTab = document.getElementById('myTab');
const myTabContent = document.getElementById('myTabContent');

ques.forEach((ele, ind) => {

    const tabButton = document.createElement('button');
    tabButton.className = 'nav-link';
    tabButton.innerHTML = ind + 1;
    tabButton.addEventListener('click', () => showQuestion(ind + 1));

    myTab.appendChild(tabButton);

    const questionDiv = document.createElement('div');
    questionDiv.className = 'tab-pane fade';
    questionDiv.id = `page${ind}`;
    myTabContent.appendChild(questionDiv);

    showQuestion(ind + 1);

});

function showQuestion(id) {

    myTab.querySelectorAll('.nav-link').forEach(button => button.classList.remove('active'));
    myTab.querySelector(`.nav-link:nth-child(${id})`).classList.add('active');

    myTabContent.innerHTML = '';
    const question = ques[id - 1];

    const questionDiv = document.createElement('div');
    questionDiv.className = 'ctbox';
    questionDiv.innerHTML = `
            <h2 class="text-white mb-3">${id}. ${question.question}</h2>
            <h4 class="text-white text-start">
                (a) ${question.options[0]} <br/>
                (b) ${question.options[1]} <br/>
                (c) ${question.options[2]} <br/>
                (d) ${question.options[3]} <br/>
            </h4>
            <button class="btn text-white bg-danger my-3 p-2" onclick="showAnswer('${question.answer}')">Show Answer</button>
            <h3 id="ans${id}" class="text-white py-3"></h3>
        `;

    myTabContent.appendChild(questionDiv);

};

function showAnswer(answer) {

    const currentQuestionId = parseInt(document.querySelector('.nav-link.active').innerText);
    const answerElement = document.getElementById(`ans${currentQuestionId}`);
    answerElement.innerHTML = `Answer :- ${answer}`;

};

