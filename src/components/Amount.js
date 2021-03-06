/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";
import { useSelectorTotal } from "../selector";

function Amount() {
  const amount = useSelectorTotal();
  return (
    <div
      css={{
        marginBottom: "1em"
      }}
    >
      <Card>Total amount: S/. {amount}</Card>
    </div>
  );
}

export default Amount;
