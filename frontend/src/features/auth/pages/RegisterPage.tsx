import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
  Sparkles,
  User,
  Mail,
  Lock,
} from "lucide-react";

import { api } from "@/lib/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function passwordStrength() {
    if (password.length === 0)
      return {
        text: "",
        color: "",
        width: "0%",
      };

    if (password.length < 6)
      return {
        text: "Weak",
        color: "bg-red-500",
        width: "33%",
      };

    if (password.length < 10)
      return {
        text: "Medium",
        color: "bg-yellow-500",
        width: "66%",
      };

    return {
      text: "Strong",
      color: "bg-emerald-500",
      width: "100%",
    };
  }

  const strength = passwordStrength();

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !passwordConfirmation
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation:
          passwordConfirmation,
      });

      localStorage.setItem(
        "token",
        response.data.data.token
      );

      navigate("/studio");
    } catch (err: any) {
      setError(
        err.response?.data?.message ??
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT */}

      <section className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 lg:flex">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex w-full flex-col justify-center px-20 text-white">

          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={18} />

            Professional Portfolio Builder

          </div>

          <h1 className="mt-10 text-6xl font-black leading-tight">

            Build your
            <br />
            professional
            <br />
            identity.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">

            Join BARO and create a modern
            portfolio that showcases your
            experience, projects and skills.

          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              No Coding Required

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              Professional Design

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              Publish Instantly

            </div>

          </div>

        </div>

      </section>

      {/* RIGHT */}

      <section className="flex items-center justify-center bg-slate-50 px-6 py-16 dark:bg-slate-950">

        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="text-4xl font-bold">

            Create Account

          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">

            Start building your portfolio today.

          </p>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
                        <div className="space-y-2">

              <label className="text-sm font-medium">
                Full Name
              </label>

              <div className="flex items-center rounded-2xl border border-slate-200 px-4 focus-within:border-emerald-500 dark:border-slate-700">

                <User
                  size={18}
                  className="text-slate-400"
                />

                <input
                  className="h-14 w-full bg-transparent px-3 outline-none"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="space-y-2">

              <label className="text-sm font-medium">
                Email
              </label>

              <div className="flex items-center rounded-2xl border border-slate-200 px-4 focus-within:border-emerald-500 dark:border-slate-700">

                <Mail
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="email"
                  className="h-14 w-full bg-transparent px-3 outline-none"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="space-y-2">

              <label className="text-sm font-medium">
                Password
              </label>

              <div className="flex items-center rounded-2xl border border-slate-200 px-4 focus-within:border-emerald-500 dark:border-slate-700">

                <Lock
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  className="h-14 w-full bg-transparent px-3 outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

              {strength.text && (
                <>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className={`h-full ${strength.color}`}
                      style={{
                        width:
                          strength.width,
                      }}
                    />

                  </div>

                  <p className="text-xs text-slate-500">

                    Strength :
                    {" "}
                    {strength.text}

                  </p>
                </>
              )}

            </div>

            <div className="space-y-2">

              <label className="text-sm font-medium">
                Confirm Password
              </label>

              <div className="flex items-center rounded-2xl border border-slate-200 px-4 focus-within:border-emerald-500 dark:border-slate-700">

                <Lock
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  className="h-14 w-full bg-transparent px-3 outline-none"
                  placeholder="Confirm Password"
                  value={
                    passwordConfirmation
                  }
                  onChange={(e) =>
                    setPasswordConfirmation(
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            <button
              disabled={loading}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Creating account..."
              ) : (
                <>
                  Create Account

                  <ArrowRight
                    size={18}
                  />
                </>
              )}
            </button>

          </form>

          <div className="mt-8 text-center text-sm text-slate-500">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-emerald-600 hover:underline"
            >
              Sign in
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}