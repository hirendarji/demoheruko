import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import './Form.css'


function Form()
{
    
    const[name,setName]=useState(
        {
            fname:'',
            lname:''
        }
    );
function change(event)
{
    console.log(event.target.value); 
 //const values=event.target.value;
 //const name=event.target.name;
 const { name ,value}=event.target;
 setName((previousdata)=>
 {
     //console.log(previousdata);
     return{
        ...previousdata,
        [name]:value,
     }
     console.log(previousdata)
 });
 
}
// var result;
 const nofresh = (e)=>
{
    e.preventDefault();
   
   console.log(name);
}

//------form validation=----




    return(

    <div>
        
             <h4> take data as json in form</h4>
    <h3> helo{name.fname}{name.lname}</h3>
             <form onSubmit={nofresh}>       
    
             <input  type="text" defaultValue=" " name="fname" onChange={change} placeholder="fname"/>
             <input  type="number" defaultValue=" " name="lname" onChange={change} placeholder="namjkrgke"/>
            
             <Button>submit</Button>
             <Button onClick={() => { alert('clicked') }}>Click me</Button>
             </form>

    </div>
    
    )
}
export default Form;