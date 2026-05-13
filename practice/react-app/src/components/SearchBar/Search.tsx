import { ChangeEvent, FC, useState } from 'react';
import { ConfigProvider, Input } from 'antd';

const styles = {
  width: '300px',
  marginTop: '200px',
  borderColor: 'cadetblue'
};

type PropsType = {
  value?: string;
  onChange: (value: string) => void;
};

export const Search: FC<PropsType> = ({ onChange }) => {
  const [queryString, setQueryString] = useState<string | undefined>();

  const handleSearch = () => {
    if (!queryString) return;

    onChange(queryString);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.currentTarget.value);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'cadetblue',
          colorPrimaryActive: 'cadetblue',
          colorPrimaryHover: 'cadetblue',
        },
        components: {
          Input: {
            hoverBorderColor: 'cadetblue',
          },
        },
      }}
    >
      <Input.Search
        onChange={handleChange}
        style={styles}
        placeholder="Search by name"
        value={queryString}
        onSearch={handleSearch}
        allowClear
      />
    </ConfigProvider>
  );
};
