import { Button } from "auzmorui";
import "./../../build/css/variables-office.css";
import useStyles from "../hooks/useStyles";

const Office = () => {
  useStyles("variables-office");
  return (
    <div>
      <Button>I am Office</Button>
    </div>
  );
};
export default Office;
