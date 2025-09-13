import Image from "next/image";
import type { BoardCardProps } from "@/types/boards";

function BoardCard({ name }: BoardCardProps) {
  return (
    <div className="w-96 bg-white shadow-md rounded-lg cursor-pointer">
      <div className="relative w-full h-40 md:h-48 overflow-hidden rounded-t-lg">
        <Image src="/neonCircles.png" alt="Board Image" fill className="object-cover" />
      </div>
      <h3 className=" font-semibold p-4">{name}</h3>
    </div>
  );
}

export default BoardCard;
