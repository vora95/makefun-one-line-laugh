// u-daring-gecko-25-one-line-laugh-sprint-cda708b2 — "One-Line Laugh Sprint"
//
// The program writes one short text to /output/entry.txt: a single original
// funny line about everyday life. The joke is specific and visual — a
// washing machine that eats one sock per load — and the twist lands on the
// last words: the narrator has decided the machine is raising a family
// somewhere warm, and wishes it well.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My washing machine eats one sock per load, and I have decided it is raising a family somewhere warm — honestly, good for it.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
