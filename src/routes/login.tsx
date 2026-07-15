import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";


export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error("Login Error:", error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin}>

          <div className="mb-5">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 border rounded-lg p-3"
              required
            />
          </div>

          <div className="mb-6">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 border rounded-lg p-3"
              required
            />
          </div>

<button
  onClick={() => {
    window.location.href = "http://localhost:5000/auth/login";
  }}
  className="w-full bg-black text-white rounded-lg p-3"
>
  Continue with Shopify
</button>

        </form>

      </div>
    </div>
  );
}