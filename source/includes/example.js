/**
 * Created by joshuarossi on 10/7/15.
 */
//var url = "https://api.bitfinex.com/v1";
//var payload =
//{
//    "request": "/v1/account_infos",
//    "nonce": Date.now().toString(),
//    "limit_bids": 1,
//    "limit_asks": 1
//};
//var api_key = "l5GH46Sp5eAdsVYL79vrzOjljiys5U3AZ8Fo4NM5QVB";
//var api_secret = "offjC6bk5Yqkh29djssYVeRMF5CCEsss9bOeSe4rEIh";
//payload = new Buffer(JSON.stringify(payload))
//    .toString('base64');
//var signature = crypto.createHmac("sha384", api_secret)
//    .update(payload)
//    .digest('hex');
//var headers = {
//    'X-BFX-APIKEY': api_key,
//    'X-BFX-PAYLOAD': payload,
//    'X-BFX-SIGNATURE': signature
//};
//var options = {
//    url: url + '/orderbook/BTCUSD',
//    headers: headers,
//    body: payload
//};
//request.get(options, function(error, response, body) {
//    console.log(body);
//});

//var payload =
//{
//};
//var options = {
//    url: url + '/symbols_details',
//    qs: {}
//};
//request.get(options, function(error, response, body) {
//    console.log(body);
//});
var request = require('request');
var crypto = require('crypto');
var api_key = "iGRFOF1cZpoEMpd3oSoaSEcW1ERp8paI9XUYf8yztGw";
var api_secret = "GZGTUcvjjDnv55duS9Xiel0FaZEovI1e2miVlB0367f";
var baseRequest = request.defaults({
    headers: {
        'X-BFX-APIKEY': api_key
    },
    baseUrl: "https://api.bitfinex.com/v1"
});


var payload =
{
    "request": "/v1/withdraw",
    "nonce": Date.now().toString(),
    "amount": "0.01",
    "withdraw_type": "bitcoin",
    "walletselected": "exchange",
    "address": "1DKwqRhDmVyHJDL4FUYpDmQMYA3Rsxtvur"
};
payload = new Buffer(JSON.stringify(payload)).toString('base64');
var signature = crypto.createHmac("sha384", api_secret).update(payload).digest('hex');
var options = {
    url: "/withdraw",
    headers: {
        'X-BFX-PAYLOAD': payload,
        'X-BFX-SIGNATURE': signature
    },
    body: payload
};
baseRequest.post(options, function(error, response, body) {
    console.log(body);
});