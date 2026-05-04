const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');

// --- MODIFICACIÓN PARA LA ENTREGA ---
// Comenta la línea original:
// router.get('/', getProducts);

// Agrega esta línea temporal:
router.get('/', (req, res) => {
    res.status(200).json([
        { _id: "1", name: "Laptop HP", price: 2500, category: "Electrónica" },
        { _id: "2", name: "Mouse Gamer", price: 80, category: "Accesorios" }
    ]);
});
// ------------------------------------

router.get('/:id', getProductById);

// Rutas protegidas (solo admin)
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;