import Image from "next/image";
import BellIcon from "@/components/icons/BellIcon";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AccountSection } from "@/layout/navbar/AccountSection";
import TrelloSection from "./TrelloSection";
import Divider from "@/components/ui/Divider";
import LogoutSection from "./LogOutSection";

import ChevronRight from "@/components/icons/ChevronRight";
function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8  px-14">
      <div className="flex items-center gap-6">
        <div className=" ">
          <Image src="/trello-logo.png" alt="Logo" width={80} height={80} className="" />
        </div>
        <span className="text-2xl font-bold custom-tight">Trello</span>
      </div>
      <div className="flex gap-8 w-1/4 max-w-[400px] justify-between items-center">
        <Input type="text" placeholder="Search..." />
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
