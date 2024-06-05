let express = require("express");

let categoryRouter = express.Router();

const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]

  categoryRouter.route("/")
    .get((req,res)=>{
        res.send(category);
    })
  

  categoryRouter.route("/details")
  .get((req,res)=>{
    res.send("category details");
  })

  module.exports= categoryRouter