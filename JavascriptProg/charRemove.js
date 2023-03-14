let string = "he strings are immutable in JavaScript, which means we";
console.log("orignal", string);
let result = string.replace(/[aeiou]/gi, "");
console.log("modified", result);
