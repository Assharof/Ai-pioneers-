import { Sparkles } from "lucide-react";

export function AIAssistantBubble() {
  return (
    <a
      href="https://wa.me/2349063394802?text=Hello%2C%20I%20have%20a%20question%20about%20the%20AI%20Pioneers%20program."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#0B1220] px-5 py-3 text-sm font-medium text-white shadow-xl ring-1 ring-white/10 transition hover:bg-[#1D6FE0]"
      aria-label="Ask AI Assistant"
    >
      <Sparkles size={18} className="text-[#22C55E]" />
      Ask AI Assistant
    </a>
  );
}
