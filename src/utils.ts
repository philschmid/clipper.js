import { readFileSync, writeFileSync } from 'fs';


export function readHtmlFileFromPath(path: string): string {
  const html = readFileSync(path, 'utf8');
  return html;
}

export function writeMarkdownToFile(markdown: string, output: string): string {
  // check if outout is a markdown file else remove extension and add .md
  const outputFileName = output.endsWith('.md') ? output : output.replace(/\.[^/.]+$/, "") + '.md'
  // write markdown to file
  writeFileSync(outputFileName, markdown)
  // return filename
  return outputFileName
}

export function writeMarkdownToJsonlines(markdown: string | string[], output: string): string {
  // check if outout is a jsonl file else remove extension and add .jsonl
  const outputFileName = output.endsWith('.jsonl') ? output : output.replace(/\.[^/.]+$/, "") + '.jsonl'
  // check if markdown is string, if convert to array
  const data = Array.isArray(markdown) ? markdown : [{ markdown: markdown }]
  // iterate over array and write each element to a new line
  writeFileSync(outputFileName, data.map((d) => JSON.stringify(d)).join('\n'))
  // return filename
  return outputFileName
}