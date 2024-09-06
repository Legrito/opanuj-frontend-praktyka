import { CSSProperties, FC } from 'react';
import './index.css';

const imgStyle: CSSProperties = {
  objectFit: 'contain',
  objectPosition: 'top',
};

const cardStyle: CSSProperties = {
  width: '300px',
  height: '200px',
  backgroundSize: 'cover'
};

type PropsType = {
  src: string;
  alt: string;
};

export const Flag: FC<PropsType> = ({ src, alt }) => {
  return (
    <div style={{...cardStyle, backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat'}} className='element' />
  );
};
