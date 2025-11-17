// src/scripts/.env-to-base64.ts
import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env");

if (!existsSync(envPath)) {
  console.error(`❌ .env not found at ${envPath}`);
  process.exit(1);
}

try {
  const raw = readFileSync(envPath, "utf8");
  const normalized = raw.replace(/\r\n/g, "\n"); // normalize CRLF→LF
  const b64 = Buffer.from(normalized, "utf8").toString("base64");

  writeFileSync(".env.b64", b64, "utf8");
  console.log(b64); // stdout for easy copy
  console.error("✅ Base64 written to ./env.b64");
} catch (err) {
  console.error(
    "❌ Failed to encode .env:",
    err instanceof Error ? err.message : err
  );
  process.exit(1);
}
