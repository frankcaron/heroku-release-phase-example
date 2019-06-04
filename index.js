const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const AMAZON_S3_BASE_URL = process.env.AMAZON_S3_BASE_URL || ''

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
