const router = require('express').Router();

const adminController = require('../controllers/adminControllers');
const {upload, uploadMultiple} = require('../middlewares/multer');

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
router.delete('/bank/:id', adminController.deleteBank);

// item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', upload, adminController.addFeature);


// booking
router.get('/booking', adminController.viewBooking);

module.exports = router;