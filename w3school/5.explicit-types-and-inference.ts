// Type Annotations and Inference:
// TypeScript offers two ways to work with types:
// 1. Explicit Typing: You explicitly declare the type of a variable
// 2. Type Inference: TypeScript automatically determines the type based on the assigned value

// When to Use Each Approach
// 1. Use explicit types for:
//   a. Function parameters and return types
//   b. Object literals
//   c. When the initial value might not be the final type
// 2. Use type inference for:
//   a. Simple variable declarations with immediate assignment
//   b. When the type is obvious from the context

// Explicit Type Annotations
// Explicit typing means you tell TypeScript exactly what type a variable should be:

// String
const greeting: string = "Hello, TypeScript!";

// Number
const userCount: number = 42;

// Boolean
const isLoading: boolean = true;

// Array of numbers
const scores: number[] = [100, 95, 98];

// Function with Explicit Types
// Function with explicit parameter and return types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'

// Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its initial value:

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

// Object Literal Inference
// TypeScript infers the shape of the object
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

// TypeScript knows these properties exist
console.log(user.name); // OK
console.log(user.email); // Error: Property 'email' does not exist

// Type Safety in Action
// One of TypeScript's main benefits is catching type-related errors during development.

// Let's look at how TypeScript helps prevent common mistakes.
// Explicit Type Mismatch
let username: string = "alice";
username = 42; // Error: Type 'number' is not assignable to type 'string'

// Implicit Type Mismatch
let score = 100; // TypeScript infers 'number'
score = "high"; // Error: Type 'string' is not assignable to type 'number'

// When TypeScript Can't Infer Types
// While TypeScript's type inference is powerful, there are cases where it can't determine the correct type.

// In these situations, TypeScript falls back to the any type, which disables type checking.
// Common Cases for any
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');

// 2. Variables declared without initialization
let something; // Type is 'any'
something = "hello";
something = 42; // No error
