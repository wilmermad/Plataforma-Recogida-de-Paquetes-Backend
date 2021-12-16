const { Router } = require("express");
const router = Router()

const { getUsers,createUser,getUser, deleteUser, updateUser } = require('../controllers/users.controller');


router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:numDoc')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;