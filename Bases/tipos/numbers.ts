(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('Nos salvamos');
  }

  avengers = Number('55');

  console.log({ avengers });
})();
