import Link from "next/link";
import { contact } from "@/content/site";

export function WhatsAppButton() {
  if (!contact.whatsapp) {
    return null;
  }

  return (
    <Link
      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-[#1f9f61] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#188452]"
    >
      WhatsApp
    </Link>
  );
}