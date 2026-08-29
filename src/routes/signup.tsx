import { createFileRoute } from "@tanstack/react-router";
import { signup } from "@/lib/shopify/auth";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const handleSignup = async () => {
    try {
      await signup();
    } catch (error) {
      console.error("Signup error:", error);

      alert("Unable to start signup.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-3">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Create your Samarth Makhana account
        </p>

        <button
          type="button"
          onClick={handleSignup}
          className="w-full bg-black text-white rounded-lg p-3 hover:bg-neutral-800 transition"
        >
          Create Account
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              You'll continue securely with Shopify
            </span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
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