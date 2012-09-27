/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.login = function(req, res){
  req.session.userid = req.params.id;
  console.log(req.session.userid);
  res.send("hi "+ req.params.id + "~!");
};

exports.greeting = function(req, res){
  console.log("current user : " + req.session.userid);
  if(!!req.session.userid){
    res.send("hi "+ req.session.userid + "~! nice to see you~! is this your first time ?");
  }else{
    res.send("who are you?");
  }
};
