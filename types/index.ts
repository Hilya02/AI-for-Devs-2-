
export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  createdAt: string;
  author: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export enum Page {
  Polls,
  Auth,
}
