# la idea de esta funcion es que se le pasan dos arrays. el primer arr puede tener elementos repetidos o no.
# el segundo array no tiene repetidos.
# la funcion tiene que buscar cuantas veces hay los elementos del segundo array en el primer array.
# por ejemplo, si el primer array es [3,2,2,1] y el segundo array es [1 , 2, 3, 4], la funcion debe
# retornar [1,2,3, 0]

# el aproach mas practico es, coger el primer index del segundo Array, y scanear el primer array por si hay matches
# esos matches contarlos y agregarlo a un array, y luego cuenta por otros matches, y
# se les hace append.

def matchingStrings(strings, queries):
    res = []

    for i in range(len(queries)):
        counter = 0
        for j in range(len(strings)):
            if queries[i] == strings[j]:
                counter += 1
        res.append(counter)
    return res
