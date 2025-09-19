const cartes = [
{   nom : "Geai des chênes", 
    type : ["oiseau"],
    arbre : "érable",
    place : "oiseaux",
    scoring : {
        base : 3
}},

{  nom : "Gypaète barbu", 
    type : ["oiseau", "alpe"],
    arbre : "pin cembro",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : "grotte",
        valeur : 1
}},

{  nom : "Pic épeiche", 
    type : ["oiseau"],
    arbre : "sapin douglas",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "si-le-+-d-arbre", 
        cible : "arbre",
        valeur : 10
}},

{  nom : "Grand corbeau", 
    type : ["oiseau", "alpe"],
    arbre : "mélèze d'europe",
    place : "oiseaux",
    scoring : {
        base : 5, 
        condition : "" ,
        cible : "" ,
        valeur : ""
}},

{  nom : "Aigle royal", 
    type : ["oiseau", "alpe"],
    arbre : "pin cembro",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : ["plantigrade", "amphibien"],
        valeur : 1
}},

{  nom : "Boivreuil pivoine", 
    type : ["oiseau"],
    arbre : "sapin douglas",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : "insecte",
        valeur : 2
}},

{  nom : "Pinson des arbres", 
    type : ["oiseau"],
    arbre : "érable",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "si-rattaché", 
        cible : "hêtre",
        valeur : 5
}},

{  nom : "Autour des palombes", 
    type : ["oiseau"],
    arbre : "chêne",
    place : "oiseaux",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : "oiseau",
        valeur : 3
}},

{  nom : "Chouette hulotte", 
    type : ["oiseau"],
    arbre : "érable",
    place : "oiseaux",
    scoring : {
        base : 5, 
        condition : "", 
        cible : "",
        valeur : 0
}},
{   nom : "Myrtille", 
    type : ["plante"],
    arbre : "pin cembro",
    scoring : {
        base : 0,
        condition : "x_type",
        cible : "oiseau", 
        valeur : 3 
}},

{  nom : "Écureuil roux", 
    type : ["plantigrade"],
    arbre : "sapin douglas",
    place : "divers-haut",
    scoring : {
        base : 0, 
        condition : "si-rattaché", 
        cible : "chêne",
        valeur : 5
}},

{   nom : "Paon-du-jour", 
    type : ["papillon", "insecte"],
    arbre : "chêne",
    place : "papillons",
    scoring : {
        base : 0, 
        condition : "par_nom_différent", 
        cible : "papillon",
        valeur : [ 0, 3, 6, 12, 20, 35]
}},

{   nom : "Grande tortue", 
    type : ["papillon", "insecte"],
    arbre : "chêne",
    place : "papillons",
    scoring : {
        base : 0, 
        condition : "par_nom_différent", 
        cible : "papillon",
        valeur : [ 0, 3, 6, 12, 20, 35]
}},

{   nom : "Grand mars changeant", 
    type : ["papillon", "insecte"],
    arbre : "chêne",
    place : "papillons",
    scoring : {
        base : 0, 
        condition : "par_nom_différent", 
        cible : "papillon",
        valeur : [ 0, 3, 6, 12, 20, 35]
}},



{   nom : "Tabac d'Espagne", 
    type : ["papillon", "insecte"],
    arbre : "chêne",
    place : "papillons",
    scoring : {
        base : 0, 
        condition : "par_nom_différent", 
        cible : "papillon",
        valeur : [ 0, 3, 6, 12, 20, 35]
}},

    { nom : "Morio", 
        type : ["papillon", "insecte"],
        arbre : "chêne",
        place : "papillons",
        scoring : {
            base : 0, 
            condition : "par_nom_différent", 
            cible : "papillon",
            valeur : [ 0, 3, 6, 12, 20, 35]
        }},

