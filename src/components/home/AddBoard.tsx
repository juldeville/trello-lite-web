import Image from "next/image";
import PlusIcon from "../icons/PlusIcon";
import type { BoardCreateRequest } from "@/types/boards";

function AddBoard({ openModal }: { openModal: () => void }) {
  return (
    <div className="w-64 h-40 md:h-full bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg cursor-pointer flex items-center justify-center" onClick={openModal}>
      <PlusIcon />
    </div>
  );
}

export default AddBoard;
