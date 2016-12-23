export class Datetime {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor() {}
  static createDate(data: {day:number, month:number, year:number}):Datetime {
    var dt = new Datetime();
    dt.day = data.day;
    dt.month = data.month;
    dt.year = data.year;
    return dt;
  }
  static createTime(data: {hours:number, minutes:number, seconds:number}):Datetime {
    var dt = new Datetime();
    dt.hours = data.hours;
    dt.minutes = data.minutes;
    dt.seconds = data.seconds;
    return dt;
  }
  static create(data: {day:number, month:number, year:number, hours:number, minutes:number, seconds:number}):Datetime {
    var dt = new Datetime();
    dt.day = data.day;
    dt.month = data.month;
    dt.year = data.year;
    dt.hours = data.hours;
    dt.minutes = data.minutes;
    dt.seconds = data.seconds;
    return dt;
  }
  static hasDate(datetime: Datetime):boolean {
    if (
      typeof datetime.day !== 'undefined' &&
      typeof datetime.month !== 'undefined' &&
      typeof datetime.year !== 'undefined'
    )
      return true;
    return false;
  }
  static hasTime(datetime: Datetime):boolean {
    if (
      typeof datetime.hours !== 'undefined' &&
      typeof datetime.minutes !== 'undefined' &&
      typeof datetime.seconds !== 'undefined'
    )
      return true;
    return false;
  }
}

export class Name {
  first: string;
  middle: string;
  last: string;
  secondLast: string;
  constructor(data: {first: string, middle: string, last: string, secondLast: string}) { 
    this.first = data.first;
    this.middle = data.middle;
    this.last = data.last;
    this.secondLast = data.secondLast;
  }
  static create(data: {first: string, middle: string, last: string, secondLast: string}):Name {
    return new Name(data);
  }
}