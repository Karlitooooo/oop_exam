interface LibraryObject {
	id: string 
	title: string
	author: string
	publicationDate: Date
	category: string
}

class LibraryObject {
	constructor({id, title, author, publicationDate, category}: LibraryObject) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
		this.category = category;
	}

	display() {
		console.log(this.id, this.title, this.author, this.publicationDate, this.category)
	}
}

interface Book extends LibraryObject {
	numPages: number
}

class Book extends LibraryObject {
	numPages: number

	constructor({ id, title, author, publicationDate, category, numPages }: Book) {
		super();

		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
		this.category = category;
		this.numPages = numPages;
	}

	display() {
		console.log(this.id, this.title, this.author, this.publicationDate, this.category, this.numPages)
	}
}

interface Magazine extends LibraryObject {
	month: Date
	year: Date
}

class Magazine extends LibraryObject {
	month: Date
	year: Date

	constructor({ id, title, author, publicationDate, category, month, year }: Magazine) {
		super();

		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
		this.category = category;
		this.month = month
		this.year = year
	}

	display() {
		console.log(this.id, this.title, this.author, this.publicationDate, this.category, this.month, this.year)
	}
}

interface CD extends LibraryObject {
	duration: number
}

class CD extends LibraryObject {
	duration: number

	constructor({ id, title, author, publicationDate, category, duration }: CD) {
		super();

		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
		this.category = category;
		this.duration = duration
	}

	display() {
		console.log(this.id, this.title, this.author, this.publicationDate, this.category, this.duration)
	}
}

interface DVD extends LibraryObject {
	duration: number
}

class DVD extends LibraryObject {
	duration: number

	constructor({ id, title, author, publicationDate, category, duration }: DVD) {
		super();

		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
		this.category = category;
		this.duration = duration
	}

	display() {
		console.log(this.id, this.title, this.author, this.publicationDate, this.category, this.duration)
	}
}

interface Library {
	objects: LibraryObject[]
	numObjects: number
}

class Library {
	constructor({ objects, numObjects }: Library) {
		this.objects = []
	}

	addObject(object) {
		this.objects.push(object)
		numObjects++
	}
}