var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

//var Contact = require('./contacts');

class Contact {
  constructor(
    public id: number,
  public firstName: string,
  public email: string,
  public gender: string) {}
}

function getContacts(): Contact[] {
  return contacts;
}

function getContactById(contactId: number): Contact {
  return contacts.find(c => c.id === contactId);
}

function getContactFieldByKey(key: string, contact: Contact): any {
  return contact[key];
}

function saveContactField(data: any, key: string, contact: Contact): any {
  return null;
}

var contacts = [
  new Contact(1, 'Julio Vinicio', 'jvini@mail.com', 'male'),
  new Contact(2, "Abigail Porter", 'abigail.porter@mail.com', 'female'),
  new Contact(3, "Martin Craig", 'martinc@mail.com', 'male')
];


// HTTP Server
router.route('/')
  .get(function (req: any, res: any, next: any) {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));   // serve the angular app
  });

/*app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '..', 'index.html'));   // serve the angular app
 });*/

router.route('/api/contacts')
  .get(function (req: any, res: any, next: any) {
    console.log('getting contacts!');
    res.json(getContacts());
  });

/*app.get('/api/contacts', (req, res) => {
 console.log('getting contacts!');
 res.json(getContacts());
 });*/

router.route('/api/contacts/:id')
  .get(function (req: any, res: any, next: any) {
    res.json(getContactById(parseInt(req.params.id)));
  });

/*app.get('/api/contacts/:id', (req, res) => {
 res.json(getContactById(parseInt(req.params.id)));
 });*/

router.route('/api/contacts/:id/:key')
  .get(function (req: any, res: any, next: any) {
    var contact = getContactById(parseInt(req.params.id));
    res.json(getContactFieldByKey(req.params.key, contact));
  })

  .put(function(req: any, res: any, next: any) {
    console.log(req.body);
  });

module.exports = router;
