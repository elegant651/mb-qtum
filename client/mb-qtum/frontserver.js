switch (process.env.ENV) {
  case 'LOCAL':
    console.log('starting local...')
    require('./frontserver.local.js')
    break
  case 'PROD':
    console.log('starting prod...')
    require('./frontserver.prod.js')
    break
}
