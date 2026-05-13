import { Character } from '../types/Character';

interface Props {
  character: Character
}

export const CharacterListItem = ({ character}: Props) => {
  return (
    <li key={character.id} className="flex flex-col items-center">
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </li>
  )
}