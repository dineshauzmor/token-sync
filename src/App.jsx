import styled from "styled-components";
import "./../build/css/variables.css";

function App() {
  return (
    <Button>
      <Text>I&apos;m a button</Text>
    </Button>
  );
}

export default App;

const Button = styled.button`
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  border: none;
`;

const Text = styled.span`
  font: var(--textBaseFontMedium);
  color: var(--colorsBaseWhite);
`;
