/**
 * cards.js — Flashcard data
 * To add more cards, push a new object into the CARDS array.
 *
 * Shape:
 * {
 *   topic:    string,   // short label shown on the front (e.g. "Scope")
 *   question: string,   // the question text
 *   answer:   string,   // HTML allowed — use <strong>, <ul>/<li>, <code>, etc.
 *   code:     string,   // optional code snippet (plain text, will be syntax-highlighted)
 * }
 */
const CARDS = [
  {
    topic: "Scope",
    question: "What is scope in JavaScript?",
    answer: `
      Scope determines where variables are accessible in your code.
      JavaScript has three kinds:
      <ul>
        <li><strong>Global</strong> — accessible anywhere in the program</li>
        <li><strong>Function</strong> — accessible only inside the function where it's declared</li>
        <li><strong>Block</strong> — accessible only within the block <code>{ }</code> (with <code>let</code>/<code>const</code>)</li>
      </ul>
    `,
    code: `// block scope example
if (true) {
  let secret = "block-only";
}
console.log(secret); // ❌ ReferenceError`,
  },
  {
    topic: "Semicolons",
    question: "Why do semicolons matter in JavaScript?",
    answer: `
      Semicolons mark the end of a statement. It tells JavaScript you are done with this statement. This is especially important with writing a single statement on multiple lines, such as defining an Object. 
    `,
    code: `// Missing semicolon
const a = 1
const b = 2
[a, b].forEach(console.log)
// JS reads lines 2+3 as: 2[a, b] because the semicolon is missing after "b"
// → TypeError!`,
  },
  {
    topic: "Objects",
    question: "What is an object in JavaScript?",
    answer: `
      An object is a collection of <strong>key-value pairs</strong> called properties. Values can be any
      type — including functions, which are then called <em>methods</em>. Objects are the primary way
      to model real-world data.
      <ul>
        <li>Access with <strong>dot notation</strong>: <code>obj.key</code></li>
        <li>Access with <strong>bracket notation</strong>: <code>obj["key"]</code></li>
      </ul>
    `,
    code: `const user = {
  name: "Paul",
  role: "dev",
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

user.role;     // "dev"  (dot notation)
user["name"];  // "Paul" (bracket notation)
user.greet();  // "Hi, I'm Paul"`,
  },
  {
    topic: "Syntax",
    question: "What does JavaScript syntax refer to?",
    answer: `
      Syntax is the set of rules that define how valid JavaScript code must be written — the
      <strong>grammar of the language</strong>. Key rules include:
      <ul>
        <li>Statements end with <code>;</code></li>
        <li>Code blocks are wrapped in <code>{ }</code></li>
        <li>Strings use <code>"..."</code>, <code>'...'</code>, or <code>\`...\`</code></li>
        <li>Identifiers are case-sensitive (<code>myVar ≠ myvar</code>)</li>
      </ul>
    `,
    code: `// valid syntax
function add(a, b) {
  return a + b;
}

// syntax error — missing closing brace
function broken(a, b {
  return a + b;`,
  },
  {
    topic: "Object Properties",
    question: "What are object properties and how do you access them?",
    answer: `
      A <strong>property</strong> is a named value stored on an object — a key paired with a value of any type.
      There are two ways to access properties:
      <ul>
        <li><strong>Dot notation</strong> <code>obj.key</code> — use when the key is a valid identifier and known at write time</li>
        <li><strong>Bracket notation</strong> <code>obj["key"]</code> — use when the key is dynamic, a variable, or contains special characters</li>
      </ul>
      You can also <strong>add</strong>, <strong>update</strong>, or <strong>delete</strong> properties at any time:
      <ul>
        <li><code>obj.newKey = value</code> — adds or updates</li>
        <li><code>delete obj.key</code> — removes the property entirely</li>
        <li><code>Object.keys(obj)</code> — returns an array of all own property names</li>
      </ul>
    `,
    code: `const car = { make: "Toyota", year: 2023 };

// dot notation
car.make;              // "Toyota"

// bracket notation (useful with variables)
const field = "year";
car[field];            // 2023

// add / update
car.color = "blue";    // adds new property
car.year = 2024;       // updates existing

// delete
delete car.color;

// enumerate
Object.keys(car);      // ["make", "year"]
Object.values(car);    // ["Toyota", 2024]
Object.entries(car);   // [["make","Toyota"],["year",2024]]`,
  },
];
