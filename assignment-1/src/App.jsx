import TableContainer from "./components/TableContainer";

const sampleData = [
  { id: 1, name: "Alice", age: 30, score: 85 },
  { id: 2, name: "Bob", age: 25, score: 90 },
  { id: 3, name: "Charlie", age: 35, score: 60 },
];

const columnsConfig = [
  { title: "ID", key: "id", sortable: true, filterable: false },
  { title: "Name", key: "name", sortable: true, filterable: true },
  { title: "Age", key: "age", sortable: true, filterable: true },
  { title: "Score", key: "score", sortable: true, filterable: true },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Table Component</h1>
      <TableContainer
        data={sampleData}
        columns={columnsConfig}
        defaultStyles={{
          headerFontSize: "16px",
          bodyFontSize: "14px",
          headerBgColor: "#f5f5f5",
          bodyBgColor: "#ffffff",
          headerFontColor: "#000000",
          bodyFontColor: "#333333",
        }}
      />
    </div>
  );
}

export default App;
