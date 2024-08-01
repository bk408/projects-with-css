import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });
  const [error, setError] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // copy existing properties
      [name]: value, // update the specific property that has changed
    });
  };

  const validEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.userName) {
      newErrors.userName = "Name is Required";
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (!validEmail(formData.email)) {
      newErrors.email = "Invalid Email address";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is Required";
    } else if (formData.password.length < 8 || formData.password.length > 16) {
      newErrors.password = "Password length must be between 8 to 16";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is Required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password must be same";
    }

    // Mobile Number
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is Required";
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile Number should be 10 digit";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Registration Successful!");
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } else {
      console.log("Invalid Details");
    }
  };

  const handleToggle = () => {
     setShowPassword((prevPassword) => !prevPassword)
  }

  return (
    <div className="container">
      <h2>Registration Form</h2>
      {sucessMessage && <p className="success" > {sucessMessage} </p>}
      <form onSubmit={handleSubmit}>
        <div className="details">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={formData.userName}
            name="userName"
            placeholder="john123"
            onChange={handleChange}
          />
          {error && <p> {error.userName} </p>}
        </div>

        <div className="details">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
          {error && <p> {error.email} </p>}
        </div>

        <div className="details">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="John@123"
            onChange={handleChange}
          />
          {error && <p> {error.password} </p>}
          <input type="checkbox" name="checkbox" value={showPassword} onChange={handleToggle} />
        </div>

        <div className="details">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            placeholder="John@123"
            onChange={handleChange}
          />
          {error && <p> {error.confirmPassword} </p>}
        </div>

        <div className="details">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="number"
            value={formData.mobileNumber}
            name="mobileNumber"
            placeholder="1234567891"
            onChange={handleChange}
          />
          {error && <p> {error.mobileNumber} </p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
