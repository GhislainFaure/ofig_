const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const bookmarksController = require("./controllers/bookmarksController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

// page article
router.get("/articles/:id", mainController.articlePage);

// page favoris
router.get("/bookmarks", bookmarksController.bookmarksPage);

// page pour ajouter une figurine aux favoris
router.get("/bookmarks/add/:id", bookmarksController.addBookmark);

// route pour supprimer un favori de la page favoris
router.get("/bookmarks/delete/:id", bookmarksController.removeBookmark);

// on exporte le router
module.exports = router;
