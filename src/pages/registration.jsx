import { useState } from "react";
import Header from "../components/Header";
import NeumorphicButton from "../components/NeumorphicButton";
import NeumorphicTextField from "../components/neumorphicTextfield";

const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = () => {
    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`Welcome ${name}! Registration successful.`);
  };

  return (
    <div className="min-h-screen bg-[#e0e5ec] flex flex-col items-center justify-center p-4">
      <Header />

      <div className="w-full max-w-sm mt-8">
        <NeumorphicTextField
          label="Full Name"
          placeholder="John Doe"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <NeumorphicTextField
          label="Email"
          type="email"
          placeholder="you@example.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <NeumorphicTextField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <NeumorphicTextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <NeumorphicButton onClick={handleRegister} icon="👤➕">
          Register
        </NeumorphicButton>
      </div>
    </div>
  );
};

export default Registration;
