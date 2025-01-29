---

```
# Public API (NestJS)

A lightweight API that returns a JSON response with a dummy email, current UTC datetime in ISO 8601 format, and a GitHub repository URL. Built with NestJS and TypeScript.

---

## :rocket: Setup

### Prerequisites

Node.js (v18+)
npm/yarn/pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run start
```

**Development mode** (with hot reload):

```bash
npm run start:dev
```

Access the API at:  
 `http://localhost:3000/public-api`

---

## :books: API Documentation

### Endpoint

**GET** `/public-api`

### Response Format (200 OK)

```json
{
  “email”: “your-email@example.com”,
  “current_datetime”: “2025-01-30T09:30:00Z”,
  “github_url”: “https://github.com/yourusername/your-repo”
}
```

### Fields

`email`: Preconfigured dummy email address.
`current_datetime`: Dynamically generated UTC timestamp in ISO 8601 format.
`github_url`: Link to this project’s GitHub repository.

---

### Key Notes

CORS is enabled by default.
Response time optimized (< 500ms).

---

```

---
```
