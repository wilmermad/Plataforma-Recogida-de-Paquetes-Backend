const { Router } = require("express");
const router = Router()

const { getUsername } = require('../controllers/users.controller');



router.route('/:usuario/:clave')
    .get(getUsername)

module.exports = router;