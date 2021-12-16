const { Router } = require("express");
const router = Router()

const { getRecogidas,createRecogida,getRecogida, deleteRecogida, updateRecogida } = require('../controllers/recogidas.controller');


router.route('/')
    .get(getRecogidas)
    .post(createRecogida);

router.route('/:numDoc')
    .get(getRecogida)
    .delete(deleteRecogida)
    .put(updateRecogida);

module.exports = router;