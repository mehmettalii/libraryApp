// Okunacaklar
function Storage() {}
Storage.prototype.addBookToStorage = function (newLibrary) {
  let books = this.getBooksFromStorage();

  books.push(newLibrary);
  localStorage.setItem("books", JSON.stringify(books));
};
Storage.prototype.getBooksFromStorage = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};
Storage.prototype.deleteBookFromStorage = function (bookName) {
  let books = this.getBooksFromStorage();

  books.forEach(function (book, index) {
    if (book.bookName === bookName) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};

// Okunanlar
function Storage1() {}
Storage1.prototype.addBookToStorage1 = function (newBook1) {
  let books1 = this.getBooksFromStorage1();
  books1.push(newBook1);
  localStorage.setItem("books1", JSON.stringify(books1));
};
Storage1.prototype.getBooksFromStorage1 = function () {
  let books1;
  if (localStorage.getItem("books1") === null) {
    books1 = [];
  } else {
    books1 = JSON.parse(localStorage.getItem("books1"));
  }
  return books1;
};
Storage1.prototype.deleteBookFromStorage1 = function (bookName1) {
  let books1 = this.getBooksFromStorage1();

  books1.forEach(function (book1, index) {
    if (book1.bookName1 === bookName1) {
      books1.splice(index, 1);
    }
  });
  localStorage.setItem("books1", JSON.stringify(books1));
};

// Okunmuşlar
function Storage2() {}
Storage2.prototype.addBookToStorage2 = function (newBook2) {
  console.log(newBook2);
  let books2 = this.getBooksFromStorage2();
  books2.push(newBook2);
  localStorage.setItem("books2", JSON.stringify(books2));
};
Storage2.prototype.getBooksFromStorage2 = function () {
  let books2;
  if (localStorage.getItem("books2") === null) {
    books2 = [];
  } else {
    books2 = JSON.parse(localStorage.getItem("books2"));
  }
  return books2;
};
Storage2.prototype.deleteBookFromStorage2 = function (bookName2) {
  let books2 = this.getBooksFromStorage2();

  books2.forEach(function (book2, index) {
    if (book2.bookName2 === bookName2) {
      books2.splice(index, 1);
    }
  });
  localStorage.setItem("books2", JSON.stringify(books2));
};
