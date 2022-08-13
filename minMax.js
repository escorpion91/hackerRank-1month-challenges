// ---------- miniMax ----------
var arr = [9, 3, 5, 7, 1];

function miniMaxSum(arr) {
  var newArr = [...arr].sort();
  var sum = 0;

  for (var i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  var max = sum - newArr[0];
  var min = sum - newArr[newArr.length - 1];

  console.log(min + ' ' + max);
  console.log(arr);
  console.log(sum);
}

miniMaxSum(arr);

// la idea es primero ordenar el Array, usando el metodo sort. Se usa un spread operator para no mutar
// el array original como podras ver.
// La idea del codigo es sumar todos (en lla variable sum) y luego restarle el minimo y con eso encuentras la maxima suma de los 4 numeros mas altos.
// Y para encontrar la minima suma, es sumar todos, y luego restarle el elemento mas alto.
// Eso lo puedes ver en la linea 12 y 13:
// A sum le quita el primer elemento del nuevo array ordenado, el cual seria el numero mas bajo, dejando como resultado la mayor suma,
// A min le quita el ultimo elemento del array.
