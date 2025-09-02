import Image from "next/image";

function BoardCard() {
  return (
    <div className="w-96 bg-white shadow-md rounded-lg cursor-pointer">
      <div className="relative w-full h-40 md:h-48 overflow-hidden rounded-t-lg">
        <Image src="/neonCircles.png" alt="Board Image" fill className="object-cover" />
      </div>
      <h3 className="text-lg font-semibold p-4">Board Title</h3>
    </div>
  );
}

export default BoardCard;
