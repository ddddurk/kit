import { window } from "./window";

export const indent = (
  indent: number,
  max: number,
  spaces: number,
  text: string
) => {
  const { columns } = window();

  const space = " ".repeat(spaces);

  let width = space.length;

  return (
    space +
    text
      .split(" ")
      .map((word) => {
        if (
          width + word.length >
          (columns > max ? max : columns) - indent
        ) {
          width = 0;
          return width === 0
            ? `${space}${word}`
            : `\n${space}${word}`;
        } else {
          width += word.length + 1;
          return word;
        }
      })
      .join(" ")
  );
};
