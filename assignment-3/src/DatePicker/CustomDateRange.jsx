const CustomDateRange = ({ startDate, endDate, onDateChange, styles }) => {
    const handleStartChange = (e) => {
      const newStart = e.target.value;
      if (!endDate || newStart <= endDate) {
        onDateChange(newStart, endDate);
      }
    };
  
    const handleEndChange = (e) => {
      const newEnd = e.target.value;
      if (!startDate || newEnd >= startDate) {
        onDateChange(startDate, newEnd);
      }
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          From:
          <input
            type="date"
            value={startDate}
            onChange={handleStartChange}
            style={{ ...styles.dateInput }}
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={endDate}
            onChange={handleEndChange}
            style={{ ...styles.dateInput }}
          />
        </label>
      </div>
    );
  };
  
  export default CustomDateRange;
  