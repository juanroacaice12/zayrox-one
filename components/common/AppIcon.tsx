interface Props {
  children: React.ReactNode;
  color: string;
}

export default function AppIcon({
  children,
  color,
}: Props) {
  return (
    <div
      className={`
      w-12
      h-12
      rounded-xl
      flex
      items-center
      justify-center
      text-white
      shadow-lg
      ${color}
      `}
    >
      {children}
    </div>
  );
}