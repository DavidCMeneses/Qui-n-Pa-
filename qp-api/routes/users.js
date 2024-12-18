const express = require('express');
const router = express.Router();

//TODO: Add extra user operations
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;