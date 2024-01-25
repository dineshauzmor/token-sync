import { Button } from "@auzmor-test/ui";
import "@auzmor-test/design-tokens/brand/office/tokens.css";

const Office = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-6xl font-semibold mb-8">Auzmor Office</h1>
      <div className="flex gap-3">
        <Button variant="outline">Office Outline Button</Button>
        <Button>Office Normal Button</Button>
      </div>
    </div>
  );
};
export default Office;
