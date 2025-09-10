export interface TransactionModel {
    id: string;
    userId: string;
    type: "credit" | "debit";
    amount: number;
    currency: string;
    status: "pending" | "success" | "failed" | "cancelled";
    method?: "card" | "mobile_money" | "bank_transfer" | "cash";
    description?: string;
    reference?: string;
    createdAt: Date;
    updatedAt?: Date;
    metadata?: Record<string, any>;
}
