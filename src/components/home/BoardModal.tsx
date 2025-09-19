import Modal from "react-modal";
import { useState } from "react";
import { customStyles } from "@/constants/boardModalStyle";
import type { BoardCreateRequest } from "@/types/boards";
import { Input } from "../ui/input";
import Image from "next/image";
import { createBoard } from "@/services/boards";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface BoardModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

function BoardModal({ modalIsOpen, closeModal }: BoardModalProps) {
  const queryClient = useQueryClient();
  const [newBoardData, setNewBoardData] = useState<BoardCreateRequest>({
    name: "",
    members: [],
  });

  console.log("newboarddata is: ", newBoardData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBoardData((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
    onError: (error) => {
      console.error("Failed to create board:", error);
    },
  });

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" ariaHideApp={false}>
        <div className=" flex flex-col jusity-center items-center">
          <h2 className="font-semibold">Create board</h2>
          <Image src="/boards.png" width={200} height={200} alt="create-boards" />
        </div>

        <form
          className=" h-full mt-10 flex flex-col gap-10"
          onSubmit={(e) => {
            e.preventDefault();
            mutate(newBoardData);
          }}
        >
          <fieldset disabled={isPending} className="contents">
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="board-title">Board title</label>
              <Input rounded="md" id="board-title" placeholder="Enter your board title" required value={newBoardData.name} onChange={handleChange} name="name" />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="members">Members</label>
              <Input rounded="md" id="members" placeholder="Add members to your board" value={newBoardData.members} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full  mt-6" size="lg">
              Create
            </Button>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
}

export default BoardModal;
