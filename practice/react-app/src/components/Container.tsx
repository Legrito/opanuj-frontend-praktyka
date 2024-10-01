import { CSSProperties, FC, PropsWithChildren } from 'react';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  maxWidth: '1440px',
  width: '100%',
  padding: '40px',
  margin: '0 auto',
  position: 'relative',
};

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div style={styles}>{children}</div>
);
