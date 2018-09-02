// @flow

var aws = require('aws-sdk');
aws.config.region = 'us-east-1';

var s3 = new aws.S3(), index, bucket;

s3.listBuckets(function(err, data) {
  console.log("\n** list all buckets owned by this account:\n");
  for (index in data.Buckets) {
    bucket = data.Buckets[index];
    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
  }
});

var params = {
  Bucket: 'mark64323762346hfjhjfs'
};
s3.listObjects(params, function(error, data) {
  console.log("\n** list things in our test bucket:\n");
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log(data);
  }
});

var params = {
  Bucket: 'mark64323762346hfjhjfs',
  Key: 'mykey1',
  ResponseContentType: 'string'
};

s3.getObject(params, function(error, data) {
  console.log("\n** print out the one object added to test bucket:\n");
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log(data);
    // get body of response and convert Buffer to string:
    console.log("\nBody as string: " + data.Body.toString());
  }
});
