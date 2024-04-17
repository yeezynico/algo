function hasPair(arr, k) {  //on déclare une variable avec deux arguments en params (une liste et un nombre k)
  //on parcourt la liste avec une première boucle
  for (let i = 0; i < arr.length; i++) {
      //à chaque itération, on parcourt la liste avec une deuxième boucle
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === k) {  //pour vérifier si la somme de ces deux éléments est égale à k
              return true; //si oui return true
          }
      }
  }
  return false; //si aucune paire n'a été trouvée
}

//test avec une liste qui doit retourner true
const numbers = [10, 15, 3, 7];
const k = 17;

//test avec une liste qui doit retourner false
//const numbers = [1, 8, 10, 21];
//const k = 19;

console.log("Result :");
console.log(hasPair(numbers, k));
