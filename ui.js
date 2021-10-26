function UI() {}
//Okunacaklaraın UI kitap ekleme
UI.prototype.addBookToUI = function (newLibrary) {
  const bookList = document.getElementById("willRead");

  bookList.innerHTML += `
        <tr>
            <td>${newLibrary.bookName}</td>
            <td>${newLibrary.author}</td>
            <td>${newLibrary.page}</td>
            <td>
               <button class="btn btn-success" id="start" type="submit">Start</button>
            </td>
        </tr>
    `;
};
UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};
UI.prototype.displayMessages = function (message, type) {
  const bookForm = document.getElementById("bookForm");

  // Alert divinin oluşturulması
  const div = document.createElement("div");

  div.className = `alert alert-${type}`;
  div.textContent = message;

  bookForm.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
};
// Sayfa Yenilenince Okunacak Kitapların yüklenmesi
UI.prototype.loadAllBooks = function (books) {
  const bookList = document.getElementById("willRead");

  books.forEach(function (book) {
    bookList.innerHTML += `
    <tr>
      <td>${book.bookName}</td>
      <td>${book.author}</td>
      <td>${book.page}</td>
      <td>
      <button class="btn btn-success" id="start" type="submit">Start</button>
      </td>
    </tr>
    `;
  });
};
// Kitapların Okunacaklardan okunanlara aktarılması
UI.prototype.changeCategory1InUI = function (element) {
  const readingList = document.getElementById("reading");
  readingList.innerHTML += `
    <tr>
      <td>${element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent}</td>
      <td>${element.parentElement.previousElementSibling.previousElementSibling.textContent}</td>
      <td>${element.parentElement.previousElementSibling.textContent}</td>
      <td>
      <button class="btn btn-success" id="finish" type="submit">Finish</button>
      </td>
    </tr>
  `;
  element.parentElement.parentElement.remove();
};
// Sayfa Yenilenince Okunan Kitapların yüklenmesi
UI.prototype.loadAllBooks1 = function (books1) {
  const readingList = document.getElementById("reading");

  books1.forEach(function (book1) {
    readingList.innerHTML += `
    <tr>
      <td>${book1.bookName1}</td>
      <td>${book1.author1}</td>
      <td>${book1.page1}</td>
      <td>
      <button class="btn btn-success" id="finish" type="submit">Finish</button>
      </td>
    </tr>
    `;
  });
};
// Kitapların Okunanlardan okunmuşlara aktarılması
UI.prototype.changeCategory2InUI = function (element) {
  const readedList = document.getElementById("readed");
  readedList.innerHTML += `
    <tr>
      <td>${element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent}</td>
      <td>${element.parentElement.previousElementSibling.previousElementSibling.textContent}</td>
      <td>${element.parentElement.previousElementSibling.textContent}</td>
      <td>
      <button class="btn btn-danger" id="delete" type="delete">Delete</button>
      </td>
    </tr>
  `;
  element.parentElement.parentElement.remove();
};
// Sayfa Yenilenince Okunmuş Kitapların yüklenmesi
UI.prototype.loadAllBooks2 = function (books2) {
  const readedList = document.getElementById("readed");

  books2.forEach(function (book2) {
    readedList.innerHTML += `
    <tr>
      <td>${book2.bookName2}</td>
      <td>${book2.author2}</td>
      <td>${book2.page2}</td>
      <td>
      <button class="btn btn-danger" id="delete" type="delete">Delete</button>
      </td>
    </tr>
    `;
  });
};
// Okunmuşlardan Kitap Silme
UI.prototype.deleteBookFromUI = function (element) {
  element.parentElement.parentElement.remove();
};
