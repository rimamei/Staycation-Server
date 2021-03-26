const router = require('express').Router();
const apiController = require('../controllers/apiControllers');
const {upload, uploadMultiple} = require('../middlewares/multer');


// signin
router.get('/landing-page', apiController.landingPage);

module.exports = router;