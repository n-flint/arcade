var express = require("express");
var router = express.Router();
var Game = require('../../../models').Game;

/* get all the games */
router.get("/", function(req, res, next) {
  Game.findAll()
    .then(games => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(games));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    });
});

/* keep this at the bottom */
module.exports = router;
