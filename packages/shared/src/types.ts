// Shared types
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Mentor extends User {
  bio: string;
  specializations: string[];
  rating: number;
}
