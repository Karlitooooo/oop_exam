class LibraryObject {
	id: string 
	title: string
	author: string
	publicationDate: Date
	category: string

	constructor = 
		this.id
		this.title
		this.author
		this.publicationDate
		this.category
	

	display() => print : LibraryObject;

}

class Book extends LibraryObject {
	super(id: string, title:string, author:string, publicationDate: Date, category:string)
	numPages: number;

	constructor this.numPages

	display() = 
}

class Magazine extends LibraryObject {
	super(id: string, title:string, author:string, publicationDate: Date, category:string)
	month: number;
	year: number;
}

class CD extends LibraryObject {
	super(id: string, title:string, author:string, publicationDate: Date, category:string)
	duration: number;

	constructor: number = this.duration;
}

class DVD extends LibraryObject {
	super(id: string, title:string, author:string, publicationDate: Date, category:string)
	duration: number

	constructor: number = this.duration;
	
}

class Library{
	objects: [] = LibraryObject[];
	//numObjects:

	construstor: [] = this.objects
}