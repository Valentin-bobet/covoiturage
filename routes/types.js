let express = require('express');
let router = express.Router();

let TypeController = require('../controllers/typeController');

router.get('/',TypeController.type_list);

router.get('/:id', TypeController.type_detail);

router.post('/',TypeController.type_ajout_post);

module.exports = router;