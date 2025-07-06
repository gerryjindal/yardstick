# 💸 Expense Management System

An intuitive full-stack web app for tracking daily expenses, categorizing transactions, and managing personal budgets with insightful charts and real-time feedback.

---

## 📌 Features

- ✅ Add, view, and delete transactions
- 📊 Visual charts for category breakdown (Pie) and budget vs actual comparison (Bar)
- 💰 Set budgets for different categories
- 🔔 Real-time toast notifications using `sonner`
- 📈 View recent transactions and total expenses
- ⚡ Built with modern UI using Tailwind CSS and shadcn/ui

---

## 🧑‍💻 Tech Stack

### Frontend:
- [Next.js (App Router)](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Charts:
- [Recharts](https://recharts.org/)

### Backend:
- **Next.js API Routes**

### Database:
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

### Notifications:
- [`sonner`](https://sonner.emilkowal.ski/) for toast messages

---

## 🗂️ Project Structure
    .
    ├── app
    │ ├── api
    │ │ ├── budgets/ # Budget CRUD APIs
    │ │ └── transactions/ # Transaction CRUD APIs
    │ ├── page.tsx # Dashboard page
    │ ├── transactions/page.tsx # All transactions page
    │ ├── layout.tsx # App layout
    │ └── globals.css # Tailwind styles
    ├── components
    │ └── ui/ # UI components (shadcn)
    ├── lib
    │ └── db.ts # DB connection setup
    ├── models
    │ ├── Budget.ts # Budget schema
    │ └── Transaction.ts # Transaction schema
    ├── public # Static assets
    ├── .env # Environment config
    ├── .gitignore
    ├── package.json
    └── README.md