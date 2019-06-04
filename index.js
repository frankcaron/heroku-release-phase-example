const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const AMAZON_S3_BASE_URL = process.env.AMAZON_S3_BASE_URL || ''

/* AWS connection 
const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.AMAZON_S3_KEY,
  secretAccessKey: process.env.AMAZON_S3_SECRET
});
*/

//https://heroku-release-phase-example.s3.ca-central-1.amazonaws.com

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {
    baseUrl: AMAZON_S3_BASE_URL
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
