function hasPair(arr, k) {  //on déclare une variable avec deux arguments en params (une liste et un nombre k)
  const numSet = new Set();  //on créé un ensemble ( set() ) pour stocker les nombres rencontrés lors du parcours de la liste

  //on parcourt la liste une seule fois
  for (let num of arr) {  //boucle for...of permet de parcourir les éléments de la liste de manière plus simple que les boucles tradi (les parcourt un par un)
      //complément = nombre qui, additionné à un autre nombre de la liste donne le résultat souhaité (ici k)
      const complement = k - num;  //pour chaque nombre on calcule le complément nécessaire pour obtenir k

      if (numSet.has(complement)) {  //si le complément est présent dans l'ensemble : il y a une paire qui donne k
          return true;
      }

      //si le complément n'est pas présent on ajoute le nombre actuel à l'ensemble + on continue à parcourir la liste
      numSet.add(num);
  }

  return false;  //si aucune paire n'a été trouvée
}

console.log(hasPair([10, 15, 3, 7], 17));
console.log(hasPair([1, 8, 10, 21], 19));
