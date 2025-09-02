import Image from "next/image";
import BellIcon from "@/components/icons/BellIcon";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
            <div className="flex flex-col  gap-4">
              <h3 className="font-semibold text-xl">Account</h3>
              <div className="flex items-center gap-4 mt-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">Julien Deville</p>
                  <p>julien.deville@example.com</p>
                </div>
              </div>
              <div className="text-lg">Manage Account</div>
            </div>
            <div className="h-px w-full bg-border my-2" />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
