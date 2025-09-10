import { useMemo } from "react";
import type { TransactionModel } from "../models/transaction.model";
import Chart from "react-apexcharts";

type Props = {
    transactions: TransactionModel[];
};



export function ApexLineChart({ transactions }: Props) {

    const { categories, series } = useMemo(() => {
        const map = new Map<string, number>();
        for (const tx of transactions) {
            const date = new Date(tx.createdAt).toISOString().split('T')[0];
            map.set(date, (map.get(date) || 0) + (tx.type === "credit" ? tx.amount : -tx.amount));
        }
        const sortedKeys = Array.from(map.keys()).sort();
        return {
            categories: sortedKeys,
            series: [{ name: "Net Amount", data: sortedKeys.map(k => map.get(k)!) }],
        };
    }, [transactions]);

    const options: ApexCharts.ApexOptions = {
        chart: { type: "line", toolbar: { show: true } },
        xaxis: { categories },
        yaxis: { labels: { formatter: val => String(Math.round(Number(val))) } },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        tooltip: { y: { formatter: val => String(val) } },
    };

    return <Chart options={options} series={series} type="line" height={320} />;
}