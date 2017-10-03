exports.offre_detail = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Detail Offre id : ' + req.params.id);
};

exports.offre_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Offre create POST');
};

exports.offre_List = function (req,res,next) {
    res.render('offres',{title: 'Liste des offres',tousLesLieux:lesLieux});
};

/*
const Lieu = require('../models/lieu');
const Type = require('../models/type');

//Données
let lesLieux = [];
let unLieu1 = new Lieu(1,"Nantes");
lesLieux.push(unLieu1);
let unLieu2 = new Lieu(2,"Paris");
lesLieux.push(unLieu2);
let unLieu3 = new Lieu(3,"Mans");
lesLieux.push(unLieu3);
let unLieu4 = new Lieu(4,"Poil");
lesLieux.push(unLieu4);

let lesTypes = [];
let unType1 = new Type(1,"Aller");
lesTypes.push(unType1);
let unType2 = new Type(2,"Retour");
lesTypes.push(unType2);

let lesOffres = [];
lesOffres.push(lesLieux[1],lesTypes[2]);
lesOffres.push(lesLieux[2],lesTypes[1]);
lesOffres.push(lesLieux[3],lesTypes[1]);
lesOffres.push(lesLieux[4],lesTypes[1]);
*/
