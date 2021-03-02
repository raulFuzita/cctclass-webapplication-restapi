const http = require('http');
const axios = require('axios');

let users = []; // names of users will be stored here

/*
axios.get("https://jsonplaceholder.typicode.com/users")
.then(({data}) => {
    users = data.map(user => user.name); // get only the names of the users and store in a array
    // users = data.map(user => user.email);
    console.log(users);
}).catch(error => {
    console.log(error);
})
*/

(async function getNames(){
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user => user.name);
        console.log(users);
    } catch (error){
        console.log(error);
    }
})()

http
.createServer((req, res) => {
    res.write(users.join("\n")); // display the list of users on the page
    res.end(); // end the response
}).listen(8000) // listen for requests on port 8000