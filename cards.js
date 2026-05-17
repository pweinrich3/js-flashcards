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
  // ───────────────────────── Syntax basics ─────────────────────────
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
  },
  {
    topic: "Semicolons",
    question: "Why do semicolons matter in JavaScript?",
    answer: `
      A semicolon marks the <strong>end of a statement</strong>. It tells JavaScript you are done
      with this instruction. This matters most when several statements share a line, or when a
      statement spans multiple lines such as defining an object.
    `,
  },

  // ───────────────────────── Variables ─────────────────────────
  {
    topic: "Variables",
    question: "What is a variable?",
    answer: `
      A variable is a <strong>named container that stores a value</strong>. The name lets you
      refer to and reuse that value later instead of repeating the value itself. The value a
      variable holds can usually be changed while the program runs.
    `,
  },
  {
    topic: "Variables",
    question: "How do you declare a variable in JavaScript?",
    answer: `
      You <strong>declare</strong> a variable with a keyword, give it a name, and optionally
      assign a starting value:
      <ul>
        <li><code>let</code> — a variable whose value can change</li>
        <li><code>const</code> — a variable whose value cannot be reassigned</li>
        <li><code>var</code> — the older way; prefer <code>let</code> or <code>const</code></li>
      </ul>
    `,
  },
  {
    topic: "Variables",
    question: "What is the difference between declaring and assigning a variable?",
    answer: `
      <ul>
        <li><strong>Declaration</strong> — creating the variable and its name: <code>let score;</code></li>
        <li><strong>Assignment</strong> — putting a value into it: <code>score = 10;</code></li>
      </ul>
      You can do both at once (<code>let score = 10;</code>). Re-assigning later just uses the
      name again without a keyword: <code>score = 20;</code>
    `,
  },
  {
    topic: "Variables",
    question: "What are the rules for naming a variable?",
    answer: `
      <ul>
        <li>May contain letters, digits, <code>_</code> and <code>$</code></li>
        <li>Cannot <strong>start</strong> with a digit</li>
        <li>Cannot be a reserved keyword (like <code>let</code> or <code>for</code>)</li>
        <li>Names are <strong>case-sensitive</strong></li>
      </ul>
      Good names are descriptive: <code>userAge</code> beats <code>x</code>.
    `,
  },
  {
    topic: "Variables — Code",
    question: "What does this code do, and what is the final value of price?",
    code: `let price = 100;
price = price - 25;
price = price * 2;`,
    answer: `
      It declares <code>price</code> as <strong>100</strong>, then reassigns it twice.
      <ul>
        <li><code>price - 25</code> → 75, stored back into <code>price</code></li>
        <li><code>price * 2</code> → 150, stored back into <code>price</code></li>
      </ul>
      The final value of <code>price</code> is <strong>150</strong>.
    `,
  },
  {
    topic: "Variables — Code",
    question: "What does this code print?",
    code: `let a = 5;
let b = a;
a = 99;
console.log(b);`,
    answer: `
      It prints <strong>5</strong>. When <code>b = a</code> runs, <code>b</code> receives a
      <strong>copy</strong> of the value in <code>a</code> at that moment (5). Changing
      <code>a</code> afterward does not affect <code>b</code>.
    `,
  },

  // ───────────────────────── Variable scope ─────────────────────────
  {
    topic: "Scope",
    question: "What is scope in JavaScript?",
    answer: `
      Scope determines <strong>where a variable is accessible</strong> in your code.
      JavaScript has three kinds:
      <ul>
        <li><strong>Global</strong> — accessible anywhere in the program</li>
        <li><strong>Function</strong> — accessible only inside the function where it's declared</li>
        <li><strong>Block</strong> — accessible only within the block <code>{ }</code> (with <code>let</code>/<code>const</code>)</li>
      </ul>
    `,
  },
  {
    topic: "Scope",
    question: "What is global scope?",
    answer: `
      A variable declared <strong>outside of any function or block</strong> has global scope.
      It can be read and used anywhere in the program, including inside every function. Too many
      global variables is risky — any code can change them.
    `,
  },
  {
    topic: "Scope",
    question: "What is function (local) scope?",
    answer: `
      Variables declared <strong>inside a function</strong> exist only while that function runs
      and can only be used inside it. Code outside the function cannot see them. This keeps a
      function's internal details private.
    `,
  },
  {
    topic: "Scope",
    question: "What is block scope?",
    answer: `
      A block is any code wrapped in curly braces <code>{ }</code> — such as the body of an
      <code>if</code> or a <code>for</code> loop. Variables declared with <code>let</code> or
      <code>const</code> inside a block exist <strong>only within that block</strong>.
    `,
  },
  {
    topic: "Scope — Code",
    question: "What happens when this code runs?",
    code: `function greet() {
  let message = "hi";
}
greet();
console.log(message);`,
    answer: `
      It throws a <strong>ReferenceError</strong>: <code>message is not defined</code>.
      <code>message</code> was declared inside <code>greet()</code>, so it has function scope —
      the <code>console.log</code> on the outside cannot see it.
    `,
  },

  // ───────────────────────── Constants ─────────────────────────
  {
    topic: "Constants",
    question: "What is a constant?",
    answer: `
      A constant is a variable declared with <code>const</code> whose binding
      <strong>cannot be reassigned</strong>. Once you give it a value, the name will always
      point to that value. Use it for things that should not change.
    `,
  },
  {
    topic: "Constants",
    question: "Why must a const be given a value when it is declared?",
    answer: `
      Because a <code>const</code> can never be reassigned, there is no later chance to set its
      value. <code>const PI;</code> is a <strong>SyntaxError</strong> — you must write
      <code>const PI = 3.14159;</code>.
    `,
  },
  {
    topic: "Constants",
    question: "If const can't change, why can you still modify a const object or array?",
    answer: `
      <code>const</code> protects the <strong>binding</strong> (which value the name points to),
      not the <strong>contents</strong>. You cannot point the name at a different object, but you
      can still change properties or array items <em>inside</em> that object.
    `,
  },
  {
    topic: "Constants",
    question: "When should you choose const over let?",
    answer: `
      Use <code>const</code> by <strong>default</strong> — it signals "this should not be
      reassigned" and prevents accidental changes. Switch to <code>let</code> only when you
      actually need to reassign the variable, such as a loop counter or a running total.
    `,
  },
  {
    topic: "Constants — Code",
    question: "What happens when this code runs?",
    code: `const maxScore = 100;
maxScore = 200;`,
    answer: `
      It throws a <strong>TypeError</strong>: <code>Assignment to constant variable</code>.
      A <code>const</code> binding cannot be reassigned after it is declared.
    `,
  },

  // ───────────────────────── Loops ─────────────────────────
  {
    topic: "Loops",
    question: "What is a loop?",
    answer: `
      A loop is a structure that <strong>repeats a block of code</strong> as long as a condition
      stays true. Loops let you avoid writing the same statements over and over — for example,
      doing something once for each item in a list.
    `,
  },
  {
    topic: "Loops",
    question: "What is a for loop used for?",
    answer: `
      A <code>for</code> loop is best when you know <strong>how many times</strong> to repeat.
      It bundles the counter setup, the continue condition, and the counter update into one
      line, then runs its body once per pass.
    `,
  },
  {
    topic: "Loops",
    question: "What is a while loop?",
    answer: `
      A <code>while</code> loop repeats its body <strong>as long as a condition is true</strong>.
      It checks the condition <em>before</em> each pass. Use it when you don't know in advance
      how many repetitions you need.
    `,
  },
  {
    topic: "Loops",
    question: "How is a do...while loop different from a while loop?",
    answer: `
      A <code>do...while</code> loop runs its body <strong>first</strong>, then checks the
      condition. This guarantees the body runs <strong>at least once</strong>, even if the
      condition is false from the start.
    `,
  },
  {
    topic: "Loops",
    question: "What is an infinite loop?",
    answer: `
      An infinite loop is one whose condition <strong>never becomes false</strong>, so it never
      stops. It usually freezes the program. It happens when the counter is never updated or the
      condition can never fail — for example <code>while (true)</code> with no exit.
    `,
  },
  {
    topic: "Loops — Code",
    question: "What does this loop print?",
    code: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
    answer: `
      It prints <strong>1, then 2, then 3</strong>, on three separate lines. The counter
      <code>i</code> starts at 1, the body runs while <code>i <= 3</code>, and <code>i++</code>
      adds 1 after each pass. When <code>i</code> becomes 4 the condition fails and the loop ends.
    `,
  },

  // ───────────────────────── Parts of a loop ─────────────────────────
  {
    topic: "Parts of a Loop",
    question: "What are the three parts inside a for loop's parentheses?",
    answer: `
      <code>for (initialization; condition; final expression)</code>
      <ul>
        <li><strong>Initialization</strong> — sets up the counter, runs once</li>
        <li><strong>Condition</strong> — checked before each pass; loop continues while true</li>
        <li><strong>Final expression</strong> — runs after each pass, usually updates the counter</li>
      </ul>
    `,
  },
  {
    topic: "Parts of a Loop",
    question: "What does the initialization part of a loop do?",
    answer: `
      The initialization runs <strong>once, before the loop starts</strong>. It typically
      declares and sets the starting value of the counter variable, such as
      <code>let i = 0</code>.
    `,
  },
  {
    topic: "Parts of a Loop",
    question: "What does the condition part of a loop do?",
    answer: `
      The condition is a <strong>boolean test checked before every pass</strong>. While it is
      <code>true</code> the loop body runs again; as soon as it is <code>false</code> the loop
      stops.
    `,
  },
  {
    topic: "Parts of a Loop",
    question: "What does the final expression (update) part of a loop do?",
    answer: `
      The final expression runs <strong>after each pass of the body</strong>. It usually moves
      the counter forward — for example <code>i++</code> — so the loop eventually reaches a point
      where the condition becomes false and stops.
    `,
  },
  {
    topic: "Parts of a Loop",
    question: "What is the loop body?",
    answer: `
      The loop body is the block of code in <code>{ }</code> that <strong>runs on every
      pass</strong> of the loop. It contains the actual work the loop repeats. One full pass
      through the body is called an <strong>iteration</strong>.
    `,
  },
  {
    topic: "Parts of a Loop",
    question: "What do break and continue do inside a loop?",
    answer: `
      <ul>
        <li><code>break</code> — <strong>stops the loop entirely</strong> and moves to the code after it</li>
        <li><code>continue</code> — <strong>skips the rest of the current pass</strong> and jumps to the next iteration</li>
      </ul>
    `,
  },

  // ───────────────────────── Functions ─────────────────────────
  {
    topic: "Functions",
    question: "What is a function?",
    answer: `
      A function is a <strong>named, reusable block of code</strong> that performs a task. You
      define it once, then run it whenever you need it. Functions help you avoid repetition and
      organize your program into smaller pieces.
    `,
  },
  {
    topic: "Functions",
    question: "How do you declare a function?",
    answer: `
      Use the <code>function</code> keyword, a name, a list of parameters in parentheses, and a
      body in braces:
      <ul>
        <li><code>function sayHi() { ... }</code></li>
      </ul>
      Declaring a function does not run it — it just defines what it will do.
    `,
  },
  {
    topic: "Functions",
    question: "What does it mean to call (invoke) a function?",
    answer: `
      Calling a function means <strong>running its code</strong>. You write the function's name
      followed by parentheses: <code>sayHi()</code>. Without the parentheses you are only
      referring to the function, not running it.
    `,
  },
  {
    topic: "Functions",
    question: "What does the return statement do?",
    answer: `
      <code>return</code> sends a value <strong>back to wherever the function was called</strong>
      and immediately ends the function. A function with no <code>return</code> gives back
      <code>undefined</code>.
    `,
  },
  {
    topic: "Functions",
    question: "What is an arrow function?",
    answer: `
      An arrow function is a shorter way to write a function expression using <code>=&gt;</code>:
      <ul>
        <li><code>const add = (a, b) =&gt; a + b;</code></li>
      </ul>
      When the body is a single expression, its value is returned automatically.
    `,
  },
  {
    topic: "Functions — Code",
    question: "What does this code print?",
    code: `function double(n) {
  return n * 2;
}
console.log(double(7));`,
    answer: `
      It prints <strong>14</strong>. <code>double(7)</code> runs the function with <code>n</code>
      set to 7, computes <code>7 * 2</code>, and <code>return</code>s 14. That returned value is
      what <code>console.log</code> prints.
    `,
  },
  {
    topic: "Functions — Code",
    question: "What is the difference between these two lines?",
    code: `console.log(double);
console.log(double());`,
    answer: `
      <ul>
        <li><code>double</code> — refers to the function itself (prints the function, does not run it)</li>
        <li><code>double()</code> — the parentheses <strong>call</strong> the function and use its returned value</li>
      </ul>
    `,
  },

  // ───────────────────────── Parameters ─────────────────────────
  {
    topic: "Parameters",
    question: "What is a parameter?",
    answer: `
      A parameter is a <strong>named placeholder</strong> listed in a function's definition. It
      acts like a local variable that receives a value when the function is called — letting the
      same function work with different inputs.
    `,
  },
  {
    topic: "Parameters",
    question: "What is the difference between a parameter and an argument?",
    answer: `
      <ul>
        <li><strong>Parameter</strong> — the placeholder name in the function <em>definition</em></li>
        <li><strong>Argument</strong> — the actual value you pass in when you <em>call</em> the function</li>
      </ul>
      In <code>function greet(name)</code>, <code>name</code> is a parameter; in
      <code>greet("Sam")</code>, <code>"Sam"</code> is the argument.
    `,
  },
  {
    topic: "Parameters",
    question: "How do you give a function more than one parameter?",
    answer: `
      List them inside the parentheses, separated by commas:
      <code>function area(width, height)</code>. When called, arguments are matched to
      parameters <strong>by position</strong> — the first argument fills the first parameter.
    `,
  },
  {
    topic: "Parameters",
    question: "What is a default parameter?",
    answer: `
      A default parameter has a fallback value used when <strong>no argument is passed</strong>
      for it: <code>function greet(name = "friend")</code>. Calling <code>greet()</code> uses
      <code>"friend"</code>; calling <code>greet("Sam")</code> uses <code>"Sam"</code>.
    `,
  },
  {
    topic: "Parameters — Code",
    question: "What does this code print?",
    code: `function add(a, b) {
  return a + b;
}
console.log(add(3, 4));`,
    answer: `
      It prints <strong>7</strong>. The arguments are matched by position:
      <code>a</code> becomes 3 and <code>b</code> becomes 4. The function returns
      <code>3 + 4</code>, which is 7.
    `,
  },

  // ───────────────────────── Data types ─────────────────────────
  {
    topic: "Data Types",
    question: "What is a data type?",
    answer: `
      A data type is the <strong>kind of value</strong> a piece of data is. The type decides what
      you can do with the value — for example you can do math with numbers but not with most
      strings. JavaScript figures out types automatically.
    `,
  },
  {
    topic: "Data Types",
    question: "What is the string data type?",
    answer: `
      A string is <strong>text</strong> — a sequence of characters wrapped in quotes:
      <code>"hello"</code>, <code>'cat'</code>, or backticks <code>\`hi\`</code>. Even
      <code>"123"</code> is a string, not a number, because it is in quotes.
    `,
  },
  {
    topic: "Data Types",
    question: "What is the number data type?",
    answer: `
      The number type represents <strong>numeric values</strong> — both whole numbers and
      decimals: <code>42</code>, <code>-7</code>, <code>3.14</code>. JavaScript uses one
      <code>number</code> type for all of them.
    `,
  },
  {
    topic: "Data Types",
    question: "What is the boolean data type?",
    answer: `
      A boolean holds one of only <strong>two values</strong>: <code>true</code> or
      <code>false</code>. Booleans represent yes/no, on/off conditions and drive decisions in
      your code.
    `,
  },
  {
    topic: "Data Types",
    question: "What is the difference between undefined and null?",
    answer: `
      <ul>
        <li><code>undefined</code> — a variable exists but has <strong>not been given a value</strong> yet (JavaScript's default)</li>
        <li><code>null</code> — a value that <strong>you</strong> intentionally set to mean "empty" or "nothing"</li>
      </ul>
    `,
  },
  {
    topic: "Data Types",
    question: "What does the typeof operator do?",
    answer: `
      <code>typeof</code> returns a <strong>string naming the type</strong> of a value — such as
      <code>"string"</code>, <code>"number"</code>, <code>"boolean"</code>, or
      <code>"object"</code>. It is useful for checking what kind of value you have.
    `,
  },
  {
    topic: "Data Types — Code",
    question: "What does each line print?",
    code: `console.log(typeof "hi");
console.log(typeof 42);
console.log(typeof true);`,
    answer: `
      <ul>
        <li><code>typeof "hi"</code> → <strong>"string"</strong></li>
        <li><code>typeof 42</code> → <strong>"number"</strong></li>
        <li><code>typeof true</code> → <strong>"boolean"</strong></li>
      </ul>
      <code>typeof</code> always returns the type name as a string.
    `,
  },

  // ───────────────────────── Booleans ─────────────────────────
  {
    topic: "Booleans",
    question: "What is a boolean value?",
    answer: `
      A boolean is a value that is either <code>true</code> or <code>false</code>. Booleans are
      the foundation of decision-making — conditions in <code>if</code> statements and loops all
      evaluate to a boolean.
    `,
  },
  {
    topic: "Booleans",
    question: "What are comparison operators?",
    answer: `
      Comparison operators compare two values and produce a <strong>boolean</strong>:
      <ul>
        <li><code>===</code> equal, <code>!==</code> not equal</li>
        <li><code>&gt;</code> greater, <code>&lt;</code> less</li>
        <li><code>&gt;=</code> / <code>&lt;=</code> greater/less or equal</li>
      </ul>
    `,
  },
  {
    topic: "Booleans",
    question: "What do the logical operators && , || and ! do?",
    answer: `
      <ul>
        <li><code>&amp;&amp;</code> (AND) — true only if <strong>both</strong> sides are true</li>
        <li><code>||</code> (OR) — true if <strong>either</strong> side is true</li>
        <li><code>!</code> (NOT) — <strong>flips</strong> a boolean to its opposite</li>
      </ul>
    `,
  },
  {
    topic: "Booleans",
    question: "What does truthy and falsy mean?",
    answer: `
      In a boolean context, every value counts as either truthy or falsy. The
      <strong>falsy</strong> values are: <code>false</code>, <code>0</code>, <code>""</code>,
      <code>null</code>, <code>undefined</code>, and <code>NaN</code>. <strong>Everything
      else</strong> is truthy.
    `,
  },
  {
    topic: "Booleans",
    question: "Why prefer === over == in JavaScript?",
    answer: `
      <code>==</code> compares values but will <strong>convert types</strong> first, so
      <code>0 == ""</code> is true. <code>===</code> checks value <strong>and</strong> type with
      no conversion, giving more predictable results. Prefer <code>===</code>.
    `,
  },
  {
    topic: "Booleans — Code",
    question: "What does this print, and why?",
    code: `let age = 20;
console.log(age >= 18 && age < 65);`,
    answer: `
      It prints <strong>true</strong>. <code>age >= 18</code> is true (20 ≥ 18) and
      <code>age < 65</code> is true (20 < 65). With <code>&amp;&amp;</code>, both sides being true
      makes the whole expression <code>true</code>.
    `,
  },

  // ───────────────────────── Order of operations ─────────────────────────
  {
    topic: "Order of Operations",
    question: "What is order of operations in JavaScript?",
    answer: `
      Order of operations (operator precedence) is the set of rules deciding <strong>which parts
      of an expression are evaluated first</strong>. Like in math, it ensures
      <code>2 + 3 * 4</code> has one definite result.
    `,
  },
  {
    topic: "Order of Operations",
    question: "What is the precedence of arithmetic operators?",
    answer: `
      <ul>
        <li><code>*</code>, <code>/</code>, <code>%</code> are evaluated <strong>before</strong> <code>+</code> and <code>-</code></li>
        <li>Operators of equal precedence evaluate <strong>left to right</strong></li>
      </ul>
      So <code>2 + 3 * 4</code> is <code>2 + 12</code> = <strong>14</strong>.
    `,
  },
  {
    topic: "Order of Operations",
    question: "How do parentheses affect order of operations?",
    answer: `
      Parentheses have the <strong>highest precedence</strong> — whatever is inside them is
      evaluated first. Use them to force an order or to make your intent clear:
      <code>(2 + 3) * 4</code> = <strong>20</strong>.
    `,
  },
  {
    topic: "Order of Operations",
    question: "In a mixed condition, does && or || run first?",
    answer: `
      <code>&amp;&amp;</code> has <strong>higher precedence</strong> than <code>||</code>, so it
      is grouped first. <code>a || b &amp;&amp; c</code> is read as
      <code>a || (b &amp;&amp; c)</code>. Add parentheses when you want a different grouping.
    `,
  },
  {
    topic: "Order of Operations — Code",
    question: "What value does each line produce?",
    code: `console.log(10 - 2 * 3);
console.log((10 - 2) * 3);`,
    answer: `
      <ul>
        <li><code>10 - 2 * 3</code> → <code>*</code> first: <code>10 - 6</code> = <strong>4</strong></li>
        <li><code>(10 - 2) * 3</code> → parentheses first: <code>8 * 3</code> = <strong>24</strong></li>
      </ul>
    `,
  },

  // ───────────────────────── Objects ─────────────────────────
  {
    topic: "Objects",
    question: "What is an object in JavaScript?",
    answer: `
      An object is a collection of <strong>key-value pairs</strong> called properties. Values can
      be any type — including functions, which are then called <em>methods</em>. Objects are the
      primary way to model real-world data.
      <ul>
        <li>Access with <strong>dot notation</strong>: <code>obj.key</code></li>
        <li>Access with <strong>bracket notation</strong>: <code>obj["key"]</code></li>
      </ul>
    `,
  },
  {
    topic: "Objects",
    question: "How do you create an object with an object literal?",
    answer: `
      Wrap comma-separated <code>key: value</code> pairs in curly braces:
      <ul>
        <li><code>const dog = { name: "Rex", age: 3 };</code></li>
      </ul>
      This is the most common way to build an object in JavaScript.
    `,
  },
  {
    topic: "Objects",
    question: "What is a method?",
    answer: `
      A method is a <strong>function stored as a property</strong> of an object. It defines
      something the object can <em>do</em>. You call it with dot notation and parentheses:
      <code>dog.bark()</code>.
    `,
  },
  {
    topic: "Objects",
    question: "What is a nested object?",
    answer: `
      A nested object is an object stored <strong>as the value of a property inside another
      object</strong>. You reach inner values by chaining access:
      <code>user.address.city</code>.
    `,
  },
  {
    topic: "Objects — Code",
    question: "What does this code print?",
    code: `const car = { brand: "Toyota", year: 2020 };
console.log(car.brand);`,
    answer: `
      It prints <strong>Toyota</strong>. <code>car.brand</code> uses dot notation to read the
      value stored under the <code>brand</code> key of the <code>car</code> object.
    `,
  },

  // ───────────────────────── Object properties ─────────────────────────
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
    `,
  },
  {
    topic: "Object Properties",
    question: "What two parts make up a property?",
    answer: `
      Every property is a pair:
      <ul>
        <li>A <strong>key</strong> (also called the property name) — usually a string</li>
        <li>A <strong>value</strong> — can be any data type, including another object or a function</li>
      </ul>
    `,
  },
  {
    topic: "Object Properties",
    question: "When must you use bracket notation instead of dot notation?",
    answer: `
      Use bracket notation when the key:
      <ul>
        <li>Is stored in a <strong>variable</strong>: <code>obj[myKey]</code></li>
        <li>Contains spaces or special characters: <code>obj["first name"]</code></li>
        <li>Starts with a digit</li>
      </ul>
    `,
  },
  {
    topic: "Object Properties — Code",
    question: "What does each line print?",
    code: `const user = { name: "Ana" };
