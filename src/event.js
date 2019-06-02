const axios = require("axios")

exports.handler = async (event, context, callback) => {

    // see https://www.netlify.com/docs/functions/
    const params = event.queryStringParameters

    params.series_id = process.env.SERIES_ID
    const result = await axios.get("https://connpass.com/api/v1/event",{
        params
    })
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Max-Age': '2592000',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
            data: result.data
        })
    }
}