
var friendList = require('../data/friends.js');

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){

    var newScore = req.body.scores;
    var array = [];
    var bestMatch = 0;


    for(var i = 0; i < friendList.length; i++){
      var diffScore = 0;

      for(var j = 0; j < newScore.length; j++){
        diffScore += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newScore[j])));
      }


      array.push(diffScore);
    }


    for(var i=0; i<array.length; i++){
      
      if(array[i] <= array[bestMatch]){
        bestMatch = i;
      
      }
    }

    var bff = friendList[bestMatch];
    res.json(bff);


    friendList.push(req.body);
  });

};