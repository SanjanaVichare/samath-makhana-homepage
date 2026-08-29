import { createFileRoute } from "@tanstack/react-router";
import { login } from "@/lib/shopify/auth";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login error:", error);

      alert("Unable to start login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to your Samarth Makhana account
        </p>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-black text-white rounded-lg p-3 hover:bg-neutral-800 transition"
        >
          Continue to Login
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              Secure Shopify Customer Account
            </span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-black underline"
          >
            Create Account
          </a>
        </p>

      </div>
    </div>
  );
}