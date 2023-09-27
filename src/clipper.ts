
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
// @ts-ignore
import { gfm } from 'turndown-plugin-gfm';
import url from 'url';
import TurndownService from 'turndown';
import fs from 'fs';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-'
});

turndownService.use(gfm);

const getExt = (node: any) => {
  // Simple match where the <pre> has the `highlight-source-js` tags
  const getFirstTag = (node: Element) =>
    node.outerHTML.split('>').shift()! + '>';

  const match = getFirstTag(node).match(
    /(highlight-source-|language-)\[a-z\]+/
  );

  if (match) return match[0].split('-').pop();

  // More complex match where the _parent_ (single) has that. 
  // The parent of the <pre> is not a "wrapping" parent, so skip those
  if (node.parentNode!.childNodes.length !== 1) return '';

  // Check the parent just in case
  const parent = getFirstTag(node.parentNode!).match(
    /(highlight-source-|language-)\[a-z\]+/
  );

  if (parent) return parent[0].split('-').pop();

  const getInnerTag = (node: Element) =>
    node.innerHTML.split('>').shift()! + '>';

  const inner = getInnerTag(node).match(
    /(highlight-source-|language-)\[a-z\]+/
  );

  if (inner) return inner[0].split('-').pop();

  // Nothing was found...
  return '';
}

turndownService.addRule('fenceAllPreformattedText', {
  filter: ['pre'],

  replacement: function (content, node) {
    const ext = getExt(node);

    const code = [...node.childNodes]
      .map(c => c.textContent)
      .join('');

    return `\n\`\`\`${ext}\n${code}\n\`\`\`\n\n`;
  }
});

turndownService.addRule('strikethrough', {
  filter: ['del', 's'],

  replacement: function (content) {
    return '~' + content + '~';
  }
});

export async function extract_from_url(page: string) {
  const dom = await JSDOM.fromURL(page);

  let imgs = dom.window.document.querySelectorAll('img');

  for (let i = 0; i < imgs.length; i++) {
    let imgSrc = imgs[i].getAttribute('src');

    if (imgSrc) {
      imgs[i].setAttribute('src', url.resolve(page, imgSrc));
    }
  }

  let article = new Readability(dom.window.document, {
    keepClasses: true
  }).parse();

  if (!article) {
    throw new Error("Failed to parse article");
  }

  let res = turndownService.turndown(article.content);
  res = res.replaceAll(" HTML_TAG_START ", "").replaceAll(" HTML_TAG_END ", "")
  const pattern = /\[\]\(#[^)]*\)/g;
  res = res.replace(pattern, '')
  return res
}

export async function extract_from_html(html: string) {
  // read html from file
  // const html = fs.readFileSync('test.html', 'utf8')

  const dom = new JSDOM(html);

  let article = new Readability(dom.window.document, {
    keepClasses: true
  }).parse();
  if (!article) {
    throw new Error("Failed to parse article");
  }

  const res = turndownService.turndown(article.content);

  return res;
}

export function writeToFile(content: string, output: string) {
  fs.writeFile(output, content, function (err) {
    if (err) return console.log(err);
    console.log(`File ${output} was saved!`);
  });
}