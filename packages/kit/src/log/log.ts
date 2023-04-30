import { margin } from "./format";
import { label } from "./style";

export const log = (
  text: string,
  options?: { label: { hex: string; text: string } }
) => {
  if (options?.label)
    return console.log(
      label(options.label.hex, options.label.text) +
        margin(text, true)
    );

  return console.log(margin(text));
};
