function Fibonacci(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    if (fibonacci[i] % 2 == 1) {
      console.log(fibonacci[i]);
    }
  }
  return fibonacci;
}

Fibonacci(30);

//RODAR EM NODE