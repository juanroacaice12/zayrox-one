import AIChat from "./AIChat";
import ConversationList from "./ConversationList";
import QuickPrompts from "./QuickPrompts";

export default function AIHome() {
  return (
    <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">

      <div className="col-span-3">

        <ConversationList />

      </div>

      <div className="col-span-6">

        <AIChat />

      </div>

      <div className="col-span-3">

        <QuickPrompts />

      </div>

    </div>
  );
}