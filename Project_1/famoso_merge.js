const fs = require('fs');  //on importe le module fs (file system) pour la lecture de fichiers

//tri fusion
function mergeSort(arr) {
    //on vérifie si la liste contient un élément ou moins, si oui : déjà trié ou vide
    if (arr.length <= 1) {
        return arr;
    }

    //si la liste à + d'un élément, on cherche l'indice du milieu de la liste
    const middle = Math.floor(arr.length / 2);  //on divise longueur liste par 2

    //puis on divise la liste en deux moitiés (avec slice())
    const left = arr.slice(0, middle);  //à gauche : de l'indice 0 à middle - 1
    const right = arr.slice(middle);  //à droite : de l'indice middle jusqu'à la fin

    //on appelle la fonction mergeSort de manière récursive sur les deux moitiés
    return merge(mergeSort(left), mergeSort(right));
    //fonction divise chaque moitié en parties de + en + petites, les trie et les fusionne = moitiés finales triées
    //algorithme complexité O(n log n)
}

//on fusionne les deux listes triés
function merge(left, right) {
    let result = [];  //va stocker résultat de la fusion
    let leftIndex = 0;  //position actuelle dans liste de gauche
    let rightIndex = 0;  //position actuelle dans liste de droite

    //on compare éléments des deux listes 
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {  //si élément dans liste de gauche < à élément dans liste de droite
            result.push(left[leftIndex]); //on ajoute l'élément à l'array result
            leftIndex++;  //et on incrémente la position dans liste de gauche
        } else {
            result.push(right[rightIndex]);
            rightIndex++;  //sinon, on incrémente la position dans liste de droite
        }
    }

    //si tous les élément d'une des listes on été ajoutés à result,
    //on ajoute à la fin de result les éléments restants de la liste qui n'a pas été parcourue en entier (si existants)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    //étape qui permet de combiner les parties triées d'une liste divisée en deux parties lors de la phase de fusion
}

//on va lire le fichier et trier les nombres
function sortNumbersFromFile(fileName) {
    //lire le contenu du fichier spécifié par fileName en utilisant l'encodage 'utf8' (text)
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {  //si erreur : affichée en console, si pas erreur : contenu dispo dans variable 'data'
            console.error('Erreur de lecture du fichier:', err);
            return;
        }

        //on sépare les nombres avec un espace + on les convertit grâce à map() en tableau d'entiers (avec parseInt())
        const numbers = data.split(' ').map(num => parseInt(num));
        //on trie les nombres en utilisant l'algorithme de tri fusion avec mergeSort()
        const sortedNumbers = mergeSort(numbers);
        console.log(`Tri fusion: ${sortedNumbers.length} comparaisons - [${sortedNumbers}]`);
    });
}

//on exécute le programme
const fileName = process.argv[2]; //array qui contient les arguments de lignes de commandes (0:Node.js, 1:programme.js, 2:list.txt)
if (fileName) {
    sortNumbersFromFile(fileName); //si nom de fichier fourni en argument on appelle la fonction
} else {  //sinon, on affiche un message d'erreur
    console.error('Veuillez fournir le nom d\'un fichier contenant une liste de nombres en argument.');
}
