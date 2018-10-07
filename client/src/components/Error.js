import React from "react";
import'./CSS/Titles.css';
// import sad from "./images/sad.jpg";


// class ErrorDisplay extends React.Component {
//
//   render(props){
//
//     return (
//       <div>
//         <h2>{props.error}</h2>
//         <img src={sad} alt="error"/>
//       </div>
//
//     )
//
//
//   }
//
//
// }


const ErrorDisplay=props=>(
<div>
  <h2>{props.error}</h2>
   {props.image}
</div>

);


export default ErrorDisplay;
