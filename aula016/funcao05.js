// RECURSIVIDADE
function fatorial(x) {
    if (x == 1) {
        return 1
    } else {
        return x * fatorial(x-1)
    }
}

console.log(fatorial(5));

console.log('----------------------------');

//  exemplo do chatGPT
function contagemRegressiva(n) {
    if (n <= 0) {
      console.log("BOOM!");
      return;
    }
    console.log(n);
    contagemRegressiva(n - 1);
  }
  
  contagemRegressiva(5);
  // Saída: 5 4 3 2 1 BOOM!
  