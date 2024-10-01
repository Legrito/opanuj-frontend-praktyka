import { CSSProperties, FC } from 'react';

const styles: CSSProperties = {
  fontSize: '68px',
  color: 'grey',
  fontFamily: 'Arial',
  lineHeight: '1.2',
};

export const Title: FC = () => <p style={styles}>Countries</p>;
