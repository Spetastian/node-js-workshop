# 3. Using NPM (Node Package Manager)
https://www.npmjs.com/

> npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

Npm for Node is like NuGet for .NET or RubyGems for Ruby.

## package.json
Every Node project that uses npm (basically all of them) also has a project configuration file called `package.json`.

In `package.json` resides dependencies, project metadata, scripts etc.

## Installing a module
Install a package by using `npm install` command.

`npm install <module name>`

This will install the given module and put its contents inside the `node_modules` folder. This will also add the module as a dependency inside `package.json`.

## Running scripts
The `scripts` section of `package.json` contain predefined and custom commands for starting applications, running tests and other tasks.