var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
   res.render("home/index");
});
router.get("/contactus", function(req,res){
    res.render("home/contactus");
 });
router.get("/login", function(req,res){
    res.render("home/login");
 });
 router.get("/signup", function(req,res){
   res.render("home/signup");
});
 router.get("/patients", function(req,res){
    res.render("forms/patients");
 });



module.exports = router;