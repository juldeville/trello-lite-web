"use client";

import { useParams } from "next/navigation";
import Navbar from "@/layout/navbar/Navbar";
import ChevronDown from "@/components/icons/ChevronDown";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Board() {
  const { title } = useParams();

  return (
    <div>
      <Navbar size="sm" />
      <div className="bg-gray-surface min-h-screen ">
        <div className="flex items-center bg-gray-200 px-6 py-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <Popover>
            <PopoverTrigger>
              <ChevronDown />
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4">Board Options</div>
            </PopoverContent>
          </Popover>
        </div>
        <div>{/* Board content goes here */}</div>
      </div>
    </div>
  );
}
