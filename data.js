// data.js
// Post verileri
export const posts = [
    { id: 1, title: "JavaScript Basics", content: "Learning JS is fun!", author: "Ali" },
    { id: 2, title: "Async Programming", content: "Promises are cool.", author: "Ayşe" },
    { id: 3, title: "Node.js Modules", content: "Import/Export syntax.", author: "Fatma" },
    { id: 4, title: "ES6 Features", content: "Arrow functions etc.", author: "Mehmet" },
    { id: 5, title: "APIs", content: "Fetching data.", author: "Zeynep" }
];

// Yorum verileri
export const comments = [
    { id: 1, postId: 1, text: "Great post!", author: "User1" },
    { id: 2, postId: 1, text: "Very helpful.", author: "User2" },
    { id: 3, postId: 2, text: "I understand promises now.", author: "User3" },
    { id: 4, postId: 3, text: "Nice explanation.", author: "User4" },
    { id: 5, postId: 99, text: "Spam comment.", author: "User5" }
];