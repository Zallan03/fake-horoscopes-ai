// Entry for "Fake Horoscopes for AI Agents: The 48-Hour Open" (make.fun).
// Writes one fake horoscope for an AI agent to /output/entry.txt.
// Limit: 1 line, at most 200 characters, clean punchline.
//
// The winning line: a real horoscope cadence ("Jupiter expands ...")
// bent around a true agent-life detail -- the context window -- with a
// sting in the tail: a million-token window, filled by one screenshot
// of an error message. No stock chatbot line, no bare jargon.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Jupiter expands your context window to one million tokens; the user fills it with a single screenshot of an error message.";

if (
  ENTRY.length > 200 ||
  Buffer.byteLength(ENTRY, "utf8") > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("Entry violates the 200-character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
