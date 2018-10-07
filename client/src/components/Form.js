import React from "react";
import './CSS/Form.css'

// this code is deprecated because this component has no state therefore doesn't need to extend React.Component()
// class Form extends React.Component{
//
//   render(){
//       return(
//           <div>
//             <form onSubmit={this.props.getData}>
//       <input type="text" name="city" placeholder="City"/>
//       <input type="text" name="country" placeholder="Country"/>
//       <button>Get weather</button>
//             </form>
//
//
//
//           </div>
//
//
//       );
//   };
//
//
//
// };

//this version of react allows for arrow functions, this is the shortned version

const Form=props=>(
  <div>
    <form onSubmit={props.getData}>
<input type="text" name="city" placeholder="City"/>
<input type="text" name="country" placeholder="Country"/>
<input type="text" name="days" placeholder="Number of days"/>
<button id="submit" >Get Events</button>
    </form>



  </div>

)
export default Form;
