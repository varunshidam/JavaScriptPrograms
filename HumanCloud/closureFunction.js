const outerFunction = (a) => {
  let b = 55;
  const innerfunction = () => {
    let sum = a + b;
    console.log(`Sum of Two Numbers ${a} & ${b} is : ${sum}`);
  };
  innerfunction();
}; 

outerFunction(11);

// Clousere is combination of function which provide a lexical enivironment
// within which the function was declared

// clousere is action that is inner function can have access to the outer function variable
// function variable as well as global variable
