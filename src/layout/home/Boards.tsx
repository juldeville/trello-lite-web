import BoardCard from "@/components/home/BoardCard";
import AddBoard from "@/components/home/AddBoard";

function Boards() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">Your Boards</h2>
      <div className="flex gap-6 flex-wrap">
        <BoardCard />
        <AddBoard />
      </div>
    </div>
  );
}
export default Boards;
