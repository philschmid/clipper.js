# Clipper.js 

Opensource commandline webclipper.

Clip articles from the web and save as markdown.  Uses [Mozilla's Readability library](https://github.com/mozilla/readability) to build a simplified article and https://crawlee.dev/docs/quick-start and Turndown to convert to markdown.

## Usage

Adjust urls in crawl.js and run

```
pnpm run test clip -f test2.html
```


from url

```bash
pnpm run test clip -u https://huggingface.co/docs/trl/dpo_trainer
```

## Test 
https://blog.logrocket.com/building-typescript-cli-node-js-commander/
link package
  
```bash 
npm install -g .
```

remove package

```
sudo npm r clipper -g
```
