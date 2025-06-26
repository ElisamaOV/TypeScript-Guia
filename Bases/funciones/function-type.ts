(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (nombre: string) => `Hola ${nombre}`;
  const saveTheWorld = () => `El mundo está salvado!`;

  let myFunction: () => string;

  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = addNumber;
  // console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction('Elisama'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
