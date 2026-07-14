interface AvatarProps {
  role: "user" | "assistant";
}

export default function Avatar({ role }: AvatarProps) {
  if (role === "assistant") {
    return (
      <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg">
        Z
      </div>
    );
  }

  return (
    <div className="h-11 w-11 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shadow-lg">
      JC
    </div>
  );
}