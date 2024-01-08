import styled from "styled-components";
import "./../build/css/variables.css";
import "./index.css";
import {Button, Input} from 'auzmorui'

function App() {
  return (
    <>
    <StyledButton className="btn-red ">
      <Text>I&apos;m a button</Text>
    </StyledButton>
    
      <Input />
      
    </>
  );
}

export default App;

const StyledButton = styled(Button)`
  /* background-color: purple;
  border-radius: var(--aldo2);
  border: none; */
`;

const Text = styled.span`
  font: var(--textBaseFontMedium);
  color: var(--colorsBaseWhite);
`;
