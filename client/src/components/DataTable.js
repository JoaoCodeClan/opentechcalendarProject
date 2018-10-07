import React from "react";
import './CSS/DataTable.css'





const DataTable=props=>(
<div>

  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>City</th>
        <th>Date</th>
        <th>Description</th>
        <th>Forecast</th>
        <th>Weather</th>
        <th>Temperature</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.eventData.map(event=>(
        <tr key={event.slug}>
           <td> {event.summary}</td>
           <td> {event.areas[0].title}</td>
           <td> {event.start.displaylocal}</td>
           <td> {event.summaryDisplay}</td>
           <td> {props.weatherData.weather[0].main}</td>
           <td> {props.weatherData.weather[0].description}</td>
           <td> {props.weatherData.main.temp}</td>
           <td> <img src={props.icon} alt='weather icon' /></td>
        </tr>

      )
    )}
    </tbody>

  </table>

</div>
)


export default DataTable;
