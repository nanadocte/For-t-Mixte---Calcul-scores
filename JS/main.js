let mainJoueur1 = [];
let mainJoueur2 = [];

// régler le probème des cartes "par" tableau si + que le nombre déjà définis dans le tableau valeur

function convertirMainEnObjet(mainJoueur){
    const mainJoueurObjet = mainJoueur 
    .map(nom => cartes 
        .find(carte => carte.nom === nom)); 
        return mainJoueurObjet; 
    } 
        
function calculerScoreBase(mainJoueur){ 
    const scoreBase = mainJoueur 
    .reduce((acc, carte) => acc + carte.scoring.base, 0); 
    return scoreBase; 
    }  
    
    
function calculerScoreConditionXType(mainJoueur) { 
    const cartesParCarte = mainJoueur 
    .filter(carte => carte.scoring.condition === "x_type");
    const nbTotalType = mainJoueur 
    .flatMap(carte => carte.type) 
    .reduce((acc, type)=> { acc[type] = (acc[type] || 0) +1;
        return acc }, {}); 
        return cartesParCarte 
        .reduce((acc, carte) => {
            let totalCible = 0
            if (Array.isArray(carte.scoring.cible)){
             totalCible = carte.scoring.cible.reduce((acc, cible)=> acc + (nbTotalType[cible] || 0), 0);
            }
            else {
            totalCible = nbTotalType[carte.scoring.cible] || 0 };
        return acc +totalCible * carte.scoring.valeur ;
     }, 0)
}
        
    
function calculerScoreConditionXArbre(mainJoueur) { 
    const cartesParCarte = mainJoueur 
    .filter(carte => carte.scoring.condition === "x_arbre") 
    const nbTotalArbre = mainJoueur 
    .flatMap(carte => carte.arbre) 
    .reduce((acc, arbre)=> { acc[arbre] = (acc[arbre] || 0) +1 
        return acc }, {}); 
        return cartesParCarte 
        .reduce((acc, carte) => acc + (nbTotalArbre[carte.scoring.cible] || 0) * carte.scoring.valeur, 0) 
    }

function calculerScoreConditionXNom(mainJoueur) { 
    const cartesParCarte = mainJoueur
    .filter(carte => carte.scoring.condition === "x_nom");
    const nbCarteNom = mainJoueur
    .flatMap (carte => carte.nom)
    .reduce ((acc, nom) => { acc[nom]= (acc[nom] || 0)+1
        return acc }, {});
    return cartesParCarte
        .reduce((acc, carte) => acc + (nbCarteNom[carte.scoring.cible]|| 0) * carte.scoring.valeur, 0)
     
    }

function calculerScoreConditionParNom(mainJoueur) { 
    const cartesParNom = mainJoueur.filter(carte => carte.scoring.condition === "par_nom"); 

    // Compter combien de fois chaque nom apparaît
    const nbTotalNom = mainJoueur.reduce((acc, carte) => { 
        acc[carte.nom] = (acc[carte.nom] || 0) + 1; 
        return acc; 
    }, {}); 

    const ciblesDéjàComptées = new Set();
       
    return cartesParNom.reduce((acc, carte) => { 
        const cible = carte.scoring.cible;
        
        // Éviter de compter deux fois la même cible
        if (ciblesDéjàComptées.has(cible)) { 
            return acc; 
        } 
        ciblesDéjàComptées.add(cible); 

        const nbCopies = nbTotalNom[cible] || 0; 
        const score = carte.scoring.valeur[nbCopies - 1] || 0;  
        return acc + score; 
    }, 0); 
}

