import { apiFetch } from "./fetcher";

const getBoards = async () => {
  console.log("Fetching boards...");
  const response = await apiFetch("/boards");
  console.log("Fetched boards:", response);
  return response.boards;
};

// export const createBoard = async (boardData) => {
//   const response = await apiFetch("/api/boards/new", {
//     method: "POST",
//     body: JSON.stringify(boardData),
//   });
//   return response;
// };

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

export { getBoards };
