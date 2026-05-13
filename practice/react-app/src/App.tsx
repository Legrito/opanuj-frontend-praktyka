import './App.css';
import { Title } from './components/Title';
import { Container } from './components/Container';
import { List } from './components/List';
import { CSSProperties } from 'react';
import bg from './components/List/assets/countries-bg.jpg';
import { SubTitle } from './components/Subtitle';
import { Flex } from 'antd';

const styles: CSSProperties = {
  display: 'flex',
  position: 'relative',
  backgroundImage: `url(${bg})`,
  backgroundSize: '100%',
  backgroundRepeat: 'repeat-y',
  width: '100dvw',
  minHeight: '100dvh'
};

const waveStyle: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100dvw',
};

const backdropStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundColor: '#fff',
  opacity: 0.8,
};

const titleStyles: CSSProperties  = {
  position: 'absolute',
  top: '40px',
  left: '70px'
};

function App() {
  return (
    <div style={styles}>
      <svg
        style={waveStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L40,218.7C80,213,160,203,240,197.3C320,192,400,192,480,202.7C560,213,640,235,720,234.7C800,235,880,213,960,181.3C1040,149,1120,107,1200,112C1280,117,1360,171,1400,197.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div style={backdropStyle} />
      <Container>
        <Flex vertical gap={0} style={titleStyles}>
          <Title />
          <SubTitle />
        </Flex>
        <List />
      </Container>
    </div>
  );
}

export default App;
