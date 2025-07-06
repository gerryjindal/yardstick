"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

// Types
interface Transaction {
  _id: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
}

// Styling maps
const categoryStyles: Record<string, string> = {
  food: "border-l-4 border-emerald-500",
  shop: "border-l-4 border-indigo-500",
  rent: "border-l-4 border-rose-500",
  other: "border-l-4 border-yellow-500",
};

const categoryColors: Record<string, string> = {
  food: "bg-emerald-100 text-emerald-800",
  shop: "bg-indigo-100 text-indigo-800",
  rent: "bg-rose-100 text-rose-800",
  other: "bg-yellow-100 text-yellow-800",
};

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  // Fetch all transactions
  const fetchTransactions = async () => {
    try {
      const res = await axios.get("/api/transactions");
      setTransactions(res.data.transactions);
    } catch {
      toast("Failed to fetch transactions");
    }
  };

  // Delete a transaction
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      toast.success("Transaction deleted");
      fetchTransactions();
    } catch {
      toast.error("Could not delete transaction");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-primary">All Transactions</h1>
          <p className="text-muted-foreground text-sm">Track and manage all your expenses.</p>
        </div>
        <Button variant="outline" onClick={() => router.push("/")}>← Back to Dashboard</Button>
      </div>

      {/* Transactions Grid */}
      {transactions.length === 0 ? (
        <p className="text-center text-muted-foreground mt-10">No transactions yet. Add some from the dashboard.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.slice().reverse().map((txn) => (
            <Card
              key={txn._id}
              className={`group shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-[2px] ${categoryStyles[txn.category] || "border-l-4 border-gray-300"}`}
            >
              <CardHeader className="flex justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    ₹{txn.amount.toFixed(2)}
                    <Badge className={`capitalize text-xs px-2 py-1 rounded ${categoryColors[txn.category] || "bg-gray-100 text-gray-800"}`}>
                      {txn.category}
                    </Badge>
                  </CardTitle>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(txn.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(txn._id)}
                  className="text-rose-600 hover:text-rose-700"
                >
                  <Trash2 size={18} />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  {txn.description || <i className="text-gray-400">No description</i>}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
