const eraController = {
  index: (req, res) => {
      res.render('home', {title: 'eraController'});
  },
  about: (req, res) => {
      res.render('about', {title: 'eraController'});
  },
  product: (req, res) => {
      res.render('product', {title: 'eraController'});
  },
  service: (req, res) => {
      res.render('service', {title: 'eraController'});
  },
  gallery: (req, res) => {
      res.render('gallery', {title: 'eraController'});
  },
  contact: (req, res) => {
      res.render('contact', {title: 'eraController'});
  }
};

module.exports = eraController;