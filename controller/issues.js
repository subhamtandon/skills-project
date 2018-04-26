var mongoose = require('mongoose');
var issueModel = require('../model/issues')

var issueSave = (req,res) => {
  if (req.session.user.gender=="Male") {
    hostel="RHR"
  }
  else{
    hostel="KCHR"
  }
  // console.log(req.session.user);
  // console.log(req.body);
  var details = {
    regno: req.session.user.regno,
    type: req.body.type,
    date: Date.now(),
    description: req.body.description
  }
  console.log(details);
  var issuemodel = new issueModel(details);
  issuemodel.save()
    .then(item => {
      res.send("item saved to the database")
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
    res.render('issues', {hos:hostel, msg:'alert("Your complaint has been received")'})
};

module.exports = {"issueSave":issueSave};