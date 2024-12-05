import { useReducer } from "react";
import FormField from "./FormField";
import Button from "./Button";
import "./styles/Form.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return action.initialState;
    default:
      return state;
  }
};

const FormContainer = ({ config, onSubmit, styles }) => {
  const initialState = config.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || "";
    return acc;
  }, {});

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  const handleReset = () => {
    dispatch({ type: "RESET", initialState });
  };

  return (
    <form className="form-container" style={styles} onSubmit={handleSubmit}>
      {config.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={state[field.name]}
          onChange={handleChange}
        />
      ))}
      <div className="form-actions">
        <Button type="submit" label="Submit" />
        <Button type="button" label="Reset" onClick={handleReset} />
      </div>
    </form>
  );
};

export default FormContainer;
