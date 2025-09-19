import Image from "next/image";
import BellIcon from "@/components/icons/BellIcon";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AccountSection } from "@/layout/navbar/AccountSection";
import TrelloSection from "./TrelloSection";
import Divider from "@/components/ui/Divider";
import LogoutSection from "./LogOutSection";

function Navbar({ size }: { size: "sm" | "lg" }) {
  return (
    <nav className={`flex justify-between items-center ${size === "sm" ? "p-4 px-6" : "p-8 px-14"}`}>
      <div className={`flex items-center ${size === "sm" ? "gap-2" : "gap-6"}`}>
        <div>
          <Image src="/trello-logo.png" alt="Logo" width={size === "sm" ? 40 : 80} height={size === "sm" ? 40 : 80} className="" />
        </div>
        <span className={`${size === "sm" ? "text-lg" : "text-2xl"} font-bold custom-tight`}>Trello</span>
      </div>
      <div className={`flex ${size === "sm" ? "gap-4 w-1/2 max-w-[300px]" : "gap-8 w-1/2 md:w-1/4 max-w-[400px]"} justify-between items-center`}>
        <Input type="text" placeholder="Search..." className={size === "sm" ? "text-sm py-1 px-2 flex-grow basis-2/3" : undefined} />
        <div>
          <BellIcon />
        </div>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <AccountSection />
            <Divider />
            <TrelloSection />
            <Divider />
            <LogoutSection />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
