import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuItem } from "@/components/ui/MenuItem";

export function AccountSection() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs uppercase text-muted-foreground">Account</h3>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base font-medium">Julien Deville</p>
          <p className="text-sm text-muted-foreground">julien.deville@example.com</p>
        </div>
      </div>
      <MenuItem label="Switch accounts" />
      <MenuItem label="Manage account" />
    </div>
  );
}
