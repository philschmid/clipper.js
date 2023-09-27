import { readFileSync, writeFileSync } from 'fs';


export function readHtmlFileFromPath(path: string): string {
  const html = readFileSync(path, 'utf8');
  return html;
}

export function writeMarkdownToFile(markdown: string, output: string): void {
  // write markdown to file
  writeFileSync(output, markdown)
}