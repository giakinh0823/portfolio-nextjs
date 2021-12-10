import { User } from "./user";

export interface Blog {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  description: string;
  meta_title: string;
  meta_description: string;
  photo: string;
  thumbnail: string;
  min_read: string;
  published_at: string;
  is_approved: boolean;
  created_at: string;
  photo_cdn: string;
  thumbnail_cdn: string;
  is_bookmark: boolean;
  is_published: boolean;
  user: User;
}
