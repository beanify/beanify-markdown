# beanify-markdown

A tool for outputting routing information into `.md` files

## Install

```bash
npm install beanify-markdown --save
```

with yarn

```bash
yarn add beanify-markdown
```

## Usage

base example

```javascript
const Beanify = require('beanify')
const Plugin = require('beanify-markdown')
const beanify = Beanify({})

beanify
  .register(Plugin, {
    dir: 'out'
  })
  .route({
    url: 'math.asin',
    md: {
      name: 'asin',
      desc: 'function returns the arcsine (in radians) of a number'
    },
    handler (req, rep) {}
  })
  .ready(e => {
    e && beanify.$log.error(e.message)
    beanify.print()
  })
```

with `beanify-url`.

```javascript
const Beanify = require('beanify')
const beanifyAjv = require('beanify-ajv')
const beanifyUrl = require('beanify-url')
const Plugin = require('beanify-markdown')
const beanify = Beanify({})

beanify
  .register(Plugin, {
    dir: '.out-url'
  })
  .register(beanifyAjv, {
    ajv: {
      useDefaults: true,
      coerceTypes: true
    }
  })
  .register(beanifyUrl)
  .route({
    url: 'math.:action',
    md: {
      name: 'math.action',
      desc: 'function returns the arcsine (in radians) of a number'
    },
    schema: {
      body: {
        type: 'number'
      },
      attribute: {
        type: 'object',
        properties: {
          token: {
            type: 'string'
          }
        }
      },
      params: {
        type: 'object',
        properties: {
          action: {
            type: 'string'
          }
        }
      }
    },
    handler (req, rep) {}
  })
  .route({
    url: 'time.:action',
    md: {
      name: 'time.action'
    },
    schema: {
      body: {
        type: 'number'
      },
      attribute: {
        type: 'object',
        properties: {
          token: {
            type: 'string'
          }
        }
      },
      params: {
        type: 'object',
        properties: {
          action: {
            type: 'string'
          }
        }
      }
    },
    handler (req, rep) {}
  })
  .ready(e => {
    e && beanify.$log.error(e.message)
    beanify.print()
  })
```

## Options

- `dir`: `.md` document output directory
- `title`: Title of `README.md` file

## Route Decorators

- `markdown`: alias `md`
  - `name`: interface name
  - `description`: interface description.alias `desc`
