# Google Hash Boilerplate

> Clone, edit, hack.

[![Build Status](https://secure.travis-ci.org/skgtech/ghash-boilerplate.png?branch=master)](http://travis-ci.org/skgtech/ghash-boilerplate)

## Install

Install ... ?

```
npm install YADDAYADDA --save
```

## <a name='TOC'>Table of Contents</a>

1. [Overview](#overview)
1. [API](#api)

## Overview

Lorem ipsum trololol.

## API

One more to go back without onez has together we know!

**[[⬆]](#TOC)**

### <a name='toApi'>Getting an API Safe verison</a>

> ### errInstance.toApi()
>
> *Returns* `Object` A sanitized object.

Clones the error object and strips it of all the `Error` getters (like `stack`) and the following attributes:
    
    * `srcError`

```js
var appErr = require('nodeon-error');

var error = new appErr.Error();

console.log(error.toApi());
```

## Release History

- **v0.0.1**, *TBD*
    - Big Bang

## License

Copyright ©2016 Thanasis Polychronakis. Licensed under the MIT license.
