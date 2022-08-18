// la idea de esta funcion es que se le pasan dos arrays. el primer arr puede tener elementos repetidos o no.
// el segundo array no tiene repetidos.
// la funcion tiene que buscar cuantas veces hay los elementos del segundo array en el primer array.
// por ejemplo, si el primer array es [3,2,2,1] y el segundo array es [1 , 2, 3, 4], la funcion debe
// retornar [1,2,3, 0]

// esta funcion es la manera mas optimizada de ejecutar
// function matchingStrings(strings, queries) {
//     const memory = {};
//     for(const string of strings) memory[string] = (memory[string] || 0) +1;

//     return queries.map(query=> memory[query] || 0)
// }

// el aproach mas practico es, coger el primer index del segundo Array, y scanear el primer array por si hay matches
function matchingStrings(strings, queries) {
  const counter = new Map();
  strings.forEach((s) => {
    if (!counter.has(s)) counter.set(s, 1);
    else counter.set(s, counter.get(s) + 1);
  });
  return queries.map((q) => counter.get(q) || 0);
}
