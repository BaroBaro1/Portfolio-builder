import type { UpdateSettingsPayload } from "@/types/settings";
import { useTheme } from "next-themes";
type Props = {
  form: UpdateSettingsPayload;

  update: <K extends keyof UpdateSettingsPayload>(
    key: K,
    value: UpdateSettingsPayload[K]
  ) => void;
};

export default function AppearanceCard({

  update,
}: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Appearance
        </h2>

        <p className="mt-2 text-muted-foreground">
          Customize your portfolio appearance.
        </p>

      </div>


      <div className="space-y-5">


        <div className="rounded-2xl border p-5">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Language
              </h3>

              <p className="text-sm text-muted-foreground">
                Current portfolio language.
              </p>

            </div>


            <span className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">

              English

            </span>


          </div>

        </div>



        <div className="flex items-center justify-between rounded-2xl border p-5">

  <div>

    <h3 className="font-semibold">
      Dark Mode
    </h3>

    <p className="text-sm text-muted-foreground">
      Enable dark appearance for the studio.
    </p>

  </div>


  <button
    type="button"
    onClick={() => {

      const next =
        theme === "dark"
          ? "light"
          : "dark";

      setTheme(next);

      update(
        "dark_mode",
        next === "dark"
      );

    }}
    className={`relative h-7 w-14 rounded-full transition ${
      theme === "dark"
        ? "bg-emerald-600"
        : "bg-slate-300 dark:bg-slate-700"
    }`}
  >

    <span
      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
        theme === "dark"
          ? "left-8"
          : "left-1"
      }`}
    />

  </button>

</div>

      </div>

    </section>
  );
}