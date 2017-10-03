var express = require('express');
var router = express.Router();

var offreController = require('../controllers/offreController');

/* GET all Offres */
router.get('/',offreController.offre_List);

//GET specific offre
router.get('/:id',offreController.offre_detail);

//POST one Offre
router.post('/',offreController.offre_ajout_post);

// GET page.



module.exports = router;