function calculerScoreConditionParNomDifférent(mainJoueur) { 
    const cartesDiff = mainJoueur
    .filter(c => c.scoring.condition === "par_nom_différent"); 
    const typesComptes = new Set(); 
    // pour ne compter qu'une seule fois chaque type cible 
    let scoreTotal = 0; 
    cartesDiff.forEach(carte => { 
        if (!typesComptes.has(carte.scoring.cible)) { 
            typesComptes.add(carte.scoring.cible); 
            const cartesTypeCible = mainJoueur
            .filter(c => c.type.includes(carte.scoring.cible)); 
            const nbCartesDifferentes = new Set(cartesTypeCible
                .map(c => c.nom)).size; 
                const scoreParCarteDiff = carte.scoring.valeur[nbCartesDifferentes - 1] || 0; 
                scoreTotal += scoreParCarteDiff; } }); 
                return scoreTotal; 
    }
         
function calculScoreTotal(mainJoueur) { 
    const scoreTotal = calculerScoreBase(mainJoueur) 
    + calculerScoreConditionXType(mainJoueur) 
    + calculerScoreConditionXArbre(mainJoueur)
    + calculerScoreConditionXNom(mainJoueur)
    + calculerScoreConditionParNom(mainJoueur)
    + calculerScoreConditionParNomDifférent(mainJoueur)
    + rattachement(mainJoueur)
    + plusArbre(mainJoueur)
    return scoreTotal 
    } 


    // Tests
function test() {
const main1Obj = convertirMainEnObjet(mainJoueur1);
const main2Obj = convertirMainEnObjet(mainJoueur2);


console.log("Score base joueur 1 : ", calculerScoreBase(main1Obj));
console.log("Score base joueur 2 : ", calculerScoreBase(main2Obj));

console.log("Score condition xtype joueur 1 : ", calculerScoreConditionXType(main1Obj));
console.log("Score condition xtype joueur 2 : ", calculerScoreConditionXType(main2Obj));

console.log("Score condition xarbre joueur 1 : ", calculerScoreConditionXArbre(main1Obj));
console.log("Score condition xarbre joueur 2 : ", calculerScoreConditionXArbre(main2Obj));

console.log("Score condition xnom joueur 1 : ", calculerScoreConditionXNom(main1Obj));
console.log("Score condition xnom joueur 2 : ", calculerScoreConditionXNom(main2Obj));

console.log("Score condition par nom différente joueur 1 : ", calculerScoreConditionParNomDifférent(main1Obj));
console.log("Score condition par nom différente joueur 2 : ", calculerScoreConditionParNomDifférent(main2Obj));

console.log("Score condition par nom joueur 1 : ", calculerScoreConditionParNom(main1Obj));
console.log("Score condition par nom joueur 2 : ", calculerScoreConditionParNom(main2Obj));

console.log("Score total joueur 1 : ", calculScoreTotal(main1Obj));
console.log("Score total joueur 2 : ", calculScoreTotal(main2Obj));
    }



function rattachement(mainJoueur){
    return mainJoueur
        .filter(c => c.scoring.condition === "si-rattaché" && c.rattachee)
        .reduce((acc, c) => acc + c.scoring.valeur, 0);
}

function plusArbre(mainJoueur){
    return mainJoueur
    .filter(carte => carte.scoring.condition === "si-le-+-d-arbre"&& carte.plusArbres)
    .reduce((acc, carte)=> acc + carte.scoring.valeur, 0)
}




let scoreText = document.querySelector(".score")



function ajouterCarte(mainJoueur, carteNom){
    const carteOriginale = cartes.find(c => c.nom === carteNom);
    if(carteOriginale){
        // Clone la carte pour qu'elle soit unique dans la main
        const carte = {...carteOriginale};

        // Si c'est une carte "si-rattaché", demander une seule fois
        if(carte.scoring.condition === "si-rattaché"){
            carte.rattachee = confirm(`Cette carte ${carte.nom} est rattachée à ${carte.scoring.cible} ?`);
        }
        else if(carte.scoring.condition === "si-le-+-d-arbre"){
            carte.plusArbres = confirm(`As-tu la plus grande forêt (arbre) ?` );
        }
        mainJoueur.push(carte);

        // Calcul du score total après ajout
        const score = calculScoreTotal(mainJoueur);
        scoreText.textContent = `Score Joueur 1 : ${score}`;
    } else {
        alert("Carte non trouvée");
    }
}