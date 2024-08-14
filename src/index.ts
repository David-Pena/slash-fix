import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { normalize } from "./normalizer";

yargs(hideBin(process.argv))
  .command(
    "normalize [path]",
    "Normalize file paths",
    (yargs) => {
      return yargs
        .positional("path", {
          describe: "path to be fixed",
          type: "string",
        })
        .check((argv) => {
          if (!argv.path) {
            console.log("Sorry, we did not receive any path to fix");
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
