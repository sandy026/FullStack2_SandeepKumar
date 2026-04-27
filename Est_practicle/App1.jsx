import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  // Validation logic
  function validate() {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    return newErrors;
  }

  // Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If valid
    console.log("Form Submitted:", form);

    // Reset form
    setForm({ name: "", email: "" });
    setErrors({});
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patient Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p style={{ color: "red" }}>{errors.name}</p>
          )}
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;