const key = "name";
console.log(user.name);
console.log(user[key]);`,
    answer: `
      Both lines print <strong>Ana</strong>. <code>user.name</code> uses the literal key
      <code>name</code>. <code>user[key]</code> first reads the variable <code>key</code>
      (the string <code>"name"</code>), then looks up that property.
    `,
  },

  // ───────────────────────── Set and get properties ─────────────────────────
  {
    topic: "Get & Set Properties",
    question: "How do you GET (read) a property's value?",
    answer: `
      Use dot or bracket notation to read the value stored under a key:
      <ul>
        <li><code>obj.key</code></li>
        <li><code>obj["key"]</code></li>
      </ul>
      If the key does not exist, you get <code>undefined</code> instead of an error.
    `,
  },
  {
    topic: "Get & Set Properties",
    question: "How do you SET (change) an existing property?",
    answer: `
      Put the property access on the <strong>left side of an <code>=</code></strong> and assign a
      new value:
      <ul>
        <li><code>dog.age = 4;</code></li>
        <li><code>dog["age"] = 4;</code></li>
      </ul>
    `,
  },
  {
    topic: "Get & Set Properties",
    question: "How do you add a brand-new property to an object?",
    answer: `
      Assign to a key that <strong>does not exist yet</strong> — JavaScript creates it:
      <code>dog.color = "brown";</code>. The same syntax both updates an existing property and
      adds a new one.
    `,
  },
  {
    topic: "Get & Set Properties",
    question: "How do you remove a property from an object?",
    answer: `
      Use the <code>delete</code> operator: <code>delete dog.color;</code>. This removes the
      property entirely — reading it afterward returns <code>undefined</code>.
    `,
  },
  {
    topic: "Get & Set Properties — Code",
    question: "What does the final line print?",
    code: `const book = { title: "JS" };
