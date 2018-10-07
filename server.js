const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

// this function uses the library request to handle the request to the website.
// the front end will come and get the data from the backend  using the fetch function
// and the '/calendarAPI' as path because it's package.json has the proxy as the port stablish above;


app.get('/calendarAPI', function(req,res){

  const url='https://opentechcalendar.co.uk/api1/events.json';
  request(url, function(error, response, body) {

        if(error) {
          res.status(500);
          res.send();
          return;
        }

        res.send(body);
      });

});

// app.get('/icon/:iconID', function(req,res){
//
//   const url=`http://openweathermap.org/img/w/${req.params.iconID}.png`;
//   request(url, function(error, response, body) {
//
//         if(error) {
//           res.status(500);
//           res.send();
//           return;
//         }
//
//         res.send(body);
//       });
//
// });

app.listen(port,()=>console.log(`Server started on port${port}`));
