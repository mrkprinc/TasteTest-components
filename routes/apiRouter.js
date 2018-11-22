const router = require('express').Router();
const [recipeRoutes, variationRoutes] = [require('./recipeRoutes'), require('./variationRoutes')];

router.use('/recipe', recipeRoutes);
router.use('/variation', variationRoutes);

module.exports = router;