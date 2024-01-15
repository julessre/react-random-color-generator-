import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 0px;
`;

export default function App() {
  const [color, setColor] = useState('');
  const generateColor = randomColor();

  return (
    <>
      <h1>React Random Color Generator</h1>
      <br />
      <p>Click on the button below and create a random color.</p>
      <br />
      <Button
        onClick={() => {
          const generateColor = randomColor();
          setColor(generateColor);
        }}
      >
        Generate
      </Button>
      {generateColor && (
        <div style={{ backgroundColor: { generateColor } }}>
          Generated Color: {generateColor}
        </div>
      )}
    </>
  );
}