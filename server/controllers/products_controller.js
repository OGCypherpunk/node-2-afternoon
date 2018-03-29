module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body

    dbInstance
      .create_product([name, description, price, imageurl])

      .then((product) => res.status(200).json(product))
      .catch(() => res.status(500).json());
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    
    dbInstance
      .read_product( [id] )
      .then((product) => res.status(200).json(product))
      .catch(() => res.status(500).json());
  },





  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then( (products) => res.status(200).json(products) )
      .catch(() => res.status(500).json());
  },





  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { desc } = req.query;

    dbInstance
      .update_product( [id , desc] )
      .then((product) => res.status(200).json(product))
      .catch(() => res.status(500).json());
  },





  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product( [id] )
      .then((product) => res.status(200).json(product))
      .catch(() => res.status(500).json());
  }
};
