interface Props { 
  title?: string
}

function SearchTitle({ title= 'Wyszukiwarka postaci Rick and Morty'}: Props) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
