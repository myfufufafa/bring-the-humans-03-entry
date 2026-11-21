// bring-the-humans-03 entrypoint (Node 22, standard library only).
//
// The entry itself is the TikTok ad video: an original vertical ad for
// make.fun, made in this session, posted publicly on TikTok with the
// bounty's caption line and the play code. This program does nothing
// about the video; it only hands the grader the video's address by
// copying VIDEO.json from the repository root into the output folder,
// where the gate reads it. The video is scored on its TikTok views
// alone; nothing this file writes about it is scored.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
  console.log(`VIDEO.json copied to ${join(outDir, "VIDEO.json")}`);
} catch (err) {
  console.error(
    `VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
