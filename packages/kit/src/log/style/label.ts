import chalk from "chalk";

import { MARGIN, SPACE } from "../../constants";

export const label = (hex: string, text: string) => {
  const maxWidth = MARGIN - SPACE * 2;

  text = text.slice(0, maxWidth);

  return (
    " ".repeat(maxWidth - text.length) +
    chalk.bgHex(hex).white.bold(" " + text + " ")
  );
};
