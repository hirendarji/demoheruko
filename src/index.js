import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Form from './Form';
import Demo from './Demo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import comA from './comA';
import FV from './FV';



const website="hiren darji"
console.log(React.version);
const website2="hiren Limbad";
//-----------array---------------------
var arrays=[{"name":"hiren"},{"name":"ani"}];

//----------------map function--------------
var mapResult=arrays.map((i,index,arr)=>
{
//console.log(i.name,index,arr);
return "yr name is "+i.name;
});
console.log(mapResult)
const time= new Date();
let wish='';
var count=0;
let hours=time.getHours();
//--------------if else------------
console.log(hours)
if(hours>0 && hours<=11)
{
  wish="morning"
}
if(hours>12 && hours<=17)
{
  wish="afternno";
}
//----------form data handling--------------

function renderr(name)
{

var incremnt=()=>
{
  count++;
}
var decrement=()=>
{
  count--;
}

  ReactDOM.render(<div>
    

    <h2>{name} is {new Date().toLocaleTimeString()}.</h2>
  <h1>{count}  <AccountCircleIcon/></h1>
  <button onClick={incremnt}>incremnt</button><button onClick={decrement}>decrement</button>
  </div>,
    document.getElementById('root'),()=>
    {
      setInterval(renderr,1000);
    });
    console.log("clicked")
    
}

ReactDOM.render(
  <>
  <p>navbar</p>
  <div>
<button className="btn btn-danger" >bootstrap</button>
<h1 className="h">  {wish}  {website}</h1><br/>
<h3 style={
  {
    color: "green",
    textAlign:"center"

}
}>{website2}</h3>
<div style={
  {
    textAlign:"center"
  }
}>

  <button onClick={renderr} >go to time</button><br/>
  <AccountCircleIcon/>
</div>
<Form/>
<p>demo</p>
<FV/>


</div>
</>,
  document.getElementById('root')
);
