import {Datetime, Name} from './types';

export class Contact {
  id: number;
  name: Name;
  birthdate: Datetime;
  tags: Array<string>;

  constructor(
    id: number,
    name: {first: string, middle: string, last: string, secondLast: string},
    birthdate: {day: number, month: number, year: number},
    tags: Array<string>) {
      this.id = id;
      this.name = Name.create(name);
      this.birthdate = Datetime.createDate(birthdate);
      this.tags = tags;
  }
}

export class ContactService {
  getContacts(): Array<Contact> {
    return contacts.map(function(contact) {
      return new Contact(contact.id, contact.name, contact.birthdate, contact.tags);
    });
  }

  getContactById(contactId: number): Contact {
    var contact = contacts.find(p => p.id == contactId);
    return new Contact(contact.id, contact.name, contact.birthdate, contact.tags);
  }
}

var contacts = [
  {
    "id": 0,
    "name": {first: "Daniel", middle: "Alfred", last: "Cooper", secondLast: ""},
    "birthdate": {day: 14, month: 6, year: 1993},
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 1,
    "name": {first: "Valerie", middle: "", last: "Guttenberg", secondLast: ""},
    "birthdate": {day: 14, month: 6, year: 1993},
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 2,
    "name": {first: "Patricia", middle: "", last: "Veracruz", secondLast: "Oviedo"},
    "birthdate": {day: 14, month: 6, year: 1993},
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 3,
    "name": {first: "Yao", middle: "", last: "Ming", secondLast: ""},
    "birthdate": {day: 14, month: 6, year: 1993},
    "tags": ["pelo rojo", "ingeniero"]
  }
];