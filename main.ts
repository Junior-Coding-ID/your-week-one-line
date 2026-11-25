import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Your Week in One Line — entry: one line, 95 characters, summing up the week.
// The output directory is /output in the grader; MAKEFUN_OUTPUT overrides it
// locally so the same program can be tested without root access.
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const entry =
  "This week I covered eight world news stories and got disqualified by a two-letter copy command.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
