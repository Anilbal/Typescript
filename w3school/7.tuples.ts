// TypeScript Tuples
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

// As you can see we have a number, boolean and a string.
// But what happens if we try to set them in the wrong order:

// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, "Coding God was mistaken", 5];

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);

// You can see the new value.
// Tuples only have strongly defined types for the initial values:
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
// throws error as it is readonly.
ourReadonlyTuple.push("Coding God took a day off");

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
