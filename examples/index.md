# Top 12 Libraries to build CLI Tools in Node.js

CLI stands for Command-Line Interface. CLIs are often the core tools for automating tasks, such as deploying production applications, running tests, building reports, migrating data, DevOps, and the list goes on and on. If you find yourself doing the same things over and over again, chances are you can automate those steps with a script and save yourself a lot of time.

A bad CLI can easily discourage users from interacting with it. Building successful CLIs requires attention to detail and empathy for the user in order to create a good user experience. It is very easy to get wrong.

## Most popular

1.  [zx](https://github.com/google/zx) ([37.8k](https://github.com/google/zx) ⭐) — A tool for writing better scripts in JavaScript. It provides useful wrappers around `child_process`, escapes arguments and gives sensible defaults. It also has some handy features like auto-install, PowerShell support, retry and spinner helpers, etc.
    
2.  [Commander.js](https://github.com/tj/commander.js) ([25k](https://github.com/tj/commander.js) ⭐) — The complete solution for NodeJS command-line interfaces, has everything you need to declair program variables, handle actions, parse arguments, custom helps, custom event listeners, etc.
    
3.  [Ink](https://github.com/vadimdemedes/ink) ([23.8k](https://github.com/vadimdemedes/ink) ⭐) — Ink provides the same component-based UI building experience that React offers in the browser, but for command-line apps. It uses Yoga to build Flexbox layouts in the terminal, so most CSS-like props are available in Ink as well. If you are already familiar with React, you already know Ink.
    
4.  [Chalk](https://github.com/chalk/chalk) ([20.4k](https://github.com/chalk/chalk) ⭐) — Chalk supports 256 colors and Truecolor (16 million colors) on supported terminal apps, detects color support automatically, ability to nest styles, etc.
    
5.  [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) ([18.2k](https://github.com/SBoudrias/Inquirer.js) ⭐) — A collection of common interactive command line user interfaces, it eases the process of providing error feedback, asking questions, parsing input, validating answers, managing hierarchical prompts.
    
6.  [fx](https://github.com/antonmedv/fx) ([16.7k](https://github.com/antonmedv/fx) ⭐) — A terminal JSON viewer. It allows you to view, filter and manipulate JSON data in a convenient way. It supports mouse interaction, streaming mode, different languages for reducers, themes and more.
    
7.  [Blessed](https://github.com/yaronn/blessed-contrib) ([15.2k](https://github.com/yaronn/blessed-contrib) ⭐) — A library for building terminal dashboards using ascii/ansi art and JavaScript. It extends blessed with custom widgets such as line charts, bar charts, maps, gauges, donuts, etc.
    
8.  [ShellJS](https://documentup.com/shelljs/shelljs) ([13.9k](https://github.com/shelljs/shelljs) ⭐) — A portable (Windows/Linux/macOS) implementation of Unix shell commands on top of the Node.js API. You can use it to eliminate your shell script’s dependency on Unix while still keeping its familiar and powerful commands.
    
9.  [yargs](https://yargs.js.org/) ([10.5k](https://github.com/yargs/yargs) ⭐) — A Node.js library for parsing command line arguments and generating elegant user interfaces. It allows you to create commands, options, help menus, validation, and more.
    
10.  [oclif](https://oclif.io/) ([8.4k](https://github.com/oclif/oclif) ⭐) — An open source framework for building CLIs in Node.js. It allows you to create simple or advanced CLIs with flags, subcommands, plugins, testing, and auto-documentation.
    
11.  [Prompts](https://github.com/terkelg/prompts) ([8k](https://github.com/terkelg/prompts) ⭐) — A Node.js module that provides **lightweight, beautiful and user-friendly interactive prompts** for CLIs. It allows you to easily create and use different types of prompts, such as text, number, confirm, list, autocomplete, etc. You can also customize the prompts with options like initial value, validation, message, choices, etc.
    
12.  [Enquirer](https://github.com/enquirer/enquirer) ([7.1k](https://github.com/enquirer/enquirer) ⭐) — A Node.js module that provides stylish, intuitive and user-friendly prompts for the command-line interface1. It is similar to [prompts](https://github.com/terkelg/prompts), but it has some differences and features.
    

## How to build a CLI tool in Node.js

To build a CLI in Node.js, you can utilize various components and libraries that streamline the development process and provide essential functionalities. Here are some key components and libraries you may need:

-   **Command-Line Argument Parser**: Libraries like [Commander.js](https://github.com/tj/commander.js), [yargs](https://github.com/yargs/yargs), or [minimist](https://github.com/minimistjs/minimist) help with parsing and handling command-line arguments, options, and flags. They simplify the process of defining and extracting data from command-line inputs.
    
-   **User Input Handling**: Libraries such as [Prompts](https://github.com/terkelg/prompts) or [Enquirer](https://github.com/enquirer/enquirer) facilitate capturing and processing user input from the command line. They provide features like prompts, validation, and input handling for interactive CLI experiences.
    
-   **Output Formatting**: Libraries like [Chalk](https://github.com/chalk/chalk) or [colors.js](https://github.com/Marak/colors.js) allow you to add colors, styles, and formatting to the output messages of your CLI tool.
    
-   **Command Execution and Routing**: You can use libraries like [Commander.js](https://github.com/tj/commander.js) or [Vorpal](https://github.com/dthree/vorpal) to manage command execution and routing. They provide mechanisms to define commands, associate them with specific actions or functions, and handle command dispatching.
    
-   **File System Operations**: Node.js has built-in modules like `fs` (File System) that enable you to perform various file system operations, such as reading and writing files, creating directories, or manipulating file metadata. These modules are useful for file-related tasks within your CLI.
    
-   **API Clients and HTTP Requests**: If your CLI interacts with web APIs, you may need libraries like [Axios](https://github.com/axios/axios) or [node-fetch](https://github.com/node-fetch/node-fetch) to make HTTP requests and consume API responses.
    
-   **Configuration Management**: Libraries like [dotenv](https://github.com/motdotla/dotenv) or [rc](https://github.com/dominictarr/rc) can assist in managing configuration files and environment variables for your CLI tool.
    
-   **Testing Frameworks**: Testing frameworks such as [Jest](https://github.com/jestjs/jest) or [Mocha](https://github.com/mochajs/mocha), along with assertion libraries like Chai, help you write and run tests for your CLI application.
    
-   **Logging and Error Handling**: Libraries like [winston](https://github.com/winstonjs/winston), [signale](https://github.com/klaudiosinani/signale) or [bunyan](https://github.com/trentm/node-bunyan) offer powerful logging capabilities for your CLI tool, allowing you to log important information, debug messages, or errors.
    
-   **Packaging and Distribution**: To package your CLI tool for distribution, you can use libraries like npm or yarn. They allow you to define dependencies, manage versioning, and create distributable packages that can be installed and executed globally. You can also use [pkg](https://github.com/vercel/pkg) or [nexe](https://github.com/nexe/nexe) to create binary executable files, so you can distribute your CLIs without requiring Node.js installation.
    

These are just some of the components and libraries commonly used when building CLIs in Node.js. The specific libraries you choose may depend on your project’s requirements and the features you aim to incorporate into your CLI tool.