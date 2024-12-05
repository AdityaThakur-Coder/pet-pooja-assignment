import DatePickerContainer from "./DatePicker/DatePickerContainer";

const App = () => {
  const handleDateSelect = (dates) => {
    console.log("Selected Dates:", dates);
  };

  // Define custom styles
  const styles = {
    container: {
      fontSize: "16px",
      fontColor: "#333",
      backgroundColor: "#f9f9f9",
    },
    button: {
      fontSize: "14px",
      color: "#fff",
      backgroundColor: "#007bff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      margin: "5px",
      cursor: "pointer",
    },
    activeButton: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Date Picker</h1>
      <DatePickerContainer onDateSelect={handleDateSelect} styles={styles} />
    </div>
  );
};

export default App;
