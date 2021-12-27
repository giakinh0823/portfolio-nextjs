import { User } from "./user";
import {Tag} from './tag';
import { Topic } from "./topic";


export interface Image{
  id: string;
  url: string;
  image: string;
}
export interface Blog {
  id: number;
  author: User;
  title: string;
  description: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  image: Image;
  tags: Tag[];
  topics: Topic[];
}
