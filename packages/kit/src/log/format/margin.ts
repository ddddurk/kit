import { stdout } from "process";

import { MARGIN, SPACE } from "../../constants";

export const margin = (
  text: string,
  ignoreFirstLine = false
) => {
  let width = MARGIN + SPACE;

  const maxWidth = stdout.columns - width;

  const prefix = " ".repeat(width);

  return (
    (ignoreFirstLine ? " " : prefix) +
    text
      .split(" ")
      .map((word, i) => {
        if (i === 0) {
          if (word.length > maxWidth)
            return word.slice(0, maxWidth - MARGIN) + "...";
          return word;
        }

        if (word.length + width > maxWidth) {
          width = MARGIN + SPACE;

          return "\n" + prefix + word;
        }

        width += word.length + SPACE;

        return word;
      })
      .join(" ")
  );
};
