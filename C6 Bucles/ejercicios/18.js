function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let salida = 1;
  for (let i = a ; i <= b; i++) {
    salida = salida * i;
  }
  return Math.abs(salida);

}

module.exports = productoEntreNúmeros;