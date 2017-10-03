var Type = require('../models/type');

exports.type_list = function (req,res,next) {
    let listeTypes = Type.getLesTypesJSON();
    res.render('Type/type', {title: 'Gestion des listes',listeTypes : listeTypes});
    };

exports.typedetail = function (req,res,next) {
    res.send('NOT YET IMPLEMENTED');
};

exports.type_ajout_post = function (req,res) {
    res.send('NOT IMPLEMENTED');
};