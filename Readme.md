## Express Application with Awilix Dependency Injection

This project demonstrates how to set up an Express application using Awilix for dependency injection. It includes a counter service with scoped lifetime to show how to manage state within requests.

## Prerequisites

Node.js
npm (Node Package Manager)

## Setup

Clone the repository:

```bash
git clone https://github.com/your-username/myapp.git
cd myapp
```

## Install dependencies:

```bash
npm install
```

## Running the Application

To start the application, run:

```bash
node app.js

```

The server will start on port 3000. You should see the following message:

```bash
Server is running on http://localhost:3000
```

# Project Details

```container.js```

Configures the Awilix container, registers services and controllers with a scoped lifetime.

`services/counterService.js`

Defines a simple counter service that can increment and retrieve a count.

`controllers/counterController.js`

Defines the controller that uses the counter service to handle HTTP requests.

`routes/counterRoutes.js`

Defines routes for incrementing the counter and getting the current count.

API Endpoints
Increment the Counter
URL: /api/counter/increment

Method: POST

Description: Increments the counter by 1.

Response:

```json
{
    "count": 1
}
```

Get the Current Count

URL: /api/counter/count

Method: GET

Description: Retrieves the current count.

Response:

```json
{
    "count": 1
}
```

Testing with curl Increment the counter:

```bash
curl -X POST "http://localhost:3000/api/counter/increment" \
     -H "Content-Type: application/json"
```

Get the current count:

```bash
curl -X GET "http://localhost:3000/api/counter/count" \
     -H "Content-Type: application/json"
```

I added some more routes to the application to demonstrate how to use the container to resolve services in controllers.

# License

This project is licensed under the MIT License.
