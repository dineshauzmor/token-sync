import styled from "styled-components";
import "./../build/css/variables.css";

function App() {
  return (
    <Button>
      <Text>I am a button</Text>
    </Button>
  );
}

export default App;

const Button = styled.button`
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  border: 1px solid black;
`;

const Text = styled.span`
  font: var(--textBaseFontMedium);
  color: var(--colorsBaseBlack);
`;
