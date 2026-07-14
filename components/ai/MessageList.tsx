import ChatMessage from "./ChatMessage";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <div className="flex-1 overflow-y-auto scroll-smooth px-8 py-6 space-y-6">

      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          message={message.content}
        />
      ))}

    </div>
  );
}