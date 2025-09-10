import GraphColumn from "../../components/GraphColumn";

export default function Home() {
  return (
    <div>
      <GraphColumn
        groupBy="day"
        positiveAs="credit"
        transactions={[]}
      />
    </div>
  )
}
