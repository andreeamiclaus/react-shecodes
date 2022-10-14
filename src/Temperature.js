import React from "react";
import "./Temperature.css"
import Humidity from "./Humidity";
import Forecast from "./Forecast";


export default function Temperature(props){

  return( 
  <div className="Temperature">
  <h2>The temperature in {props.city} is {props.value} </h2>
  <Humidity value={props.humidity} />
    <Forecast />

  </div>
  );
}