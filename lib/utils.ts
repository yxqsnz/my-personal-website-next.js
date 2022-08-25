import { createLogger, format, transports } from "winston";

export const Trace = createLogger({
  format: format.combine(
    format.colorize(),
    format.printf((data) => `[${data.level}] ${data.message}`),
  ),
  level: process.env.WLOG || "info",
  transports: [new transports.Console()],
});

export const debug = <Item>(a: Item) => {
  console.log("----\n");
  console.log(a);
  console.log("\n----");
  return a;
};

export const debugArray = <Item>(item: Item[]) => {
  console.log(`Array: ${item.join("<SEPARATOR>")}`);
  return item;
};

export const zip = <A, B>(a: A[], b: B[]) =>
  Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

export const enumerate = <B>(vals: B[]): [number, B][] => {
  let i = 0;
  const result: [number, B][] = [];
  for (const value of vals) {
    result.push([i, value]);
    i++;
  }
  return result;
};
