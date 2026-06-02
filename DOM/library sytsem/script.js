
let books = [
  { id: 1, title: "The Great Gatsby",   author: "F. Scott Fitzgerald", type: "physical", status: "available" },
  { id: 2, title: "Clean Code",         author: "Robert C. Martin",    type: "physical", status: "borrowed"  },
  { id: 3, title: "Sapiens",            author: "Yuval Noah Harari",   type: "ebook",    status: "ebook", fileSize: 8 },
];
let nextId = 4;


const toggleFormBtn   = document.getElementById("toggle-form");
const addBookSection  = document.querySelector(".add-book-section");
const bookForm        = document.getElementById("book-form");
const typeSelect      = document.getElementById("type");
const ebookDetails    = document.getElementById("ebook-details");
const bookList        = document.getElementById("book-list");

toggleFormBtn.addEventListener("click", () => {
  const isHidden = addBookSection.style.display === "none";
  addBookSection.style.display = isHidden ? "block" : "none";
  toggleFormBtn.textContent    = isHidden ? "Close Form" : "Add New Book";
});
typeSelect.addEventListener("change", () => {
  ebookDetails.style.display = typeSelect.value === "ebook" ? "block" : "none";
});
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title  = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const type   = typeSelect.value;

  if (!title || !author) return;

  const book = {
    id:     nextId++,
    title,
    author,
    type,
    status: type === "ebook" ? "ebook" : "available",
  };

  if (type === "ebook") {
    book.fileSize = parseInt(document.getElementById("file-size").value) || 1;
  }

  books.push(book);
  bookForm.reset();
  ebookDetails.style.display  = "none";
  addBookSection.style.display = "none";
  toggleFormBtn.textContent    = "Add New Book";
  renderBooks();
});


function borrowBook(id) {
  const book = books.find((b) => b.id === id);
  if (book && book.status === "available") {
    book.status = "borrowed";
    renderBooks();
  }
}


function returnBook(id) {
  const book = books.find((b) => b.id === id);
  if (book && book.status === "borrowed") {
    book.status = "available";
    renderBooks();
  }
}
function removeBook(id) {
  if (!confirm("Remove this book from the library?")) return;
  books  = books.filter((b) => b.id !== id);
  renderBooks();
}

function renderBooks() {
  if (!books.length) {
    bookList.innerHTML = '<p style="color:#7f8c8d;">No books in the library yet.</p>';
    return;
  }

  bookList.innerHTML = books.map((book) => buildCard(book)).join("");
}

function buildCard(book) {
  const isEbook    = book.type === "ebook";
  const isBorrowed = book.status === "borrowed";

  // Card CSS class
  const cardClass = isEbook ? "book-card ebook" :
                    isBorrowed ? "book-card borrowed" : "book-card available";

  // Status badge
  const badgeClass = isEbook    ? "status-badge status-ebook"    :
                     isBorrowed ? "status-badge status-borrowed"  : "status-badge status-available";
  const badgeText  = isEbook    ? "E-Book"    :
                     isBorrowed ? "Borrowed"  : "Available";

  // Action buttons
  let actions = "";
  if (isEbook) {
    actions = `
      <span class="book-meta">📁 ${book.fileSize} MB</span>
      <button class="btn btn-remove" onclick="removeBook(${book.id})">Remove</button>`;
  } else if (isBorrowed) {
    actions = `
      <button class="btn btn-return" onclick="returnBook(${book.id})">Return</button>
      <button class="btn btn-remove" onclick="removeBook(${book.id})">Remove</button>`;
  } else {
    actions = `
      <button class="btn btn-borrow" onclick="borrowBook(${book.id})">Borrow</button>
      <button class="btn btn-remove" onclick="removeBook(${book.id})">Remove</button>`;
  }

  return `
    <div class="${cardClass}">
      <p class="book-title">${escapeHtml(book.title)}</p>
      <p class="book-meta">by ${escapeHtml(book.author)}</p>
      <p class="book-meta">${isEbook ? "E-Book" : "Physical Book"}</p>
      <span class="${badgeClass}">${badgeText}</span>
      <div class="book-actions">${actions}</div>
    </div>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


renderBooks();