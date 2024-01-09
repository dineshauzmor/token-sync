import { Button } from "auzmorui";
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
