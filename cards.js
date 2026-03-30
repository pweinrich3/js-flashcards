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
      Semicolons mark the end of a statement. While JS uses <strong>Automatic Semicolon Insertion (ASI)</strong>
      to add them in many cases, relying on ASI can cause subtle bugs when a line starts with
      <code>(</code>, <code>[</code>, or a template literal.
    `,
    code: `// ASI bug classic
const a = 1
const b = 2
[a, b].forEach(console.log)
// JS reads lines 2+3 as: 2[a, b]
// → TypeError!`,
  },
  {
    topic: "Attributes",
    question: "What are HTML attributes and how do you access them in JavaScript?",
    answer: `
      Attributes provide extra information about HTML elements (e.g. <code>id</code>, <code>class</code>,
      <code>href</code>, <code>data-*</code>). In JavaScript, access them via:
      <ul>
        <li><code>element.getAttribute("name")</code> — any attribute</li>
        <li><code>element.id</code> / <code>element.className</code> — common ones as direct properties</li>
        <li><code>element.dataset.key</code> — for <code>data-*</code> attributes</li>
      </ul>
    `,
    code: `const btn = document.querySelector("#myBtn");
btn.getAttribute("data-action"); // "submit"
btn.dataset.action;              // "submit"
btn.id;                          // "myBtn"`,
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
];
