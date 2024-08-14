import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { normalize } from "./fixer";
import { BG_ERR, BG_RESET } from "./asceeCodes";

yargs(hideBin(process.argv))
  .command(
    "fixer [path]",
    "Normalize file paths",
    (yargs) => {
      return yargs
        .positional("path", {
          describe: "path to be fixed",
          type: "string",
        })
        .check((argv) => {
          if (!argv.path) {
            console.error(`\n${BG_ERR}Sorry, we did not receive any path to fix.${BG_RESET}`);
            process.exit(1);
          }

          return true;
        });
    },
    (argv) => {
      normalize(argv.path as string);
    }
  )
  .help().argv;
