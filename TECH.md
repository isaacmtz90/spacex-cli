## Stack

The project uses NodeJs in the backend and is structured to work as a CLI tool.
Some tools were used to "prettify" the console output, althought none of them is necessary for the program to function. 
To make API requests the library `axios` was used, since it allows good control of the responses to properly output error messages.

To make the CLI functionality, `clui` and `inquirer` where used.


## Assumptions and Considerations

The requirement for this project was `Create a script that can return information on any of the queryable types`. Since creating a API wrapper for an existing API doesn't sound too useful, this project was created as a CLI tool. It will output raw JSON, but it could technically save the output in a file or convert it to a desired format once the response is received on the `index.js` file.


