import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ message, label }: { message: string; label?: string }) {
  const url = `https://wa.me/2349063394802?text=${encodeURIComponent(message)}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#16a34a]">
      <MessageCircle size={18} />
      {label || "Chat on WhatsApp"}
    </a>
  );
}
