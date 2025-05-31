export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  contact: string;
  whatsapp: string;
  imageUrl: string;
}

export interface SearchParams {
  query: string;
  location?: string;
  category?: string;
}