const contactRouter = require("express").Router();
const isAuth = require("../middleware/isAuth");

const {
  showContacts,
  getContact,
  contactExists,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contacts");
//see all contacts
contactRouter.get("/contacts", [isAuth, showContacts]);
//get one contact
contactRouter.get("/contacts/:id", [isAuth, getContact]);

//add new contact
contactRouter.get("/contacts/add", (req, res) => {
  res.render("contacts/add-contact");
});
contactRouter.post("/contacts/add", [isAuth, contactExists, createContact]);
//delete contact
contactRouter.delete("/contacts/delete/:number", [
  isAuth,
  contactExists,
  deleteContact,
]);

//edit contact
contactRouter.put("/contact/edit", updateContact);

module.exports = contactRouter;
