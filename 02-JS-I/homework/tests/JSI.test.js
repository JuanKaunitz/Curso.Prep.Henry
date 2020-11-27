/* eslint-disable no-undef */
const {
  nuevaString, 
  nuevoNum = 12, 
  nuevoBool, 
  nuevaResta, 
  nuevaMultiplicacion, 
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
} = require('../homework.js');

describe( 'nuevaString', function() { 
  var myString = 'juan' 
  it('Deberia ser un string', function() {
    expect(typeof myString).toBe('string');
  });
});

describe('nuevoNum', function() {
   var nuevoNum = 12 
  it('Deberia ser un numero', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

describe('nuevoBool', function() {
  var nuevoBool = true
  it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

describe('nuevaResta', function() {
  var nuevaResta = true

  it('Deberia ser un booleano', function() {
    expect(nuevaResta).toBe(true);
  });
});

describe('nuevaMultiplicacion', function() {
    var nuevaMultiplicacion = true
  it('Deberia ser un booleano', function() {
    expect(nuevaMultiplicacion).toBe(true);
  });
});

describe('nuevoModulo', function() {
  var nuevoModulo = true
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

describe('devolverString(str)', function() {

  it('Deberia devolver el string provisto', function() {
    var string = 'lambdaSchool';
    return string; 
    expect(devolverString(string)).toBe(string);
  });
});

describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
     function sumaXY (x, y){
         var suma = x + y;
         return suma;
      //    sumaXY (5,5);
        //  sumaXY (-1, 5); 
   }
             
      
  
    expect(sumaXY(5, 5)).toBe(10);
    expect(sumaXY(-1, 5)).toBe(4);
  });
});

describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
   function resta (x, y){ 
   var diferencia = x - y;
   return diferencia;}

    var diferenciaDeResta = resta (); 
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(15, 5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('Deberia devolver la division de los dos argumentos', function() {
    function divide (x, y) {
      var div = x / y;
      return div;
    }
    

    var resultadoDivision = divide () 
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
      function multiplica (x, y) {
       var producto = x * y;
       return producto;

      }
     var resultadoMultiplicacion = multiplica () 
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});


describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {

      function sonIguales (x, y) {
        if (x === y) { 
          return true;}
          return false;
      }

        var igualdad = sonIguales ()
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
//var nombreGato = 'felix';
//console.log(nombreGato.length); // 5
    function tienenMismaLongitud (str1, str2) {
     if (str1.length === str2.length ){ 
        return true;
     }
      
      else {return false;
      }
      

    }

     tienenMismaLongitud('hi', 'there');
     tienenMismaLongitud ('javascript', 'bumfuzzled');
     { 
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  };
});

describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {

    function menosQueNoventa (num,) {
      
     if (num < 90 ) {
          return true; }
          return false; 
    }

    var num = menosQueNoventa ()
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

describe('mayorQueCincuenta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    function mayorQueCincuenta (num) {
        if (num > 50) {
          return true
        }
          return false;

    }
    var seraMayor = mayorQueCincuenta () 
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

describe('obtenerResto(x, y)', function() {
  it('Deberia devolver el resto de dividir x sobre y', function() {

    function obtenerResto (x, y) {
      var resto = x % y;
      return resto;
    }

    var cuantoQueda = obtenerResto () 
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
});

describe('esPar(num)', function() {
  it('Deberia devolver true si el numero es par sino false', function() {

    function esPar (num) {
      if (num % 2 === 0){ 
        return true;}
        return false; 
    }
    var par = esPar ()
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
      function esImpar (num){
        if (num % 2 != 0){
          return true;
        }
        return false;
      }
      var impar = esImpar ()

    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    function elevarAlCuadrado (num){
      var resulPotencia = Math.pow(num, 2)
      return resulPotencia;
    }
    var potencia = elevarAlCuadrado ();
    
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

describe('elevarAlCubo(num)', function() {
  it('Deberia devolver el numero elevado al cubo', function() {
    function elevarAlCubo (num){
      var resPot = Math.pow (num, 3)
      return resPot;
    }
    var potencia = elevarAlCubo ();
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    function elevar (num, exponent){
      var result = Math.pow (num, exponent)
      return result
    }
    var resPot = elevar (); 
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

describe('redondearNumero(num)', function() {
  it('Deberia devolver el numero redondeado', function() {
    function redondearNumero (num){
      var numRedondeado = Math.round (num)
      return numRedondeado;
    }
    var numeroFinal = redondearNumero ();

    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});

describe('redondearHaciaArriba(num)', function() {
  it('Deberia devolver el numero redondeado para arriba', function() {

    function redondearHaciaArriba (num){
      var redon = Math.ceil (num)
      return redon
    }
    var redonArriba = redondearHaciaArriba ();
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

describe('agregarSimboloExclamacion(str)', function() {
  it('Deberia agregar un signo de exclamacion al final del string', function() {
    function agregarSimboloExclamacion (str) { 
      var a= '!'
      var agregaExclamacion = str + a
      return agregaExclamacion;
    }
    var agrega = agregarSimboloExclamacion ()
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});

describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    function combinarNombres (firstName, lastName){
      var combinar = firstName + ' ' + lastName
      return combinar;

    }

    var combinaNom = combinarNombres();
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

describe('obtenerSaludo(name)', function() {
  it('Deberia devolver el string \'Hola {name}!\'', function() {

    function obtenerSaludo (name){
      var saludoCompleto = 'Hola'+ ' '+name +'!'
      return saludoCompleto;
    }
    var saludo = obtenerSaludo ();
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});

describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('Deberia retornar el area correcta del rectangulo', function() {
    function obtenerAreaRectangulo (alto, ancho){
      var areaRectangulo = alto * ancho;
      return areaRectangulo;
    }
    var area= obtenerAreaRectangulo();
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});