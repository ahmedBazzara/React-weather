import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "4623bb99a9cd68459b3f8e5f3267cae4";
class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    
    const data = await api_call.json();
     console.log(data);
  }
  render() {
    return (
      <div>
        <p>Hello!</p>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />

      </div>
    );
  }
};

export default App;