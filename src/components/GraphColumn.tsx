import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { TransactionModel } from "../models/transaction.model";
import { toISODate } from "../utils/date";

type Props = {
    transactions: TransactionModel[];
    groupBy?: "day" | "month" | "week";
    positiveAs?: "credit" | "debit";
};


export default function GraphColumn({
    transactions,
    groupBy = "day",
    positiveAs = "credit",
}: Props) {
    const { categories, series } = useMemo(() => {
        const map = new Map<string, { credit: number; debit: number }>();
        for (const tx of transactions) {
            const key = toISODate(tx.createdAt, groupBy);
            if (!map.has(key)) map.set(key, { credit: 0, debit: 0 });
            const entry = map.get(key)!;
            if (tx.type === "credit") entry.credit += tx.amount;
            else entry.debit += tx.amount;
        }
        const sortedKeys = Array.from(map.keys()).sort();
        const creditData = sortedKeys.map((k) => map.get(k)!.credit);
        const debitData = sortedKeys.map((k) => map.get(k)!.debit);

        let series: { name: string; data: number[] }[];
        if (positiveAs === "credit") {
            series = [
                { name: "Credit", data: creditData },
                { name: "Debit", data: debitData.map((v) => -v) },
            ];
        } else {
            series = [
                { name: "Debit", data: debitData },
                { name: "Credit", data: creditData.map((v) => -v) },
            ];
        }

        return { categories: sortedKeys, series };
    }, [transactions, groupBy, positiveAs]);

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "bar",
            stacked: false,
            toolbar: { show: true },
            zoom: { enabled: false },
        },
        plotOptions: {
            bar: { horizontal: false, columnWidth: "60%" },
        },
        dataLabels: { enabled: false },
        xaxis: { categories },
        yaxis: { labels: { formatter: (val) => String(Math.round(Number(val))) } },
        tooltip: {
            y: { formatter: (val) => String(val) },
        },
        legend: { position: "top" },
    };

    return (
        <div className="w-full p-2 bg-white rounded-lg shadow-sm"
            style={{
                marginBottom: 100
            }}>
            <Chart options={options} series={series} type="bar" height={360} />
        </div>
    );
}
