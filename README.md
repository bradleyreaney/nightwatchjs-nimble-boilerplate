# Nightwatch JS UI Automation Boilerplate 

## What does this project do?
The following project is an example of how you can use the Nightwatch JS framework for automating web UI tests. 
For more information, please see the Nightwatch JS documentation - [What is Nightwatch?](https://nightwatchjs.org/guide/getting-started/introduction.html#what-is-nightwatch)

This example has been set up with two tests. One in the way Nightwatch JS shows in it's guides with the full commands `./test/specs/storeExampleFull.spec.js` and the other is using some helper functions to wrap Nightwatches function into a slightly more readable way `./test/specs/storeExampleHelper.spec.js`

Both tests use the mocha. Move info can be found in the `Features added to this project` section below.

## How to set up the project
First, you'll need to install a few things.
1. Node.js - https://nodejs.org/en/download/
2. Any IDE - https://code.visualstudio.com/download

Once you have the above installed, pull the project from GitHub. Open the project in your preferred IDE and either using the built-in terminal or the systems, navigate to the root directory of the project.

Once you've done that, simply run the `npm install` command and you’re all set up!

## How to run the project
>**Note** - One of the elements in this example doesn't play nice with headless mode for some reason. I've not included it but for other tests it is possible to pass it into the browser options in the `nightwatch.conf.js` file.

##### Standard
To run the automation suite, run the `npx nightwatch` command in the terminal. This will look up the spec files to run from the `src_folders` section in the `nightwatch.conf.js` file. At present it's set to look for any test file in the specs folder`./test/specs/**/*.js`

##### Other ways to run the tests
You can also run an individual test by passing it in as a argument. For example, if you wanted to just run the `storeExampleHelper.spec.js` test, you would use the following command `npx nightwatch -t ./test/specs/storeExampleHelper.spec.js`

You can also specify an environment such as chrome or firefox. By default the tests will run in firefox but say you wanted to specify the chrome browser, you could use the `npx nightwatch --env chrome` command.


## Features added to this project
##### GeckoDriver
GeckoDriver is a standalone application used to interact with Gecko-based browsers, such as Firefox. It is written in Rust and maintained by Mozilla.
More info about GeckoDriver and be found here - [GeckoDriver](https://nightwatchjs.org/guide/browser-drivers-setup/geckodriver.html)

##### ChromeDriver
ChromeDriver is a standalone server that implements the W3C WebDriver standard. ChromeDriver is available for Chrome on Android and Chrome on Desktop (Mac, Linux, Windows and ChromeOS).
More info about Chromedriver can be found here - [Chromedriver](https://nightwatchjs.org/guide/browser-drivers-setup/chromedriver.html)

##### Casual
This is just an npm package that can be used to generate fake data. 
A list of the different types of data it can generate can be found in their [GitHub Readme](https://github.com/boo1ean/casual#readme)

## Useful links
* Creating a project from scratch - [Quickstart Tutorial](https://nightwatchjs.org/guide/getting-started/quickstart.html)
* How to interacting with elements - [Working with DOM Elements](https://nightwatchjs.org/guide/using-nightwatch/finding-and-interacting-with-elements.html)
* Using the Mocha runner - [Using Mocha as a Test Runner](https://nightwatchjs.org/guide/third-party-runners/using-mocha.html)