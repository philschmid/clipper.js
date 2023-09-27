import { program } from '@commander-js/extra-typings';
import { extract_from_html, extract_from_url, writeToFile } from './clipper';

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")

program.command("clip").description("Converts HTML to markdown")
  .option("-f, --file <value>", "Path to HTML file to clip")
  .option("-o, --output <value>", "Path to output markdown file", "output.md")
  .option("-u, --url <value>", "URL to clip")
  .action(async (args, options) => {
    // console.log(options)
    let res: string
    if (args.url) {
      res = await extract_from_url(args.url)
    } else if (args.file) {
      res = await extract_from_html(args.file)
    } else {
      throw new Error("Please specify either a URL or a file path")
    }
    writeToFile(res, args.output)
  });

// const options = program.opts();
// console.log(options)
program.parse();
