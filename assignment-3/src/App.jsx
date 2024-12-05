import React from "react";
import DatePickerContainer from "./components/DatePicker/DatePickerContainer";

const App = () => {
  const handleDateSelect = (dates) => {
    console.log("Selected Dates:", dates);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Date Picker</h1>
      <DatePickerContainer onDateSelect={handleDateSelect} styles={styles} />
    </div>
  );
};

export default App;
