/**
 * Created by shigeru on 16/05/13.
 */
var request = require('superagent');
var jsonp = require('superagent-jsonp');
var url = "https://aed.azure-mobile.net/api/aedgroup/";


request.get(url).use(jsonp)
  .end(function (err, res) {
    console.log("GET Response: " + res.body);
  });


