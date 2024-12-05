import { useState } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";

const DatePickerContainer = ({ onDateSelect, styles }) => {
  const [selectedPreset, setSelectedPreset] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handlePresetClick = (preset) => {
    const today = new Date();
    let start, end;

    switch (preset) {
      case "Today":
        start = end = today.toISOString().split("T")[0];
        break;
      case "Yesterday":
        start = end = new Date(today.setDate(today.getDate() - 1))
          .toISOString()
          .split("T")[0];
        break;
      case "This Month":
        start = new Date(today.getFullYear(), today.getMonth(), 1)
          .toISOString()
          .split("T")[0];
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0)
          .toISOString()
          .split("T")[0];
        break;
      case "Last Month":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1)
          .toISOString()
          .split("T")[0];
        end = new Date(today.getFullYear(), today.getMonth(), 0)
          .toISOString()
          .split("T")[0];
        break;
      default:
        start = end = "";
    }

    setSelectedPreset(preset);
    setStartDate(start);
    setEndDate(end);
    if (onDateSelect) onDateSelect({ preset, start, end });
  };

  return (
    <div style={{ ...styles.container }}>
      <PresetButtons
        selectedPreset={selectedPreset}
        onPresetClick={handlePresetClick}
        styles={styles}
      />
      {selectedPreset === "Custom Range" && (
        <CustomDateRange
          startDate={startDate}
          endDate={endDate}
          onDateChange={(start, end) => {
            setStartDate(start);
            setEndDate(end);
            if (onDateSelect) onDateSelect({ start, end });
          }}
          styles={styles}
        />
      )}
    </div>
  );
};

export default DatePickerContainer;
