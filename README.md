# UCSD CSSA Duanzu Platform - Web

This is the Github repository for UCSD CSSA Short Term Leasing Platform.

## Setup

After cloning this repo to the local repository, please first go into the directory and type

```
$ npm install
```

This will install all the dependencies as well as run the setup script, which might furthermore
install some global script to your machine.

Additionally, we recommend using [Atom](https://atom.io) as your main text editor. To make the best
use of Atom, install the following plugins:

- [flow-ide](https://atom.io/packages/flow-ide): The Flow Typing Support
- [language-babel](https://atom.io/packages/language-babel): The Babel Language Support

## Development

To develop, please use

```
$ npm run dev
```

We have [nodemon](https://nodemon.io) and
[Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) setup correctly so you don't
need to refresh the webpage nor restart the dev server. You can just write your codes in your
editor and see the changes happen on the website.

Note that, if your code involves dealing with back-end requests, you should also run a back-end
server separately.

## Deployment

To deploy, you need to first build the code:

```
$ npm run build
```

This will generate a `src/build/` directory consists of the built css and js files. After that, you
can type

```
$ npm run server
```

To start the real express server which we will be using on any server.

## Contributing

Everytime you start to do something, please open a new branch and push to that branch. After that,
submit pull request on Github and let us do code review together.

Note that, before you push your code, please do run

```
$ npm run linter
```

That will run the linters - including [eslint](https://github.com/eslint/eslint) with
[Airbnb ESLint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
setup, [scss-lint](https://github.com/brigade/scss-lint) with
[Airbnb CSS](https://github.com/airbnb/css) setup, and [flow type check](https://flow.org). Please
fix the pop-up problems with your code and make sure there's no linter errors when you submit the
pull request.
