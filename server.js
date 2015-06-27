var restify = require('restify');

function respond(req, res, next) {
  res.send('blaa');
  next();
}

var server = restify.createServer();
server.get('/parse/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});