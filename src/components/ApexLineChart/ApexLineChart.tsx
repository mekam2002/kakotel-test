import { useMemo } from "react";
import type { TransactionModel } from "../../models/transaction.model";
import Chart from "react-apexcharts";

type Props = {
    transactions: TransactionModel[];
    groupBy?: "day" | "month" | "week";
    positiveAs?: "credit" | "debit";
};

export function ApexLineChart({ transactions, groupBy = "day", positiveAs = "credit" }: Props) {

    const { categories, series } = useMemo(() => {
        const map = new Map<string, number>();

        for (const tx of transactions) {
            let key = "";
            const date = new Date(tx.createdAt);
            if (groupBy === "month") key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
            else if (groupBy === "week") {
                const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
                const pastDaysOfYear = Math.floor((+date - +firstDayOfYear) / 86400000);
                const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
                key = `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
            } else key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

            const value = positiveAs && tx.type !== positiveAs ? -tx.amount : tx.amount;
            map.set(key, (map.get(key) || 0) + value);
        }

        const sortedKeys = Array.from(map.keys()).sort();

        return {
            categories: sortedKeys,
            series: [{ name: "Net Amount", data: sortedKeys.map(k => map.get(k)!) }],
        };
    }, [transactions, groupBy, positiveAs]);

    const options: ApexCharts.ApexOptions = {
        chart: { type: "line", toolbar: { show: true } },
        xaxis: { categories },
        yaxis: { labels: { formatter: val => String(Math.round(Number(val))) } },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        tooltip: { y: { formatter: val => String(val) } },
    };

    return <Chart data-testid="apexchart-svg"  options={options} series={series} type="line" height={320} />;
}
