const router = require("express").Router();

const Description = require("../models/description.model");

router.route("/").get((req, res) => {
  Description.find()
    .then((decs) => res.json(decs))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const description = req.body.description;

  const newCityDecs = new Description({
    description,
  });
  newCityDecs
    .save()
    .then(() => res.json("City description added!!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
