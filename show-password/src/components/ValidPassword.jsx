import { useState } from "react";

const ValidPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [passwordData, setPasswordData] = useState("");
    
    const toggleClick = () => {
        setShowPassword((prevPassword) =>  !prevPassword)
    }
  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter Password"
        value={passwordData}
        onChange={(e) => setPasswordData(e.target.value)}
      />
      <button onClick={toggleClick} > {showPassword ? "hide" : "show"} </button>
    </div>
  );
};

export default ValidPassword;
