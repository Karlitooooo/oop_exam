class LibraryObject {
  id: string;
  title: string;
  author: string;
  publicationDate: Date;
  category: string;

  constructor(id: string, title: string, author: string, publicationDate: Date, category: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.category = category;
  }

  display(): void {
    console.log(`
    Id: ${this.id}, 
    title: ${this.title}, 
    author: ${this.author}, 
    publicationDate: ${this.publicationDate}, 
    category: ${this.category}`);
  }
}

class Book extends LibraryObject {
  numPages: number;

  constructor(id: string, title: string, author: string, publicationDate: Date, category: string, numPages: number) {
    super(id, title, author, publicationDate, category);

    this.numPages = numPages;
  }

  override display(): void {
    console.log(`
    Id: ${this.id}, 
    title: ${this.title}, 
    author: ${this.author}, 
    publicationDate: ${this.publicationDate}, 
    category: ${this.category}
    numPages: ${this.numPages}`);
  }
}

class Magazine extends LibraryObject {
  month: string;
  year: string;

  constructor(id: string, title: string, author: string, publicationDate: Date, category: string, month: string, year: string) {
    super(id, title, author, publicationDate, category);

    this.month = month;
    this.year = year;
  }

  override display(): void {
    console.log(`
    Id: ${this.id}, 
    title: ${this.title}, 
    author: ${this.author}, 
    publicationDate: ${this.publicationDate}, 
    category: ${this.category}
    month: ${this.month}
    year: ${this.year}`);
  }
}

class CD extends LibraryObject {
  duration: number;

  constructor(id: string, title: string, author: string, publicationDate: Date, category: string, duration: number) {
    super(id, title, author, publicationDate, category);

    this.duration = duration;
  }

  override display(): void {
    console.log(`
    Id: ${this.id}, 
    title: ${this.title}, 
    author: ${this.author}, 
    publicationDate: ${this.publicationDate}, 
    category: ${this.category}
    duration: ${this.duration}`);
  }
}

class DVD extends LibraryObject {
  duration: number;

  constructor(id: string, title: string, author: string, publicationDate: Date, category: string, duration: number) {
    super(id, title, author, publicationDate, category);

    this.duration = duration;
  }

  override display(): void {
    console.log(`
    Id: ${this.id}, 
    title: ${this.title}, 
    author: ${this.author}, 
    publicationDate: ${this.publicationDate}, 
    category: ${this.category}
    duration: ${this.duration}`);
  }
}

class Library {
  static numObjects: number;
  objects: LibraryObject[];

  constructor () {
    this.objects = [];
  }

  addObject(object: LibraryObject)  {
    this.objects.push(object);
    Library.numObjects++;
    return this;
  }

  static countObjects(): number {
    return Library.numObjects;
  }

  filterObjectByCategory(category: string): LibraryObject[] | string {
    const filteredObjects = this.objects.filter((obj) => obj.category === category);

    return filteredObjects.length > 0 ? filteredObjects : 'No objects founds';
  }

}


function main() {
  const library_1 = new Library();
  library_1.addObject(new DVD('1', 'Harry Potter 1', 'JK', new Date('01/01/2000'), 'Magie', 7839));
  library_1.addObject(new Book('2', 'Némo', 'Oui', new Date(), 'Enfant', 638));

  const library_2 = new Library();
  library_2.addObject(new DVD('3', 'Harry Potter 2', 'JK', new Date('01/02/2000'), 'Magie', 98512));

  console.log(Library.countObjects());
  console.log(library_1.filterObjectByCategory('Magie'));
  console.log(library_1.filterObjectByCategory('Guerre'));
}

main();