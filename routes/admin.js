const router = require('express').Router();
const adminController = require('../controllers/adminControllers');
const {upload} = require('../middlewares/multer');

// dashboard
router.get('/dashboard', adminController.viewDashboard);

// category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

// bank
router.get('/bank', adminController.viewBank);
router.post('/bank', upload, adminController.addBank);
router.put('/bank', upload, adminController.editBank);

// item
router.get('/item', adminController.viewItem);

// booking
router.get('/booking', adminController.viewBooking);

module.exports = router;