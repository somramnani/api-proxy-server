# api-proxy-server
A proxy server that adds CORS header to a request. The server acts as a mediator between the client and server by adding CORS headers to a request. It operates between the frontend web application that initiates the request and the server that provides the response data.

To your get request on the front end use the url https://api-proxy-server-steel.vercel.app/ with the corresponding method using one of the following routes below.

## GET Request Route
`/api/get/{APIlink}`

## POST Request Route
`api/post{APIlink}/{params}`
