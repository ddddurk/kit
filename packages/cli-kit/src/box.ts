import chalk from "chalk";

export const box = (
  color: string,
  flag: string,
  indent: number,
  text: string
) =>
  console.log(
    `${" ".repeat(indent - flag.length)}${chalk
      .bgHex(color)
      .bold(` ${flag} `)}  ${text}`
  );
