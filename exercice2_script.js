"use strict" ;

let a=4;
let b=4;
let c=3;
//-------------------------------------------------------------------------
if(a==b){ ;
    console.log(`a égal b`)
}else if(a==c){ ;
    console.log(`a égal c`)
}else { ;
    console.log("égal à rien")
}


//-------------------------------------------------------------------------

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

// let nbr=  getRandomIntInclusive(1,100);
a=  getRandomIntInclusive(1,100);
console.log(a)


//-------------------------------------------------------------------------
//Boucle

for(let i=0; i<a;i++){;
console.log("OKLM");
}


//-------------------------------------------------------------------------
//Boucle
//Tableau
let names=[]
console.log(names.push("Vincent",));
console.log(names.push("Paul"));
console.log(names.push("Arthur"));
console.log(names);

console.log(names[0]+=(" va à la pêche")); // Chaque valeur à la main
console.log(names[1]+=(" va à la pêche"));
console.log(names[2]+=(" va à la pêche"));

for(let n=0;n<names.length;n++){; //Automatiquement pour toutes les valeurs
    names[n]+=" avec des appâts";
    console.log(names[n]);
}