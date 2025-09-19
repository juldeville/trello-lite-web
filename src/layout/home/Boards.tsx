import BoardCard from "@/components/home/BoardCard";
import AddBoard from "@/components/home/AddBoard";
import { useQuery } from "@tanstack/react-query";
import { getBoards } from "@/services/boards";
import { LoaderFive } from "@/components/ui/loader";
import type { Board } from "@/types/boards";
import { useModal } from "@/hooks/useModal";
import BoardModal from "@/components/home/BoardModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/boards";

function Boards() {
  const boardModal = useModal();

  const {
    isPending: isBoardsLoading,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });

  if (isBoardsLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <LoaderFive text="Loading boards..." />
      </div>
    );
  }
  if (isError) {
    return <div className="text-red-500">Error: {(error as Error).message}</div>;
  }

  const boards = data.map((board: Board) => <BoardCard key={board._id} name={board.name} />);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">Your Boards</h2>
      <div className="flex gap-6 flex-wrap">
        {boards}
        <AddBoard openModal={boardModal.openModal} />
        <BoardModal {...boardModal} />
      </div>
    </div>
  );
}
export default Boards;
