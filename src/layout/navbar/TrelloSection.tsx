// components/account/TrelloSection.tsx
import ChevronRight from "@/components/icons/ChevronRight";

export default function TrelloSection() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs uppercase text-muted-foreground">Trello</h3>

      <div className="text-base text-foreground/80 hover:text-foreground cursor-pointer">Profile and visibility</div>
      <div className="text-base text-foreground/80 hover:text-foreground cursor-pointer">Activity</div>
      <div className="text-base text-foreground/80 hover:text-foreground cursor-pointer">Settings</div>

      <div className="flex items-center justify-between">
        <div className="text-base text-foreground/80 hover:text-foreground cursor-pointer">Theme</div>
        <ChevronRight />
      </div>
    </div>
  );
}
