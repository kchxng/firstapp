export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  email_of_seller: string;
  price: number;
  created_at: string;
}

export interface BookRequest {
  title: string;
  author: string;
  cover: string;
  email_of_seller: string;
  price: number;
}
