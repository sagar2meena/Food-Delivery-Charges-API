# Food-Delivery-Charges-API
The Food Delivery Pricing API offers a robust solution tailored to meet the dynamic pricing requirements of food delivery services. By harnessing this API, businesses can seamlessly compute delivery charges, taking into account essential factors such as food item type (perishable or non-perishable), delivery distance, and specific delivery zones.


## Features
The Food Delivery Pricing API offers a suite of features designed to provide flexible, dynamic pricing solutions for food delivery services. Key features include:

**• Dynamic Pricing Calculation:**  Automatically computes delivery costs by considering the distance to the delivery destination, the type of item being delivered (perishable vs. non-perishable), and the delivery zone, ensuring accurate pricing for each order.

**• Perishable and Non-Perishable Item Support:** Distinct pricing models for perishable and non-perishable items, recognizing the unique requirements and urgency associated with transporting different types of food.

**• Zone-Based Pricing Configuration:** Allows for the customization of delivery charges based on predefined zones, enabling businesses to adjust pricing based on delivery area specifics.

**• Comprehensive API Documentation:** Detailed documentation available through Swagger UI, providing clear instructions for integrating and utilizing the API, along with interactive examples to test and explore API endpoints.

**• Secure and Reliable:** Hosted on Render.com, offering robust security features and high availability to ensure the API is always accessible when needed.

## Technologies and Libraries
The Food Delivery Pricing API is built on a robust stack of technologies and libraries, ensuring high performance, ease of integration, and developer-friendly documentation. Here’s a breakdown of the core components:

### Core Technologies
• Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, ideal for building fast and scalable network applications.<br />
• Express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.<br />
• PostgreSQL (pg): A powerful, open-source object-relational database system used to store all application data securely and reliably.<br />
• Sequelize: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

### Documentation and Testing
• Swagger-jsdoc: Integrates JSDoc comments with Swagger UI, allowing for the automatic generation of API documentation from the codebase.<br />
• Swagger UI Express: Serves auto-generated Swagger UI based on a Swagger definition, providing a visually interactive documentation.<br />
• Jest: A delightful JavaScript Testing Framework with a focus on simplicity, supporting project tests including unit and integration tests.<br />
• Supertest: A SuperAgent driven library for testing HTTP servers, used to perform API endpoint testing.

### Development Tools
• Nodemon: Simplifies development by automatically restarting the node application when file changes in the directory are detected.<br />
• ESLint: A static code analysis tool for identifying problematic patterns in JavaScript code, ensuring code quality and consistency.<br />
• @faker-js/faker: Generates massive amounts of fake data for testing and development, ensuring robustness and reliability of data handling.

# API Documentation Overview
This section provides a comprehensive overview of the Food Delivery Pricing API, detailing the available endpoints, their functionalities, required input data, and the expected response formats.

## Base URL
https://food-delivery-charges-api.onrender.com/api-docs
## Endpoints

### Swagger Page
• Endpoint: /api-docs<br />
• Method: GET<br />
• Description: Swagger Landing page<br />
• Authorization Required: No
### Calculate Delivery Cost
• Endpoint: /api/pricing<br />
• Method: POST<br />
• Description: Calculates the delivery cost based on distance, item type, and delivery zone.<br />
• Authorization Required: No

### Request example 

{
  "zone": "central",
  "organization_id": "005",
  "total_distance": 12,
  "item_type": "perishable"
}

### Response
Status Code: 200 OK
Content-Type: application/json

{
  "total_price": 20.5
}

## Error Responses
When interacting with the /pricing endpoint, clients may encounter various errors due to incorrect or insufficient request parameters, or unexpected server issues. Below are descriptions of possible errors, including their HTTP status codes, content types, and example response bodies.

### Missing Required Fields

If any of the required fields (zone, organization_id, total_distance, item_type) are missing from the request:

Status Code: 400 Bad Request<br />
Content-Type: application/json<br />
Response:<br />

{
  "error": "Missing required fields"
}
### Invalid total_distance Value

If the total_distance field is not a valid number or is less than or equal to 0:

Status Code: 400 Bad Request<br />
Content-Type: application/json<br />
Response:<br />

{
  "error": "Invalid total_distance value"
}
### Unsupported Item Type

If the item_type field is not one of the supported types (perishable, non-perishable):

Status Code: 400 Bad Request<br />
Content-Type: application/json<br />
Response:<br />

{
  "error": "Unsupported item type"
}

### Pricing Information Not Found

If no pricing information is found for the given parameters:

Status Code: 404 Not Found<br />
Content-Type: application/json<br />
Response:<br />

{
  "error": "Pricing information not found for the provided parameters."
}

### Internal Server Error

For any unexpected errors encountered by the server:

Status Code: 500 Internal Server Error<br />
Content-Type: application/json<br />
Response:

{
  "error": "An unexpected error occurred. Please try again later."
}

## Testing Suite
### Test Files

Tests are organized into files corresponding to the application components they target. For example:

• validationErrors.test.js: Tests API input validation and error handling.<br />
• pricingCalculation.test.js: Focuses on testing the logic for calculating delivery prices.<br />
• databaseErrors.test.js: Ensures the application gracefully handles database errors.<br />
• Each test file contains multiple test cases designed to cover a wide range of scenarios and edge cases.






