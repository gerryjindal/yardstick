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

.
├── app/
│ ├── api/
│ │ ├── budgets/ # API endpoints for budgets
│ │ └── transactions/ # API endpoints for transactions
│ ├── transactions/
│ │ └── page.tsx # Transactions listing UI
│ ├── layout.tsx # Root layout (fonts, themes)
│ ├── page.tsx # Main dashboard with charts
│ └── globals.css # Global styles using Tailwind
├── components/
│ └── ui/ # Shared UI components (from shadcn)
├── lib/
│ └── db.ts # MongoDB connection utility
├── models/
│ ├── Budget.ts # Budget Mongoose schema
│ └── Transaction.ts # Transaction Mongoose schema
├── public/ # Static assets like favicon
├── .env # Environment variables (e.g., DB URI)
├── .gitignore
├── package.json
└── README.md
