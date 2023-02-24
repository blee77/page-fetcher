
const request = require('request');
const fs = require('fs');

const url = "http://www.example.edu/";
const filePath = './index.html';

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log('Error:', error);
      } else {
        const fileSize = fs.statSync(filePath).size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});
