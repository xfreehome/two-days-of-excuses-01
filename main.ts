import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I spent day one drafting the perfect apology for missing the deadline, and day two polishing it — it is the only thing I delivered on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
