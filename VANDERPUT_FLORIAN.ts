class LibraryObject {
    id: string
    title: string
    author: string
    publicationDate: Date
    category: string
    constructor(id: string, title: string, author: string, publicationDate: Date, category: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.category = category;
    }
    display(){
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            publicationDate: this.publicationDate,
            category: this.category,
        }
    }
}

class Book extends LibraryObject{
    numPages:number
    constructor(id: string, title: string, author: string, publicationDate: Date, category: string, numPages: number) {
        super(id, title, author, publicationDate, category);
        this.numPages = numPages;
    }
    display(): { author: string; id: string; title: string; category: string; publicationDate: Date; numPages: number } {
        return {...super.display(), numPages:this.numPages};
    }
}
class Magazine extends LibraryObject{
    month: Date
    year: Date
    constructor(id: string, title: string, author: string, publicationDate: Date, category: string, month: Date, year: Date) {
        super(id, title, author, publicationDate, category);
        this.month = month;
        this.year = year;
    }
    display(): { author: string; id: string; title: string; category: string; publicationDate: Date; month: Date; year:Date } {
        return {...super.display(), month:this.month, year:this.year};
    }
}
class CD extends LibraryObject{
    duration:number
    constructor(id: string, title: string, author: string, publicationDate: Date, category: string, duration: number) {
        super(id, title, author, publicationDate, category);
        this.duration = duration;
    }
    display(): { author: string; id: string; title: string; category: string; publicationDate: Date; duration:number } {
        return {...super.display(), duration:this.duration};
    }
}
class DVD extends LibraryObject{
    duration:number
    constructor(id: string, title: string, author: string, publicationDate: Date, category: string, duration: number) {
        super(id, title, author, publicationDate, category);
        this.duration = duration;
    }
    display(): { author: string; id: string; title: string; category: string; publicationDate: Date; duration:number } {
        return {...super.display(), duration:this.duration};
    }
}

class Library{
    objects: Array<LibraryObject>
    numObjects:number
    constructor() {
        this.objects = []
    }
    addObject(newObject: LibraryObject){
        this.objects.push(newObject)
        this.numObjects = this.numObjects + 1
    }
    countObjects(){
        return this.numObjects
    }
    filterObjectByCategory(category:string){
        if (this.objects.some(object => object.category === category)){
            return this.objects.filter(object => object.category === category)
        }else{
            return "object where found"
        }
    }
}

const TEST = new Library()
TEST.addObject({
    id: "1",
    title: "Barbie",
    author: "Florian",
    publicationDate: Date.now(),
    category: "DVD",
})
