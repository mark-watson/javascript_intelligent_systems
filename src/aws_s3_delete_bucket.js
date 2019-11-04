// @flow

const aws = require('aws-sdk');
aws.config.region = 'us-east-1';
const s3 = new aws.S3();

const params_bucket = {
  Bucket: 'mark64323762346hfjhjfs'
};

const params_object = {
  Bucket: 'mark64323762346hfjhjfs',
  Key: 'mykey1'
};

s3.deleteObject(params_object, function(error, data) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Deleted object");
    s3.deleteBucket(params_bucket, function(error2, data) {
      if (error2) {
        console.log("Error: " + error2);
      } else{
        console.log("Deleted bucket");
      }
    });
  }
});

