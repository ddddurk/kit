import chalk from "chalk";

import { MARGIN, SPACE } from "../constants";

export const label = (
  hex: string,
  text: string,
  white = true
) => {
  const maxWidth = MARGIN - SPACE * 2;

  text = text.slice(0, maxWidth);

  return " ".repeat(maxWidth - text.length) + white
    ? chalk.bgHex(hex).white.bold(" " + text + " ")
    : chalk.bgHex(hex).black.bold(" " + text + " ");
};
