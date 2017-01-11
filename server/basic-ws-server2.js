"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var cors = require('cors');
//var serverUrl = "localhost";
var serverUrl = "192.168.1.11";
var httpPort = 3008;
// WebSocket Server
var ws_1 = require("ws");
var wsServer = new ws_1.Server({ port: 8085 });
console.log('WebSocket server is listening on port 8085');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // cross-origin resource sharing    <===  CAREFUL! BIG SECURITY RISK!! this must NOT remain in production
app.use('/', express.static(path.join(__dirname, '..', '')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
// Contacts
// todo: this should be done by the db instead
var Contact = (function () {
    function Contact(id, firstName, email, gender) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.gender = gender;
    }
    return Contact;
}());
function getContacts() {
    return contacts;
}
function getContactById(contactId) {
    return contacts.find(function (c) { return c.id === contactId; });
}
function getContactFieldByKey(key, contact) {
    return contact[key];
}
function saveContactField(data, key, contact) {
    contact[key] = data;
    return true;
}
var contacts = [
    new Contact(1, 'Julio Vinicio', 'jvini@mail.com', 'male'),
    new Contact(2, "Abigail Porter", 'abigail.porter@mail.com', 'female'),
    new Contact(3, "Martin Craig", 'martinc@mail.com', 'male')
];
// HTTP Server
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html')); // serve the angular app
});
app.get('/api/contacts', function (req, res) {
    res.json(getContacts());
});
app.get('/api/contacts/:id', function (req, res) {
    res.json(getContactById(parseInt(req.params.id)));
});
app.get('/api/contacts/:id/:key', function (req, res) {
    var contact = getContactById(parseInt(req.params.id));
    res.json(getContactFieldByKey(req.params.key, contact));
});
app.put('/api/contacts/:id/:key', function (req, res) {
    var contact = getContactById(parseInt(req.params.id));
    var result = saveContactField(req.body.value, req.params.key, contact);
    wsServer.clients.forEach(function each(client) {
        console.log('sending update signal [contact field]');
        client.send(JSON.stringify(req.params));
    });
    res.send('OK: ' + result);
});
var httpServer = app.listen(httpPort, serverUrl, function () {
    var port = httpServer.address().port;
    console.log('HTTP Server is listening on %s', port);
});
/*wsServer.broadcast = function broadcast(data) {
  wsServer.clients.forEach(function each(client) {
    client.send(data);
  });
}*/
// WebSocket Server
/*wsServer.on('connection',
    websocket => {
        websocket.send('This message was pushed by the WebSocket server');
        websocket.on('message',
            message => console.log("Server received: %s", message));
    });*/
// Broadcasting to all clients
/*wsServer.on('connection',
  websocket => wsServer.clients.forEach(
    client =>client.send('This message was pushed by the WebSocket server')));*/
//# sourceMappingURL=basic-ws-server2.js.map