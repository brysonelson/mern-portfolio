const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/contacts/"
router.route("/")
  // .get(contactsController.findAll)
  .post(contactsController.create);

module.exports = router;
