const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggle-btn");

let is24Hour = false; // start with 12-hour format

function updateTime() {
    const now = new Date();

    // ⏰ TIME
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = "";

    // 👉 12-hour format
    if (!is24Hour) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 → 12
    }

    hours = hours.toString().padStart(2, "0");

    timeElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;

    // 📅 DATE
    let day = now.getDate().toString().padStart(2, "0");
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let year = now.getFullYear();

    dateElement.textContent = `${day}/${month}/${year}`;
}

// 🔁 Update every second
setInterval(updateTime, 1000);

// 👉 Run once immediately (no delay)
updateTime();

// 🔘 Toggle button
toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;

    if (is24Hour) {
        toggleBtn.textContent = "Switch to 12-hour format";
    } else {
        toggleBtn.textContent = "Switch to 24-hour format";
    }

    updateTime();
});