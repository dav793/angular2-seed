export class Datetime {
  constructor(
    public day: number,
    public month: number,
    public year: number) {
  }
  toString():string {
    return this.day +'/'+ this.month +'/'+ this.year;
  }
}

export class Name {
  constructor(
    public first: string,
    public middle: string,
    public last: string,
    public secondLast: string) { 
  }
  toString():string { 
    return this.first + (this.middle ? ' '+this.middle[0].toUpperCase()+'.' : '') + ' ' + this.last + (this.secondLast ? ' '+this.secondLast : '');
  } 
}

export class Contact {
  constructor(
    public id: number,
    public name: Name,
    public birthdate: Datetime,
    public tags: Array<string>) {
  }
}

export class ContactService {
  getContacts(): Array<Contact> {
    return contacts.map(p => new Contact(p.id, p.name, p.birthdate, p.tags));
  }

  getContactById(contactId: number): Contact {
    return contacts.find(p => p.id == contactId);
  }
}

var contacts = [
  {
    "id": 0,
    "name": new Name("Daniel", "Alfred", "Cooper", ""),
    "birthdate": new Datetime(14, 6, 1993),
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 1,
    "name": new Name("Valerie", "", "Guttenberg", ""),
    "birthdate": new Datetime(14, 6, 1993),
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 2,
    "name": new Name("Patricia", "", "Veracruz", "Oviedo"),
    "birthdate": new Datetime(14, 6, 1993),
    "tags": ["pelo rojo", "ingeniero"]
  },
  {
    "id": 3,
    "name": new Name("Yao", "", "Ming", ""),
    "birthdate": new Datetime(14, 6, 1993),
    "tags": ["pelo rojo", "ingeniero"]
  }
];