const AWS = require('aws-sdk')

async function processEmail(event) {
    console.log('Received event: ', JSON.stringify(event, null, 2))

    const s3 = new AWS.S3()

    const raw_email = await s3.getObject({
        Bucket: event.Records[0].s3.bucket.name,
        Key: event.Records[0].s3.object.key
    }).promise()
    
    console.log(raw_email)

}

module.exports.processEmail = processEmail