
export class Contact {
  id: number;
  name: {first: string, last: string};

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.name = {first: firstName, last: lastName};
  }

  static createRandom() {
    return new Contact(
      Math.floor(Math.random() * 100),
      firstNames[Math.floor(Math.random() * firstNames.length)],
      lastNames[Math.floor(Math.random() * lastNames.length)]
    );
  }
}

let firstNames = ['Brian', 'Jessica', 'Beatrice', 'Paula', 'Peter', 'Michael'];
let lastNames = ['Donovan', 'Hughes', 'Smith', 'Allen', 'Aldrin', 'Oswell'];
