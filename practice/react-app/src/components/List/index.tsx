import { CSSProperties, FC, useState } from 'react';
import { SortOptionsT, useCountriesData } from '../../hooks/useCountriesData';
import { SearchBar } from '../SearchBar';
import { ListItem } from './ListItem';

const listStyles: CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'center',
  paddingTop: '60px',
};

export const List: FC = () => {
  const [name, setName] = useState<string>();
  const [sortOption, setSortOption] = useState<SortOptionsT>({
    name: 'asc',
    population: 'asc',
  });
  const { countries, loading, error } = useCountriesData(name, sortOption);

  const handleSetName = (name: string) => setName(name);

  const handleSetSortOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetId = e.currentTarget.id;

    switch (targetId) {
      case 'name':
        return setSortOption((prev) => ({
          ...prev,
          name: prev.name === 'asc' ? 'desc' : 'asc',
        }));
      case 'population':
        return setSortOption((prev) => ({
          ...prev,
          population: prev.population === 'asc' ? 'desc' : 'asc',
        }));
      default:
        return null;
    }
  };

  return (
    <>
      <SearchBar
        onSearch={handleSetName}
        onSetSortOption={handleSetSortOptions}
        isDisabled={countries.length < 1}
      />
      <ul style={listStyles}>
        {loading && <p>Loading...</p>}
        {!!error && <p>{error}</p>}
        {!loading && !error && countries.length < 1 && <p>No items found</p>}
        {!loading &&
          !error &&
          countries.length > 0 &&
          countries.map((country) => (
            <ListItem
              key={country.name?.common}
              name={country.name?.common}
              src={country.flags?.png}
            />
          ))}
      </ul>
    </>
  );
};
