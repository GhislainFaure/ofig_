const dataMapper = require("../dataMapper");

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    try {
      const figurines = await dataMapper.getAllFigurines();
      res.render('accueil', {
        figurines
      });
    } catch (error) {
      console.error(error);
      res.send('Something went wrong dude!');
      
    }

   
  },

  // méthode pour la page article
  articlePage: async (req, res) => {
    const figurine = await dataMapper.getOneFigurine(req.params.id);
   
    res.render('article', {
      figurine,
    });
  
  },
};

module.exports = mainController;
