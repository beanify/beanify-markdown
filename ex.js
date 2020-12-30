const Beanify = require('beanify')
const Plugin = require('./index')
const beanify = Beanify({})

beanify
  .register(Plugin, {
    dir: '.out-normal'
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
