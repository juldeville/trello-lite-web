"use client";

import Templates from "./Templates";
import Boards from "./Boards";
import { getToken } from "@/services/tokenStore";
import BoardModal from "@/components/home/BoardModal";
import { useModal } from "@/hooks/useModal";
function MainContent() {
  return (
    <div className="p-8 md:p-16 bg-gray-surface flex flex-col h-full rounded-2xl shadow-xl ">
      <div className="flex flex-col gap-12">
        <Templates />
        <Boards />
      </div>
    </div>
  );
}

export default MainContent;
