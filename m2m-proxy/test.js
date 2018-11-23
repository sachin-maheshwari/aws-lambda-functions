const lambda = require('./lambda')


let event = {body : {
    "grant_type": "client_credentials",
    "client_id": "",
    "client_secret": "",
    "audience": "",
    "auth0_url" : "",
    "token_cache_time " : 60 
  }}
lambda.handler(event,{}, function(a,b) {
    console.log(b)
})
