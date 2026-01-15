export interface Instructor {
  id: string;
  name: string;
  title?: string;
  bio: string;
  avatar: string;
  rating?: number;
  reviews?: number;
  courses?: number;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}
