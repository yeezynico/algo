function hasPair(arr, k) {  //on déclare une variable avec deux arguments en params (une liste et un nombre k)
  arr.sort((a, b) => a - b);  //on trie la liste pour faciliter l'itération

  //on initialise deux pointeurs pour suivre les positions dans la liste des nombres comparés
  let left = 0;  //début de liste
  let right = arr.length - 1;  //fin de liste

  //on parcourt la liste en une seule fois
  while (left < right) {
      const sum = arr[left] + arr[right];  //pour chaque paire d'éléments pointés on calcule leur somme

      if (sum === k) {
          return true;  //si somme = k : paire trouvée
      } else if (sum < k) {
          left++;  //si la somme < k : on déplace le pointeur de la gauche vers la droite
      } else {
          right--;  //si somme > k : on déplace le pointeur de la droite vers la gauche
      }
  }
  return false;  //si aucune paire trouvée
}

console.log(hasPair([10, 15, 3, 7], 17)); // true
console.log(hasPair([1, 8, 10, 21], 19)); // false

