# start-read

[![npm](https://img.shields.io/npm/v/start-read.svg?style=flat-square)](https://www.npmjs.com/package/start-read)
[![linux build](https://img.shields.io/travis/start-runner/read.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/read)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/read.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/read)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/read.svg?style=flat-square)](https://codecov.io/github/start-runner/read)
[![deps](https://img.shields.io/gemnasium/start-runner/read.svg?style=flat-square)](https://gemnasium.com/start-runner/read)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Read task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-read
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import write from 'start-write';

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.js'),
        read(),
        babel(),
        write('build/')
    );
}
```

This task relies on array of files and provides `[{ path, data, map }]` output, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`read(encoding)`

* `encoding` – `fs.readFile` encoding option, `utf-8` by default
