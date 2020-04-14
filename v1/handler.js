function processEmail(event) {
    console.log('Received event: ', JSON.stringify(event, null, 2))
}

module.exports.processEmail = processEmail