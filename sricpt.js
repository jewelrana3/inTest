// notification js

function toggleItemList() {
  let itemList = document.getElementById("itemList");
  if (itemList.style.display === "none") {
    itemList.style.display = "block";
  } else {
    itemList.style.display = "none";
  }
}

// imgList section
function imgList() {
  let itemList = document.getElementById("imgListId");
  if (itemList.style.display === "none") {
    itemList.style.display = "block";
  } else {
    itemList.style.display = "none";
  }
}
// imgList section2
function imgList2() {
  let itemList = document.getElementById("imgListId2");
  if (itemList.style.display === "none") {
    itemList.style.display = "block";
  } else {
    itemList.style.display = "none";
  }
}

// Get the modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalButton");
let body = document.body;

// Get the buttons that close the modal
let closeSpan = document.getElementById("closeBtn");
let closeModalBtn = document.getElementById("closeModalBtn");

// When the user clicks on the buttons, close the modal
closeSpan.onclick = closeModal;
closeModalBtn.onclick = closeModal;
modal.style.display = "none";
// When the user clicks on the button, open the modal

btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to toggle dark mode and change icon
function toggleDarkMode() {
  var body = document.body;
  var icon = document.getElementById("icon-dark");
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.classList.add("text-white"); // Add white color for moon icon
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.remove("text-white"); // Remove white color for sun icon
    icon.classList.add("fa-moon");
  }
}

// Event listener for clicking the icon
document.getElementById("icon-dark").addEventListener("click", function () {
  toggleDarkMode();
});
