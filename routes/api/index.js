const router = require("express").Router();
const contactRoutes = require("./books");

// contact routes
router.use("/contacts", contactRoutes);

module.exports = router;
