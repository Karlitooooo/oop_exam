
# Object-Oriented Programming Test

Please ensure that you have pulled the repository and created a branch with the following name format: LASTNAME_FIRSTNAME.


**Chat GPT is prohibited, Copilot must be disabled, and switching windows is forbidden under penalty of 0.**

1) Create a base class called LibraryObject with the following attributes:
	- id: string 
	- title: string
	- author: string
	- publicationDate: date
	- category: string
	
2) Implement a constructor in the base class to initialize the above attributes.

3) Implement a method called display() in the base class that prints out all the attributes of an object in a formatted manner.

4) Create four child classes that inherit from LibraryObject:
	- Book with an additional attribute called numPages (Number of pages)
	- Magazine with additional attributes called month (Month) and year (Year)
	- CD with an additional attribute called duration (Duration)
	- DVD with an additional attribute called duration (Duration)

5) Implement a constructor in each of the child classes to initialize the additional attributes.

6) Implement a method called display() in each of the child classes that calls the parent's display() method and prints out the additional attributes in a formatted manner.

7) Create a class called Library with the following attributes:
	- objects: an array of LibraryObject objects
	- numObjects: a static attribute that counts the number of objects created
	
8) Implement a constructor in Library that initializes objects to an empty array.

9) Implement a method called addObject() in Library that takes a LibraryObject object as a parameter and adds it to the objects array. The method should also increment the value of numObjects.

10) Implement a static method called countObjects() in Library that returns the value of numObjects.

11) Implement a method called filterObjectByCategory() that takes a category as a parameter and returns the filtered array. If the category does not exist in the array, the method should print that no object where found.

12) Write a main to demonstrate that the program works
