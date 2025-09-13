export interface Board {
  _id: string;
  ownerId: string;
  name: string;
  createdAt: string;
  members: string[];
}

export interface BoardCardProps {
  name: string;
}

export interface BoardCreateRequest {
  name: string;
  members?: string[];
}
