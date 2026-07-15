import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Account created successfully!");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg p-3 hover:bg-neutral-800 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-black underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}