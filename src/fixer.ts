import clipboardy from "clipboardy";
import { TEXT_INFO, TEXT_RESET } from "./asceeCodes";

export const normalize = async (dir: string) => {
  console.log(`\n${TEXT_INFO}🔄 Replacing backslashes in ${dir}${TEXT_RESET}`);

  // Replace backslashes with forward slashes
  const normalizedPath = dir.replace(/\\/g, "/");

  // Copy to clipboard
  clipboardy.write(normalizedPath);

  console.log(`📋 Result: ${TEXT_INFO}${normalizedPath}${TEXT_RESET}`);
  console.log("✅ Normalized path copied to clipboard\n");
};
