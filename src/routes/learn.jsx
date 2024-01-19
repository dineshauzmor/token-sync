import { Button } from "@shubh-test/ui";
import "@shubh-test/design-tokens/brand/learn/tokens.css";

const Learn = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-6xl font-semibold mb-8">Auzmor Learn</h1>
      <div className="flex gap-3">
        <Button className="">Learn Outline Button</Button>
        <Button variant="normal">Learn Normal Button</Button>
      </div>
    </div>
  );
};

export default Learn;
