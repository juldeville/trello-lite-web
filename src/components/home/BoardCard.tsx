import Image from "next/image";
import type { BoardCardProps } from "@/types/boards";
import Link from "next/link";

function BoardCard({ name }: BoardCardProps) {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg cursor-pointer  overflow-hidden">
      <Link href={`/boards/${name}`} className="contents">
        <div className="relative w-full h-30 md:h-34 overflow-hidden rounded-t-lg">
          <Image src="/neonCircles.png" alt="Board Image" fill className="object-cover" />
        </div>
        <h3 className="font-semibold text-sm p-3">{name}</h3>
      </Link>
    </div>
  );
}

export default BoardCard;
