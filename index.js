// Teams and Players on those teams
class Title {
    constructor(title, author) {
    this.title = title;
    this.author = author;
    }

describe() {
    //console.log(`${this.title} by ${this.author} is a ${this.category} book.`)
    return `${this.title} is written by ${this.author}.`;
    }
}

class BookClass {
    constructor(category) {
    this.category = category;
    this.titles = [];
    }

addTitle(title) {
    if (title instanceof Title) {
    this.titles.push(title);
    } else {
    throw new Error(`You can only add instance of Title. 
    argument is not a title: ${title}`);
    }
}

describe() {
    return `${this.category} has ${this.titles.length} titles.`;
    }
}

class Menu { // what drives the application and our choices
    constructor() {
    this.bookClasses = [];
    this.selectedBookClass = null; // manage one team at a time
    }
    
start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createBookClass();
    break;
    case '2' :
    this.viewBookClass();
    break;
    case '3' :
    this.deleteBookClass();
    break;
    case '4' :
    this.displayBookClasses();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new book class
    2) view a book class
    3) delete a book class
    4) display all book class
    `);
    }

showBookClassMenuOptions(bookClassInfo) {
        return prompt(`
        0) back
        1) add a new title
        2) delete a title
        -----------------
        ${bookClassInfo}
        `);
        }

displayBookClasses() {
    let bookClassString = '';
    for (let i = 0; i < this.bookClasses.length; i++) {
    bookClassString += i+ ') ' + this.bookClasses[i].category + '\n';
    }
    alert(bookClassString);
    }

createBookClass() {
    let category = prompt('Enter category for new book class: ');
    this.bookClasses.push(new BookClass(category));
    }

viewBookClass() {
    let index = prompt("Enter the index of the title of the Book Class that you want to view:");
    if (index > -1 && index < this.bookClasses.length) {
     this.selectedBookClass = this.bookClasses[index];
    let description = 'Book Class: ' + this.selectedBookClass.category + '\n';
    description += ' ' + this.selectedBookClass.describe() + '\n ';
    for (let i = 0; i < this.selectedBookClass.titles.length; i++) {
    // description += i + ') ' + this.selectedBookClass.titles[i].author + ' - '
    // + this.selectedBookClass.titles[i].category + '\n';
    description += i + ') ' + this.selectedBookClass.titles[i].describe() + '\n';
    }
    let selection1 = this.showBookClassMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createTitle();
    break;
    case '2' :
    this.deleteTitle();
    }
    } // validate user input
    }

    
   
    
    deleteBookClass() {
        let index = prompt('Enter the index of the title of the bookClass that you wish to delete: ');
        if (index > -1 && index < this.bookClass.length) {
        this.bookClass.splice(index,1);
        }
        }
    
    

    createTitle() {
        let title = prompt('Enter title for new book: ');
        let author = prompt('Enter author for new book: ');
        this.selectedBookClass.titles.push(new Title(title, author));
      // this.selectedBookClass.addTitle(new TItle(title, author));
        }
        
    deleteTitle() {
        let index = prompt('Enter the index of the title that you wish to delete: ');
        if (index > -1 && index < this.selectedBookClass.titles.length) { this.selectedBookClass.titles.splice(index,1);
        }
    } 
}

    let menu = new Menu();
    menu.start();
