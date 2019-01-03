import { ReadLineOptions } from "readline";

/**
 * Options for the `versionBump()` function.
 */
export interface VersionBumpOptions {
  /**
   * The release version or type. Can be one of the following:
   *
   * - The new version number (e.g. "1.23.456")
   * - A release type (e.g. "major", "minor", "patch", "prerelease", etc.)
   * - "prompt" to prompt the user for the version number
   *
   * Defaults to "prompt".
   */
  release?: string;

  /**
   * The prerelease type (e.g. "alpha", "beta", "next").
   *
   * Defaults to "beta".
   */
  preid?: string;

  /**
   * Indicates whether to create a git commit. Can be set to a custom commit message string
   * or `true` to use "release v" (the version number will be appended).
   *
   * Defaults to `false`.
   */
  commit?: boolean | string;

  /**
   * Indicates whether to tag the git commit. Can be set to a custom tag string
   * or `true` to use "v" (the version number will be appended).
   *
   * Defaults to `false`.
   */
  tag?: boolean | string;

  /**
   * Indicates whether to push the git commit and tag.
   *
   * Defaults to `false`.
   */
  push?: boolean;

  /**
   * Indicates whether the git commit should include ALL files (`git commit -a`)
   * rather than just the files that were modified by `versionBump()`.
   *
   * Defaults to `false`.
   */
  all?: boolean;

  /**
   * The files to be updated. For certain known files ("package.json", "bower.json", etc.)
   * `versionBump()` will explicitly update the file's version number.  For other files
   * (ReadMe files, config files, source code, etc.) it will simply do a global replacement
   * of the old version number with the new version number.
   *
   * Defaults to ["package.json", "package-lock.json"]
   */
  files?: string[];

  /**
   * The working directory, which is used as the basis for locating all files.
   *
   * Defaults to `process.cwd()`
   */
  cwd?: string;

  /**
   * Options for the command-line interface. This object is passed to `readline.createInterface()`.
   *
   * The `input` property defaults to `process.stdin`.
   * The `output` property defaults to `process.stdout`.
   */
  interface?: Partial<ReadLineOptions>;
}