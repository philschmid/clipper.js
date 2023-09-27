import { PlaywrightCrawler, Dataset } from 'crawlee'
import * as fs from 'fs'
import { extract_from_url, extract_from_html } from './clip.js'
import url from 'url'
// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
const crawler = new PlaywrightCrawler({
  launchContext: {
    userAgent: 'is_ci',
  },
  // Use the requestHandler to process each of the crawled pages.
  async requestHandler({ request, page, enqueueLinks, log }) {
    const title = await page.title()
    log.info(`Title of ${request.loadedUrl} is '${title}'`)

    // scrape html
    const html = await page.content()

    // clip body
    const clip = await extract_from_html(html)

    // Save results as JSON to ./storage/datasets/default
    await Dataset.pushData({
      title,
      url: request.loadedUrl,
      markdown: clip,
      html: html,
      crawlDate: new Date().toISOString(),
    })

    // Extract links from the current page
    // and add them to the crawling queue.
    await enqueueLinks({
      globs: ['https://huggingface.co/docs/transformers/*', 'https://huggingface.co/docs/transformers/*[!v]/*'],
    })
  },
  // Uncomment this option to see the browser window.
  // headless: false,
})

// Add first URL to the queue and start the crawl.
await crawler.run(['https://huggingface.co/docs/transformers/index'])

// load all result jsons and merge into one jsonlines file
const files = fs.readdirSync('./storage/datasets/default')
const data = []
for (const file of files) {
  const json = JSON.parse(fs.readFileSync(`./storage/datasets/default/${file}`, 'utf8'))
  data.push(json)
}
fs.writeFileSync('dataset.jsonl', data.map((d) => JSON.stringify(d)).join('\n'))

// #################### transformers docs ####################
// globs =  ['https://huggingface.co/docs/transformers/*', 'https://huggingface.co/docs/transformers/*[!v]/*']
// run = 'https://huggingface.co/docs/transformers/index'

// #################### transformers course ####################
// globs =  ['https://huggingface.co/learn/nlp-course/**/*?fw=pt']
// run = https://huggingface.co/learn/nlp-course/chapter1/1?fw=pt'

// #################### Hub ####################

// import { createRepo, uploadFiles, whoAmI } from '@huggingface/hub'

// const repo = { type: 'dataset', name: 'philschmid/crawl-transformers-doc' }
// const credentials = { accessToken: 'hf_xx' }

// await createRepo({ repo, credentials, license: 'mit' })

// await uploadFiles({
//   repo,
//   credentials,
//   files: [url.pathToFileURL('dataset.jsonl')],
// })
