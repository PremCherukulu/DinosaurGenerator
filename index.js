require('dotenv').config();
const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
const fetch = require('axios');
//import fetch from "node-fetch";


app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

// use the async function so that the function waits untill the data is received, basically like how a promise works
// async has await so that things are run sequentially
app.get('/dinoname', async(request, response) =>{
  //console.log("dinoname function entered");
  const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1');
  const dinoNameResponse = await fetchApi.data;
   
   console.log(dinoNameResponse);
   response.json(dinoNameResponse);


})

app.get('/dinoimage', async(request, response) =>{
  let api_key = process.env.API_KEY;
  
  let x = Math.floor((Math.random() * 10) + 1);
 const fApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=34", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      "x-rapidapi-key": api_key.toString(),
    }
  });
  const dinoImageResponse = await fApi.data;
  console.log(dinoImageResponse.value[x].thumbnailUrl);
  response.json(dinoImageResponse.value[x]);

})