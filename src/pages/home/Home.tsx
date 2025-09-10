import { useState } from "react";
import GraphColumn from "../../components/GraphColumn";
import { useTransaction } from "../../hook/useTransaction";
import { ApexDonutChart } from "../../components/ApexDonutChart";
import { ApexLineChart } from "../../components/ApexLineChart";

export default function Home() {
  const { transactionsArray } = useTransaction()

  const [groupBy, setGroupBy] = useState<"day" | "month" | "week">("day");


  const [positiveAs, setPositive] = useState<"credit" | "debit" | undefined>("credit")

  const toggleGroupBy = () => {
    setGroupBy((prev) =>
      prev === "day" ? "week" : prev === "week" ? "month" : "day"
    );
  };

  const togglePositiveAs = () => {
    setPositive((prev) => (prev === "credit" ? "debit" : "credit"));
  };


  return (
    <div style={{
      backgroundColor: 'white',
      width: '90vw'
    }}>

      <div className="flex gap-4 mb-4">
        <button
          onClick={toggleGroupBy}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Group By: {groupBy}
        </button>

        <button
          onClick={togglePositiveAs}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Positive As: {positiveAs}
        </button>
      </div>

      <GraphColumn
        groupBy={groupBy}
        positiveAs={positiveAs}
        transactions={transactionsArray}
      />
      <ApexDonutChart
        transactions={transactionsArray}
        groupBy={groupBy}
        positiveAs={positiveAs}
      />
      <div style={{
        marginBottom: 100
      }} />

      <ApexLineChart
        groupBy={groupBy}
        positiveAs={positiveAs}
        transactions={transactionsArray}
      />
    </div>
  )
}
