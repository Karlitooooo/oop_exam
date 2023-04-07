<?php

class LibraryObject
{
      public int   $id;
      public string  $title;
      public string $author;

      public DateTime $publicationDate;

      public string $category;

    /**
     * @param $id
     * @param $title
     * @param $author
     * @param $publicationDate
     * @param $category
     */
    public function __construct($id, $title, $author, $publicationDate, $category)
    {
        $this->id = $id;
        $this->title = $title;
        $this->author = $author;
        $this->publicationDate = $publicationDate;
        $this->category = $category;
    }

    public function display() {
        return var_dump($this->id, $this->title, $this->author, $this->publicationDate, $this->category);

    }



}

class Book extends LibraryObject {
    public int $numPages;

    /**
     * @param int $numPages
     */
    public function __construct(int $numPages)
    {
        $this->numPages = $numPages;
    }

    public function display()
    {
        return var_dump($this->numPages);
    }
}

class Magazine extends LibraryObject {
    public DateTime $month;
    public DateTime $year;
    public function __construct($month, $year)
    {
        $this->month = $month;
        $this->year = $year;
    }
    public function display()
    {
        return var_dump($this->month, $this->year);
    }

}

class CD extends LibraryObject {
    public int $duration;
    public function __construct($duration)
    {
        $this->duration = $duration;
    }
    public function display()
    {
        return var_dump($this->duration);
    }

}

class DVD extends LibraryObject {
    public int $duration;

    public function __construct($duration)
    {
        $this->duration = $duration;
    }
    public function display()
    {
        return var_dump($this->duration);
    }


}

class Library {
    public array $libraryObjects;

    static int $numObjects;

    /**
     * @param array $libraryObjects
     */
    public function __construct()
    {
        $this->libraryObjects = [];
    }
    public function addObject($libraryObject) {

        $this->libraryObjects = array_push($libraryObject);

        Library::$numObjects = Library::$numObjects + 1;
    }
}