const formConfig = [
    {
      type: "text",
      label: "Name",
      name: "name",
      placeholder: "Enter your name",
      validation: { required: true },
      defaultValue: "",
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email",
      validation: { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ },
      defaultValue: "",
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: [
        { value: "us", label: "United States" },
        { value: "in", label: "India" },
      ],
      defaultValue: "us",
    },
  ];
  
  export default formConfig;
  