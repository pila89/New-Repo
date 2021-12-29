import React from "react";
import Profile from "./compenents/Profile";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      profession : "Student at GO my Code",
      fullName: " Salim Amara ",
      bio: " ",
      Imageurl: "https://i1.rgstatic.net/ii/profile.image/752704246775809-1556470085123_Q512/Salim-Amara.jpg"
      
    };
  }
  showHandler = () => {
    this.setState({ show: !this.state.show }); 
  };
  render() {
    return (
      <div className='App'>
        <h1> Hallo Developers</h1>
       
        <button onClick={this.showHandler}>
          {" "}
          {this.state.show ? "Thank you Good bye" : "Hi , You are welcome"} 
        </button>
        {this.state.show ? ( 
          <div>
          <img src = "https://miro.medium.com/max/1200/1*xhhQxW9ui-SrbgmaRs6sEQ.jpeg" />
         
          <Profile />
          </div>
        ) : (

<>


<div> {this.state.bio} </div><div> <img  src={this.state.Imageurl} /> </div>
<div> {this.state.fullName}</div> <div>  {this.state.profession}</div>
</>  
        )}
      </div>
    );
  }
}
export default App;
