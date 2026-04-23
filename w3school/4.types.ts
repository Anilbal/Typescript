// TypeScript Simple Types
// TypeScript enhances JavaScript by adding static types.

// JavaScript and TypeScript Primitives
// The most basic types in TypeScript are called primitives.
// These types form the building blocks of more complex types in your applications.
// TypeScript includes all JavaScript primitives plus additional type features.

// Boolean
// Represents true/false values.
let isActive: boolean = true;

// Number
// Represents both integers and floating-point numbers.
// TypeScript uses the same number type for all numeric values.
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal
let float: number = 3.14; // Floating point

// String
// Represents text data.
// Can use single quotes ('), double quotes ("), or backticks (`) for template literals.
let color: string = "blue";
let fullName: string = "John Doe";
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

// BigInt (ES2020+)
// Represents whole numbers larger than 253 - 1.
const hugeNumber = BigInt(9007199254740991);

// Symbol
// Creates unique identifiers.
// Useful for creating unique property keys and constants.

const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]); // "This is a unique property"
