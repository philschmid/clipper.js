#!/usr/bin/env node
import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'
import { gfm } from 'turndown-plugin-gfm'
import url from 'url'
import TurndownService from 'turndown'
import fs from 'fs'

const turndownService = new TurndownService({ headingStyle: 'atx', hr: '---', bulletListMarker: '-' })
turndownService.use(gfm)

const page = process.argv[2]

const getExt = (node) => {
  // Simple match where the <pre> has the `highlight-source-js` tags
  const getFirstTag = (node) => node.outerHTML.split('>').shift() + '>'

  const match = getFirstTag(node).match(/(highlight-source-|language-)[a-z]+/)
  if (match) return match[0].split('-').pop()

  // More complex match where the _parent_ (single) has that.
  // The parent of the <pre> is not a "wrapping" parent, so skip those
  if (node.parentNode.childNodes.length !== 1) return ''

  // Check the parent just in case
  const parent = getFirstTag(node.parentNode).match(/(highlight-source-|language-)[a-z]+/)
  if (parent) return parent[0].split('-').pop()

  const getInnerTag = (node) => node.innerHTML.split('>').shift() + '>'
  const inner = getInnerTag(node).match(/(highlight-source-|language-)[a-z]+/)
  if (inner) return inner[0].split('-').pop()

  // Nothing was found...
  return ''
}

turndownService.addRule('fenceAllPreformattedText', {
  filter: ['pre'],
  replacement: function (content, node) {
    const ext = getExt(node)
    const code = [...node.childNodes].map((c) => c.textContent).join('')
    return '\n```' + ext + '\n' + code + '```\n\n'
  },
})

turndownService.addRule('strikethrough', {
  filter: ['del', 's', 'strike'],
  replacement: function (content) {
    return '~' + content + '~'
  },
})

export async function extract_from_url(page) {
  const dom = await JSDOM.fromURL(page)
  let imgs = dom.window.document.querySelectorAll('img')
  for (let i = 0; i < imgs.length; i++) {
    let imgSrc = imgs[i].getAttribute('src')
    if (imgSrc) {
      imgs[i].setAttribute('src', url.resolve(page, imgs[i].getAttribute('src')))
    }
  }
  let article = new Readability(dom.window.document, { keepClasses: true }).parse()
  // todo: create json with title, url, content
  let res = turndownService.turndown(article.content)
  // res.replace(/!\[\]\((.*?)\)/g, '![](' + url.resolve(page, '$1') + ')')
  res = res.replaceAll(" HTML_TAG_START ", "").replaceAll(" HTML_TAG_END ", "")
  const pattern = /\[\]\(#[^)]*\)/g;
  res = res.replace(pattern, '')
  return res
}

export async function extract_from_html(html) {
  // read html from file
  // const html = fs.readFileSync('test.html', 'utf8')
  const dom = new JSDOM(html)
  let article = new Readability(dom.window.document, { keepClasses: true }).parse()
  const res = turndownService.turndown(article.content)
  return res
}


extract_from_url("https://huggingface.co/docs/trl/index").then((res) => {
  //  write to file
  fs.writeFileSync('test1.md', res)

})