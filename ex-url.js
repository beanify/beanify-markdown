const Beanify = require('beanify')
const beanifyAjv = require('beanify-ajv')
const beanifyUrl = require('beanify-url')
const Plugin = require('./index')
const beanify = Beanify({})

beanify
  .register(Plugin, {
    dir: 'url-out'
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
