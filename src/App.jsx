import styled from "styled-components";
import "./../build/css/variables.css";
import "./index.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Form/Input/Input";

function App() {
  console.log("1", Button);
  return (
    <>
    <Button className="btn-red">
      <Text>I&apos;m a button</Text>
    </Button>
    
      <Input />
      
    </>
  );
}

export default App;

// const Button = styled.button`
//   background-color: var(--colorsPrimary950);
//   border-radius: var(--aldo2);
//   border: none;
// `;

const Text = styled.span`
  font: var(--textBaseFontMedium);
  color: var(--colorsBaseWhite);
`;
