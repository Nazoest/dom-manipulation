//variabes
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    person: 'Anonymous'
  },
  {
    quote: "Java is to JavaScript what car is to carpet.",
    person: 'Chris Heilmann'
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    person: 'Martin Fowler'
  },
  {
    quote: "The function is the ultimate unit of measure; everything is a function.",
    person: 'Douglas Crockford'
  },
  {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    person: 'C.A.R. Hoare'
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    person: 'John Johnson'
  }
];
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.textContent = quotes[random].person;
  });
  