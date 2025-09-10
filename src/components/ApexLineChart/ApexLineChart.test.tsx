import { render, screen } from "@testing-library/react";
import type { TransactionModel } from "../../models/transaction.model";
import { ApexLineChart } from "./ApexLineChart";
import '@testing-library/jest-dom';

const mockTransactions: TransactionModel[] = [
    { id: "1", userId: "u1", type: "credit", amount: 100, currency: "XAF", status: "success", createdAt: "2025-09-01" },
    { id: "2", userId: "u1", type: "debit", amount: 50, currency: "XAF", status: "success", createdAt: "2025-09-01" },
];

describe("ApexLineChart", () => {
    it("renders without crashing", () => {
        render(<ApexLineChart transactions={ mockTransactions } />);
        // on peut vérifier qu’un SVG est rendu (ApexCharts crée un SVG)
        const svg = screen.getByTestId("apexchart-svg");
        expect(svg).toBeInTheDocument();
    });
});
