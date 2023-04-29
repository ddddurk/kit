import { window } from "./window";

export const indent = (
  indent: number,
  max: number,
  spaces: number,
  text: string
) => {
  const { columns } = window();

  max = columns > max ? max : columns;

  const space = " ".repeat(spaces);

  const split = text.split("\n");

  let width = space.length;

  return (
    space +
    split
      .map((word, i) => {
        if (width + word.length > max - indent) {
          width = 0;

          return i === split.length - 1
            ? i === 0
              ? `${word.slice(0, max - indent - 3)}...`
              : `${space}${word}`
            : `\n${space}${word}`;
        } else {
          width += word.length + 1;
          return word;
        }
      })
      .join(" ")
  );
};
