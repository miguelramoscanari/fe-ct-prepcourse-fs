function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  mensaje = '';
  switch (color) {
    case 'blue':
      mensaje = 'This is ' + color;
      break;

    case 'red':
      mensaje = 'This is ' + color;
      break;

    case 'green':
      mensaje = 'This is ' + color;
      break;

    case 'orange':
      mensaje = 'This is ' + color;
      break;

    default:
      mensaje = 'Color not found';
      break;  
  }
  return mensaje;
}

module.exports = colors;
