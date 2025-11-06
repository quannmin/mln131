import { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Lottie from "lottie-react";
import anima from "../assets/anima-bot.json";
import { Bot } from "lucide-react";

const API_BASE_URL = "https://springai-r5fr.onrender.com";
// const API_BASE_URL = "http://localhost:8090";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /**
   * Gửi message tới Spring Boot API
   * Không lưu conversation ID - stateless
   */
  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setLoading(true);
    setError(null);

    // Thêm user message vào chat
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");

    try {
      // Gọi Spring Boot API - không có username header
      const url = new URL(`${API_BASE_URL}/mln`);
      url.searchParams.append("message", userMessage);

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const answer = data.answer || data.message || "Không nhận được phản hồi từ server";

      // Thêm bot response
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);

    } catch (err) {
      console.error("Chat Error:", err);
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `❌ Lỗi: ${err.message}\n\nVui lòng kiểm tra:\n1. API server có hoạt động không?\n2. URL API có chính xác không?\n3. Kết nối internet có bình thường không?`
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  const visibleMessages = messages.slice(-20);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 flex flex-col items-center justify-start relative">
      {/* Header */}
      <header className="w-full py-2 flex flex-col items-center justify-center bg-gradient-to-r from-red-900 via-red-800 to-yellow-800 shadow-lg border-b-4 border-yellow-500">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl mb-6 shadow-2xl border-4 border-red-500/30">
            <Bot className="h-10 w-10 text-red-800" />
          </div>

          <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 bg-clip-text text-transparent mb-6">
            Trợ Lý AI Vấn đề Dân tộc
          </h1>

          <p className="text-xl text-red-100/80 max-w-3xl mx-auto leading-relaxed">
            Giải đáp về 54 dân tộc Việt Nam, chính sách dân tộc và quan hệ dân tộc
            <br />
            <span className="text-yellow-300 font-semibold">
              Hỏi đáp học thuật, chính sách ưu tiên, di sản văn hóa
            </span>
          </p>
        </div>
      </header>

      {/* Chat */}
      <main className="flex-1 w-full flex flex-col items-center justify-start py-10 px-2">
        <div className="w-full max-w-7xl flex items-start gap-8">
          {/* Robot Animation */}
          <aside className="hidden lg:flex flex-col items-center space-y-4">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <Lottie animationData={anima} loop autoplay className="w-full h-full" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-yellow-100 text-sm font-medium">Trợ lý AI</p>
              <p className={`text-xs ${loading ? "text-yellow-300 animate-pulse" : "text-yellow-200"}`}>
                {loading ? "Đang xử lý..." : "Sẵn sàng"}
              </p>
            </div>
          </aside>

          {/* Chat Section */}
          <section
            className="flex-1 bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-500/70 backdrop-blur-xl flex flex-col"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
          >
            {/* Error Banner */}
            {error && (
              <div className="p-4 bg-red-100 border-b-2 border-red-400 text-red-700 rounded-t-3xl">
                <p className="text-sm font-semibold">⚠️ {error}</p>
              </div>
            )}

            {/* Messages */}
            <div
              className="flex-1 p-8 overflow-y-auto space-y-6 max-h-[70vh]"
              style={{ minHeight: "400px" }}
            >
              {visibleMessages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="w-24 h-24 mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-yellow-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Chào mừng bạn đến với Trợ lý AI!</p>
                  <p className="text-sm text-center mt-2">
                    Hãy đặt câu hỏi về các dân tộc Việt Nam, chính sách dân tộc và di sản văn hóa
                  </p>
                </div>
              )}

              {visibleMessages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-6 py-4 rounded-2xl shadow text-base whitespace-pre-line ${m.role === "user"
                      ? "bg-gradient-to-r from-yellow-100 to-yellow-300 text-gray-900 border border-yellow-400"
                      : "bg-gradient-to-r from-[#f5e6c8] to-[#fffbe6] text-[#7b1f1f] border border-yellow-300"
                      }`}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {m.text}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start mt-2">
                  <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#f5e6c8] to-[#fffbe6] text-[#7b1f1f] border border-yellow-300 shadow animate-pulse">
                    <svg
                      className="animate-spin h-5 w-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      ircle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <span>Đang trả lời...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-3 p-6 border-t-2 border-yellow-300 bg-white/80 rounded-b-3xl">
              <input
                type="text"
                className="flex-1 px-5 py-4 rounded-full border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg bg-white/90"
                placeholder="Nhập câu hỏi về các dân tộc Việt Nam..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) {
                    sendMessage();
                  }
                }}
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => !loading && sendMessage()}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#7b1f1f] font-bold shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 disabled:opacity-60 border-2 border-yellow-300"
                disabled={loading || !input.trim()}
              >
                <PaperAirplaneIcon className="w-6 h-6" />
                Gửi
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
