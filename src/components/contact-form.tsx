"use client";

import { SendHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      form.email.trim().includes("@") &&
      form.message.trim().length > 10
    );
  }, [form]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || !canSubmit) return;

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload?.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ring-1 ring-white/10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Message
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Tell me about your project
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            I reply within 01–48 hours. Share timelines, goals, or anything
            helpful.
          </p>
        </div>
        <span className="hidden rounded-full border border-white/10 bg-white/10 p-3 text-sky-200 sm:inline-flex">
          <SendHorizontal className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm text-slate-200">
          Name
          <input
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            required
            autoComplete="email"
            placeholder="you@email.com"
            className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Company (optional)
          <input
            value={form.company}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, company: event.target.value }))
            }
            autoComplete="organization"
            placeholder="Studio, startup, or agency"
            className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Message
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            required
            rows={5}
            placeholder="What are you building? What should I know before we chat?"
            className="resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p className="text-slate-300">
          {status === "success"
            ? "Thanks! Your message is on its way."
            : "I keep your info private and only use it to reply."}
        </p>
        <button
          type="submit"
          disabled={!canSubmit || status === "sending"}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-400/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-slate-400"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <SendHorizontal className="h-4 w-4" />
        </button>
      </div>

      {status === "error" && error ? (
        <p className="mt-4 text-sm text-rose-300">{error}</p>
      ) : null}
    </form>
  );
}
