function sunsetView(buildingHeights) {  //on déclare une variable avec en params la hauteur des immeubles
  let count = 0;   //on déclare une variable pour compter les immeubles avec vue sur l'ouest
  let maxHeight = 0;   //on déclare une variable pour suivre la hauteur maximale rencontrée jusqu'à présent

  //on parcourt la liste des hauteurs des bâtiments de la rue de l'est à l'ouest une seule fois
  for (let i = buildingHeights.length - 1; i >= 0; i--) {  //on initialise i à la longueur de la liste - 1 pour pointer vers le dernier élément, la boucle continue tant que i est >= à 0, à chaque itération on se déplace d'un élément vers la gauche avec i--
      //boucle parcourt la liste de droite à gauche en commençant du dernier élément vers le premier
      const height = buildingHeights[i];   //on déclare la hauteur de l'immeuble actuel

      //si hauteur de l'immeuble actuel > hauteur maximale jusqu'à présent
      if (height > maxHeight) {
          maxHeight = height;  //on met à jour la hauteur maximale
          count++;   //et on incrémente le compteur d'immeubles avec vue sur l'ouest
      }
  }
  return count;  //enfin, on retourne le nombre d'immeubles avec vue sur l'ouest
}

console.log(sunsetView([3, 7, 8, 3, 6, 1]));
console.log(sunsetView([1, 4, 5, 8]));
