class LibraryObject {

  public id: string;
  public title: string;
  public author: string;
  public publicationDate: Date;
  public category: string;

  constructor(id:string, title: string, author: string, publicationDate: Date, category: string) {}

  display() {
    console.log('id : ', this.id)
    console.log('title : ', this.title)
    console.log('author : ', this.author)
    console.log('publicationDate : ', this.publicationDate)
    console.log('category : ', this.category)
  }

}


class Book extends LibraryObject {
  
  numPages: number;

  super(numPages:number) {}


  displayChild() {
    this.display
    console.log('numPages', this.numPages)
  }
}

class Magazine extends LibraryObject {
  
  month: Date;
  year: Date;

  super(month: Date, year: Date) {}

  displayChild() {
    this.display
    console.log('month', this.month)
    console.log('year', this.year)
  }
}

class CD extends LibraryObject {
  
  
  duration: number;

  super(duration: number) {}

  displayChild() {
    this.display
    console.log('duration', this.duration)
  }
}

class DVD extends LibraryObject {
  
  duration: number;

  super(duration: number) {}

  displayChild() {
    this.display
    console.log('duration', this.duration)
  }
}

class Library {
  objects:Array<Object>
  numObjects:number

  constructor(objects:Array<Object>) {
    objects = [];
  }

  static countObjects() {
    // return this.numObjects
  }

  addObject(LibraryObject) {
    this.objects.push(LibraryObject);
    this.numObjects ++;
  }

  filterObjectByCategory(category) {
    this.objects.filter(category)
  }

}