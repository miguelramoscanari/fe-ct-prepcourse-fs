function esFechaValida(fecha) {
    // La función recibe un argumento "fecha".
    // Comprueba si este corresponde a una fecha válida.
    // Si es así, retorna true, sino retorna false.
    // Tu código:
    var mifecha = new Date(fecha);
    return mifecha.getMonth();

    if (Date(fecha) ) {
      return false;
    } else {
      return true;
    }
  
  }
  
  console.log(esFechaValida(new Date("2022-01-01")));
  console.log(esFechaValida("2022-01-01"));
  
  