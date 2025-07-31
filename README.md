# 📚 Bookstore API Tests

Automated API Testing for two public APIs:  
**✅ [Simple Books API](https://simple-books-api.click)**  
**✅ [Reqres API](https://reqres.in)**

Built with **TypeScript**, **Jest**, and **Axios** to cover authentication, CRUD operations, edge cases, and error handling.

---

## 🔧 Tech Stack

- 🟦 **TypeScript** — Type-safe test development
- 🟩 **Jest** — Powerful test framework
- 🟨 **Axios** — HTTP client for API requests
- 🟪 **ts-jest** — TypeScript support for Jest

---

## 📂 Project Structure

```
bookstore-api-tests/
├── tests/
│   ├── reqresApiTests/         # Reqres API tests (login, user ops, etc.)
│   └── simpleBooksApiTests/    # Simple Books API tests (books, orders)
├── utils/                      # Reusable helpers (auth token, headers, config)
├── jest.config.js              # Jest configuration
├── tsconfig.json               # TypeScript compiler options
├── package.json                # Project dependencies & scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

1️⃣ **Clone the repo**

```bash
git clone https://github.com/your-username/bookstore-api-tests.git
cd bookstore-api-tests
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the tests**

```bash
npx jest
# or
npm test
```

---

## 🧪 Example Test Scenarios

### ✅ Reqres API

- 🔐 Successful & failed login
- 👤 Fetch single or multiple users
- ➕ Create user
- ✏️ Update user
- ❌ Delete user

### ✅ Simple Books API

- 📚 Get available books
- 🔐 Generate & reuse auth token
- 🛒 Place an order
- 📦 Get order details
- ❌ Cancel an order
- 🚫 Negative scenarios (invalid token, missing fields)

---

## 🧠 Highlights & Features

- 🔁 **Smart token reuse** — generate once, use everywhere
- 🧼 **Centralized headers/config** — no repeated boilerplate
- 🔍 **Edge-case handling** — invalid inputs, missing tokens
- 🔒 **Modular & secure** — organized code for better maintenance

---

## 🤖 How to Add a New Test

1. Create a new file under the appropriate folder in `tests/`.
2. Import `axios`, reusable headers, and config from `utils/`.
3. Use `test()` blocks with `expect()` assertions.
4. Run the test with `npx jest`.

**Example:**

```typescript
test("Should fetch users successfully", async () => {
  const response = await axios.get(`${baseURL}/users`);
  expect(response.status).toBe(200);
});
```

---

## 👨‍💻 Author

**Abhishek Varma**  
_Software Engineer in Test (SDET)_
