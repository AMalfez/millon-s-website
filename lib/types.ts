export interface Comment {
  _id: string;
  name: string;
  comment: string;
  reply: Reply[];
  likes: number;
  publishedAt: string;
}
export interface Reply{
    _id: string;
    publishedAt: string;
    reply: string;
    likes: number;
    name: string;
}
