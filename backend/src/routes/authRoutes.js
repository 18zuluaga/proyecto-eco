const express = require('express');
const {
  register,
  login,
  verifyToken,
  updateProfile,
  deleteProfile,
} = require('../controllers/users/authController');

const { register_product,getAllProducts, getProductsByIdCategory} = require('../controllers/products/authControllers')
const { register_order } = require('../controllers/orders/authControllers');

const router = express.Router();

router.delete('/delete-profile/:id', deleteProfile);
router.patch('/update-profile/:id', updateProfile);
router.post('/login', login);
router.post('/register', register);
router.post('/verify-token', verifyToken);
router.post('/register-product', register_product);
router.post('/register-order', register_order);
router.get('/get-products', getAllProducts);
router.get('/get-product-by-id-category', getProductsByIdCategory)


router.get('/products');
router.get('/products/:id');
router.post('/products');
router.put('/products/:id');
router.delete('/products/:id');
router.patch('/products/:id');

router.get('/categories');

module.exports = router;
