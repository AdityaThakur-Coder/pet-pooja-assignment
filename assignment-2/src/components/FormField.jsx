import React from "react";
import ValidationMessage from "./ValidationMessage";

const FormField = ({ field, value, onChange }) => {
  const handleChange = (e) => {
    onChange(field.name, e.target.value);
  };

  const renderInput = () => {
    switch (field.type) {
      case "text":
      case "textarea":
      case "date":
        return React.createElement(field.type, {
          id: field.name,
          value,
          placeholder: field.placeholder,
          onChange: handleChange,
        });
      case "select":
        return (
          <select id={field.name} value={value} onChange={handleChange}>
            {field.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "radio":
        return field.options.map((opt) => (
          <label key={opt.value}>
            <input
              type="radio"
              name={field.name}
              value={opt.value}
              checked={value === opt.value}
              onChange={handleChange}
            />
            {opt.label}
          </label>
        ));
      case "checkbox":
        return field.options.map((opt) => (
          <label key={opt.value}>
            <input
              type="checkbox"
              name={field.name}
              value={opt.value}
              checked={Array.isArray(value) && value.includes(opt.value)}
              onChange={(e) => {
                const updatedValue = e.target.checked
                  ? [...(value || []), opt.value]
                  : value.filter((v) => v !== opt.value);
                onChange(field.name, updatedValue);
              }}
            />
            {opt.label}
          </label>
        ));
      case "switch":
        return (
          <label>
            <input
              type="checkbox"
              checked={value}
              onChange={() => onChange(field.name, !value)}
            />
            {field.label}
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={field.name}>{field.label}</label>
      {renderInput()}
      {field.validation && field.validation.required && !value && (
        <ValidationMessage message={`${field.label} is required`} />
      )}
    </div>
  );
};

export default FormField;
