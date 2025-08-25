
const user = { username: "student", password: "12345" };


const books = [
  { id: 1, title: "Data Structures", available: true, dueDate: "2025-09-01" },
  { id: 2, title: "Operating Systems", available: false, dueDate: "2025-08-28" },
  { id: 3, title: "Networking Basics", available: true, dueDate: "2025-09-05" },
  { id: 4, title: "Web Development", available: false, dueDate: "2025-08-30" },
  { id: 4, title: "Data Science", available: false, dueDate: "2025-08-17" },
  { id: 4, title: "Web Development", available: false, dueDate: "2025-08-5" },
  { id: 4, title: "Data Analyst", available: false, dueDate: "2025-08-2" },
  { id: 4, title: "Software Engineer", available: false, dueDate: "2025-08-30" },
  { id: 4, title: "CyberSecurity", available: false, dueDate: "2025-08-22" },
  { id: 4, title: "Ethical Hacking", available: false, dueDate: "2025-08-27" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === user.username && password === user.password) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("library-section").style.display = "block";
  } else {
    alert("Invalid login. Try student / 12345");
  }
}


function searchBook() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const results = books.filter(b => 
    b.title.toLowerCase().includes(query) || String(b.id) === query
  );

  if (results.length > 0) {
    results.forEach(book => {
      const div = document.createElement("div");
      div.className = "book-card";
      div.innerHTML = `
        <strong>${book.title}</strong><br>
        ID: ${book.id}<br>
        Availability: ${book.available ? "✅ Available" : "❌ Not Available"}<br>
        Due Date: ${book.dueDate}<br>
        <button onclick="sendReminder('${book.title}', '${book.dueDate}')">Set Reminder</button>
      `;
      resultsDiv.appendChild(div);
    });
  } else {
    resultsDiv.innerHTML = "<p>No books found.</p>";
  }
}


function sendReminder(title, dueDate) {
  alert(`Reminder set for "${title}". Please return/renew before ${dueDate}.`);
}
