import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1000);
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

            Password Recovery

          </div>

          <h1 className="mt-10 text-6xl font-black leading-tight">

            Create
            <br />
            a new
            <br />
            password.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">

            Your new password should be
            secure and easy for you to remember.

          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-3">

              <CheckCircle />

              Strong Encryption

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle />

              Secure Authentication

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle />

              Protected Account

            </div>

          </div>

        </div>

      </section>

      {/* RIGHT */}

      <section className="flex items-center justify-center bg-slate-50 px-6 py-16 dark:bg-slate-950">

        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

          <h2 className="text-4xl font-bold">

            Create New Password

          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">

            Enter your new password below.

          </p>

          {success && (

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">

              Password updated successfully.

            </div>

          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >            <div className="space-y-2">

              <label className="text-sm font-medium">
                New Password
              </label>

              <div className="flex items-center rounded-2xl border border-slate-200 px-4 focus-within:border-emerald-500 dark:border-slate-700">

                <Lock
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  className="h-14 w-full bg-transparent px-3 outline-none"
                  placeholder="New password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
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
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
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

            <div>

              <div className="mb-2 flex justify-between text-sm">

                <span>Password Strength</span>

                <span className="text-emerald-600 font-medium">
                  Strong
                </span>

              </div>

              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">

                <div className="h-2 w-4/5 rounded-full bg-emerald-500"></div>

              </div>

            </div>

            <button
              disabled={loading}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Updating..."
              ) : (
                <>
                  Reset Password

                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">

            <Link
              to="/login"
              className="flex items-center justify-center text-sm font-semibold text-emerald-600 transition hover:underline"
            >
              Continue to Login
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}