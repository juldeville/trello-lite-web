import Image from "next/image";
import PlusIcon from "../icons/PlusIcon";
function AddBoard() {
  return (
    <div className="w-48 md:w-96 bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg cursor-pointer flex items-center justify-center h-[251px] ">
      <PlusIcon />
    </div>
  );
}

export default AddBoard;
