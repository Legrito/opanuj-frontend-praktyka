export interface Comment {
  id: number;
  author: string;
  text: string;
  rating: number;
  onReset?: () => void;
  isError?: boolean;
}
