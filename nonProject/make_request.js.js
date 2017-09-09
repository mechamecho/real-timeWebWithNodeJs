//Making an http request
var http=require('http');

// http.createServer().listen(8080);

var makeRequest = function(message) {
  var options = {
  host:'localhost', port:8080, path: '/', method: 'POST'
  }
  var request= http.request(options, function(response){
    response.on('data', function(data){
      console.log(data);//logs response body
    });
  });
  request.write(message);//begins request and triggers
  //the function
  request.end()//finishes request
}
makeRequest("Here's looking at you kid");
module.exports=makeRequest;
