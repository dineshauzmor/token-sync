import styled from "styled-components";
import "./../build/css/variables.css";

import {Button, Input} from 'auzmorui'



function App() {
  return (
    <>
    <Button className="bg-slate-500">
      <Text>I&apos;m a button</Text>
    </Button>
    
      <Input />
      
    </>
  );
}

export default App;

const StyledButton = styled(Button)`
  /* background-color: purple; */
  border-radius: var(--aldo2);
  border: none;
`;

const Text = styled.span`
  font: var(--textBaseFontMedium);
  color: var(--colorsBaseWhite);
`;
