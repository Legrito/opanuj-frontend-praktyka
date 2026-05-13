import { AnyObject } from 'antd/es/_util/type';
import { useEffect, useState } from 'react';

const BASIC_URL = 'https://restcountries.com/v3.1';

type CountryT = {
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  currencies: AnyObject;
  flags: {
    png: string;
  };
};

type ErrorT = {
  status: string;
  message: string;
};

export type SortOptionsT = {
  name?: 'asc' | 'desc',
  population?: 'asc' | 'desc'
}

export function useCountriesData(
  name?: string,
  sort: SortOptionsT = {}
) {
  const [countries, setCountries] = useState<CountryT[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!name) {
      return setCountries([]);
    }

    console.log(sort);

    const fetchCountries = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASIC_URL}/name/${name}?fields=name,population,currencies,flags`
        );
        const data: CountryT[] | ErrorT = await res.json();

        if ((data as ErrorT)?.status) {
          setLoading(false);
          return setError('Something went wrong, please try again');
        }

        let sortedCountries = data as CountryT[];

        if (sort.name === 'asc') {
          sortedCountries = sortedCountries.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
        } else if (sort.name === 'desc') {
          sortedCountries = sortedCountries.sort((a, b) =>
            b.name.common.localeCompare(a.name.common)
          );
        } 
        
        if (sort.population === 'asc') {
          sortedCountries = sortedCountries.sort((a, b) => a.population - b.population);
        } else if (sort.population === 'desc') {
          sortedCountries = sortedCountries.sort((a, b) => b.population - a.population);
        }

        setCountries(sortedCountries);
        setError('');
      } catch (e) {
        console.error('ERROR', 'Something went wrong, please try again');
        setError('Something went wrong, please try again');
      }

      setLoading(false);
    };

    fetchCountries();
  }, [name, sort]);

  return { countries, loading, error };
}
