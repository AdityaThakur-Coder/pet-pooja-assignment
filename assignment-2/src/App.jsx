import FormContainer from "./components/FormContainer";
import formConfig from "./config/formConfig";

const App = () => {
  const handleSubmit = (formData) => {
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <h1>Custom Form System</h1>
      <FormContainer config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
