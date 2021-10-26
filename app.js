// Form
const form = document.getElementById("bookForm");
const nameElement = document.getElementById("bookName");
const authorElement = document.getElementById("author");
const pageElement = document.getElementById("page");
const addBtn = document.getElementById("addBtn");
// Start Button
const startBtn = document.getElementById("willRead");
// Reading Library
const nameElement1 = document.getElementById("readingName");
const authorElement1 = document.getElementById("readingAuthor");
const pageElement1 = document.getElementById("readingPage");
// Finish Button
const finishBtn = document.getElementById("reading");
// Readed Library
const nameElement2 = document.getElementById("readedName");
const authorElement2 = document.getElementById("readedAuthor");
const pageElement2 = document.getElementById("readedPage");
// Delete Button
const deleteBtn = document.getElementById("readed");

// UI objesinin başlatılması
const ui = new UI();

//Will Read Storage objesinin üretilmesi
const storage = new Storage();

// Reading Storage objesinin üretilmesi
const storage1 = new Storage1();

// Readed Storage objesinin üretilmesi
const storage2 = new Storage2();

// Tüm eventlerin yüklenmesi
eventListeners();

function eventListeners() {
  // Okunacaklara Kitap ekleme
  addBtn.addEventListener("click", addBook);
  document.addEventListener("DOMContentLoaded", function () {
    let books = storage.getBooksFromStorage();
    ui.loadAllBooks(books);
  });
  // Kitabı Okunanlara alma
  startBtn.addEventListener("click", changeCategory1);
  document.addEventListener("DOMContentLoaded", function () {
    let books1 = storage1.getBooksFromStorage1();
    ui.loadAllBooks1(books1);
  });
  // Kitabı Okunmuşlara alma
  finishBtn.addEventListener("click", changeCategory2);
  document.addEventListener("DOMContentLoaded", function () {
    let books2 = storage2.getBooksFromStorage2();
    ui.loadAllBooks2(books2);
  });
  // Kitap Silme
  deleteBtn.addEventListener("click", deleteBook);
}
function addBook(e) {
  const bookName = nameElement.value;
  const author = authorElement.value;
  const page = pageElement.value;

  if (bookName === "" || author === "" || page === "") {
    // Hata
    ui.displayMessages("Tüm alanları doldurunuz..", "danger");
  } else {
    // Yeni kitabın eklenmesi
    const newLibrary = new Library(bookName, author, page);

    ui.addBookToUI(newLibrary); // Okunacakların UI kitap ekleme
    storage.addBookToStorage(newLibrary); // Okunacakların Storage kitap ekleme
    ui.displayMessages("Okunacak bir kitap daha ekledin :)", "success");
  }

  ui.clearInputs(nameElement, authorElement, pageElement);
  e.preventDefault();
}
function changeCategory1(e) {
  if (e.target.id === "start") {
    ui.changeCategory1InUI(e.target); // Okunanların UI kitap ekleme
    let bookData = storage.getBooksFromStorage();
    bookData.forEach(function (element) {
      if (
        element.bookName ===
        e.target.parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent
      ) {
        console.log(element.bookName);
        const bookName1 = element.bookName;
        const author1 = element.author;
        const page1 = element.page;
        const newBook1 = new Book1(bookName1, author1, page1);
        storage1.addBookToStorage1(newBook1); // Okunanların Storage kitap ekleme
      }
    });

    // Okunacakların Storage dan kitap silme
    storage.deleteBookFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent
    );
    ui.displayMessages("Keyifli okumalar :)", "success");
  }
  e.preventDefault();
}
function changeCategory2(e) {
  if (e.target.id === "finish") {
    debugger;
    ui.changeCategory2InUI(e.target); // Okunmuşların UI kitap ekleme
    let bookData1 = storage1.getBooksFromStorage1();
    bookData1.forEach(function (element) {
      debugger;
      if (
        element.bookName1 ===
        e.target.parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent
      ) {
        console.log(element.bookName1);
        const bookName2 = element.bookName1;
        const author2 = element.author1;
        const page2 = element.page1;
        const newBook2 = new Book2(bookName2, author2, page2);
        console.log(newBook2);
        storage2.addBookToStorage2(newBook2); // Okunmuşların Storage kitap ekleme
      }
    });
  }
  ui.displayMessages("Tebrikler! Bir kitap daha bitirdin :)", "success");
  // Okunanların Storage dan kitap silme
  storage1.deleteBookFromStorage1(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.textContent
  );

  e.preventDefault();
}
// Okunmuşların UI dan kitap silme
function deleteBook(e) {
  if (e.target.id === "delete") {
    ui.deleteBookFromUI(e.target);
  }

  // Okunmuşların Storage dan kitap silme
  storage2.deleteBookFromStorage2(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.textContent
  );
  ui.displayMessages("Bir kitap sildin :/", "danger");

  e.preventDefault();
}
