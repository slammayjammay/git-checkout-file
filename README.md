# `git-checkout-file`

This package is not on NPM, so installation is [pretty tedious](https://github.com/npm/npm/issues/3055).
```sh
# clone the repo
$ git clone https://github.com/slammayjammay/git-checkout-file.git
$ cd git-checkout-file
# install dependencies
$ npm install
# generate tarball
$ npm pack
# install the generated tarball
$ npm install -g git-checkout-file-X.X.X.tgz # XXX is the semantic version
# remove the repo
$ cd ../ && rm -rf git-checkout-file
```

I like to alias this with "goof"
```sh
# in your .bash_profile
alias goof="git-checkout-file"
```

# Usage

Give a list of substrings to match files to. Matches are made case-insensitively. If any of them have uncommitted changes, those changes will be lost forever (dangerous!).
```sh
$ goof html # kills all changes in html files, for example
$ goof readme # kills all changes in the README
```

If you really messed up your repo and all uncommitted changes should be removed forever, you can do:
```sh
$ goof . # I personally use this all the time.
```
