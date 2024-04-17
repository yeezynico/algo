function sunsetView(buildingHeights) {  //on déclare une variable avec en params la hauteur des immeubles
  let count = 0;  //on initialise le compteur à 0

  //on parcourt chaque élément de la liste avec une première boucle
  for (let i = 0; i < buildingHeights.length; i++) {
      let hasSunsetView = true;
      //puis pour chaque élément on parcourt les immeubles qui se trouvent à l'ouest avec une deuxième boucle pour vérifier si ils sont plus hauts
      for (let j = i + 1; j < buildingHeights.length; j++) {
          if (buildingHeights[j] >= buildingHeights[i]) {  //si un immeuble plus haut est trouvé à l'ouest, il bloque la vue de l'immeuble actuel
              hasSunsetView = false;  //donc pas de vue sur le coucher de soleil
              break; //on sort de la boucle car pas besoin de vérifier les autres immeubles qui se trouvent à l'ouest
          }
      }

      if (hasSunsetView) {  //par contre, si l'immeuble a une vue sur le coucher de soleil, on incrémente le compteur
          count++;
      }
  }
  return count;
}

console.log(sunsetView([3, 7, 8, 3, 6, 1]));
console.log(sunsetView([1, 4, 5, 8]));
