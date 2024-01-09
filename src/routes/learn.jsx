import { Button, ThemeProvider } from "auzmorui";
import useStyles from "../hooks/useStyles";
import { useState } from "react";

const Learn = () => {
  useStyles("variables-auzmor1");
  const [primaryColor, setPrimaryColor] = useState("");

  return (
    <ThemeProvider primaryColor={primaryColor}>
      <Button onClick={() => setPrimaryColor("#000")}>I am Learn</Button>
    </ThemeProvider>
  );
};

export default Learn;
