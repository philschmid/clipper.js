# Clipper.js 

Opensource commandline webclipper.

Clip articles from the web and save as markdown.  Uses [Mozilla's Readability library](https://github.com/mozilla/readability) to build a simplified article and https://crawlee.dev/docs/quick-start and Turndown to convert to markdown.

## Usage

Adjust urls in crawl.js and run

```
pnpm run test clip -i test2.html -f json -o test.json
```


from url

```bash
pnpm run test clip -u https://huggingface.co/docs/transformers/index
pnpm run test clip -u https://awsdocs-neuron.readthedocs-hosted.com/en/latest/general/setup/neuron-setup/pytorch/neuronx/ubuntu/torch-neuronx-ubuntu20.html#setup-torch-neuronx-ubuntu20
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


## Tasls

* [x] check if title == first h2 
* [x] output format json
* [ ] crawler 
* [ ] add to npm