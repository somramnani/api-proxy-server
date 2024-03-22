# API Proxy Server

## Introduction
A proxy server built in ExpressJS that bypasses a CORs error on an API request. The server acts as a mediator between the client and server by adding CORS headers to a request. It operates between the frontend web application that initiates the request and the server that provides the response data.
## Usage
In your front end application make a get request to https://api-proxy-server-steel.vercel.app/ with the corresponding method using one of the following routes below.

### GET Request Route
`/api/get/{APIlink}`

### POST Request Route
`/api/post/{APIlink}/{params}`
