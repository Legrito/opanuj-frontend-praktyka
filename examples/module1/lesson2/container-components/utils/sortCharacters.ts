import { Character } from "../types/Character";

export function sortCharacter(characters: Character[], sortOption: 'name' | 'created' | string): Character[] {
  return [...characters].sort((a, b) => {
    switch(sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case "created":
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      default:
        return 0;
    }
  });
}