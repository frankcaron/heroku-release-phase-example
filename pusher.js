var AWS = require('aws-sdk'), 
    fs = require('fs');

const AMAZON_S3_BASE_URL = process.env.AMAZON_S3_BASE_URL || '';
const AMAZON_S3_BUCKET_NAME = process.env.AMAZON_S3_BUCKET_NAME || '';
const staticAssets = './public';

AWS.config.update({ accessKeyId: process.env.AMAZON_S3_KEY, secretAccessKey: process.env.AMAZON_S3_SECRET });

//Push assets from public up to S3
//For each file in the
fs.readdir(staticAssets, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    console.log ("Directory was read correctly. Beginning to iterate through files.");
  
    files.forEach(function (file, index) {
      // Make one pass and make the file complete

      console.log ("Looking at file " + file);
  
      fs.stat(staticAssets, function (error, stat) {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }

        console.log ("Going to check if file " + file + " is a file. Is it? " + stat.isFile());

        //Upload
        fs.readFile(staticAssets + '/' + file, function (err, data) {
        if (err) { throw err; }
        var base64data = new Buffer.from(data, 'binary');

        console.log('Going to attempt to upload file ' + file);

        var s3 = new AWS.S3();
        s3.upload({
            Bucket: AMAZON_S3_BUCKET_NAME,
            Key: file,
            Body: base64data,
            ACL: 'public-read'
        },function (resp) {
            console.log(resp); 
            console.log(arguments);
            console.log('Successfully uploaded static asset.');
        });
        }); 
    });
  });
})