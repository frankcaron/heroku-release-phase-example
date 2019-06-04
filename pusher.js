var AWS = require('aws-sdk'), 
    fs = require('fs');

const AMAZON_S3_BASE_URL = process.env.AMAZON_S3_BASE_URL || ''
const AMAZON_S3_BUCKET_NAME = process.env.AMAZON_S3_BUCKET_NAME || ''
const staticAssets = "/public"

AWS.config.update({ accessKeyId: process.env.AMAZON_S3_KEY, secretAccessKey: process.env.AMAZON_S3_SECRET })

//Push assets from public up to S3
//For each file in the
fs.readdir(staticAssets, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
  
    files.forEach(function (file, index) {
      // Make one pass and make the file complete
  
      fs.stat(fromPath, function (error, stat) {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }
  
        if (stat.isFile())
          console.log("'%s' is a file.", fromPath);
          //Upload
          fs.readFile(stat, function (err, data) {
            if (err) { throw err; }
            var base64data = new Buffer(data, 'binary');
            s3.client.putObject({
              Bucket: AMAZON_S3_BUCKET_NAME,
              Key: file,
              Body: base64data,
              ACL: 'public-read'
            },function (resp) {
              console.log(arguments);
              console.log('Successfully uploaded static asset.');
            });

      });
    });
    console.log('Successfully upload all files.');
  });
})