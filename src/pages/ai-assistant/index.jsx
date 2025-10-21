import { useState } from "react";
import { Send, ArrowLeft, Sparkles } from "lucide-react";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI learning assistant. How can I help you with your queries today?",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const suggestionChips = ["Routine QnA", "Vital Revise", "Vocal Revise"];

  const exampleQuestions = [
    "Can you explain the concept of neural networks?",
    "Can you give me a real-world example?",
    "Find me the best rooftop restaurants",
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        content: generateAIResponse(inputMessage),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInputMessage("");
  };

  const generateAIResponse = (query) => {
    const responses = {
      neural:
        "Sure! Neural networks are computing systems inspired by the human brain. Think of them as a network of interconnected nodes (like brain neurons) that process information.",
      example:
        "A common example is image recognition: when your phone recognizes faces in photos, it's using neural networks. They're also behind voice assistants like Siri, recommendation systems on streaming platforms, and autonomous vehicles.",
      rooftop:
        "I'd be happy to help you find rooftop restaurants! Rooftop dining offers amazing city views and a unique atmosphere.",
    };

    const lowerQuery = query.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuery.includes(key)) {
        return response;
      }
    }

    return "That's an interesting question! I'd be happy to help you explore that topic further. Could you provide a bit more context?";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChipClick = (chip) => {
    setInputMessage(chip);
  };

  const handleExampleClick = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Fixed */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              AI Assistant
            </h1>
          </div>
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Chat Messages - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 space-y-4 pb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-3xl ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === "ai" ? "bg-teal-600" : "bg-gray-600"
                  }`}
                >
                  {message.type === "ai" ? (
                    <Sparkles className="h-4 w-4 text-white" />
                  ) : (
                    <span className="text-white text-xs font-medium">U</span>
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`rounded-lg shadow-sm ${
                    message.type === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="p-4">
                    <p
                      className={`text-sm leading-relaxed ${
                        message.type === "user" ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Suggestion Chips */}
          {messages.length === 1 && (
            <div className="mt-6">
              <span className="text-sm text-gray-500 mb-3 block">
                Try asking about:
              </span>
              <div className="flex flex-wrap gap-2">
                {suggestionChips.map((chip, index) => (
                  <button
                    key={index}
                    onClick={() => handleChipClick(chip)}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-teal-50 hover:border-teal-300 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Example Questions */}
          {messages.length === 1 && (
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-medium text-gray-600">
                Example questions you can ask:
              </h3>
              <div className="space-y-2">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(question)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-teal-600 hover:border-teal-300 hover:bg-teal-50 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area - Fixed at Bottom */}
      <div className="bg-white border-t sticky bottom-0">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-teal-300 focus-within:ring-1 focus-within:ring-teal-300 transition-all">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask for a reassurance, info..."
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-sm placeholder-gray-500"
              />
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className={`m-1 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  inputMessage.trim()
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
