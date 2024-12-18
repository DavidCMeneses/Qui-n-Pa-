const express = require('express');
const router = express.Router();

const {
    getCategories,
    getCategoryById,
    getCategoriesByActivity,
    getCategoriesByUser,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controllers/categoryController');

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.get('/categories/activities/:id', getCategoriesByActivity);
router.get('/categories/users/:id', getCategoriesByUser);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;