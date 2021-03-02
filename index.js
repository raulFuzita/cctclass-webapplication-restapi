const http = require('http');
const axios = require('axios');

http.createServer((req, res)=>{
  res.write(chars.join("\n")); //display the list of users on the page
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

let chars = []; // names of users will be stored here

(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    chars = data.results.map(char=>char.name);
    console.log(chars);
  } catch(error){
    console.log(error)
  }
})()