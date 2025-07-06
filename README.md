# 💸 Budgetary – Smart Expense & Budget Tracker

A modern full-stack web application for tracking personal expenses, managing category-wise budgets, and gaining insights through interactive visualizations.

---

## 🚀 Features

- ➕ Add, view, and delete financial transactions
- 📊 Pie chart for category-wise expense breakdown
- 📉 Bar chart comparing actual spending vs set budgets
- 📝 Budget management by category (food, rent, shop, other)
- 🔔 Instant feedback using `sonner` toast notifications
- 📆 Recent transaction overview & total expense summary
- 💅 Sleek and responsive UI using Tailwind CSS + shadcn/ui

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **shadcn/ui** – for accessible, unstyled component primitives

### 📈 Charts
- **Recharts** – composable chart components

### 🔹 Backend
- **Next.js API Routes**

### 🗃️ Database
- **MongoDB** (via **Mongoose** ODM)

### 🛎 Notifications
- [`sonner`](https://sonner.emilkowal.ski/) for toast notifications

---

## 🗂️ Directory Structure

.<br>
├── app/<br>
│ ├── api/<br>
│ │ ├── budgets/ # API endpoints for budgets<br>
│ │ └── transactions/ # API endpoints for transactions<br>
│ ├── transactions/<br>
│ │ └── page.tsx # Transactions listing UI<br>
│ ├── layout.tsx # Root layout (fonts, themes)<br>
│ ├── page.tsx # Main dashboard with charts<br>
│ └── globals.css # Global styles using Tailwind<br>
├── components/<br>
│ └── ui/ # Shared UI components (from shadcn)<br>
├── lib/<br>
│ └── db.ts # MongoDB connection utility<br>
├── models/<br>
│ ├── Budget.ts # Budget Mongoose schema<br>
│ └── Transaction.ts # Transaction Mongoose schema<br>
├── public/ # Static assets like favicon<br>
├── .env # Environment variables (e.g., DB URI)<br>
├── .gitignore<br>
├── package.json<br>
└── README.md<br>
