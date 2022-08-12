const express = require("express");
 const app=express();
 app.use(express.json());
 require("dotenv").config();

const dbConnect=require("./dbConnect");
const Person = require("./Model/Person");

dbConnect(); 

app.post("/add", async (req, res) => {
    try {
      let newPerson = new Person ({ ...req.body });
      let result = await newPerson.save();
      res.send({ result, msg: "successfuly added" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
  
  app.get("/getall", async (req, res) => {
    try {
      let result = await Person.find();
      res.send({ result, msg: " All person" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
  
  app.get("/:id", async (req, res) => {
    try {
      const id = req.params;
      let result = await Person.findOne({ _id: req.params.id });
      res.send({ result, msg: " ONE person" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
  
  app.put("/:id", async (req, res) => {
    try {
      let result = await Person.findOneAndUpdate({
        _id: req.params.id,
        $set: { ...req.body },
      });
      res.send({ result, msg: " ONE person" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
  
  app.delete("/:id", async (req, res) => {
    try {
      let result = await Person.findOneAndRemove({
        _id: req.params.id,
      });
      res.send({ msg: " delete person" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });

 app.listen(process.env.PORT, (err)=> err
 ? console.log(err)
 : console.log("server is runnig..."+ process.env.PORT));