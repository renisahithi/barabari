//local storage means stoing data in in the browser around[10mb]
//session storage means it can store date around [5mb] in the browser
//both can store data by the help of browser
//both utilize by any lastest browserlike html5
//once we close the tab in session when we enter again we have to enter the dats but in the local it can be accessible from any window
//local storage never expires nut session storage does 

const DEFAULT_SETTINGS = Object.freeze({
  storageKey: "bookmarksData",
  categories: ["Work", "Study", "Entertainment"],
  defaultCategory: "Work",
});

let bookmarks = [];
let currentFilter = "All";

const form = document.getElementById("bookmarkForm");
const bookmarksList = document.getElementById("bookmarksList");
const filterButtons = document.querySelectorAll(".filter-btn");

function saveBookmarks() {
  localStorage.setItem(DEFAULT_SETTINGS.storageKey, JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const storedBookmarks = localStorage.getItem(DEFAULT_SETTINGS.storageKey);
  if (storedBookmarks) {
    bookmarks = JSON.parse(storedBookmarks);
  } else {
    bookmarks = [];
  }
}

function filterBookmarks(categoryFilter) {
  if (categoryFilter === "All") {
    return bookmarks;
  }

  const filtered = [];
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].category === categoryFilter) {
      filtered.push(bookmarks[i]);
    }
  }
  return filtered;
}

function renderBookmarks() {
 
  bookmarksList.innerHTML = "";

  const filteredBookmarks = filterBookmarks(currentFilter);

 
  if (filteredBookmarks.length === 0) {
    bookmarksList.innerHTML = "<p>No bookmarks found.</p>";
    return;
  }

  filteredBookmarks.forEach(function (bookmark) {
    const { id, title, url, category } = bookmark;
    const bookmarkElement = document.createElement("div");
    bookmarkElement.className = "bookmark-item";

    bookmarkElement.innerHTML = `
      <div class="bookmark-info">
        <h3>${title}</h3>
        <a href="${url}" class="bookmark-link" target="_blank">${url}</a>
        <div class="bookmark-category">${category}</div>
      </div>
      <button class="delete-btn" data-id="${id}">Delete</button>
    `;
    const deleteBtn = bookmarkElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => deleteBookmark(id));

    bookmarksList.appendChild(bookmarkElement);
  });
}
function addBookMark(e) {
  e.preventDefault();

  const websiteTitle = document.getElementById("websiteTitle").value;
  const websiteUrl = document.getElementById("websiteUrl").value;
  const category = document.getElementById("category").value;

  const newBookmark = {
    id: Date.now(),
    title: websiteTitle,
    url: websiteUrl,
    category: category,
  };

  bookmarks.push(newBookmark);
  console.log(bookmarks);

  saveBookmarks();
  renderBookmarks();
  form.reset();
}
function deleteBookmark(id) {
  bookmarks = bookmarks.filter(function (bookmark) {
    return bookmark.id !== id;
  });
  console.log(bookmarks);
  saveBookmarks();
  renderBookmarks();
}
function init() {
  loadBookmarks();
  renderBookmarks();

  form.addEventListener("submit", addBookMark);

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      currentFilter = button.dataset.category;
      renderBookmarks();
    });
  });
}

document.addEventListener("DOMContentLoaded", init);