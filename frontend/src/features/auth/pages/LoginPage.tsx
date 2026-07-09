import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
  Sparkles,
  Mail,
  Lock,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [remember, setRemember] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      navigate("/studio");
    } catch (err: any) {
      setError(
        err.response?.data?.message ??
          "Email or password is incorrect."
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

            Welcome
            <br />
            back to
            <br />
            BARO.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">

            Continue building your
            professional identity and
            manage your portfolio from
            one beautiful dashboard.

          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              Manage Projects

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              Update Your Portfolio

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-white" />

              Publish Anytime

            </div>

          </div>

        </div>

      </section>

      {/* RIGHT */}

      <section className="flex items-center justify-center bg-slate-50 px-6 py-16 dark:bg-slate-950">

        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="text-4xl font-bold">

            Welcome Back

          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">

            Sign in to continue.

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

            </div>

            <div className="flex items-center justify-between">

              <label className="flex cursor-pointer items-center gap-2 text-sm">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(
                      e.target.checked
                    )
                  }
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-sm font-medium text-emerald-600 hover:underline"
              >
                Forgot password?
              </button>

            </div>

            <button
              disabled={loading}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Signing in..."
              ) : (
                <>
                  Login

                  <ArrowRight
                    size={18}
                  />
                </>
              )}
            </button>

          </form>

          <div className="mt-8 text-center text-sm text-slate-500">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-emerald-600 hover:underline"
            >
              Create one
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}