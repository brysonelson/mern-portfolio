const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/contact/"
router.route("/contact")
  // .get(contactsController.findAll)
  .post(contactsController.create);

module.exports = router;
