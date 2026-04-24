"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { cta, formContent, productLines } from "@/content/site";

type ContactPanel = {
  title: string;
  content?: string;
  items?: string[];
  lines?: ReactNode[];
};

type ContactFormProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  introPanel?: ContactPanel;
  directPanel?: ContactPanel;
  responsePanel?: ContactPanel;
  submitLabel?: string;
  simpleFields?: boolean;
};

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  line: "",
  application: "",
  compatibility: "",
  message: ""
};

export function ContactForm({
  eyebrow = "Orçamento",
  title = formContent.title,
  description = formContent.description,
  introPanel,
  directPanel,
  responsePanel,
  submitLabel = cta.formSubmit,
  simpleFields = false
}: ContactFormProps) {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const resolvedIntroPanel = introPanel ?? {
    title: "Enquadramento comercial",
    content: "O contacto comercial deve recolher contexto técnico suficiente para orientar o orçamento com mais rapidez e precisão."
  };

  const resolvedDirectPanel = directPanel ?? {
    title: "Contacto direto",
    lines: ["geral.carlospinto@outlook.com", "+351 963537100", "Salir de Matos - Portugal"]
  };

  const resolvedResponsePanel = responsePanel ?? {
    title: "Resposta comercial",
    content: "Resposta comercial com a maior brevidade possível."
  };

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Não foi possível enviar o pedido neste momento.");
      }

      setFeedback({ type: "success", message: "Pedido enviado com sucesso. Vamos responder com a maior brevidade possível." });
      setForm(initialFormState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível enviar o pedido neste momento.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:gap-8">
      <div className="surface-dark rounded-[2.15rem] border border-white/10 p-8 text-white shadow-[0_34px_110px_rgba(5,9,10,0.34)] sm:p-10 lg:p-12">
        <span className="section-kicker border-sand-300/30 bg-sand-300/10 text-sand-200">{eyebrow}</span>
        <h2 className="mt-5 max-w-[13ch] text-[2.1rem] font-semibold tracking-[-0.045em] text-white sm:text-[2.55rem] lg:leading-[0.98]">{title}</h2>
        <p className="mt-5 text-[1rem] leading-8 text-white/82">{description}</p>

        <div className="mt-8 grid gap-4 text-sm text-white/78">
          <div className="rounded-[1.55rem] border border-white/12 bg-white/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-200">{resolvedIntroPanel.title}</p>
            {resolvedIntroPanel.content ? <p className="mt-3 leading-7 text-white/84">{resolvedIntroPanel.content}</p> : null}
            {resolvedIntroPanel.items ? (
              <ul className="mt-3 grid gap-2.5 leading-7 text-white/84">
                {resolvedIntroPanel.items.map((item) => (
                  <li key={item} className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="rounded-[1.55rem] border border-white/12 bg-white/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-200">{resolvedDirectPanel.title}</p>
            {resolvedDirectPanel.content ? <p className="mt-3 leading-7 text-white/84">{resolvedDirectPanel.content}</p> : null}
            {resolvedDirectPanel.lines ? (
              <div className="mt-3 grid gap-2.5 leading-7 text-white/88">
                {resolvedDirectPanel.lines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-[1.55rem] border border-white/12 bg-white/[0.06] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-200">{resolvedResponsePanel.title}</p>
            {resolvedResponsePanel.content ? <p className="mt-3 leading-7 text-white/84">{resolvedResponsePanel.content}</p> : null}
            {resolvedResponsePanel.items ? (
              <ul className="mt-3 grid gap-2.5 leading-7 text-white/84">
                {resolvedResponsePanel.items.map((item) => (
                  <li key={item} className="rounded-[1rem] border border-white/10 bg-black/10 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <div className="panel-strong border-[color:var(--border-strong)] p-8 shadow-[0_20px_52px_rgba(16,32,34,0.07)] sm:p-10 lg:p-12">
        <form className="grid gap-5 sm:gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
              Nome
              <input type="text" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Nome do contacto" className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
            </label>
            <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
              Empresa
              <input type="text" value={form.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Nome da empresa" className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
              Email
              <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Email profissional" className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
            </label>
            <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
              Telefone
              <input type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Telefone de contacto" className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
            </label>
          </div>
          {!simpleFields ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
                  Linha de produto
                  <select value={form.line} onChange={(event) => updateField("line", event.target.value)} className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16">
                    <option value="">{formContent.linePlaceholder}</option>
                    {productLines.map((line) => (
                      <option key={line.slug} value={line.name}>{line.name}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
                  Aplicação principal
                  <input type="text" value={form.application} onChange={(event) => updateField("application", event.target.value)} placeholder={formContent.applicationPlaceholder} className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
                </label>
              </div>
              <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
                Material e compatibilidade
                <input type="text" value={form.compatibility} onChange={(event) => updateField("compatibility", event.target.value)} placeholder={formContent.compatibilityPlaceholder} className="min-h-[60px] rounded-[1.2rem] border border-[color:var(--border-strong)] bg-white px-4 py-3.5 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
              </label>
            </>
          ) : null}
          <label className="grid gap-2.5 text-[14px] font-semibold text-steel-900">
            Mensagem
            <textarea rows={6} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder={formContent.messagePlaceholder} className="min-h-[180px] rounded-[1.45rem] border border-[color:var(--border-strong)] bg-white px-4 py-4 text-steel-950 outline-none transition placeholder:text-steel-500 focus:border-sand-400 focus:ring-4 focus:ring-sand-300/16" />
          </label>
          {feedback ? (
            <div className={feedback.type === "success" ? "rounded-[1.2rem] border border-[#cde5d2] bg-[#eef7f0] px-4 py-3 text-sm font-medium text-[#1d4f2c]" : "rounded-[1.2rem] border border-[#e7c9c9] bg-[#fbefef] px-4 py-3 text-sm font-medium text-[#7a2323]"}>
              {feedback.message}
            </div>
          ) : null}
          <button type="submit" disabled={isSubmitting} className="inline-flex min-w-[240px] justify-center rounded-full bg-steel-950 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(16,32,34,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-steel-800 disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? "A enviar..." : submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
