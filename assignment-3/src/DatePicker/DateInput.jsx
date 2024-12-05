const DateInput = ({ label, value, onChange, styles }) => (
    <label>
      {label}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...styles.dateInput }}
      />
    </label>
  );
  
  export default DateInput;
  