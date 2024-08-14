import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { analyze } from './analyzer'

yargs(hideBin(process.argv))
  .command(
    'analyze [path]',
    'Testing...',
    (yargs) => {
      return yargs
        .positional('path', {
          describe: 'path to be fixed',
          type: 'string',
        })
        .check((argv) => {
          if (!argv.path) {
            console.log('Sorry, we did not receive any path to fix')
            process.exit(1)
            return
          }
          return true
        })
    },
    (argv) => {
      analyze(argv.path as string)
    }
  ).help().argv