// ---------- plusMinus----------

// la idea de esta function, es que le pases un array con numeros positivos, negativos y nulos, y la funcion te devuelva en términos de fracción
// y en términos de decimales, cuantos positivos, negativos y nulos hay.
// Es decir, si le pasas arr = [-4, 3, -9, 0, 4, 1], la funcion te debe retornar:
// 0.500000
// 0.333333
// 0.166667
// al igual que en fracciones
// tienen que ser 6 decimales y estar impresos en 3 SVGPathSegLinetoAbs, una por cada respuesta

var arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  var n = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else {
      zero += 1;
    }
  }
  var pos = positive / n;
  var neg = negative / n;
  var zer = zero / n;

  console.log(pos.toFixed(6), '\n' + neg.toFixed(6), '\n' + zer.toFixed(6));
}

plusMinus(arr);

// El aproach a este problema es super sencillo. Aisla en variables el total de numero positivos, nulos y negativos.
// Cómo? Primero crea las variables para el total de elementos, total positivos, total negativos y nulos.
// Luego has un for loop, el cual analizara cada elemento. Si es positivo, suma 1 al total de positivios,
// si es negativo, suma uno al total de negativos y lo mismo con cero.
// Luego creas nuevas variables para cada tipo de numero, la cual dividirá el total de ese tipo de numeros, para
// el total de elementos en el Array. Esto te devuelve una fracción.
// Ahora en el console log, se usa el metodo ya incluido en Js que te transforma una fracción a decimal, y entre
// paréntesis tienes que especificar cuantos decimales. Listo
