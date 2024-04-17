function sunsetView(buildingHeights) {  //on déclare une variable avec en params la hauteur des immeubles
  const ouestView = [];  //on créé une pile (stack) pour stocker les hauteurs des bâtiments avec vue sur l'ouest

  //on parcourt en une fois la liste des hauteurs des bâtiments de la rue
  for (let height of buildingHeights) {
      //si hauteur de l'immeuble actuel >= hauteur du dernier immeuble dans la pile = il a une vue sur l'ouest
      while (ouestView.length > 0 && height >= ouestView[ouestView.length - 1]) {
        ouestView.pop();  //on retire de la pile (avec la méthode pop()) les immeubles plus petits qui n'ont pas de vue sur l'ouest
      }
      ouestView.push(height);   //on ajoute ensuite (avec la méthode push()) la hauteur de l'immeuble actuel à la pile
  }

  return ouestView.length;   //la taille de la pile représente le nombre d'immeubles avec vue sur l'ouest (on la retourne comme résultat de la fonction)
}

console.log(sunsetView([3, 7, 8, 3, 6, 1]));
console.log(sunsetView([1, 4, 5, 8]));

