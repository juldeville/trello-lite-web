import { apiFetch } from "./fetcher";
import type { BoardCreateRequest } from "@/types/boards";

const getBoards = async () => {
  const response = await apiFetch("/boards");
  return response.boards;
};

const createBoard = async (boardData: BoardCreateRequest) => {
  const response = await apiFetch("/boards/new", {
    method: "POST",
    body: boardData,
  });
  return response;
};

// export const updateBoard = async (boardId, boardData) => {
//   const response = await apiFetch(`/api/boards/update/${boardId}`, {
//     method: "PUT",
//     body: JSON.stringify(boardData),
//   });
//   return response;
// };

// export const deleteBoard = async (boardId) => {
//   const response = await apiFetch(`/api/boards/delete/${boardId}`, {
//     method: "DELETE",
//   });
//   return response;
// };

export { getBoards, createBoard };
