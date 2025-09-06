
// src/components/AuthForm.jsx
import { useState } from "react";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = type === "login"
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-4">
      <h2 className="text-xl font-bold">{type === "login" ? "Login" : "Register"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
