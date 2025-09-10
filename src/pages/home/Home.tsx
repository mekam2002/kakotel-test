import { useState } from "react";
import GraphColumn from "../../components/GraphColumn";
import { useTransaction } from "../../hook/useTransaction";
import { ApexDonutChart } from "../../components/ApexDonutChart";
import { ApexLineChart } from "../../components/ApexLineChart";

export default function Home() {
  const { transactionsArray } = useTransaction()

  const [groupBy, setGroupBy] = useState<"day" | "month" | "week">("day");


  const [postiveAs, setPositive] = useState<"credit" | "debit" | undefined>("credit")

  return (
    <div style={{
      backgroundColor: 'white',
      width: '90vw'
    }}>
      <GraphColumn
        groupBy={groupBy}
        positiveAs={postiveAs}
        transactions={transactionsArray}
      />
      <ApexDonutChart
        transactions={transactionsArray}
      />
      <ApexLineChart
        transactions={transactionsArray}
      />
    </div>
  )
}
