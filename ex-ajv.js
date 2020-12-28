const Beanify = require('beanify')
const beanifyAjv = require('beanify-ajv')
const Plugin = require('./index')
const beanify = Beanify({})

beanify
  .register(Plugin, {
    dir: 'ajv-out'
  })
  .register(beanifyAjv, {
    ajv: {
      useDefaults: true
    }
  })
  .route({
    url: 'math.asin',
    md: {
      name: 'asin',
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
      }
    },
    handler (req, rep) {}
  })
  .ready(e => {
    e && beanify.$log.error(e.message)
    beanify.print()
  })
