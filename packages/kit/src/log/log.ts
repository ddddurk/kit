import { margin } from "./format";
import { label } from "./style";

export const log = (
  text: string,
  options?: {
    label: { hex: string; text: string; white?: boolean };
  }
) => {
  if (options?.label)
    return console.log(
      label(
        options.label.hex,
        options.label.text,
        options.label.white ?? true
      ) + margin(text, true)
    );

  return console.log(margin(text));
};