book.pages = 200;
book.title = "JavaScript";
console.log(book.title, book.pages);`,
    answer: `
      It prints <strong>JavaScript 200</strong>. <code>book.pages = 200</code> adds a new
      property, and <code>book.title = "JavaScript"</code> updates the existing one. Both changes
      are reflected when the properties are read.
    `,
  },

  // ───────────────────────── Conditionals ─────────────────────────
  {
    topic: "Conditionals",
    question: "What is a conditional?",
    answer: `
      A conditional is a structure that lets your program <strong>make decisions</strong> —
      running certain code only when a condition is <code>true</code>. It is how a program does
      different things in different situations.
    `,
  },
  {
    topic: "Conditionals",
    question: "How does an if statement work?",
    answer: `
      An <code>if</code> statement runs its block <strong>only when its condition is
      true</strong>:
      <ul>
        <li><code>if (score &gt; 50) { ... }</code></li>
      </ul>
      If the condition is false, the block is skipped.
    `,
  },
  {
    topic: "Conditionals",
    question: "What does an else clause do?",
    answer: `
      An <code>else</code> block provides an <strong>alternative</strong> — it runs when the
      <code>if</code> condition is false. Exactly one of the two blocks runs, never both.
    `,
  },
  {
    topic: "Conditionals",
    question: "What is else if used for?",
    answer: `
      <code>else if</code> lets you test <strong>several conditions in order</strong>. JavaScript
      checks each one top to bottom and runs the first block whose condition is true; the rest
      are skipped.
    `,
  },
  {
    topic: "Conditionals",
    question: "What is the ternary operator?",
    answer: `
      The ternary operator is a compact conditional <strong>expression</strong>:
      <code>condition ? valueIfTrue : valueIfFalse</code>. It produces one of two values — useful
      for quick choices like <code>let label = age &gt;= 18 ? "adult" : "minor";</code>.
    `,
  },
  {
    topic: "Conditionals",
    question: "What is a switch statement?",
    answer: `
      A <code>switch</code> compares one value against several <code>case</code> options and runs
      the matching block. <code>break</code> ends a case; <code>default</code> handles values
      that match no case. It is a tidy alternative to many <code>else if</code> branches.
    `,
  },
  {
    topic: "Conditionals — Code",
    question: "What does this code print, and why?",
    code: `let temp = 30;
if (temp > 25) {
  console.log("hot");
} else {
  console.log("cool");
}`,
    answer: `
      It prints <strong>hot</strong>. The condition <code>temp > 25</code> is true (30 > 25), so
      the <code>if</code> block runs and the <code>else</code> block is skipped.
    `,
  },
];
