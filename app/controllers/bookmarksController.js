
const dataMapper = require("../dataMapper");

const bookmarksController = {
  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    res.render('favoris', {
      bookmarks: req.session.bookmarks,
    })
  },
  addBookmark: async (req, res) => {
    
    const id = req.params.id;

      // on regarde si une figurine avec l'id passé en params est deja presente ou non dans les favoris
    const figInBookmarks = req.session.bookmarks.find( f => {
      return f.id === Number(id)
    }); 
    // si figInBookmarks n'existe pas ( undefined)
    if(!figInBookmarks) {
      // je récupere la figurine dans la base de donnée
      const figurine = await dataMapper.getOneFigurine(id);
      req.session.bookmarks.push(figurine);// je l'ajoute

    }
    // dans tous les cas on redirige vers bookmarks
    res.redirect('/bookmarks');
  },
  removeBookmark:  (req, res ) => {
    const id = req.params.id;
    req.session.bookmarks = req.session.bookmarks.filter( b => b.id !== Number(id));
    res.redirect('/bookmarks');
  },
  checkBookmarksSet: (req, res, next) => {
    if (!req.session.bookmarks) 
      req.session.bookmarks = [];
      next();
  }
};

module.exports = bookmarksController;
