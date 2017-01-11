var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
//var Contact = require('./contacts');
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
    return null;
}
var contacts = [
    new Contact(1, 'Julio Vinicio', 'jvini@mail.com', 'male'),
    new Contact(2, "Abigail Porter", 'abigail.porter@mail.com', 'female'),
    new Contact(3, "Martin Craig", 'martinc@mail.com', 'male')
];
// HTTP Server
router.route('/')
    .get(function (req, res, next) {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html')); // serve the angular app
});
/*app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '..', 'index.html'));   // serve the angular app
 });*/
router.route('/api/contacts')
    .get(function (req, res, next) {
    console.log('getting contacts!');
    res.json(getContacts());
});
/*app.get('/api/contacts', (req, res) => {
 console.log('getting contacts!');
 res.json(getContacts());
 });*/
router.route('/api/contacts/:id')
    .get(function (req, res, next) {
    res.json(getContactById(parseInt(req.params.id)));
});
/*app.get('/api/contacts/:id', (req, res) => {
 res.json(getContactById(parseInt(req.params.id)));
 });*/
router.route('/api/contacts/:id/:key')
    .get(function (req, res, next) {
    var contact = getContactById(parseInt(req.params.id));
    res.json(getContactFieldByKey(req.params.key, contact));
})
    .put(function (req, res, next) {
    console.log(req.body);
});
module.exports = router;
//# sourceMappingURL=api.router.js.map