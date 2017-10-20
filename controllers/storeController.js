const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.homePage = (req, res) => {
  res.render("index");
};

exports.addStore = (req, res) => {
  res.render("editStore", { title: "Add Store" });
};

// could wrap in a 'try/catch' but we're gonna import an errorHandler function to take care of the errors
exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  res.redirect("/");
};
