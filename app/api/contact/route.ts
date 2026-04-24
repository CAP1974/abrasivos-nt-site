import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contact } from "@/content/site";

const requiredFields = ["name", "company", "email", "phone", "line", "application", "compatibility", "message"] as const;

type ContactPayload = Record<(typeof requiredFields)[number], string>;

function getMissingFields(payload: Partial<ContactPayload>) {
  return requiredFields.filter((field) => !payload[field]?.trim());
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;
    const missingFields = getMissingFields(payload);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { ok: false, message: "Preencha todos os campos do formulário.", missingFields },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECIPIENT || contact.email;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          ok: false,
          message: "O envio de email ainda não está configurado no servidor. Defina SMTP_USER e SMTP_PASS."
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const data = payload as ContactPayload;
    const subject = `Pedido de informação - ${data.line}`;
    const text = [
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `Email: ${data.email}`,
      `Telefone: ${data.phone}`,
      `Linha de produto: ${data.line}`,
      `Aplicação principal: ${data.application}`,
      `Material e compatibilidade: ${data.compatibility}`,
      "",
      "Mensagem:",
      data.message
    ].join("\n");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#102022;line-height:1.7;max-width:760px;">
        <h2 style="margin:0 0 16px;font-size:24px;">Novo pedido comercial</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr><td style="padding:8px 0;font-weight:700;width:220px;">Nome</td><td style="padding:8px 0;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Empresa</td><td style="padding:8px 0;">${data.company}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Email</td><td style="padding:8px 0;">${data.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Telefone</td><td style="padding:8px 0;">${data.phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Linha de produto</td><td style="padding:8px 0;">${data.line}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Aplicação principal</td><td style="padding:8px 0;">${data.application}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Material e compatibilidade</td><td style="padding:8px 0;">${data.compatibility}</td></tr>
          </tbody>
        </table>
        <div style="margin-top:24px;border-top:1px solid #d7ccb9;padding-top:16px;">
          <p style="margin:0 0 8px;font-weight:700;">Mensagem</p>
          <p style="margin:0;white-space:pre-wrap;">${data.message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `Abrasivos NT <${smtpUser}>`,
      to: recipient,
      replyTo: data.email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true, message: "Pedido enviado com sucesso." });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { ok: false, message: "Não foi possível enviar o pedido neste momento." },
      { status: 500 }
    );
  }
}
