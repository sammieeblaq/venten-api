<!-- How to connect to the API -->
<!-- Add a product -->
To add a product using postman go to: `http://localhost:4000/product`(POST)

<!-- To get a list of all the products -->
To get all products using postman go to: `http://localhost:4000/product`(GET)

<!-- Get a particular product -->
When all the products are gotten, there's a request key in the json. Upon click of this request key, it will automatically take you to the route for getting a single product.
To get a product using postman go to: `http://localhost:4000/product/:id`(GET).

Under Normal circumstances to upload files(Images), the file/images would be hosted using Amazon S3 services. but in this case it is added to the local file system.

