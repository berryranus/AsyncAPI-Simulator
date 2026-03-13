# ⚡ AsyncAPI-Simulator

**AsyncAPI-Simulator** is a pure Vanilla JavaScript (Node.js) project designed to demonstrate advanced asynchronous programming concepts. It acts as a mock backend system, simulating network latency and data fetching mechanisms to practice handling complex API flows without relying on an external server.

---

## 🚀 Project Purpose

The primary goal of this project is to master modern JavaScript execution contexts. Instead of working with synchronous, static data, this simulator provides:
* **Network Latency Simulation:** Artificial delays using `setTimeout` wrapped in `Promises` to mimic real-world API response times.
* **Complex Data Handling:** Fetching, filtering, and combining relational data (Posts and Comments) asynchronously.
* **Modern ES6+ Utilization:** Implementing the latest JavaScript features for cleaner, safer, and more efficient code.

---

## 🛠️ Tech Stack & Architecture

This project requires zero external dependencies and runs entirely on the native Node.js runtime, utilizing the following core concepts:

### 1. Core Language
* **Vanilla JavaScript (ES6+):** Utilized for all logic, relying on modern module syntax (`import`/`export`) to keep the codebase modular and organized.

### 2. Asynchronous Architecture
* **`Promises` & `async/await`:** * *Purpose:* To handle non-blocking operations. The `apiService.js` creates Promise-based functions that resolve after specific delays, while `app.js` consumes them cleanly using `async/await` blocks, avoiding the notorious "callback hell."

### 3. Advanced JS Methods
* **Array & Object Methods:** Extensive use of `.map()`, `.find()`, `.filter()`, and `Object.entries()` to manipulate and extract specific datasets efficiently.
* **Safe Traversal:** Implementation of **Optional Chaining (`?.`)** to safely access potentially undefined nested object properties without crashing the application.

---

## 📱 Key Features

### ✅ Sequential vs. Parallel Execution
The application demonstrates how to optimize data fetching. It performs sequential fetches when necessary but utilizes `Promise.all()` to execute independent tasks (like fetching a post and fetching its comments) concurrently, significantly reducing total execution time.

### ✅ Relational Data Simulation
The mock database (`data.js`) contains relational arrays. The service layer logic successfully queries a specific "Post" and then filters the "Comments" array based on the `postId` foreign key.

### ✅ Object Destructuring
To maintain clean and readable code, object destructuring is used extensively to unpack required values (e.g., `const { title, author } = post;`) directly from API responses.

---

## 💡 Challenges & Solutions

### 1. Optimizing Multiple Network Requests
* **Challenge:** Fetching a post and then fetching its comments sequentially creates a waterfall effect, doubling the waiting time for the user.
* **Solution:** I implemented `Promise.all([findPostById(postId), fetchCommentsByPostId(postId)])` in the "Challenge 1" section. This fires both asynchronous requests simultaneously and waits for both to resolve before combining the data, optimizing performance.

### 2. Handling Missing Data Gracefully
* **Challenge:** In real-world APIs, objects might not always contain the expected nested properties, which can throw `TypeError` exceptions and crash the app.
* **Solution:** I utilized Optional Chaining (`post.details?.publishedDate`). This ensures that if the `details` object is missing from the mock data, JavaScript safely returns `undefined` instead of throwing an error.

---

## 📂 Project Structure

```bash
AsyncAPI-Simulator/
├── apiService.js        # Service layer handling Promise creation and delays
├── app.js               # Main execution file containing async business logic
├── data.js              # Mock database containing relational arrays
├── package.json         # Project metadata
└── README.md            # Project Documentation
```

---

## 🚀 How to Set Up and Run the Project
This project uses standard Node.js to execute. Please follow these instructions:

## 1. Prerequisites

Ensure you have the following installed on your computer:

Node.js: (Version 14 or higher)

## 2. Installation Steps

### Step 1: Clone the Repository
Open your terminal and run:

```bash
git clone [https://github.com/berryranus/AsyncAPI-Simulator.git](https://github.com/berryranus/AsyncAPI-Simulator.git)
cd AsyncAPI-Simulator
```

## 3. Running the Simulator

### Step 2: Execute the Script
Since there are no external dependencies (node_modules), you can run the application immediately using Node:

```bash
node app.js
```

You will see the console outputs simulating the data fetching process, complete with artificial delays and structured data logging.

---
