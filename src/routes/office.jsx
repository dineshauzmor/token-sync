import { Button } from "@shubh-test/ui";
import "@shubh-test/design-tokens/brand/office/tokens.css";

const Office = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-6xl font-semibold mb-8">Auzmor Office</h1>
      <div className="flex gap-3">
        <Button className="">Office Outline Button</Button>
        <Button variant="normal" className="">Office Normal Button</Button>
      </div>
    </div>
  );
};
export default Office;
