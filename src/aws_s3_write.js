var aws = require('aws-sdk');
aws.config.region = 'us-east-1';

var s3 = new aws.S3(), index, bucket;

var params = {
  Bucket: 'mark64323762346hfjhjfs',
  Key: 'mykey1',
  ACL: 'private',
  Body: 'a content string', // can be any type of data
  ServerSideEncryption: 'AES256',
  StorageClass: 'STANDARD' // or REDUCED_REDUNDANCY
};

s3.putObject(params, function(error, data) {
  if (error) {
    console.log("Error: " + error);
  }
  else{
    console.log(data);
  }
});

