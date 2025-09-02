export function MenuItem({ label }: { label: string }) {
  return <div className="text-base text-foreground/80 hover:text-foreground cursor-pointer">{label}</div>;
}
