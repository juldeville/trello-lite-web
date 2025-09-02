import BoardCard from "@/components/home/BoardCard";
import AddBoard from "@/components/home/AddBoard";

function Boards() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-2xl font-bold">Your Boards</h2>
      <div className="flex gap-6 flex-wrap">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <AddBoard />
      </div>
    </div>
  );
}
export default Boards;
