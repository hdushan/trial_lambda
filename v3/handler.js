const AWS = require('aws-sdk')
const simpleParser = require('mailparser').simpleParser;

async function processEmail(event) {
    console.log('Received event: ', JSON.stringify(event, null, 2))

    const s3 = new AWS.S3()

    const raw_email = await s3.getObject({
        Bucket: event.Records[0].s3.bucket.name,
        Key: event.Records[0].s3.object.key
    }).promise()
    console.log(raw_email)

    const parsed_email = await simpleParser(raw_email.Body);
    console.log(parsed_email)

    console.log(parsed_email.text)
    console.log(parsed_email.from.text)
}

module.exports.processEmail = processEmail