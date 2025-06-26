(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0));
  avenger = 'Dr Strange';
  avenger = 150.1235146;
  console.log(<number>avenger.toFixed(2));
  console.log(exists);
  console.log(power);
})();
