import { useState } from "react";

const ShowPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    


  const validEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newError = {};
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!validEmail(formData.email)) {
      newError.email = "Invalid Email";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (formData.password.length < 8 || formData.password.length > 16) {
      newError.password = "Password length must be between 8 to 16 characters";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Invalid input");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // existing data
      [name]: value,
    });
    };
    
    const handleCheckBoxChange = () => {
        setShowPassword((prevPassword) => !prevPassword);
    }

  return (
    <div className="container">
      <h1>
        <span className="pass">Pass</span>
        <span className="word">word</span>
      </h1>
      <div className="details">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p> {error.email} </p>}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="checkbox"
            name="showPassword"
            checked={showPassword}
            onChange={handleCheckBoxChange}
          />

          {error.password && <p> {error.password} </p>}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShowPassword;
