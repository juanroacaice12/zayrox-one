interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AppButton({
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      rounded-xl
      bg-blue-600
      hover:bg-blue-700
      px-5
      py-3
      text-white
      font-semibold
      transition
      "
    >
      {children}
    </button>
  );
}