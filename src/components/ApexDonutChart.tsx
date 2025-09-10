import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { TransactionModel } from "../models/transaction.model";

type Props = {
    transactions: TransactionModel[];
    groupBy?: "day" | "month" | "week";
    positiveAs?: "credit" | "debit";
};

export function ApexDonutChart({ transactions, groupBy = "day", positiveAs = "credit" }: Props) {
    const { labels, series } = useMemo(() => {
        const map = new Map<string, number>();

        for (const tx of transactions) {
            let key: any = tx.type;
            if (groupBy) {
                const date = new Date(tx.createdAt);
                if (groupBy === "month") key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
                else if (groupBy === "week") {
                    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
                    const pastDaysOfYear = Math.floor((+date - +firstDayOfYear) / 86400000);
                    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
                    key = `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
                } else key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
            }

            const value = positiveAs && tx.type !== positiveAs ? -tx.amount : tx.amount;
            map.set(key, (map.get(key) || 0) + value);
        }

        return {
            labels: Array.from(map.keys()),
            series: Array.from(map.values()),
        };
    }, [transactions, groupBy, positiveAs]);

    const options: ApexCharts.ApexOptions = {
        chart: { type: "donut" },
        labels,
        legend: { position: "bottom" },
        dataLabels: { enabled: true },
    };

    return <Chart options={options} series={series} type="donut" height={320} />;
}
