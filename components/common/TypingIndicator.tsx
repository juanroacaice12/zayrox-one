export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 py-4">

      <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce"></div>

      <div
        className="h-2 w-2 rounded-full bg-blue-600 animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>

      <div
        className="h-2 w-2 rounded-full bg-blue-600 animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>

    </div>
  );
}