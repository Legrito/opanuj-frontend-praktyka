import { FC } from "react";
import { Search } from "./Search";
import { Button, ConfigProvider, Flex } from "antd";
import { FilterOutlined } from '@ant-design/icons';

type PropsT = {
  onSearch: (value: string) => void, 
  onSetSortOption: (e: React.MouseEvent<HTMLButtonElement>) => void,
  isDisabled: boolean
};

export const SearchBar: FC<PropsT> = ({ onSearch, onSetSortOption, isDisabled}) => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorLink: 'cadetblue',
      },
    }}
  >
    <Flex gap={10} align={'flex-end'}>
        <Search onChange={onSearch} />
        <Button
          style={{ borderColor: 'cadetblue', background: '#fff' }}
          type="link"
          icon={<FilterOutlined />}
          id={'name'}
          onClick={onSetSortOption}
          disabled={isDisabled}
        >Name</Button>
        <Button
          style={{ borderColor: 'cadetblue', background: '#fff' }}
          type="link"
          icon={<FilterOutlined />}
          id={'population'}
          onClick={onSetSortOption}
          disabled={isDisabled}
        >Population</Button>
      </Flex>
      </ConfigProvider>
  )
}