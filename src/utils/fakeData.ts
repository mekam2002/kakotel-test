import type { TransactionModel } from "../models/transaction.model";

export const Faketransactions: TransactionModel[] = [
    { id: "tx1", userId: "user1", type: "credit", amount: 5000, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-01" },
    { id: "tx2", userId: "user2", type: "debit", amount: 2000, currency: "XAF", status: "success", method: "mobile_money", createdAt: "2025-09-01" },
    { id: "tx3", userId: "user1", type: "credit", amount: 1500, currency: "XAF", status: "success", method: "bank_transfer", createdAt: "2025-09-02" },
    { id: "tx4", userId: "user3", type: "debit", amount: 3000, currency: "XAF", status: "pending", method: "cash", createdAt: "2025-09-02" },
    { id: "tx5", userId: "user4", type: "credit", amount: 7000, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-03" },
    { id: "tx6", userId: "user2", type: "debit", amount: 1200, currency: "XAF", status: "failed", method: "mobile_money", createdAt: "2025-09-03" },
    { id: "tx7", userId: "user5", type: "credit", amount: 4000, currency: "XAF", status: "success", method: "bank_transfer", createdAt: "2025-09-04" },
    { id: "tx8", userId: "user3", type: "debit", amount: 2500, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-04" },
    { id: "tx9", userId: "user1", type: "credit", amount: 3200, currency: "XAF", status: "success", method: "mobile_money", createdAt: "2025-09-05" },
    { id: "tx10", userId: "user4", type: "debit", amount: 4500, currency: "XAF", status: "pending", method: "cash", createdAt: "2025-09-05" },
    { id: "tx11", userId: "user2", type: "credit", amount: 6000, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-06" },
    { id: "tx12", userId: "user5", type: "debit", amount: 1800, currency: "XAF", status: "failed", method: "bank_transfer", createdAt: "2025-09-06" },
    { id: "tx13", userId: "user1", type: "credit", amount: 2300, currency: "XAF", status: "success", method: "mobile_money", createdAt: "2025-09-07" },
    { id: "tx14", userId: "user3", type: "debit", amount: 3600, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-07" },
    { id: "tx15", userId: "user4", type: "credit", amount: 5100, currency: "XAF", status: "success", method: "bank_transfer", createdAt: "2025-09-08" },
    { id: "tx16", userId: "user2", type: "debit", amount: 2700, currency: "XAF", status: "pending", method: "mobile_money", createdAt: "2025-09-08" },
    { id: "tx17", userId: "user5", type: "credit", amount: 3900, currency: "XAF", status: "success", method: "card", createdAt: "2025-09-09" },
    { id: "tx18", userId: "user3", type: "debit", amount: 4100, currency: "XAF", status: "success", method: "bank_transfer", createdAt: "2025-09-09" },
    { id: "tx19", userId: "user1", type: "credit", amount: 4800, currency: "XAF", status: "success", method: "mobile_money", createdAt: "2025-09-10" },
    { id: "tx20", userId: "user4", type: "debit", amount: 3500, currency: "XAF", status: "success", method: "cash", createdAt: "2025-09-10" },
];
