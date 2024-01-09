#!/usr/bin/env node

import { program } from 'commander';
import { extract_from_html, extract_from_url } from './clipper';
import { readHtmlFileFromPath, writeMarkdownToFile, writeMarkdownToJsonlines } from './utils';
import { crawl } from './crawler';
import * as fs from 'fs';
import * as path from 'path';

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")

program.command("clip").description("Converts HTML to markdown")
  .option("-i, --input <value>", "Path to HTML or directory file to clip, e.g. test/ or test/index.html")
  .option("-o, --output <value>", "Path to output file", "output.md")
  .option("-u, --url <value>", "URL to clip")
  .option("-f, --format <value>", "format how you want to store the outpout, can be `md` or `json`", "md")
  .action(async (args, options) => {
    let res: string | Record<string, string>[];
    if (args.url) {
      res = await extract_from_url(args.url);
    } else if (args.input) {
      const inputPath = args.input;
      const isDirectory = fs.lstatSync(inputPath).isDirectory();
      if (isDirectory) {
        const htmlFiles = fs.readdirSync(inputPath).filter(file => file.endsWith('.html')).map(file => path.join(inputPath, file));
        res = []
        for await (const file of htmlFiles) {
          const md = await extract_from_html(readHtmlFileFromPath(file));
          res.push({ markdown: md, file });
        }
      } else {
        res = await extract_from_html(readHtmlFileFromPath(inputPath));
      }
    } else {
      throw new Error("Please specify either a URL or a file path");
    }
    // writes to file
    if (args.format === "json") {
      writeMarkdownToJsonlines(res, args.output);
    } else {
      writeMarkdownToFile(res, args.output);
    }
  });

program.command("crawl").description("Crawls website, converts HTML to markdown and saves result in jsonl file")
  .option("-u, --url <value>", "Start url to crawl",)
  .option("-g, --globs <value>", "additional glob patterns to crawl or ignore")
  .option("-o, --output <value>", "Path to output file", "dataset.jsonl")
  .action(async (args, options) => {
    // console.log(options)
    let res: string
    if (args.url) {
      await crawl(args.url, args.output, args.globs?.split(",") || [])
    } else {
      throw new Error("Please specify either a URL or a file path")
    }
  });


program.parse();
