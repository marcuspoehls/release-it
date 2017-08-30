import * as log from './log';
import pkg from '../package.json';

const helpText = `Release It! v${pkg.version}
  
  Usage: release-it <increment> [options]
  
  Use e.g. "release-it minor" directly as shorthand for "release-it --increment=minor".
  
  -c --config            Path to local configuration options [default: ".release.json"]
  -d --dry-run           Do not touch or write anything, but show the commands
  -f --force             Allow empty Git commit, force tag.
  -h --help              Print this help
  -i --increment         Increment "major", "minor", "patch", or "pre*" version; or specify version [default: "patch"]
  -m --message           Commit message [default: "Release %s"]
  -n --non-interactive   No questions asked.
     --prereleaseId      Identifier for pre-releases (e.g. "beta" in "1.0.0-beta.1")
  -v --version           Print version number
  -V --verbose           Verbose output`;

export const version = () => log.log(`v${pkg.version}`);

export const help = () => log.log(helpText);