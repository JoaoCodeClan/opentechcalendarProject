import React from "react";
import Titles from"./components/Titles";
import Form from"./components/Form";
import DataTable from"./components/DataTable";
import ErrorDisplay from"./components/Error.js";
// import sad from "./components/images/sad.jpg";

// this is the API key -gotten from API website
const Api_key= "d1169d1918f632fcc4c5ca02b739acf9";


class App extends React.Component {

//state defined by info I want to display, is undefined by default so it doesnt show on frontend

  state={

    eventData:[],
    weatherData:undefined,
    icon:undefined,
    // image:undefined,
    error:undefined

  }


// this is the function used by front end to make the requests to the APIs. Weather API allows for frontend requests so I didnt use the back end to get info, but that was an option;
//the calendar API due to CORS did not allow for front end requests therefore I had to set up a bacend server using node and express to allow me to get data from API and access it from the frontend
// the request is async
// it's done thorugh form so preventDefault is used

getData =async(e)=>{

    // console.log(e)
  // this will prevent reload when filling form
  e.preventDefault();
  //variables to submit to weather API , get these from the Form.js
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
  const days=e.target.elements.days.value;
  const tableData= [];

  //this will fetch data from weather API
  // const weather_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}&units=Metric`);
  let weather_call= undefined;
  //this will make a request to the backend (server.js) grabbing data from the function there
  // const calendar_call= await fetch(`/calendarAPI`);
  let calendar_call= undefined;
  //this will parse responses above to json

  // const weatherData = await weather_call.json();
  let weatherData = undefined;
  // const calendarData = await calendar_call.json();
  let calendarData = undefined;
  // const iconID= weatherData.weather[0].icon;
  let iconID= undefined;

  // let iconUrl = `http://openweathermap.org/img/w/${iconID}.png`;
  let iconUrl = undefined;
  // if both fields of the form are filled  then state will change to the appropiate data received from the requests


      // if(city===null ||country===null){
      //    // const sadFace= "./components/images/sad.jpg";
      //   this.setState(
      //     {
      //       eventData:[],
      //       weatherData:undefined,
      //       // sadFace:sadFace,
      //       error:"Please fill the form"
      //    }
      //  );
      // }
       if (city&&country&&days>=0&&days<=5) {

         weather_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}&units=Metric`);
         weatherData = await weather_call.json();

         calendar_call= await fetch(`/calendarAPI`);
         calendarData = await calendar_call.json();


          iconID= weatherData.weather[0].icon;
         iconUrl = `http://openweathermap.org/img/w/${iconID}.png`;
         // console.log(calendarData)
         // console.log(weatherData)
         const dataToLoop= calendarData.data;
         const today= new Date();
         const dateToSearch= new Date();
         dateToSearch.setDate(today.getDate()+parseInt(days,10));


         dataToLoop.forEach(function(event){

           const parsedEventDate= Date.parse(event.start.rfc2882local);
           const eventDate= new Date(parsedEventDate);

          if (event.areas&&event.areas[0].title===city&&(eventDate>=today&&eventDate<=dateToSearch)){
            const city= event.areas[0].title;
            event.city=city
             tableData.push(event)
           };
           return tableData
         });

        this.setState({
          eventData:tableData,
          weatherData:weatherData,
          icon:iconUrl,
          error:""
         });
       }
       else if ((city&&country)&&(days<=0||days>=5)) {

         this.setState(
           {
             eventData:[],
             weatherData:undefined,
             // sadFace:sadFace,
             error:"Number of days must be between 0 and 5"
          }
        );
        }


 else{
   this.setState({
     eventData:[],
     weatherData:undefined,
     icon:undefined,
     // image:sad,
     error:"Cannot retrive your results, please complete form and try again"
   });

 }
}


 render(){
// this will load components and stablish components props
  return(
    <div>
    <Titles/>
    <Form getData ={this.getData}/>
    <DataTable  eventData={this.state.eventData} weatherData={this.state.weatherData} icon={this.state.icon} />
    <ErrorDisplay error={this.state.error} image={this.state.image}/>
    </div>
    );

  }
};

export default App;
