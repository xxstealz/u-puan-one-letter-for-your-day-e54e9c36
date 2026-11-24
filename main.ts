// One Letter For Your Day — u-puan-one-letter-for-your-day-e54e9c36
//
// Writes exactly one letter, "Z", to /output/entry.txt.
// Z stands for "zero sleep": today has been a marathon of one-line
// competitions since 04:47 WIB, and the day is still going.
// The gate requires UTF-8 text of exactly 1 character, so no newline
// is written — the file is a single byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

// The hidden word behind the letter: "zero sleep".
// Today (Tuesday 24 Nov 2026) has been a marathon of one-line
// competitions since 04:47 WIB — seven entries submitted by 09:47 —
// and the day is still going. Z is the one letter whose word is
// instantly vivid to any reader: Zzz, zero sleep. No other letter
// carries its meaning on its face the way Z does.

function validateLetter(letter: string): void {
  if (!/^[A-Z]$/.test(letter)) {
    throw new Error(`entry must be exactly one letter A-Z, got: ${JSON.stringify(letter)}`);
  }
}

validateLetter(LETTER);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
console.error(`letter OK: ${LETTER} (1 character, no newline)`);
