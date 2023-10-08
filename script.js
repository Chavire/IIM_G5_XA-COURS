"use strict";//Force javascript a dire si il y a des erreurs

var prenom="Xavier" ; //Creer variable prenom avec la valeur Xavier
console.log(prenom) ; //Montre ce qu'il y a dans la variable prenom, dans la console

// let et var définissent tous deux une variable, on préfère utiliser let

let nom= "d'Andurain" ; //Creer variable nom avec la valeur d'Andurain
console.log(nom) ; //Montre ce qu'il y a dans la variable nom, dans la console
console.log(typeof nom) ; //Montre le type de variable, dans la console | String = chaine de caractere

let age = 18 ; //Creer variable age avec la valeur 18
console.log(age) ; //Montre ce qu'il y a dans la variable age, dans la console
console.log(typeof age) ; //Montre le type de variable, dans la console | Number = Nombre entier ou décimal
let nbDecimal = 49.3 ; //Creer variable nbDecimal avec la valeur 49.3
console.log(typeof nbDecimal) ; //Montre le type de variable, dans la console | Number = Nombre entier ou décimal

let ouvert =true; //Boolean = valeur vrai/faux
console.log(prenom + nom + age) ; //Montre les 3 varaibles dans la console sans espace
console.log(prenom +" "+ nom +" "+ age) ; //Montre les 3 varaibles dans la console avec espaces
console.log( "Il s'appelle " + prenom +" "+ nom +" et a "+ age +" ans") ; //Montre les 3 varaibles dans la console en ajoutant du texte
console.log (`Hello ${prenom} ${nom} vous avez ${age} ans`) ; //Alt Gr + 7 pour les symboles `` | ${} pour mettre tel quel le texte

console.log(" ") ; // Fais un espace dans la console

console.log(age + nbDecimal) ; //additionne les valeurs
console.log(age - nbDecimal) ; //soustrait les valeurs
console.log(age * nbDecimal) ; //multiplie les valeurs
console.log(age / nbDecimal) ; //divise les valeurs


let compliment= "sur une échelle de 1 à 10 je dirai que ton charisme est supérieur à"
console.log(`Salut ${compliment} ${nbDecimal}`)


prenom ="Bebou"; //Change la valeur de la variable en Bebou
console.log(prenom)
age = "22"; //Change la valeur de la variable en 22
