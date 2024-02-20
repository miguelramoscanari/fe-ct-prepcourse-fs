function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  letra = letra.toLowerCase();

  if (letra.lenght > 1) {
    return 'Dato incorrecto';
  } else if (vocales.includes(letra)) {
    return 'Es vocal';
  } else {
    return 'Dato incorrecto';
  }
}

module.exports = esVocal;
