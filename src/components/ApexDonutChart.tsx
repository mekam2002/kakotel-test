import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { TransactionModel } from "../models/transaction.model";

type Props = {
    transactions: TransactionModel[];
};

export function ApexDonutChart({ transactions }: Props) {
    const { labels, series } = useMemo(() => {
        const map = new Map<string, number>();
        for (const tx of transactions) {
            map.set(tx.type, (map.get(tx.type) || 0) + tx.amount);
        }
        return {
            labels: Array.from(map.keys()),
            series: Array.from(map.values()),
        };
    }, [transactions]);

    const options: ApexCharts.ApexOptions = {
        chart: { type: "donut" },
        labels,
        legend: { position: "bottom" },
        dataLabels: { enabled: true },
    };

    return <Chart options={options} series={series} type="donut" height={320} />;
}


