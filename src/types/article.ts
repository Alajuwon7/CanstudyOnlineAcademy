export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  image: string;
  publishedAt: string;
  likes: number;
  category?: string;
  tags?: string[];
}