{   nom : "Petit apollon", 
    type : ["papillon", "insecte"],
    arbre : "chêne",
    place : "papillons",
    scoring : {
        base : 0, 
        condition : "par_nom_différent", 
        cible : "papillon",
        valeur : [ 0, 3, 6, 12, 20, 35]
}},

    { nom : "Luciole", 
        type : ["insecte"],
            arbre : "sapin douglas",
        scoring : {
            base : 0, 
            condition : "par_nom", 
            cible : "Luciole",
            valeur : [0, 10, 15, 20, 20, 20, 20, 20, 20]
        }},

    { nom : "Sanglier", 
        type : ["ongulé"],
            arbre : "sapin douglas",
        scoring : {
            base : 0, 
            condition : "par_nom", 
            cible : "Marcassin",
            valeur : [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }},

    { nom : "Marcassin", 
        type : ["ongulé"],
            arbre : "sapin douglas",
        scoring : {
            base : 0, 
        }},

    { nom : "Lynx", 
        type : ["plantigrade"],
            arbre : "sapin douglas",
        scoring : {
            base : 0, 
            condition : "par_nom", 
            cible : "Chevreuil",
            valeur : [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }},

{   nom : "Lièvre d'europe", 
    type : ["plantigrade"],
    arbre : "bouleau",
    scoring : {
        base : 0,
        condition : "x_nom",
        cible : "Lièvre d'europe", 
        valeur : 1
}},
        

{   nom : "Chevreuil", 
    type : ["cervidé", "ongulé"],
    arbre : "tilleul",
    scoring : {
        base : 0,
        condition : "x_arbre",
        cible : "tilleul", 
        valeur : 3 
}},

    { nom : "Salamandre tachetée", 
        type : ["amphibien"],
            arbre : "marronnier commun",
        scoring : {
            base : 0, 
            condition : "par_nom", 
            cible : "Salamandre tachetée",
            valeur : [5, 15, 25]
        }},
    
    { nom : "Chamois", 
        type : ["alpe", "ongulé"],
            arbre : "pin cembro",
        scoring : {
            base : 0, 
            condition : "x_arbre", 
            cible : "pin cembro",
            valeur : 3
        }},

     { nom : "Marronnier commun", 
        type : ["arbre"],
            arbre : "marronnier commun",
        scoring : {
            base : 0, 
            condition : "par_nom", 
            cible : "Marronnier commun",
            valeur : [1, 4, 9, 16, 25, 36, 49]
        }},

    { nom : "Rainette verte", 
        type : ["amphibien"],
            arbre : "chêne",
        scoring : {
            base : 0, 
            condition : "x_nom", 
            cible : "Moustique",
            valeur : 5
        }},

    { nom : "Moustique", 
        type : ["insecte"],
            arbre : "bouleau",
        scoring : {
            base : 0, 
            condition : "x_type", 
            cible : "chauve-souris",
            valeur : 1
        }},

{   nom : "Grotte", 
    type : ["grotte"],
    arbre : "grotte",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : "grotte",
        valeur : 1
}},


{  nom : "Cerf élaphe", 
    type : ["cervidé", "ongulé"],
    arbre : "sapin blanc",
    scoring : {
        base : 0, 
        condition : "x_type", 
        cible : ["arbre", "plante"],
        valeur : 1
}},

{  nom : "Hêtre", 
    type : ["arbre"],
    arbre : "hêtre",
    place : 'arbre',

    scoring : {
        base : 0, 
        condition : "par_nom", 
        cible : "Hêtre",
        valeur : [0, 0, 0, 5]
}},
{   nom : "Chêne", 
    type : ["arbre"],
    arbre : "chêne",
    place : 'arbre',

    scoring : {
        base : 0,
        condition : "par_nom_différent",
        cible : "arbre", 
        valeur : [0, 0, 0, 0, 0, 0, 0, 10] 
}},

{   nom : "Tilleul", 
    type : ["arbre"],
    arbre : "tilleul",
    place : 'arbre',
    scoring : {
        base : 1,
        condition : "si-plus-de-tilleul",
        cible : "tilleul", 
        valeur : 2 
}},

{   nom : "Grand rhinolophe", 
    type : ["chauve-souris"],
    arbre : "hêtre",
    scoring : {
        base : 0,
        condition : "par_nom_différent",
        cible : "chauve-souris", 
        valeur : [0, 0, 5, 5, 5, 5] 
}},

{   nom : "Vespère de Savi", 
    type : ["chauve-souris", "alpe"],
    arbre : "sapin blanc",
    scoring : {
        base : 0,
        condition : "par_nom_différent",
        cible : "chauve-souris", 
        valeur : [0, 0, 5, 5, 5, 5] 
}},

{   nom : "Murin de Bechstein", 
    type : ["chauve-souris"],
    arbre : "hêtre",
    place : "",
    scoring : {
        base : 0,
        condition : "par_nom_différent",
        cible : "chauve-souris", 
        valeur : [0, 0, 5, 5, 5, 5]
}},

        ]
