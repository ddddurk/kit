import { window } from "./window";

export const indent = (
  indent: number,
  max: number,
  spaces: number,
  text: string,
  trim: boolean = false
) => {
  const { columns } = window();

  max = columns > max ? max : columns;

  const space = " ".repeat(spaces);

  const split = text.replace(/(\r\n|\n|\r)/gm, "").split(" ");

  let width = space.length;

  return (
    space +
    split
      .map((word, i) => {
        if (width + word.length > max - indent) {
          width = 0;

          if (i === 0 && i === split.length - 1)
            return trim
              ? `${word.slice(0, max - indent - 3)}...`
              : word;

          return `\n${space}${word}`;
        } else {
          width += word.length + 1;
          return word;
        }
      })
      .join(" ")
  );
};
