(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Auxilio!');
  console.log('Hola mundo');
})();
