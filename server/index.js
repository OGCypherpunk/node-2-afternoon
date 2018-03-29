const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const pc = require("./controllers/products_controller");
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // console.log(dbInstance);
  app.set("db", dbInstance);
});




app.get("/api/products", pc.getAll);
app.get("/api/product/:id", pc.getOne);
app.put("/api/product/:id", pc.update);
app.post("/api/product/", pc.create);
app.delete("/api/product/:id", pc.delete);




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Death star initiated - target aquired on port ${port}`);
});
