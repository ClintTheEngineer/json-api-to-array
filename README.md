# json-api-to-array
Instantly save JSON data from an API into an array.

# Install with npm:

$ npm i json-api-to-array

# Usage
Enter the URL that contains the JSON data you need to use. 

const url = require('json-api-to-array');

console.log(array('https://jsonplaceholder.typicode.com/todos')); //[*entire JSON data stored in arr variable*]
