var aws = require('aws-sdk');
aws.config.region = 'us-east-1';
var s3 = new aws.S3();

var params = {
  Bucket: 'mark64323762346hfjhjfs',
  ACL: 'private' // could also be public-read, public-read-write, or authenticated-read
};

s3.createBucket(params, function(error, data) {
  if (error) {
    console.log("Error: " + error);
  } // an error occurred
  else{
    console.log(data);
  }
});
