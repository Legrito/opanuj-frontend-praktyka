import { FC, CSSProperties } from 'react';
import { Flag } from './Flag';

type PropsT = {
  name: string;
  src: string;
};

const listItemStyles: CSSProperties = {
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

export const ListItem: FC<PropsT> = ({ name, src }) => {
  return (
    <li style={listItemStyles} key={name}>
      <h2>{name}</h2>
      <Flag src={src} alt={name} />
    </li>
  );
};
